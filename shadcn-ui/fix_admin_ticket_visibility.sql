-- Fix Admin Ticket Visibility
-- This script adds RLS policies to allow admins and staff to view all tickets

-- First, check if the role column exists in clients table
-- If you haven't added it yet, uncomment the next line:
-- ALTER TABLE app_2b35a5a86e_clients ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'client';

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "allow_admin_view_all_tickets" ON app_2b35a5a86e_tickets;
DROP POLICY IF EXISTS "allow_staff_view_all_tickets" ON app_2b35a5a86e_tickets;
DROP POLICY IF EXISTS "allow_admin_insert_tickets" ON app_2b35a5a86e_tickets;
DROP POLICY IF EXISTS "allow_admin_update_all_tickets" ON app_2b35a5a86e_tickets;
DROP POLICY IF EXISTS "allow_staff_update_all_tickets" ON app_2b35a5a86e_tickets;

-- Policy 1: Allow admins to view ALL tickets
CREATE POLICY "allow_admin_view_all_tickets" 
ON app_2b35a5a86e_tickets 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'admin'
  )
);

-- Policy 2: Allow staff to view ALL tickets
CREATE POLICY "allow_staff_view_all_tickets" 
ON app_2b35a5a86e_tickets 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'staff'
  )
);

-- Policy 3: Allow admins to insert tickets (for maintenance reminders)
CREATE POLICY "allow_admin_insert_tickets" 
ON app_2b35a5a86e_tickets 
FOR INSERT 
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role IN ('admin', 'staff')
  )
);

-- Policy 4: Allow admins to update ALL tickets
CREATE POLICY "allow_admin_update_all_tickets" 
ON app_2b35a5a86e_tickets 
FOR UPDATE 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'admin'
  )
);

-- Policy 5: Allow staff to update ALL tickets
CREATE POLICY "allow_staff_update_all_tickets" 
ON app_2b35a5a86e_tickets 
FOR UPDATE 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'staff'
  )
);

-- Also add policies for ticket messages so admins can reply
DROP POLICY IF EXISTS "allow_admin_view_all_messages" ON app_2b35a5a86e_ticket_messages;
DROP POLICY IF EXISTS "allow_staff_view_all_messages" ON app_2b35a5a86e_ticket_messages;
DROP POLICY IF EXISTS "allow_admin_insert_messages" ON app_2b35a5a86e_ticket_messages;
DROP POLICY IF EXISTS "allow_staff_insert_messages" ON app_2b35a5a86e_ticket_messages;

CREATE POLICY "allow_admin_view_all_messages" 
ON app_2b35a5a86e_ticket_messages 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'admin'
  )
);

CREATE POLICY "allow_staff_view_all_messages" 
ON app_2b35a5a86e_ticket_messages 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'staff'
  )
);

CREATE POLICY "allow_admin_insert_messages" 
ON app_2b35a5a86e_ticket_messages 
FOR INSERT 
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role IN ('admin', 'staff')
  )
);

CREATE POLICY "allow_staff_insert_messages" 
ON app_2b35a5a86e_ticket_messages 
FOR INSERT 
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'staff'
  )
);

-- Add policies for ticket history
DROP POLICY IF EXISTS "allow_admin_view_all_history" ON app_2b35a5a86e_ticket_history;
DROP POLICY IF EXISTS "allow_staff_view_all_history" ON app_2b35a5a86e_ticket_history;

CREATE POLICY "allow_admin_view_all_history" 
ON app_2b35a5a86e_ticket_history 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'admin'
  )
);

CREATE POLICY "allow_staff_view_all_history" 
ON app_2b35a5a86e_ticket_history 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'staff'
  )
);

-- Add policies for ticket attachments
DROP POLICY IF EXISTS "allow_admin_view_all_attachments" ON app_2b35a5a86e_ticket_attachments;
DROP POLICY IF EXISTS "allow_staff_view_all_attachments" ON app_2b35a5a86e_ticket_attachments;

CREATE POLICY "allow_admin_view_all_attachments" 
ON app_2b35a5a86e_ticket_attachments 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'admin'
  )
);

CREATE POLICY "allow_staff_view_all_attachments" 
ON app_2b35a5a86e_ticket_attachments 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_2b35a5a86e_clients
    WHERE app_2b35a5a86e_clients.user_id = auth.uid()
    AND app_2b35a5a86e_clients.role = 'staff'
  )
);