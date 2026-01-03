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

    // Check if user is admin
    const { data: adminData, error: adminError } = await supabaseAdmin
      .from("app_2b35a5a86e_clients")
      .select("role")
      .eq("user_id", user.id)
      .single()

    if (adminError) {
      console.error("Admin check error:", adminError)
      throw new Error("Failed to verify admin status")
    }

    if (!adminData || adminData.role !== "admin") {
      console.error("User role:", adminData?.role)
      throw new Error("Only admins can create users")
    }

    console.log("Admin verified, creating user...")

    // Get user data from request
    const { email, password, company_name, contact_name, phone, role } = await req.json()
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

    // Insert into clients table
    const { error: clientError } = await supabaseAdmin
      .from("app_2b35a5a86e_clients")
      .insert({
        user_id: authData.user.id,
        company_name,
        contact_name,
        email,
        phone: phone || null,
        role,
      })

    if (clientError) {
      console.error("Client insert error:", clientError)
      throw clientError
    }

    console.log("Client record created successfully")

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