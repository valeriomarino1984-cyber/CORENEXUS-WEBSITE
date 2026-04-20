import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    status,
  })
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    console.log("=== Edge Function Started ===")

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? ""
    const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""

    if (!SUPABASE_URL || !SERVICE_KEY) {
      return json({
        error: "Configurazione server mancante: SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY non settati",
      }, 500)
    }

    const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    })

    const authHeader = req.headers.get("Authorization")
    if (!authHeader) {
      return json({ error: "Header Authorization mancante" }, 401)
    }

    const token = authHeader.replace("Bearer ", "").trim()
    if (!token) {
      return json({ error: "Token di autenticazione vuoto" }, 401)
    }

    // Verify the caller
    const { data: userRes, error: userError } = await supabaseAdmin.auth.getUser(token)
    if (userError || !userRes?.user) {
      console.error("Auth error:", userError)
      return json({ error: `Non autorizzato: ${userError?.message || "token non valido"}` }, 401)
    }

    const caller = userRes.user
    console.log("Authenticated user:", caller.id, caller.email)

    // ============================================================
    // Verify the caller is admin - use maybeSingle() to avoid throw
    // ============================================================
    let isAdmin = false
    let adminCheckDetail = ""

    const { data: profileData, error: profileError } = await supabaseAdmin
      .from("profiles")
      .select("role, email")
      .eq("id", caller.id)
      .maybeSingle()

    if (profileError) {
      adminCheckDetail = `profiles query error: ${profileError.message} (code: ${profileError.code})`
      console.error(adminCheckDetail)
    } else if (profileData) {
      console.log("Found in profiles table:", profileData)
      isAdmin = profileData.role === "admin"
      adminCheckDetail = `profiles.role = "${profileData.role}"`
    } else {
      adminCheckDetail = "Nessun record trovato nella tabella profiles per questo utente"
      console.log(adminCheckDetail)

      // Fallback: legacy clients table
      const { data: legacy, error: legacyErr } = await supabaseAdmin
        .from("app_2b35a5a86e_clients")
        .select("role")
        .eq("user_id", caller.id)
        .maybeSingle()

      if (!legacyErr && legacy) {
        isAdmin = legacy.role === "admin"
        adminCheckDetail += ` | legacy.role = "${legacy.role}"`
      }
    }

    if (!isAdmin) {
      console.error("Admin check failed:", adminCheckDetail)
      return json({
        error: `Permessi insufficienti. Solo gli amministratori possono creare utenti. Dettaglio: ${adminCheckDetail}. Email chiamante: ${caller.email}`,
      }, 403)
    }

    console.log("Admin verified ✓")

    // ============================================================
    // Parse body
    // ============================================================
    let body: { email?: string; password?: string; role?: string; company_id?: string }
    try {
      body = await req.json()
    } catch (e) {
      return json({ error: `Body JSON non valido: ${e instanceof Error ? e.message : String(e)}` }, 400)
    }

    const { email, password, role, company_id } = body

    if (!email || !password) {
      return json({ error: "Email e password sono obbligatori" }, 400)
    }
    if (!company_id) {
      return json({ error: "company_id è obbligatorio" }, 400)
    }

    // Verify company exists
    const { data: companyData, error: companyError } = await supabaseAdmin
      .from("companies")
      .select("id, name")
      .eq("id", company_id)
      .maybeSingle()

    if (companyError) {
      return json({ error: `Errore verifica azienda: ${companyError.message}` }, 500)
    }
    if (!companyData) {
      return json({ error: "Azienda non trovata. Seleziona un'azienda valida." }, 400)
    }

    console.log(`Creating user ${email} as ${role || "client"} in company ${companyData.name}`)

    // Create the user
    const { data: authData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (createError) {
      console.error("createUser error:", createError)
      const m = createError.message || ""
      const friendly = m.toLowerCase().includes("already") || m.toLowerCase().includes("registered") || m.toLowerCase().includes("exists")
        ? "Esiste già un utente con questa email"
        : `Errore creazione utente: ${m}`
      return json({ error: friendly }, 400)
    }

    if (!authData?.user) {
      return json({ error: "Creazione utente fallita senza errore esplicito" }, 500)
    }

    console.log("Auth user created:", authData.user.id)

    // Upsert profile (trigger may have already inserted one)
    const { error: profileUpsertError } = await supabaseAdmin
      .from("profiles")
      .upsert(
        {
          id: authData.user.id,
          email,
          role: role || "client",
          company_id,
        },
        { onConflict: "id" }
      )

    if (profileUpsertError) {
      console.error("Profile upsert error:", profileUpsertError)
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id)
      return json({
        error: `Errore creazione profilo: ${profileUpsertError.message} (code: ${profileUpsertError.code}). L'utente auth è stato rimosso.`,
      }, 500)
    }

    console.log("Profile upserted successfully ✓")

    return json({
      success: true,
      user: {
        id: authData.user.id,
        email: authData.user.email,
        role: role || "client",
        company: companyData.name,
      },
    }, 200)
  } catch (error) {
    console.error("Unhandled edge function error:", error)
    const message = error instanceof Error ? `${error.message}\n${error.stack || ""}` : String(error)
    return json({ error: `Errore interno server: ${message}` }, 500)
  }
})