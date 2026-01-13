-- Comprehensive diagnosis of login issue
-- Run this to understand exactly what's happening

-- 1. Check if the user exists in auth.users
SELECT 
    'AUTH USER CHECK' as check_type,
    id,
    email,
    email_confirmed_at,
    created_at,
    deleted_at,
    banned_until
FROM auth.users
WHERE email IN ('admin@corenexus.it', 'valerio.marino@corenexus.it')
ORDER BY created_at DESC;

-- 2. Check if the client profile exists
SELECT 
    'CLIENT PROFILE CHECK' as check_type,
    id,
    user_id,
    email,
    company_name,
    contact_name,
    role,
    created_at
FROM app_2b35a5a86e_clients
WHERE email IN ('admin@corenexus.it', 'valerio.marino@corenexus.it')
ORDER BY created_at DESC;

-- 3. Check for orphaned auth users (users without client profiles)
SELECT 
    'ORPHANED AUTH USERS' as check_type,
    u.id as auth_user_id,
    u.email,
    u.created_at,
    c.id as client_id
FROM auth.users u
LEFT JOIN app_2b35a5a86e_clients c ON c.user_id = u.id
WHERE u.email IN ('admin@corenexus.it', 'valerio.marino@corenexus.it')
AND c.id IS NULL;

-- 4. List ALL current RLS policies on app_2b35a5a86e_clients
SELECT 
    'CURRENT RLS POLICIES' as check_type,
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'app_2b35a5a86e_clients'
ORDER BY cmd, policyname;

-- 5. Check if RLS is enabled on the table
SELECT 
    'RLS STATUS' as check_type,
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables
WHERE tablename = 'app_2b35a5a86e_clients';

-- 6. Test if a specific user_id can read their profile
-- Replace 'YOUR_USER_ID_HERE' with actual user_id from step 1
-- This simulates what happens during login
SET LOCAL ROLE authenticated;
SET LOCAL request.jwt.claims TO '{"sub": "YOUR_USER_ID_HERE"}';

SELECT 
    'SIMULATED LOGIN QUERY' as check_type,
    id,
    user_id,
    email,
    role
FROM app_2b35a5a86e_clients
WHERE user_id = 'YOUR_USER_ID_HERE';

RESET ROLE;