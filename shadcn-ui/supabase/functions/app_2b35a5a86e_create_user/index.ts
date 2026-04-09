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
    
    // Create admin client with service role key
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

    // Verify the calling user is authenticated
    const authHeader = req.headers.get("Authorization")
    if (!authHeader) {
      throw new Error("Missing authorization header")
    }

    const token = authHeader.replace("Bearer ", "")
    console.log("Token extracted from header")
    
    // Use admin client to verify user
    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token)
    
    if (userError || !user) {
      console.error("Auth error:", userError)
      throw new Error("Unauthorized")
    }

    console.log("Authenticated user:", user.id)

    // Check if user is admin - try new schema first, then fallback to old
    let isAdmin = false

    // Try new profiles table
    const { data: profileData, error: profileError } = await supabaseAdmin
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single()

    if (!profileError && profileData) {
      isAdmin = profileData.role === "admin"
      console.log("Found in profiles table, role:", profileData.role)
    } else {
      // Fallback to old clients table
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
      throw new Error("Only admins can create users")
    }

    console.log("Admin verified, creating user...")

    // Get user data from request
    const body = await req.json()
    const { email, password, role, company_id, company_name, contact_name, phone } = body
    console.log("Creating user with email:", email, "role:", role)

    // Create user with admin privileges
    const { data: authData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (createError) {
      console.error("Create user error:", createError)
      throw createError
    }
    
    if (!authData.user) {
      throw new Error("Failed to create user")
    }

    console.log("User created:", authData.user.id)

    // Insert into new profiles table if company_id is provided
    if (company_id) {
      const { error: profileInsertError } = await supabaseAdmin
        .from("profiles")
        .insert({
          id: authData.user.id,
          email,
          role: role || "client",
          company_id,
        })

      if (profileInsertError) {
        console.error("Profile insert error:", profileInsertError)
        throw profileInsertError
      }
      console.log("Profile record created successfully (new schema)")
    } else {
      // Fallback: insert into old clients table
      const { error: clientError } = await supabaseAdmin
        .from("app_2b35a5a86e_clients")
        .insert({
          user_id: authData.user.id,
          company_name: company_name || "",
          contact_name: contact_name || "",
          email,
          phone: phone || null,
          role: role || "client",
        })

      if (clientError) {
        console.error("Client insert error:", clientError)
        throw clientError
      }
      console.log("Client record created successfully (old schema)")
    }

    return new Response(
      JSON.stringify({ success: true, user: authData.user }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    )
  } catch (error) {
    console.error("Edge function error:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    )
  }
})