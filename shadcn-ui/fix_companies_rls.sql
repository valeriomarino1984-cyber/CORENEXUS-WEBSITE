-- Fix RLS policies on companies table to allow admins to manage companies
-- Run this in Supabase SQL Editor

BEGIN;

-- Drop existing policies if any
DROP POLICY IF EXISTS "allow_admin_insert_companies" ON companies;
DROP POLICY IF EXISTS "allow_admin_all_companies" ON companies;
DROP POLICY IF EXISTS "allow_read_all_companies" ON companies;
DROP POLICY IF EXISTS "allow_authenticated_read_companies" ON companies;
DROP POLICY IF EXISTS "allow_admin_update_companies" ON companies;
DROP POLICY IF EXISTS "allow_admin_delete_companies" ON companies;

-- Ensure RLS is enabled
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

-- Allow all authenticated users to read companies
CREATE POLICY "allow_authenticated_read_companies" ON companies
  FOR SELECT TO authenticated
  USING (true);

-- Allow admins to insert companies
CREATE POLICY "allow_admin_insert_companies" ON companies
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Allow admins to update companies
CREATE POLICY "allow_admin_update_companies" ON companies
  FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Allow admins to delete companies
CREATE POLICY "allow_admin_delete_companies" ON companies
  FOR DELETE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

COMMIT;

-- Verify policies
SELECT schemaname, tablename, policyname, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'companies';