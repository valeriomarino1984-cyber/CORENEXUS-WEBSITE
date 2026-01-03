import { createClient } from 'npm:@supabase/supabase-js@2';
import nodemailer from 'npm:nodemailer';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
};

Deno.serve(async (req) => {
  const requestId = crypto.randomUUID();
  console.log(`[${requestId}] Request started:`, { method: req.method });

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid JSON body' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { ticketId, action, userEmail, userName, ticketTitle } = body;

    if (!ticketId || !action || !userEmail) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[${requestId}] Sending notification for ticket ${ticketId}, action: ${action}`);

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: Deno.env.get('SMTP_HOST') || 'smtp.gmail.com',
      port: parseInt(Deno.env.get('SMTP_PORT') || '587'),
      secure: Deno.env.get('SMTP_SECURE') === 'true',
      auth: {
        user: Deno.env.get('SMTP_USER'),
        pass: Deno.env.get('SMTP_PASSWORD'),
      },
    });

    let subject = '';
    let htmlContent = '';

    switch (action) {
      case 'created':
        subject = `Nuovo Ticket Creato: ${ticketTitle}`;
        htmlContent = `
          <h2>Ticket Creato con Successo</h2>
          <p>Ciao ${userName || 'Cliente'},</p>
          <p>Il tuo ticket di assistenza è stato creato con successo.</p>
          <p><strong>Titolo:</strong> ${ticketTitle}</p>
          <p>Il nostro team di supporto ti risponderà al più presto.</p>
          <p>Puoi visualizzare lo stato del ticket nella tua dashboard.</p>
          <br>
          <p>Cordiali saluti,<br>Team di Supporto</p>
        `;
        break;
      case 'updated':
        subject = `Ticket Aggiornato: ${ticketTitle}`;
        htmlContent = `
          <h2>Ticket Aggiornato</h2>
          <p>Ciao ${userName || 'Cliente'},</p>
          <p>Il tuo ticket di assistenza è stato aggiornato.</p>
          <p><strong>Titolo:</strong> ${ticketTitle}</p>
          <p>Accedi alla dashboard per vedere le modifiche.</p>
          <br>
          <p>Cordiali saluti,<br>Team di Supporto</p>
        `;
        break;
      case 'message':
        subject = `Nuovo Messaggio: ${ticketTitle}`;
        htmlContent = `
          <h2>Nuovo Messaggio Ricevuto</h2>
          <p>Ciao ${userName || 'Cliente'},</p>
          <p>Hai ricevuto un nuovo messaggio sul tuo ticket.</p>
          <p><strong>Titolo:</strong> ${ticketTitle}</p>
          <p>Accedi alla dashboard per leggere il messaggio.</p>
          <br>
          <p>Cordiali saluti,<br>Team di Supporto</p>
        `;
        break;
      default:
        subject = `Notifica Ticket: ${ticketTitle}`;
        htmlContent = `
          <h2>Notifica Ticket</h2>
          <p>Ciao ${userName || 'Cliente'},</p>
          <p>C'è un aggiornamento sul tuo ticket.</p>
          <p><strong>Titolo:</strong> ${ticketTitle}</p>
          <br>
          <p>Cordiali saluti,<br>Team di Supporto</p>
        `;
    }

    await transporter.sendMail({
      from: Deno.env.get('SMTP_FROM') || 'noreply@support.com',
      to: userEmail,
      subject,
      html: htmlContent,
    });

    console.log(`[${requestId}] Email sent successfully to ${userEmail}`);

    return new Response(
      JSON.stringify({ success: true, message: 'Notification sent' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(`[${requestId}] Error:`, error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});