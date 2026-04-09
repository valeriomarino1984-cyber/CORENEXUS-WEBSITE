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
    console.log("=== Setup Admin Edge Function Started (Multi-Tenant) ===")
    
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

    const { email, password, companyName } = await req.json()
    
    if (!email || !password) {
      throw new Error("Email and password are required")
    }

    const company = companyName || "CoreNexus"
    console.log("Creating admin user with email:", email, "company:", company)

    // Step 1: Check if user already exists in auth
    const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers()
    const existingUser = existingUsers?.users?.find((u: any) => u.email === email)
    
    let userId: string

    if (existingUser) {
      console.log("User already exists in auth:", existingUser.id)
      userId = existingUser.id
      
      // Update password
      const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(userId, {
        password,
        email_confirm: true,
      })
      if (updateError) {
        console.error("Update user error:", updateError)
      } else {
        console.log("Password updated for existing user")
      }
    } else {
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

      userId = authData.user.id
      console.log("Auth user created:", userId)
    }

    // Step 2: Ensure company exists
    let companyId: string

    const { data: existingCompany } = await supabaseAdmin
      .from("companies")
      .select("id")
      .eq("name", company)
      .single()

    if (existingCompany) {
      companyId = existingCompany.id
      console.log("Company already exists:", companyId)
    } else {
      const { data: newCompany, error: companyError } = await supabaseAdmin
        .from("companies")
        .insert({ name: company })
        .select("id")
        .single()

      if (companyError) {
        console.error("Company insert error:", companyError)
        throw new Error("Failed to create company: " + companyError.message)
      }

      companyId = newCompany.id
      console.log("Company created:", companyId)
    }

    // Step 3: Upsert profile with admin role
    const { error: profileError } = await supabaseAdmin
      .from("profiles")
      .upsert({
        id: userId,
        email,
        role: "admin",
        company_id: companyId,
      }, { onConflict: "id" })

    if (profileError) {
      console.error("Profile upsert error:", profileError)
      throw new Error("Failed to create profile: " + profileError.message)
    }

    console.log("Admin profile created/updated successfully")

    // Step 4: Also insert into legacy clients table for backward compatibility
    const { error: legacyError } = await supabaseAdmin
      .from("app_2b35a5a86e_clients")
      .upsert({
        user_id: userId,
        company_name: company,
        contact_name: "Admin",
        email,
        phone: null,
        role: "admin",
      }, { onConflict: "user_id" })

    if (legacyError) {
      console.warn("Legacy clients table upsert warning (non-critical):", legacyError.message)
    }

    console.log("Admin account setup completed successfully")

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Admin account created successfully",
        user: { id: userId, email },
        company: { id: companyId, name: company }
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