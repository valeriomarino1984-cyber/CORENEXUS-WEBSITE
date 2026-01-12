-- Debug script for admin login issues
-- Check the status of valerio.marino@corenexus.it

-- ============================================
-- 1. Check if user exists in auth.users
-- ============================================
SELECT 
    id,
    email,
    email_confirmed_at,
    last_sign_in_at,
    created_at,
    updated_at,
    banned_until,
    deleted_at,
    is_sso_user,
    raw_app_meta_data,
    raw_user_meta_data
FROM auth.users
WHERE email = 'valerio.marino@corenexus.it';

-- ============================================
-- 2. Check if user exists in clients table
-- ============================================
SELECT 
    id,
    user_id,
    email,
    role,
    company_name,
    contact_name,
    created_at,
    updated_at
FROM public.app_2b35a5a86e_clients
WHERE email = 'valerio.marino@corenexus.it';

-- ============================================
-- 3. Check all RLS policies on clients table
-- ============================================
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual::text as using_expression,
    with_check::text as with_check_expression
FROM pg_policies
WHERE schemaname = 'public'
AND tablename = 'app_2b35a5a86e_clients'
ORDER BY policyname;

-- ============================================
-- 4. Check SELECT policies specifically
-- ============================================
SELECT 
    schemaname,
    tablename,
    policyname,
    cmd,
    qual::text as using_expression
FROM pg_policies
WHERE schemaname = 'public'
AND tablename = 'app_2b35a5a86e_clients'
AND cmd = 'SELECT'
ORDER BY policyname;

-- ============================================
-- 5. Verify user_id consistency
-- ============================================
SELECT 
    au.id as auth_user_id,
    au.email as auth_email,
    au.email_confirmed_at,
    c.user_id as client_user_id,
    c.email as client_email,
    c.role,
    CASE 
        WHEN au.id = c.user_id THEN 'MATCH ✓'
        WHEN au.id IS NULL THEN 'USER NOT IN AUTH.USERS ✗'
        WHEN c.user_id IS NULL THEN 'USER NOT IN CLIENTS TABLE ✗'
        ELSE 'MISMATCH ✗'
    END as id_status
FROM auth.users au
FULL OUTER JOIN public.app_2b35a5a86e_clients c ON au.email = c.email
WHERE au.email = 'valerio.marino@corenexus.it' 
   OR c.email = 'valerio.marino@corenexus.it';

-- ============================================
-- 6. Check for duplicate email entries
-- ============================================
SELECT email, COUNT(*) as count
FROM public.app_2b35a5a86e_clients
WHERE email = 'valerio.marino@corenexus.it'
GROUP BY email;

-- ============================================
-- 7. Check if RLS is blocking the login query
-- ============================================
-- This simulates what happens during login
-- If this returns no rows, RLS is blocking the query
SELECT 
    c.id,
    c.user_id,
    c.email,
    c.role
FROM public.app_2b35a5a86e_clients c
WHERE c.email = 'valerio.marino@corenexus.it'
AND c.user_id = (
    SELECT id FROM auth.users WHERE email = 'valerio.marino@corenexus.it'
);

-- ============================================
-- 8. Check all users in clients table (to see if table is accessible)
-- ============================================
SELECT 
    email,
    role,
    company_name,
    contact_name
FROM public.app_2b35a5a86e_clients
ORDER BY created_at DESC
LIMIT 5;

-- ============================================
-- 9. Test if the issue is with the specific user or all admins
-- ============================================
SELECT 
    email,
    role,
    user_id,
    CASE 
        WHEN user_id IN (SELECT id FROM auth.users) THEN 'Valid ✓'
        ELSE 'Invalid ✗'
    END as auth_status
FROM public.app_2b35a5a86e_clients
WHERE role IN ('admin', 'staff')
ORDER BY created_at DESC;

/*
============================================
DIAGNOSIS GUIDE
============================================

Based on the results above:

1. If Query #1 returns NO ROWS:
   → User doesn't exist in auth.users
   → Solution: Recreate the user using the Edge Function

2. If Query #2 returns NO ROWS:
   → User exists in auth but not in clients table
   → Solution: Insert record into clients table manually

3. If Query #5 shows "MISMATCH":
   → user_id in clients table doesn't match auth.users id
   → Solution: Update the user_id in clients table

4. If Query #7 returns NO ROWS but #1 and #2 return data:
   → RLS policy is blocking the login query
   → Solution: Fix the RLS policies on clients table

5. If email_confirmed_at is NULL in Query #1:
   → Email not confirmed
   → Solution: Confirm email in Supabase Dashboard

============================================
MANUAL PASSWORD RESET INSTRUCTIONS
============================================

If the user needs a new password, you can:

METHOD 1 - Supabase Dashboard:
1. Go to: Authentication → Users
2. Find valerio.marino@corenexus.it
3. Click on the user
4. Select "Send Password Reset Email" OR "Reset Password"

METHOD 2 - SQL (Send reset email):
*/
-- Uncomment to send password reset email:
-- SELECT auth.send_password_reset_email('valerio.marino@corenexus.it');

/*
METHOD 3 - Recreate user via Edge Function:
POST https://lvbzopwygjlozoupdidg.supabase.co/functions/v1/app_2b35a5a86e_create_user
Headers:
  Authorization: Bearer YOUR_SUPABASE_ANON_KEY
  Content-Type: application/json
Body:
{
  "email": "valerio.marino@corenexus.it",
  "password": "NEW_SECURE_PASSWORD_HERE",
  "role": "admin",
  "company_name": "CoreNexus",
  "contact_name": "Valerio Marino"
}

METHOD 4 - Manual SQL fix (if user_id mismatch):
*/
-- Uncomment and replace USER_ID_FROM_AUTH_USERS with actual value from Query #1:
/*
UPDATE public.app_2b35a5a86e_clients
SET user_id = 'USER_ID_FROM_AUTH_USERS'
WHERE email = 'valerio.marino@corenexus.it';
*/

/*
============================================
COMMON ISSUES AND SOLUTIONS
============================================

ISSUE: "Credenziali non valide" (Invalid credentials)
CAUSES:
1. Wrong password
2. User doesn't exist in auth.users
3. Email not confirmed
4. RLS policy blocking the login query
5. user_id mismatch between auth.users and clients table

SOLUTION PRIORITY:
1. Run this debug script first
2. Check Query #5 for user_id consistency
3. Check Query #7 to see if RLS is blocking
4. Reset password if needed
5. Fix RLS policies if blocking

============================================
*/