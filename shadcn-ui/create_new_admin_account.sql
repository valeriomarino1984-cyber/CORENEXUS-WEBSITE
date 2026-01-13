-- Create a new admin account
-- This script creates a new admin user with credentials you can use to login

-- Step 1: Create the auth user
-- Replace 'your-secure-password-here' with your desired password
DO $$
DECLARE
    new_user_id uuid;
BEGIN
    -- Insert into auth.users
    INSERT INTO auth.users (
        instance_id,
        id,
        aud,
        role,
        email,
        encrypted_password,
        email_confirmed_at,
        recovery_sent_at,
        last_sign_in_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        confirmation_token,
        email_change,
        email_change_token_new,
        recovery_token
    )
    VALUES (
        '00000000-0000-0000-0000-000000000000',
        gen_random_uuid(),
        'authenticated',
        'authenticated',
        'admin@corenexus.it',  -- New admin email
        crypt('Admin123!', gen_salt('bf')),  -- Password: Admin123!
        NOW(),
        NOW(),
        NOW(),
        '{"provider":"email","providers":["email"]}',
        '{}',
        NOW(),
        NOW(),
        '',
        '',
        '',
        ''
    )
    RETURNING id INTO new_user_id;

    -- Step 2: Create the client profile
    INSERT INTO app_2b35a5a86e_clients (
        user_id,
        email,
        company_name,
        contact_name,
        role,
        created_at,
        updated_at
    )
    VALUES (
        new_user_id,
        'admin@corenexus.it',
        'CoreNexus Admin',
        'Administrator',
        'admin',
        NOW(),
        NOW()
    );

    -- Output success message
    RAISE NOTICE 'New admin account created successfully!';
    RAISE NOTICE 'Email: admin@corenexus.it';
    RAISE NOTICE 'Password: Admin123!';
    RAISE NOTICE 'User ID: %', new_user_id;
END $$;

-- Verify the account was created
SELECT 
    u.id,
    u.email,
    u.email_confirmed_at,
    c.company_name,
    c.contact_name,
    c.role
FROM auth.users u
LEFT JOIN app_2b35a5a86e_clients c ON c.user_id = u.id
WHERE u.email = 'admin@corenexus.it';