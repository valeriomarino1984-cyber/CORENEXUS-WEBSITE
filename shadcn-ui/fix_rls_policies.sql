-- Fix RLS policies for app_2b35a5a86e_clients table
-- This script resolves the "User not allowed" error when creating users via Edge Function

BEGIN;

-- Step 1: Check current RLS status
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'app_2b35a5a86e_clients';

-- Step 2: Drop existing policies that might conflict
DROP POLICY IF EXISTS "Service role can insert clients" ON public.app_2b35a5a86e_clients;
DROP POLICY IF EXISTS "Service role can select clients" ON public.app_2b35a5a86e_clients;
DROP POLICY IF EXISTS "Service role can update clients" ON public.app_2b35a5a86e_clients;
DROP POLICY IF EXISTS "Service role can delete clients" ON public.app_2b35a5a86e_clients;

-- Step 3: Create comprehensive policies for service role
-- These policies allow the Edge Function (using service role key) to manage users

-- Allow service role to INSERT new clients
CREATE POLICY "Service role can insert clients"
ON public.app_2b35a5a86e_clients
FOR INSERT
TO service_role
WITH CHECK (true);

-- Allow service role to SELECT clients (needed for admin verification)
CREATE POLICY "Service role can select clients"
ON public.app_2b35a5a86e_clients
FOR SELECT
TO service_role
USING (true);

-- Allow service role to UPDATE clients
CREATE POLICY "Service role can update clients"
ON public.app_2b35a5a86e_clients
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

-- Allow service role to DELETE clients
CREATE POLICY "Service role can delete clients"
ON public.app_2b35a5a86e_clients
FOR DELETE
TO service_role
USING (true);

-- Step 4: Ensure RLS is enabled (but service role bypasses it with proper policies)
ALTER TABLE public.app_2b35a5a86e_clients ENABLE ROW LEVEL SECURITY;

-- Step 5: Verify policies were created
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE schemaname = 'public'
AND tablename = 'app_2b35a5a86e_clients'
ORDER BY policyname;

COMMIT;