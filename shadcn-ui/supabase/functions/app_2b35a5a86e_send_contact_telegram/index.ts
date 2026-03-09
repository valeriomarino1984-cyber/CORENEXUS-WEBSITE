const TELEGRAM_BOT_TOKEN = '8384400920:AAFGePVgI8g8B6_PmR8Qk4dC4yXfsHByINc';
const TELEGRAM_CHAT_ID = '-1003436500659';

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
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
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

    // Format message for Telegram - use HTML parse mode to avoid Markdown escaping issues
    const telegramMessage = `🔔 <b>Nuovo Contatto da CoreNexus.it</b>

👤 <b>Nome:</b> ${escapeHtml(name)}
📧 <b>Email:</b> ${escapeHtml(email)}
📱 <b>Telefono:</b> ${escapeHtml(phone || 'Non fornito')}

💬 <b>Messaggio:</b>
${escapeHtml(message)}

---
<i>Inviato dal form contatti del sito CoreNexus.it</i>`;

    // Send message to Telegram
    console.log(`[${requestId}] Sending message to Telegram chat ${TELEGRAM_CHAT_ID}`);
    
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const telegramResponse = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error(`[${requestId}] Telegram API error:`, telegramData);
      throw new Error(`Telegram API error: ${telegramData.description || 'Unknown error'}`);
    }

    console.log(`[${requestId}] Message sent successfully to Telegram:`, telegramData.result.message_id);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Messaggio inviato con successo su Telegram',
        telegram_message_id: telegramData.result.message_id
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
        error: 'Errore durante l\'invio del messaggio',
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

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}