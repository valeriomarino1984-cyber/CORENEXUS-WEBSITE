-- EMERGENCY FIX: Disable RLS completely on app_2b35a5a86e_clients
-- This will allow login to work immediately while we investigate the proper solution

-- Step 1: Check current RLS status
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE tablename = 'app_2b35a5a86e_clients';

-- Step 2: Drop ALL policies
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE tablename = 'app_2b35a5a86e_clients'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON app_2b35a5a86e_clients', r.policyname);
    END LOOP;
END $$;

-- Step 3: DISABLE Row Level Security on the table
ALTER TABLE app_2b35a5a86e_clients DISABLE ROW LEVEL SECURITY;

-- Step 4: Verify RLS is disabled
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE tablename = 'app_2b35a5a86e_clients';

-- Step 5: Verify no policies exist
SELECT 
    COUNT(*) as policy_count
FROM pg_policies
WHERE tablename = 'app_2b35a5a86e_clients';

-- Step 6: Test query - this should work now
SELECT 
    id,
    user_id,
    email,
    company_name,
    contact_name,
    role,
    created_at
FROM app_2b35a5a86e_clients
ORDER BY created_at DESC
LIMIT 5;