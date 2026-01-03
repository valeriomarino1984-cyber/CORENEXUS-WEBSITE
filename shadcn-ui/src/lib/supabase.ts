import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lvbzopwygjlozoupdidg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2YnpvcHd5Z2psb3pvdXBkaWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2MDM0MzYsImV4cCI6MjA3ODE3OTQzNn0.JHZAljzfggG1aNnUMdw89QhUkc-TGe3-a7A0xdH09O0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Client {
  id: string;
  user_id: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  created_at: string;
}

export interface Ticket {
  id: string;
  user_id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface TicketAttachment {
  id: string;
  ticket_id: string;
  file_name: string;
  file_url: string;
  file_size: number;
  file_type: string;
  uploaded_by: string;
  created_at: string;
}

export interface TicketMessage {
  id: string;
  ticket_id: string;
  user_id: string;
  message: string;
  is_staff: boolean;
  created_at: string;
}

export interface TicketHistory {
  id: string;
  ticket_id: string;
  user_id: string;
  action: string;
  field_name: string | null;
  old_value: string | null;
  new_value: string | null;
  created_at: string;
}

// Helper function to upload file to Supabase Storage
export const uploadTicketAttachment = async (
  ticketId: string,
  file: File
): Promise<{ url: string; path: string } | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${ticketId}/${Date.now()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('ticket_attachments')
      .upload(fileName, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from('ticket_attachments')
      .getPublicUrl(fileName);

    return { url: publicUrl, path: data.path };
  } catch (error) {
    console.error('Error uploading file:', error);
    return null;
  }
};

// Helper function to send notification
export const sendTicketNotification = async (
  ticketId: string,
  action: string,
  userEmail: string,
  userName: string,
  ticketTitle: string
) => {
  try {
    const response = await fetch(
      `${supabaseUrl}/functions/v1/app_2b35a5a86e_send_ticket_notification`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          ticketId,
          action,
          userEmail,
          userName,
          ticketTitle,
        }),
      }
    );

    if (!response.ok) {
      console.error('Failed to send notification');
    }
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

// Helper function to log ticket history
export const logTicketHistory = async (
  ticketId: string,
  userId: string,
  action: string,
  fieldName?: string,
  oldValue?: string,
  newValue?: string
) => {
  try {
    await supabase.from('app_2b35a5a86e_ticket_history').insert({
      ticket_id: ticketId,
      user_id: userId,
      action,
      field_name: fieldName || null,
      old_value: oldValue || null,
      new_value: newValue || null,
    });
  } catch (error) {
    console.error('Error logging history:', error);
  }
};