-- FINAL FIX: Remove all problematic RLS policies and create simple, non-recursive ones
-- This will definitively solve the "infinite recursion" error

-- Step 1: Drop ALL existing policies on app_2b35a5a86e_clients
DROP POLICY IF EXISTS "Users can read own profile" ON app_2b35a5a86e_clients;
DROP POLICY IF EXISTS "Admins can read all users" ON app_2b35a5a86e_clients;
DROP POLICY IF EXISTS "Admins can read all users for management" ON app_2b35a5a86e_clients;
DROP POLICY IF EXISTS "Admins can update all users" ON app_2b35a5a86e_clients;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON app_2b35a5a86e_clients;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON app_2b35a5a86e_clients;
DROP POLICY IF EXISTS "Enable update for users based on user_id" ON app_2b35a5a86e_clients;

-- Step 2: Create simple, non-recursive policies

-- Policy 1: Allow users to read their own profile (NO recursion)
CREATE POLICY "allow_read_own_profile"
ON app_2b35a5a86e_clients
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Policy 2: Allow users to update their own profile (NO recursion)
CREATE POLICY "allow_update_own_profile"
ON app_2b35a5a86e_clients
FOR UPDATE
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- Policy 3: Allow insert for authenticated users (for user creation)
CREATE POLICY "allow_insert_authenticated"
ON app_2b35a5a86e_clients
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Step 3: Verify the new policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies
WHERE tablename = 'app_2b35a5a86e_clients'
ORDER BY cmd, policyname;

-- Step 4: Test query (this should work now without recursion)
SELECT 
    id,
    user_id,
    email,
    company_name,
    contact_name,
    role
FROM app_2b35a5a86e_clients
WHERE user_id = auth.uid();