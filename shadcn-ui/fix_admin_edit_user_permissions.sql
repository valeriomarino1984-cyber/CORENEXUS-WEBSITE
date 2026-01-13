-- Fix RLS policies for admin user editing
-- This allows admins to read any user's data for editing

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Admins can read all users" ON app_2b35a5a86e_clients;

-- Create policy to allow admins to read all users
CREATE POLICY "Admins can read all users"
ON app_2b35a5a86e_clients
FOR SELECT
TO authenticated
USING (
  -- Allow if the requesting user is an admin
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- Also ensure admins can update any user
DROP POLICY IF EXISTS "Admins can update all users" ON app_2b35a5a86e_clients;

CREATE POLICY "Admins can update all users"
ON app_2b35a5a86e_clients
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role = 'admin'
  )
);

-- Verify the policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'app_2b35a5a86e_clients'
ORDER BY policyname;