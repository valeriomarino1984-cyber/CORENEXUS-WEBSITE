import { createClient } from 'npm:@supabase/supabase-js@2';

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
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log(`[${requestId}] Creating test clients...`);

    // Create first test client
    const { data: user1, error: error1 } = await supabase.auth.admin.createUser({
      email: 'demo1@example.com',
      password: 'Demo123!',
      email_confirm: true,
      user_metadata: {
        company_name: 'Azienda Demo SRL',
        contact_name: 'Mario Rossi',
        phone: '+39 02 1234567',
      },
    });

    if (error1) {
      console.error(`[${requestId}] Error creating user1:`, error1);
      throw error1;
    }

    console.log(`[${requestId}] User1 created:`, user1.user.id);

    // Insert client record for user1
    const { error: clientError1 } = await supabase
      .from('app_2b35a5a86e_clients')
      .insert({
        user_id: user1.user.id,
        company_name: 'Azienda Demo SRL',
        contact_name: 'Mario Rossi',
        phone: '+39 02 1234567',
      });

    if (clientError1) {
      console.error(`[${requestId}] Error creating client1:`, clientError1);
      throw clientError1;
    }

    // Create sample tickets for user1
    const { error: ticketsError1 } = await supabase
      .from('app_2b35a5a86e_tickets')
      .insert([
        {
          user_id: user1.user.id,
          title: 'Problema configurazione firewall pfSense',
          description: 'Necessito assistenza per configurare le regole del firewall pfSense per permettere il traffico VPN.',
          category: 'network',
          priority: 'high',
          status: 'open',
        },
        {
          user_id: user1.user.id,
          title: 'Backup VMware non funzionante',
          description: 'Il sistema di backup automatico delle VM non si avvia correttamente.',
          category: 'virtualization',
          priority: 'urgent',
          status: 'in_progress',
        },
        {
          user_id: user1.user.id,
          title: 'Aggiornamento Active Directory',
          description: 'Richiesta di supporto per aggiornare il server Active Directory alla versione più recente.',
          category: 'systems',
          priority: 'medium',
          status: 'resolved',
        },
      ]);

    if (ticketsError1) {
      console.error(`[${requestId}] Error creating tickets1:`, ticketsError1);
      throw ticketsError1;
    }

    // Create second test client
    const { data: user2, error: error2 } = await supabase.auth.admin.createUser({
      email: 'demo2@example.com',
      password: 'Demo456!',
      email_confirm: true,
      user_metadata: {
        company_name: 'Tech Solutions SPA',
        contact_name: 'Laura Bianchi',
        phone: '+39 06 7654321',
      },
    });

    if (error2) {
      console.error(`[${requestId}] Error creating user2:`, error2);
      throw error2;
    }

    console.log(`[${requestId}] User2 created:`, user2.user.id);

    // Insert client record for user2
    const { error: clientError2 } = await supabase
      .from('app_2b35a5a86e_clients')
      .insert({
        user_id: user2.user.id,
        company_name: 'Tech Solutions SPA',
        contact_name: 'Laura Bianchi',
        phone: '+39 06 7654321',
      });

    if (clientError2) {
      console.error(`[${requestId}] Error creating client2:`, clientError2);
      throw clientError2;
    }

    // Create sample tickets for user2
    const { error: ticketsError2 } = await supabase
      .from('app_2b35a5a86e_tickets')
      .insert([
        {
          user_id: user2.user.id,
          title: 'Installazione sistema Zabbix monitoring',
          description: 'Richiesta installazione e configurazione sistema di monitoring Zabbix per la rete aziendale.',
          category: 'monitoring',
          priority: 'medium',
          status: 'open',
        },
        {
          user_id: user2.user.id,
          title: 'Migrazione server Ubuntu',
          description: 'Necessità di migrare i server da Ubuntu 20.04 a Ubuntu 22.04 LTS.',
          category: 'systems',
          priority: 'low',
          status: 'open',
        },
      ]);

    if (ticketsError2) {
      console.error(`[${requestId}] Error creating tickets2:`, ticketsError2);
      throw ticketsError2;
    }

    console.log(`[${requestId}] Test clients created successfully`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Test clients created successfully',
        clients: [
          {
            email: 'demo1@example.com',
            password: 'Demo123!',
            company: 'Azienda Demo SRL',
            tickets: 3,
          },
          {
            email: 'demo2@example.com',
            password: 'Demo456!',
            company: 'Tech Solutions SPA',
            tickets: 2,
          },
        ],
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error(`[${requestId}] Error:`, error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});