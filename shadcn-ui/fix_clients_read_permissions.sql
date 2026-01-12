-- Fix RLS policies for clients table - READ permissions
-- This resolves the 406 error when admins try to view client data

BEGIN;

-- Drop existing SELECT policies
DROP POLICY IF EXISTS "Admin and staff can view all clients" ON public.app_2b35a5a86e_clients;
DROP POLICY IF EXISTS "Users can view own profile" ON public.app_2b35a5a86e_clients;

-- Policy for admin/staff to view all clients
-- This is CRITICAL: admins must be able to see ALL client records, not just their own
-- When viewing a ticket, the admin needs to see the client who created it
CREATE POLICY "Admin and staff can view all clients"
ON public.app_2b35a5a86e_clients
FOR SELECT
USING (
  -- If the current user is an admin/staff, they can see all clients
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_clients c
    WHERE c.user_id = auth.uid()
    AND c.role IN ('admin', 'staff')
  )
);

-- Policy for users to view only their own profile
CREATE POLICY "Users can view own profile"
ON public.app_2b35a5a86e_clients
FOR SELECT
USING (user_id = auth.uid());

-- Ensure RLS is enabled
ALTER TABLE public.app_2b35a5a86e_clients ENABLE ROW LEVEL SECURITY;

-- Verify the policies were created successfully
SELECT 
  schemaname, 
  tablename, 
  policyname, 
  permissive, 
  roles, 
  cmd,
  qual::text as using_expression
FROM pg_policies
WHERE schemaname = 'public'
AND tablename = 'app_2b35a5a86e_clients'
ORDER BY policyname;

COMMIT;