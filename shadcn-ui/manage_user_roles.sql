-- Script per visualizzare e gestire i ruoli degli utenti
-- Questo script ti permette di vedere tutti gli utenti e modificare i loro ruoli

-- ============================================
-- PARTE 1: VISUALIZZARE TUTTI GLI UTENTI
-- ============================================

-- Visualizza tutti gli utenti con i loro ruoli
SELECT 
    'TUTTI GLI UTENTI' as sezione,
    c.id,
    c.user_id,
    c.email,
    c.company_name,
    c.contact_name,
    c.role,
    c.created_at,
    u.email_confirmed_at,
    u.last_sign_in_at
FROM app_2b35a5a86e_clients c
LEFT JOIN auth.users u ON u.id = c.user_id
ORDER BY c.created_at DESC;

-- ============================================
-- PARTE 2: VISUALIZZARE SOLO ADMIN
-- ============================================

-- Visualizza solo gli utenti admin
SELECT 
    'SOLO ADMIN' as sezione,
    c.id,
    c.user_id,
    c.email,
    c.company_name,
    c.contact_name,
    c.role,
    c.created_at
FROM app_2b35a5a86e_clients c
WHERE c.role IN ('admin', 'staff')
ORDER BY c.created_at DESC;

-- ============================================
-- PARTE 3: VISUALIZZARE SOLO UTENTI NORMALI
-- ============================================

-- Visualizza solo gli utenti normali (non admin)
SELECT 
    'SOLO UTENTI NORMALI' as sezione,
    c.id,
    c.user_id,
    c.email,
    c.company_name,
    c.contact_name,
    c.role,
    c.created_at
FROM app_2b35a5a86e_clients c
WHERE c.role = 'user' OR c.role IS NULL
ORDER BY c.created_at DESC;

-- ============================================
-- PARTE 4: MODIFICARE I RUOLI
-- ============================================

-- ESEMPIO 1: Promuovere un utente normale ad ADMIN
-- Sostituisci 'user@example.com' con l'email dell'utente da promuovere
/*
UPDATE app_2b35a5a86e_clients
SET 
    role = 'admin',
    updated_at = NOW()
WHERE email = 'user@example.com';
*/

-- ESEMPIO 2: Degradare un admin a utente normale
-- Sostituisci 'admin@example.com' con l'email dell'admin da degradare
/*
UPDATE app_2b35a5a86e_clients
SET 
    role = 'user',
    updated_at = NOW()
WHERE email = 'admin@example.com';
*/

-- ESEMPIO 3: Promuovere un utente a STAFF (moderatore)
-- Sostituisci 'user@example.com' con l'email dell'utente
/*
UPDATE app_2b35a5a86e_clients
SET 
    role = 'staff',
    updated_at = NOW()
WHERE email = 'user@example.com';
*/

-- ESEMPIO 4: Modificare il ruolo usando l'ID invece dell'email
-- Sostituisci 'USER_ID_HERE' con l'ID dell'utente
/*
UPDATE app_2b35a5a86e_clients
SET 
    role = 'admin',
    updated_at = NOW()
WHERE user_id = 'USER_ID_HERE';
*/

-- ============================================
-- PARTE 5: VERIFICARE LE MODIFICHE
-- ============================================

-- Dopo aver modificato un ruolo, esegui questa query per verificare
-- Sostituisci 'user@example.com' con l'email dell'utente modificato
/*
SELECT 
    'VERIFICA MODIFICA' as sezione,
    id,
    user_id,
    email,
    company_name,
    contact_name,
    role,
    updated_at
FROM app_2b35a5a86e_clients
WHERE email = 'user@example.com';
*/

-- ============================================
-- PARTE 6: STATISTICHE RUOLI
-- ============================================

-- Conta quanti utenti ci sono per ogni ruolo
SELECT 
    'STATISTICHE RUOLI' as sezione,
    COALESCE(role, 'non specificato') as ruolo,
    COUNT(*) as numero_utenti
FROM app_2b35a5a86e_clients
GROUP BY role
ORDER BY COUNT(*) DESC;

-- ============================================
-- ISTRUZIONI D'USO
-- ============================================

/*
COME USARE QUESTO SCRIPT:

1. VISUALIZZARE UTENTI:
   - Esegui le query della PARTE 1, 2 o 3 per vedere gli utenti
   - Non serve modificare nulla, basta eseguire

2. MODIFICARE UN RUOLO:
   - Vai alla PARTE 4
   - Scegli l'esempio che ti serve
   - Rimuovi i commenti /* */ dall'esempio
   - Sostituisci l'email o l'ID con quello reale
   - Esegui la query

3. VERIFICARE LA MODIFICA:
   - Vai alla PARTE 5
   - Rimuovi i commenti /* */
   - Sostituisci l'email con quella dell'utente modificato
   - Esegui la query per confermare

RUOLI DISPONIBILI:
- 'admin'  : Amministratore completo
- 'staff'  : Moderatore/Staff
- 'user'   : Utente normale

ESEMPI PRATICI:

Esempio A: Promuovere mario.rossi@example.com ad admin
UPDATE app_2b35a5a86e_clients
SET role = 'admin', updated_at = NOW()
WHERE email = 'mario.rossi@example.com';

Esempio B: Degradare admin@test.com a utente normale
UPDATE app_2b35a5a86e_clients
SET role = 'user', updated_at = NOW()
WHERE email = 'admin@test.com';
*/