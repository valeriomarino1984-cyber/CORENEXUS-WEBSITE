-- Fix RLS policies for ticket-related tables
-- This script resolves the "Ticket non trovato" error when admins try to view tickets

BEGIN;

-- ============================================
-- TICKETS TABLE POLICIES
-- ============================================

-- Drop existing policies
DROP POLICY IF EXISTS "Admin and staff can view all tickets" ON public.app_2b35a5a86e_tickets;
DROP POLICY IF EXISTS "Users can view own tickets" ON public.app_2b35a5a86e_tickets;
DROP POLICY IF EXISTS "Admin and staff can update tickets" ON public.app_2b35a5a86e_tickets;
DROP POLICY IF EXISTS "Admin and staff can insert tickets" ON public.app_2b35a5a86e_tickets;
DROP POLICY IF EXISTS "Users can insert own tickets" ON public.app_2b35a5a86e_tickets;

-- Policy for admin/staff to view all tickets
CREATE POLICY "Admin and staff can view all tickets"
ON public.app_2b35a5a86e_tickets
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- Policy for users to view only their own tickets
CREATE POLICY "Users can view own tickets"
ON public.app_2b35a5a86e_tickets
FOR SELECT
USING (user_id = auth.uid());

-- Policy for admin/staff to update any ticket
CREATE POLICY "Admin and staff can update tickets"
ON public.app_2b35a5a86e_tickets
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- Policy for admin/staff to insert tickets
CREATE POLICY "Admin and staff can insert tickets"
ON public.app_2b35a5a86e_tickets
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- Policy for users to insert their own tickets
CREATE POLICY "Users can insert own tickets"
ON public.app_2b35a5a86e_tickets
FOR INSERT
WITH CHECK (user_id = auth.uid());

-- ============================================
-- TICKET MESSAGES TABLE POLICIES
-- ============================================

-- Drop existing policies
DROP POLICY IF EXISTS "Admin and staff can view all messages" ON public.app_2b35a5a86e_ticket_messages;
DROP POLICY IF EXISTS "Users can view own ticket messages" ON public.app_2b35a5a86e_ticket_messages;
DROP POLICY IF EXISTS "Admin and staff can insert messages" ON public.app_2b35a5a86e_ticket_messages;
DROP POLICY IF EXISTS "Users can insert messages to own tickets" ON public.app_2b35a5a86e_ticket_messages;

-- Policy for admin/staff to view all messages
CREATE POLICY "Admin and staff can view all messages"
ON public.app_2b35a5a86e_ticket_messages
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- Policy for users to view messages in their own tickets
CREATE POLICY "Users can view own ticket messages"
ON public.app_2b35a5a86e_ticket_messages
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_tickets
    WHERE id = app_2b35a5a86e_ticket_messages.ticket_id
    AND user_id = auth.uid()
  )
);

-- Policy for admin/staff to insert messages
CREATE POLICY "Admin and staff can insert messages"
ON public.app_2b35a5a86e_ticket_messages
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- Policy for users to insert messages to their own tickets
CREATE POLICY "Users can insert messages to own tickets"
ON public.app_2b35a5a86e_ticket_messages
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_tickets
    WHERE id = app_2b35a5a86e_ticket_messages.ticket_id
    AND user_id = auth.uid()
  )
);

-- ============================================
-- TICKET ATTACHMENTS TABLE POLICIES (if exists)
-- ============================================

-- Drop existing policies
DROP POLICY IF EXISTS "Admin and staff can view all attachments" ON public.app_2b35a5a86e_ticket_attachments;
DROP POLICY IF EXISTS "Users can view own ticket attachments" ON public.app_2b35a5a86e_ticket_attachments;
DROP POLICY IF EXISTS "Admin and staff can insert attachments" ON public.app_2b35a5a86e_ticket_attachments;
DROP POLICY IF EXISTS "Users can insert attachments to own tickets" ON public.app_2b35a5a86e_ticket_attachments;

-- Policy for admin/staff to view all attachments
CREATE POLICY "Admin and staff can view all attachments"
ON public.app_2b35a5a86e_ticket_attachments
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- Policy for users to view attachments in their own tickets
CREATE POLICY "Users can view own ticket attachments"
ON public.app_2b35a5a86e_ticket_attachments
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_tickets
    WHERE id = app_2b35a5a86e_ticket_attachments.ticket_id
    AND user_id = auth.uid()
  )
);

-- Policy for admin/staff to insert attachments
CREATE POLICY "Admin and staff can insert attachments"
ON public.app_2b35a5a86e_ticket_attachments
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- Policy for users to insert attachments to their own tickets
CREATE POLICY "Users can insert attachments to own tickets"
ON public.app_2b35a5a86e_ticket_attachments
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_tickets
    WHERE id = app_2b35a5a86e_ticket_attachments.ticket_id
    AND user_id = auth.uid()
  )
);

-- ============================================
-- TICKET HISTORY TABLE POLICIES (if exists)
-- ============================================

-- Drop existing policies
DROP POLICY IF EXISTS "Admin and staff can view all history" ON public.app_2b35a5a86e_ticket_history;
DROP POLICY IF EXISTS "Users can view own ticket history" ON public.app_2b35a5a86e_ticket_history;
DROP POLICY IF EXISTS "Admin and staff can insert history" ON public.app_2b35a5a86e_ticket_history;

-- Policy for admin/staff to view all history
CREATE POLICY "Admin and staff can view all history"
ON public.app_2b35a5a86e_ticket_history
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- Policy for users to view history of their own tickets
CREATE POLICY "Users can view own ticket history"
ON public.app_2b35a5a86e_ticket_history
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_tickets
    WHERE id = app_2b35a5a86e_ticket_history.ticket_id
    AND user_id = auth.uid()
  )
);

-- Policy for admin/staff to insert history records
CREATE POLICY "Admin and staff can insert history"
ON public.app_2b35a5a86e_ticket_history
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.app_2b35a5a86e_clients
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'staff')
  )
);

-- ============================================
-- ENABLE RLS ON ALL TABLES
-- ============================================

ALTER TABLE public.app_2b35a5a86e_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_2b35a5a86e_ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_2b35a5a86e_ticket_attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_2b35a5a86e_ticket_history ENABLE ROW LEVEL SECURITY;

-- ============================================
-- VERIFY POLICIES
-- ============================================

-- Show all policies for ticket-related tables
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE schemaname = 'public'
AND tablename LIKE 'app_2b35a5a86e_ticket%'
ORDER BY tablename, policyname;

COMMIT;