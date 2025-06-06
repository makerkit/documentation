---
status: "published"
label: "Adding a Super Admin"
title: "Adding a Super Admin to your Next.js Supabase application"
description: "In this post, you will learn how to set up a Super Admin in your Next.js Supabase application"
order: 0
---

The Super Admin panel allows you to manage users and accounts.

{% sequence title="Steps to add a Super Admin" description="Learn how to add a Super Admin to your Next.js Supabase application." %}

[How to access the Super Admin panel](#how-to-access-the-super-admin-panel)

[Testing the Super Admin locally](#testing-the-super-admin-locally)

[Assigning a Super Admin role to a user](#assigning-a-super-admin-role-to-a-user)

{% /sequence %}

## How to access the Super Admin panel

To access the super admin panel at `/admin`, you will need to assign a user as a super admin. In addition, you will need to enable MFA for the user from the normal user profile settings.

## Testing the Super Admin locally

By default, we seed the `auth.users` table with a super admin user. To login as this user, you can use the following credentials:

```json
{
  "email": "super-admin@makerkit.dev",
  "password": "testingpassword"
}
```

Since you require MFA for the Super Admin user, please use the following steps to pass MFA:

1. **TOTP**: Use the following [TOTP generator](https://totp.danhersam.com/) to generate a TOTP code.
2. **Secret Key**: Use the test secret key `NHOHJVGPO3R3LKVPRMNIYLCDMBHUM2SE` to generate a TOTP code.
3. **Verify**: Use the TOTP code and the secret key to verify the MFA code.
Make sure the TOTP code is not expired when you verify the MFA code.

{% alert type="warning" title="These are test credentials" %}
The flow above is for testing purposes only. For production, you must use an authenticator app such as Google Authenticator, Authy, Bitwarden, Proton, or similar.
{% /alert %}

## Assigning a Super Admin role to a user

To add your own super admin user, you will need to:

1. **Role**: Add the `super-admin` role to the user in your database
2. **Enable MFA**: Enable MFA for the user (mandatory) from the profile
settings of the user

### Modify the `auth.users` record in your database

To assign a user as a super admin, run the following SQL query from your Supabase SQL Query editor:

```sql
UPDATE auth.users SET raw_app_meta_data = raw_app_meta_data || '{"role": "super-admin"}' WHERE id='<user_id>';
```

Please replace `<user_id>` with the user ID you want to assign as a super admin.

### Enable MFA for the Super Admin user

Starting from version `2.5.0`, the Super Admin user will be required to use Multi-Factor Authentication (MFA) to access the Super Admin panel.

Please navigate to the `/home/settings` page and enable MFA for the Super Admin user.