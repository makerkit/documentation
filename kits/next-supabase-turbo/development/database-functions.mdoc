---
status: "published"
label: "Database Functions"
order: 3
title: "Database Functions available in your Next.js Supabase schema"
description: "Learn the most useful database functions in your schema"
---

The database schema contains several functions that you can use so that you can extend your database with custom logic and RLS.

{% sequence title="How to use Database Functions" description="Learn how to use the functions in your schema" %}

[How to use Database Functions](#how-to-use-database-functions)

[Check if a user is the Owner of an Account](#check-if-a-user-is-the-owner-of-an-account)

[Check if a user is a Member of an Account](#check-if-a-user-is-a-member-of-an-account)

[Check if a user is a team member of an Account](#check-if-a-user-is-a-team-member-of-an-account)

[Check if an account has permissions to action another account](#check-if-an-account-has-permissions-to-action-another-account)

[Check Permissions](#check-permissions)

[Check if a configuration is set](#check-if-a-configuration-is-set)

[Check if an account has an active subscription](#check-if-an-account-has-an-active-subscription)

[Check if an account is a Super Admin](#check-if-an-account-is-a-super-admin)

[Check if an account is a MFA Compliant](#check-if-an-account-is-a-mfa-compliant)

[Check if an account signed in with MFA](#check-if-an-account-signed-in-with-mfa)

{% /sequence %}

## How to use Database Functions

To call the functions below, you can either:
1. **SQL** - Use them directly in your SQL schema
2. **RPC** - Use them using the Supabase's client RPC API

### Example of calling a function from SQL

```sql
select public.is_account_owner(account_id) from accounts;
```

### Example of calling a function from RPC

```tsx
const { data, error } = await supabase.rpc('is_account_owner', { account_id: '123' });
```


## Check if a user is the Owner of an Account

This function checks if the user is the owner of an account. It is used in the `accounts` table to restrict access to the account owner.

```sql
public.is_account_owner(account_id uuid)
```

This is `true` if the account is the user's account or if the user created a team account.

## Check if a user is a Member of an Account

This function checks if the user is a member of an account. It is used in the `accounts` table to restrict access to the account members.

```sql
public.has_role_on_account(
  account_id uuid,
  account_role varchar(50) default null
)
```

If the `account_role` is not provided, it will return `true` if the user is a member of the account. If the `account_role` is provided, it will return `true` if the user has the specified role on the account.

## Check if a user is a team member of an Account

Check if a user is a member of a team account. It is used in the `accounts` table to restrict access to the team members.

```sql
public.is_team_member(
  account_id uuid,
  user_id uuid
)
```

### Check if an account has permissions to action another account

This function checks if an account has permissions to action another account. It is used in the `accounts` table to restrict access to the account owner.

```sql
public.can_action_account_member(
  target_team_account_id uuid,
  target_user_id uuid
)
```

This function will:

1. check if the current user is the owner of the target account: if so, return `true`
2. check if the target user is the owner of the target account: if so, return `false`
3. compare the hierarchy of the roles between the two accounts: if the current user has a higher role than the target user, return `true`

This is useful to check if a user can remove another user from an account, or any other action that requires permissions.

### Check Permissions

Check if a user has a specific permission on an account.

```sql
public.has_permission(
  user_id uuid,
  account_id uuid,
  permission_name app_permissions
)
```

This function will return `true` if the user has the specified permission on the account.

The permissions are specified in the enum `app_permissions`. You can extend this enum to add more permissions.

### Check if a configuration is set

Check if a configuration is set in the `public.config` table.

```sql
public.is_set(
  field_name text
)
```

### Check if an account has an active subscription

Check if an account has an active subscription.

```sql
public.has_active_subscription(
  account_id uuid
)
```

This means that the subscription status is either `active` or `trialing`. In other words, the account billing is in good standing (eg. no unpaid invoice)

This is important because just checking if the subscription exists is not enough. You need to check if the subscription is active, as the status can vary (eg. `canceled`, `incomplete`, `incomplete_expired`, `past_due`, `unpaid`)

### Check if an account is a Super Admin

Check if an account is a Super Admin.

```sql
public.is_super_admin()
```

The functions requires:
- The user is authenticated
- The user has the `super_admin` role
- The user is currently signed in with MFA

### Check if an account is a MFA Compliant

Check if an account is a MFA Compliant - eg:

1. The user enabled MFA and is currently signed in with MFA
2. The user did not enable MFA and is currently signed in with AAL1

```sql
public.is_mfa_compliant()
```

This is useful for ensuring that:
1. Users with MFA comply with the MFA policy
2. Users without MFA can continue to access the application without MFA

Use the below `public.is_aal2` function to force a user to use MFA instead.

### Check if an account signed in with MFA

Check if an account signed in with MFA (AAL2) or not. This is useful when you want to restrict access to certain tables based on whether the user is signed in with MFA or not.

```sql
public.is_aal2()
```