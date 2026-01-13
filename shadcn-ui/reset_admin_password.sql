-- Reset password for admin user valerio.marino@corenexus.it
-- This script updates the password directly in auth.users table

-- IMPORTANT: Replace 'YOUR_NEW_PASSWORD_HERE' with the actual password you want to set
-- The password will be automatically hashed by Supabase

BEGIN;

-- Method 1: Update password using Supabase's password hashing
-- Replace 'YOUR_NEW_PASSWORD_HERE' with the actual password
UPDATE auth.users
SET 
    encrypted_password = crypt('YOUR_NEW_PASSWORD_HERE', gen_salt('bf')),
    updated_at = now()
WHERE email = 'valerio.marino@corenexus.it';

-- Verify the update
SELECT 
    id,
    email,
    email_confirmed_at,
    updated_at,
    last_sign_in_at,
    CASE 
        WHEN encrypted_password IS NOT NULL THEN 'Password Set ✓'
        ELSE 'No Password ✗'
    END as password_status
FROM auth.users
WHERE email = 'valerio.marino@corenexus.it';

COMMIT;

/*
============================================
USAGE INSTRUCTIONS
============================================

1. Replace 'YOUR_NEW_PASSWORD_HERE' with your desired password
   Example: If you want password "CoreNexus2024!", replace it like this:
   encrypted_password = crypt('CoreNexus2024!', gen_salt('bf')),

2. Run this script in Supabase SQL Editor:
   Dashboard → SQL Editor → New Query → Paste and Run

3. After running, try to login with:
   Email: valerio.marino@corenexus.it
   Password: [the password you set in step 1]

4. If you still can't login:
   - Clear browser cache
   - Try incognito/private mode
   - Wait 1-2 minutes for the change to propagate

============================================
ALTERNATIVE METHOD (if the above doesn't work)
============================================

If the password reset doesn't work, you can delete and recreate the user:

STEP 1: Delete the user from Supabase Dashboard
   Authentication → Users → Find valerio.marino@corenexus.it → Delete User

STEP 2: Also delete from clients table
*/
-- DELETE FROM public.app_2b35a5a86e_clients 
-- WHERE email = 'valerio.marino@corenexus.it';

/*
STEP 3: Recreate using the Edge Function

Using curl:
curl -X POST \
  'https://lvbzopwygjlozoupdidg.supabase.co/functions/v1/app_2b35a5a86e_create_user' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_SUPABASE_ANON_KEY' \
  -d '{
    "email": "valerio.marino@corenexus.it",
    "password": "YOUR_NEW_PASSWORD",
    "role": "admin",
    "company_name": "CoreNexus",
    "contact_name": "Valerio Marino"
  }'

Using Postman or similar:
POST https://lvbzopwygjlozoupdidg.supabase.co/functions/v1/app_2b35a5a86e_create_user

Headers:
  Content-Type: application/json
  Authorization: Bearer YOUR_SUPABASE_ANON_KEY

Body (JSON):
{
  "email": "valerio.marino@corenexus.it",
  "password": "YOUR_NEW_PASSWORD",
  "role": "admin",
  "company_name": "CoreNexus",
  "contact_name": "Valerio Marino"
}

============================================
TROUBLESHOOTING
============================================

If you still can't login after password reset:

1. Check if email is confirmed:
   SELECT email, email_confirmed_at FROM auth.users 
   WHERE email = 'valerio.marino@corenexus.it';
   
   If email_confirmed_at is NULL, run:
   UPDATE auth.users 
   SET email_confirmed_at = now() 
   WHERE email = 'valerio.marino@corenexus.it';

2. Check if user exists in clients table:
   SELECT * FROM public.app_2b35a5a86e_clients 
   WHERE email = 'valerio.marino@corenexus.it';
   
   If no results, the user needs to be recreated using the Edge Function

3. Check user_id consistency:
   SELECT 
     au.id as auth_id,
     c.user_id as client_user_id
   FROM auth.users au
   LEFT JOIN public.app_2b35a5a86e_clients c ON au.email = c.email
   WHERE au.email = 'valerio.marino@corenexus.it';
   
   If they don't match, update clients table:
   UPDATE public.app_2b35a5a86e_clients
   SET user_id = (SELECT id FROM auth.users WHERE email = 'valerio.marino@corenexus.it')
   WHERE email = 'valerio.marino@corenexus.it';

============================================
SECURITY BEST PRACTICES
============================================

✓ Choose a strong password:
  - Minimum 8 characters
  - Mix of uppercase and lowercase letters
  - Include numbers
  - Include special characters (!@#$%^&*)

✓ Password examples (DO NOT USE THESE EXACT ONES):
  - CoreNexus2024!Admin
  - Valerio@Secure2024
  - CN!Admin#2024

✓ After first login:
  - Change the password through the app's profile settings
  - Enable two-factor authentication if available
  - Use a password manager to store credentials

✗ Avoid:
  - Common passwords (password123, admin, etc.)
  - Personal information (names, birthdays)
  - Reusing passwords from other accounts
  - Sharing passwords in plain text

============================================
*/