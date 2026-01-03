import { createClient } from 'npm:@supabase/supabase-js@2';

const RECIPIENT_EMAIL = 'info@corenexus.it';

Deno.serve(async (req) => {
  const requestId = crypto.randomUUID();
  console.log(`[${requestId}] Request received:`, {
    method: req.method,
    headers: Object.fromEntries(req.headers.entries()),
  });

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    });
  }

  try {
    // Parse request body
    let body;
    try {
      body = await req.json();
      console.log(`[${requestId}] Request body size:`, JSON.stringify(body).length);
    } catch (error) {
      console.error(`[${requestId}] Failed to parse request body:`, error);
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.error(`[${requestId}] Missing required fields`);
      return new Response(
        JSON.stringify({ error: 'Nome, email e messaggio sono obbligatori' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    console.log(`[${requestId}] Processing contact form submission from:`, email);

    // Get SMTP configuration from environment variables
    const smtpHost = Deno.env.get('SMTP_HOST');
    const smtpPort = Deno.env.get('SMTP_PORT');
    const smtpSecure = Deno.env.get('SMTP_SECURE') !== 'false';
    const smtpUser = Deno.env.get('SMTP_USER');
    const smtpPassword = Deno.env.get('SMTP_PASSWORD');
    const smtpFrom = Deno.env.get('SMTP_FROM');

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !smtpFrom) {
      console.error(`[${requestId}] Missing SMTP configuration in environment variables`);
      return new Response(
        JSON.stringify({ 
          error: 'Configurazione email non completa. Contatta l\'amministratore.',
          details: 'SMTP configuration missing'
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Import nodemailer
    const nodemailer = await import('npm:nodemailer');

    // Create transporter
    const transporter = nodemailer.default.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    console.log(`[${requestId}] SMTP transporter created`);

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Nuovo messaggio dal form contatti CoreNexus.it</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone || 'Non fornito'}</p>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #374151; margin-top: 0;">Messaggio:</h3>
          <p style="color: #4b5563; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
          Questo messaggio è stato inviato dal form contatti del sito CoreNexus.it
        </p>
      </div>
    `;

    const emailText = `
Nuovo messaggio dal form contatti CoreNexus.it

Nome: ${name}
Email: ${email}
Telefono: ${phone || 'Non fornito'}

Messaggio:
${message}

---
Questo messaggio è stato inviato dal form contatti del sito CoreNexus.it
    `;

    // Send email
    console.log(`[${requestId}] Sending email to ${RECIPIENT_EMAIL}`);
    
    const info = await transporter.sendMail({
      from: `"CoreNexus.it - Form Contatti" <${smtpFrom}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nuovo contatto da ${name}`,
      text: emailText,
      html: emailHtml,
    });

    console.log(`[${requestId}] Email sent successfully:`, info.messageId);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Email inviata con successo',
        messageId: info.messageId
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

  } catch (error) {
    console.error(`[${requestId}] Error processing request:`, error);
    return new Response(
      JSON.stringify({ 
        error: 'Errore durante l\'invio dell\'email',
        details: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
});