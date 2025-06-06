---
label: "Row Level Security"
title: "Row Level Security in the Next.js Supabase Turbo kit"
description: "Learn how to secure your Next.js application with Row Level Security (RLS) using the Next.js Supabase Turbo kit."
order: 2
---

If you've opted to using the Data API in your application, you can use Row Level Security (RLS) to secure your data (which Makerkit does by default).

{% sequence title="Steps to secure your data with RLS" description="Learn how to secure your data with RLS using the Next.js Supabase Turbo kit." %}

[Enable RLS for your tables](#enable-rls-for-your-tables)

[Add the RLS policy](#add-the-rls-policy)

[Using Makerkit's Functions to write RLS policies](#using-makerkits-functions-to-write-rls-policies)

[Testing RLS policies](#testing-rls-policies)

{% /sequence %}

The general rule of thumb is that you must always ensure RLS is enabled for your tables. **Failure to do so will result in a security vulnerability** because the table will be exposed to the public - and everyone will be able to read and write to it. You don't want that.

Supabase has a great [guide on how to use RLS](https://supabase.com/docs/guides/database/postgres/row-level-security) - don't skip it!

## Enable RLS for your tables

When you write your table migrations, you must ensure that RLS is enabled for the table.

First, create a table with the following command:

```sql
create table if not exists public.documents (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid not null references auth.users(id),
    title text not null,
    content text not null,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);
```

### Enable RLS for the table

Now, you need to enable RLS for the table.

```sql
alter table public.documents enable row level security;
```

PS: you can also enable RLS for the table using the Supabase Studio - however I am not sure I'd recommend this approach.

## Add the RLS policy for restricted access

Now that we have a table with RLS enabled, **and no policies added**, you will notice that you won't be able to read or write to the table. This is good, because it means that the table is secure. However, we want to be able to read and write to the table **for the users that are authorized to do so**.

To do this, we need to add a policy to the table.

```sql
create policy "Users can view their own documents" 
    on public.documents 
    to authenticated
    for select
    using ((select auth.uid()) = user_id);
```

This policy will allow any **authenticated** user to read **their own documents** - e.g. the documents whose `user_id` matches the authenticated user's ID.

If you wanted to allow all actions at once, you could use the following policy:

```sql
create policy "Users can view their own documents" 
    on public.documents 
    to authenticated
    for all 
    using ((select auth.uid()) = user_id);
```

## Using Makerkit's Functions to write RLS policies

Makerkit comes with a set of functions that make it easier to write RLS policies. Below are some of the most common use cases:

### Verifying a user is part of a Team Account

If you want to verify that a user is part of a Team Account, you can use the `public.has_role_on_account` function.

```sql
create policy "Users can view their account's documents" 
    on public.documents 
    to authenticated
    for select 
    using (public.has_role_on_account(account_id));
```

If you want to check for a specific role, you can do so by passing the role name to the function.

```sql
create policy "Users can view their account's documents" 
    on public.documents 
    to authenticated
    for select 
    using (public.has_role_on_account(account_id, 'admin'));
```

NB: we're expecting the `public.documents` table to have an `account_id` column that references the `public.accounts` table.

### Verifying a user has the required permissions

If you want to verify that a user has the required permissions, you can use the `public.has_permission` function.

```sql
create policy "Users can view their account's documents" 
    on public.documents 
    to authenticated
    for select 
    using (public.has_permission(auth.uid(), account_id, 'documents.read'));
```

### Verifying a user is the owner of a Team Account

If you want to verify that a user is the owner of a Team Account, you can use the `public.is_owner` function.

```sql
create policy "Users can view their account's documents" 
    on public.documents 
    to authenticated
    for select 
    using (public.is_account_owner(account_id));
```

These are just some of the most common use cases and will likely cover the vast majority of your RLS policies.

## Testing RLS policies

We have two different ways to test RLS policies:

1. **Manually**: Using the Supabase Studio impersonation feature
2. **Automatically**: Using [pgTap](https://supabase.com/docs/reference/cli/supabase-test-db) tests

### Manually testing RLS policies

To test RLS policies manually, you can use the Supabase Studio impersonation feature.

1. Go to the Supabase Studio
2. Navigate to the Table you want to test
3. Impersonate a user
4. Try to read, write or delete data using the UI or the SQL editor
5. Verify that the data is restricted based on the RLS policy

### Automatically testing RLS policies

To test RLS policies automatically, you can use the `supabase test db` command. This command uses pgTap to test the RLS policies - which is an invaluable tool for testing RLS policies in an automated and repeatable way.

We have a set of tests in the `supabase/tests/database` folder that are designed to test the RLS policies. You can copy the same structure and add your own tests.

Here's an example of a test:

```sql
-- authenticate with a user
select tests.create_supabase_user('testuser', 'testuser@test.com');
select tests.create_supabase_user('testuser2', 'testuser2@test.com');

-- authenticate as the first user
select tests.authenticate_as('testuser');

-- create a document
insert into public.documents (user_id, title, content)
values (tests.get_supabase_uid('testuser'), 'Test Document', 'This is a test document');

-- test the user can read their own document
select row_eq(
    $$ SELECT * from public.documents $$,
    row(tests.get_supabase_uid('testuser'), 'Test Document', 'This is a test document'),
    'User should be able to read their own document'
);

-- alternatively, check the list is not empty
select not_empty(
    $$ SELECT * from public.documents $$,
    'User should be able to read their own document'
);

-- authenticate with another user
select tests.authenticate_as('testuser2');

-- test that the document is not visible to the other user
select is_empty(
    $$ SELECT * from public.documents $$,
    'No documents should be visible to unauthenticated users'
);
```

This is a simple example, but you can see how you can test the RLS policies for different scenarios.

