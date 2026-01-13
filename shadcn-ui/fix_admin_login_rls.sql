-- Fix RLS policies for admin login
-- This ensures that after successful authentication, users can read their own profile

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Users can read own profile" ON app_2b35a5a86e_clients;

-- Create policy to allow users to read their own profile
CREATE POLICY "Users can read own profile"
ON app_2b35a5a86e_clients
FOR SELECT
TO authenticated
USING (
  user_id = auth.uid()
);

-- Also ensure the "Admins can read all users" policy exists
DROP POLICY IF EXISTS "Admins can read all users for management" ON app_2b35a5a86e_clients;

CREATE POLICY "Admins can read all users for management"
ON app_2b35a5a86e_clients
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- Verify all SELECT policies on the table
SELECT 
    schemaname, 
    tablename, 
    policyname, 
    permissive, 
    roles, 
    cmd, 
    qual
FROM pg_policies
WHERE tablename = 'app_2b35a5a86e_clients'
AND cmd = 'SELECT'
ORDER BY policyname;

-- Test query: Check if current user can read their own profile
-- Run this after logging in to verify
SELECT 
    id,
    user_id,
    email,
    company_name,
    contact_name,
    role
FROM app_2b35a5a86e_clients
WHERE user_id = auth.uid();