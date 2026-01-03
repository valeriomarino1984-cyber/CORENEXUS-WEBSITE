-- Prima verifichiamo se l'utente esiste nella tabella clients
SELECT * FROM app_2b35a5a86e_clients WHERE user_id = 'c360ed60-74bb-4f6a-b81f-acc24f0ede13';

-- Se non esiste, inseriamo il record con ruolo admin
INSERT INTO app_2b35a5a86e_clients (user_id, email, contact_name, company_name, phone, role)
VALUES (
  'c360ed60-74bb-4f6a-b81f-acc24f0ede13',
  'valerio.marino@corenexus.it',
  'Valerio Marino',
  'CoreNexus',
  '',
  'admin'
)
ON CONFLICT (user_id) DO UPDATE SET role = 'admin';

-- Verifichiamo che il record sia stato creato/aggiornato
SELECT * FROM app_2b35a5a86e_clients WHERE user_id = 'c360ed60-74bb-4f6a-b81f-acc24f0ede13';
