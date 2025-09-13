---
status: "published"
label: "Migrations"
order: 1
title: "How to create new migrations and update the database schema in your Next.js Supabase application"
description: "Learn how to create new migrations and update the database schema in your Next.js Supabase application"
---

{% sequence title="How to create new migrations and update the database schema" description="Learn how to create new migrations and update the database schema in your Next.js Supabase application" %}

[Do not use Supabase Studio to make schema changes](#do-not-use-supabase-studio-to-make-schema-changes-(recommendation))

[Updating the Database Schema](#declarative-schema)

[Creating a migration file from a schema change](#creating-a-migration-file-from-a-schema-change)

[Pushing the migration to the remote Supabase instance](#pushing-the-migration-to-the-remote-supabase-instance)

[Applying changes to the database schema](#applying-changes-to-the-database-schema)

{% /sequence %}

Creating a schema for your data is one of the primary tasks when building a new application. In this guide, we'll walk through how to create new migrations and update the database schema in your Next.js Supabase application.

## Do not use Supabase Studio to make schema changes (recommendation)

Supabase's hosted Studio is pretty great - but I don't think it should be used to perform schema changes. Instead, I recommend using your local Supabase Studio to make the changes and then generate the migration file. Then, you can push the migration to the remote Supabase instance.

## Declarative schema

Using Supabase's declarative schema, you can define your schema at `apps/web/supabase/schemas`. In here, we can create a new file called using whatever name you want: for example, if our schema is about `integrations`, we can create a file called `integrations.sql`.

The file should contain the SQL statements to create the schema.

For example, here's a basic schema for an `integrations` table:

```sql
create table if not exists public.integrations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

## Creating a migration file from a schema change

Now, you want this schema to be applied to your local Supabase instance so you can start using it and test it out.

We can now use Supabase's diffing feature to generate a migration file for us.

```bash
pnpm --filter web run supabase:db:diff -f <filename>  # Generate the migration file using the diffing feature
```

This command will generate the migration file using the diffing feature using the default `migra` tool.

The migration file will be created in the `apps/web/supabase/migrations` directory.

```bash
pnpm run supabase:web:start   # start supabase
pnpm run supabase:web:reset   # reset supabase
```

{% alert type="warning" title="Double check the migration file" %}
Make sure the migration file is correct before pushing it to the remote Supabase instance. The diffing tool can make mistakes and has various caveats. Always double check the generated migration file before pushing it to the remote Supabase instance.
{% /alert %}

Learn more about [the known caveats of the diffing tool](https://supabase.com/docs/guides/local-development/declarative-database-schemas#known-caveats).

## Pushing the migration to the remote Supabase instance

After you're happy with the changes, you can push the migration to the remote Supabase instance. This is so that the changes are reflected in the remote database and not only in your local Supabase Studio.

```bash
pnpm --filter web supabase db push
```

## Applying changes to the database schema

Whenever you want to apply changes to the database schema, you can use the same process as above.

0. Stop the Supabase service
1. Modify the schema in the `apps/web/supabase/schemas` directory
2. Generate the migration file using the diffing feature
3. Restart Supabase with the `no-backup` flag to test the changes locally
4. Push the migration to the remote Supabase instance
