# Istruzioni per il Deploy della Edge Function

## Problema Risolto
L'errore "User not allowed" quando si cerca di creare un nuovo utente è stato risolto creando una Supabase Edge Function che gestisce la creazione degli utenti con i privilegi corretti.

## File Creati/Modificati

1. **supabase/functions/app_2b35a5a86e_create_user/index.ts** - Nuova Edge Function
2. **src/pages/AdminNewUser.tsx** - Aggiornato per usare la Edge Function

## Come Deployare la Edge Function

### Opzione 1: Deploy tramite Supabase CLI (Consigliato)

```bash
# 1. Assicurati di avere Supabase CLI installato
npm install -g supabase

# 2. Login a Supabase (se non l'hai già fatto)
supabase login

# 3. Link al tuo progetto
supabase link --project-ref lvbzopwygjlozoupdidg

# 4. Deploy della funzione
supabase functions deploy app_2b35a5a86e_create_user
```

### Opzione 2: Deploy Manuale tramite Dashboard

1. Vai su https://supabase.com/dashboard/project/lvbzopwygjlozoupdidg
2. Clicca su "Edge Functions" nel menu laterale
3. Clicca su "Deploy new function"
4. Nome: `app_2b35a5a86e_create_user`
5. Copia e incolla il contenuto del file `supabase/functions/app_2b35a5a86e_create_user/index.ts`
6. Clicca su "Deploy function"

## Verifica del Deploy

Dopo il deploy, verifica che la funzione sia attiva:

1. Vai su Supabase Dashboard → Edge Functions
2. Dovresti vedere `app_2b35a5a86e_create_user` nella lista
3. Lo stato dovrebbe essere "Active" (verde)

## Test della Funzionalità

1. Fai login come admin su https://[tuo-sito]/admin/login
2. Vai su "Gestione Utenti"
3. Clicca su "Crea Nuovo Utente"
4. Compila il form e clicca su "Crea Utente"
5. L'utente dovrebbe essere creato senza errori

## Note Importanti

- La Edge Function usa automaticamente le variabili d'ambiente `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` che sono già configurate in Supabase
- Non è necessario configurare nulla manualmente
- La funzione verifica che solo gli admin possano creare nuovi utenti

## Troubleshooting

Se ricevi ancora errori:

1. Verifica che la Edge Function sia deployata e attiva
2. Controlla i logs della Edge Function nel Dashboard Supabase
3. Verifica che l'utente admin abbia effettivamente il ruolo "admin" nella tabella `app_2b35a5a86e_clients`
