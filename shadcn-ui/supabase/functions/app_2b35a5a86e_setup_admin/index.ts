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
    console.log("=== Setup Admin Edge Function Started ===")
    
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

    const { email, password, fullName, companyName, phone } = await req.json()
    
    if (!email || !password || !fullName) {
      throw new Error("Email, password, and full name are required")
    }

    console.log("Creating admin user with email:", email)

    // Create user in Supabase Auth
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

    console.log("Auth user created:", authData.user.id)

    // Insert into clients table with admin role
    const { error: clientError } = await supabaseAdmin
      .from("app_2b35a5a86e_clients")
      .insert({
        user_id: authData.user.id,
        company_name: companyName || "CoreNexus IT",
        contact_name: fullName,
        email,
        phone: phone || null,
        role: "admin",
      })

    if (clientError) {
      console.error("Client insert error:", clientError)
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id)
      throw clientError
    }

    console.log("Admin account created successfully")

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Admin account created successfully",
        user: { id: authData.user.id, email: authData.user.email }
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    )
  } catch (error) {
    console.error("Setup admin error:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    )
  }
})