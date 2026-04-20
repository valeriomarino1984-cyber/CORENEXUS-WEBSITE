# Come fare il redeploy della Edge Function su Supabase

L'errore "Edge Function returned a non-2xx status code" indica che la versione deployata su Supabase è VECCHIA e contiene un bug. Il codice aggiornato è già pronto in `supabase/functions/app_2b35a5a86e_create_user/index.ts`, ma deve essere ri-caricato manualmente.

## Metodo 1: Dashboard Supabase (più semplice)

1. Vai su https://supabase.com/dashboard/project/lvbzopwygjlozoupdidg
2. Nel menu laterale clicca su **Edge Functions**
3. Clicca su `app_2b35a5a86e_create_user`
4. Vai sul tab **Code** (o "Source code")
5. **Sostituisci tutto il contenuto** con il codice del file `supabase/functions/app_2b35a5a86e_create_user/index.ts` del progetto
6. Clicca **Deploy** (o "Save and deploy")

## Metodo 2: Supabase CLI (se preferisci da terminale)

```bash
# Installa Supabase CLI (se non ce l'hai)
npm install -g supabase

# Login
supabase login

# Link al progetto
supabase link --project-ref lvbzopwygjlozoupdidg

# Deploy della funzione
supabase functions deploy app_2b35a5a86e_create_user
```

## Metodo 3 (WORKAROUND): Crea l'admin direttamente via SQL

Se non riesci a fare il redeploy, puoi creare l'admin direttamente dal SQL Editor di Supabase:

1. Vai su https://supabase.com/dashboard/project/lvbzopwygjlozoupdidg/auth/users
2. Clicca **Add user** → **Create new user**
3. Inserisci email (es. `nuovo.admin@corenexus.it`) e password
4. **Importante**: spunta "Auto Confirm User"
5. Clicca **Create user**
6. Copia l'**UUID** dell'utente appena creato
7. Vai su **SQL Editor** e esegui:

```sql
-- Sostituisci 'UUID_QUI' con l'UUID copiato sopra
-- Sostituisci 'COMPANY_UUID_QUI' con l'UUID dell'azienda
INSERT INTO profiles (id, email, role, company_id)
VALUES (
  'UUID_QUI',
  'nuovo.admin@corenexus.it',
  'admin',
  'COMPANY_UUID_QUI'
)
ON CONFLICT (id) DO UPDATE SET 
  role = 'admin',
  company_id = EXCLUDED.company_id;

-- Per trovare gli UUID delle aziende:
SELECT id, name FROM companies;
```

## Dopo il redeploy

Una volta redeployata la funzione, prova di nuovo a creare un utente admin dall'interfaccia. Ora vedrai il messaggio di errore reale (non più quello generico) se qualcosa va storto.