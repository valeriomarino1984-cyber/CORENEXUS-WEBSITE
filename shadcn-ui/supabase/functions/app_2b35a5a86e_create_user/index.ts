import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    console.log("=== Edge Function Started ===")
    
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    console.log("Admin client created")

    const authHeader = req.headers.get("Authorization")
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Missing authorization header" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 401 }
      )
    }

    const token = authHeader.replace("Bearer ", "")
    
    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token)
    
    if (userError || !user) {
      console.error("Auth error:", userError)
      return new Response(
        JSON.stringify({ error: "Unauthorized: " + (userError?.message || "invalid token") }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 401 }
      )
    }

    console.log("Authenticated user:", user.id)

    // Check if user is admin
    let isAdmin = false

    const { data: profileData, error: profileError } = await supabaseAdmin
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single()

    if (!profileError && profileData) {
      isAdmin = profileData.role === "admin"
      console.log("Found in profiles table, role:", profileData.role)
    } else {
      const { data: adminData, error: adminError } = await supabaseAdmin
        .from("app_2b35a5a86e_clients")
        .select("role")
        .eq("user_id", user.id)
        .single()

      if (!adminError && adminData) {
        isAdmin = adminData.role === "admin"
        console.log("Found in clients table, role:", adminData.role)
      }
    }

    if (!isAdmin) {
      return new Response(
        JSON.stringify({ error: "Solo gli amministratori possono creare utenti" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 403 }
      )
    }

    console.log("Admin verified, parsing body...")

    const body = await req.json()
    const { email, password, role, company_id } = body

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email e password sono obbligatori" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      )
    }

    if (!company_id) {
      return new Response(
        JSON.stringify({ error: "company_id è obbligatorio" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      )
    }

    // Verify company exists
    const { data: companyData, error: companyError } = await supabaseAdmin
      .from("companies")
      .select("id, name")
      .eq("id", company_id)
      .single()

    if (companyError || !companyData) {
      console.error("Company check error:", companyError)
      return new Response(
        JSON.stringify({ error: "Azienda non trovata. Seleziona un'azienda valida." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      )
    }

    console.log("Creating user with email:", email, "role:", role, "company:", companyData.name)

    // Create user with admin privileges
    const { data: authData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (createError) {
      console.error("Create user error:", createError)
      const msg = createError.message?.includes("already") || createError.message?.includes("registered")
        ? "Esiste già un utente con questa email"
        : `Errore creazione utente: ${createError.message}`
      return new Response(
        JSON.stringify({ error: msg }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      )
    }
    
    if (!authData.user) {
      return new Response(
        JSON.stringify({ error: "Creazione utente fallita senza errori specifici" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      )
    }

    console.log("User created:", authData.user.id)

    // Use upsert to handle case where a trigger may have auto-created the profile row
    const { error: profileInsertError } = await supabaseAdmin
      .from("profiles")
      .upsert({
        id: authData.user.id,
        email,
        role: role || "client",
        company_id,
      }, { onConflict: "id" })

    if (profileInsertError) {
      console.error("Profile upsert error:", profileInsertError)
      // Rollback: delete the auth user so we don't leave orphan records
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id)
      return new Response(
        JSON.stringify({ error: `Errore creazione profilo: ${profileInsertError.message}` }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      )
    }
    console.log("Profile record created successfully")

    return new Response(
      JSON.stringify({ success: true, user: authData.user }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    )
  } catch (error) {
    console.error("Edge function error:", error)
    const message = error instanceof Error ? error.message : String(error)
    return new Response(
      JSON.stringify({ error: `Errore interno: ${message}` }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    )
  }
})