-- Debug script to diagnose "Ticket non trovato" issue
-- Run this script in Supabase SQL Editor to understand the permission problem

-- ============================================
-- 1. Verify admin user role
-- ============================================
SELECT 
  user_id, 
  email, 
  role, 
  company_name, 
  contact_name,
  created_at
FROM public.app_2b35a5a86e_clients
WHERE email = 'valerio.marino@corenexus.it';

-- ============================================
-- 2. Verify active RLS policies on tickets table
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
AND tablename = 'app_2b35a5a86e_tickets'
ORDER BY policyname;

-- ============================================
-- 3. Check if there are tickets in the database
-- ============================================
SELECT 
  id, 
  title, 
  status, 
  priority,
  user_id, 
  created_at,
  updated_at
FROM public.app_2b35a5a86e_tickets
ORDER BY created_at DESC
LIMIT 10;

-- ============================================
-- 4. Verify RLS is enabled on ticket tables
-- ============================================
SELECT 
  tablename, 
  rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
AND tablename LIKE 'app_2b35a5a86e_ticket%'
ORDER BY tablename;

-- ============================================
-- 5. Get admin user_id for testing
-- ============================================
-- First, get the user_id of the admin
SELECT 
  user_id as admin_user_id,
  email,
  role
FROM public.app_2b35a5a86e_clients
WHERE email = 'valerio.marino@corenexus.it';

-- ============================================
-- 6. Test query as admin (REPLACE USER_ID)
-- ============================================
-- IMPORTANT: Replace 'REPLACE_WITH_ADMIN_USER_ID' with the actual user_id from query #5
-- This simulates what the admin should see

-- Uncomment and run after replacing the user_id:
/*
SELECT t.*
FROM public.app_2b35a5a86e_tickets t
WHERE EXISTS (
  SELECT 1 FROM public.app_2b35a5a86e_clients c
  WHERE c.user_id = 'REPLACE_WITH_ADMIN_USER_ID'
  AND c.role IN ('admin', 'staff')
);
*/

-- ============================================
-- 7. Check auth.users table
-- ============================================
-- Verify the admin user exists in auth.users
SELECT 
  id,
  email,
  created_at,
  email_confirmed_at,
  last_sign_in_at
FROM auth.users
WHERE email = 'valerio.marino@corenexus.it';

-- ============================================
-- 8. Cross-check user_id consistency
-- ============================================
-- Verify that user_id in clients table matches auth.users
SELECT 
  c.user_id as client_user_id,
  c.email as client_email,
  c.role,
  u.id as auth_user_id,
  u.email as auth_email,
  CASE 
    WHEN c.user_id = u.id THEN 'MATCH ✓'
    ELSE 'MISMATCH ✗'
  END as consistency_check
FROM public.app_2b35a5a86e_clients c
LEFT JOIN auth.users u ON c.email = u.email
WHERE c.email = 'valerio.marino@corenexus.it';

-- ============================================
-- 9. Test direct ticket access (bypassing RLS)
-- ============================================
-- This query uses service role privileges to see all tickets
-- If this returns data but the app doesn't, it's definitely an RLS issue
SET ROLE postgres;
SELECT COUNT(*) as total_tickets
FROM public.app_2b35a5a86e_tickets;
RESET ROLE;