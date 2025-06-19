---
status: "published"
title: 'Managing entitlements based on subscriptions in your Next.js Supabase app'
label: 'Subscription Entitlements'
order: 3
description: 'Learn how to effectively manage access and entitlements based on subscriptions in your Next.js Supabase app.'
---

As your SaaS grows, the complexity of managing user entitlements increases. In this guide, we’ll build a flexible, performant, and secure entitlements system using Makerkit, Supabase, and PostgreSQL. 

This solution leverages the power of PostgreSQL functions and Supabase RPCs, enforcing business logic at the database level while integrating seamlessly with your Next.js app.

NB: this is a generic solution, but you can use it as a starting point to build your own custom entitlements system. In fact - I recommend you to do so, as your needs will evolve and this solution might not cover all your requirements.

### Why a Custom Entitlements System?

Makerkit is built to be flexible and extensible. Instead of offering a one-size-fits-all entitlements system, Makerkit provides a foundation you can customize. 

This article will walk you through the complete process:
- **Flexibility & Extensibility:** Easily handle different entitlement types (flat or usage quotas).
- **Performance:** Offload entitlement checks to the database.
- **Consistency & Security:** Ensure rules are enforced both in your app code and via Row Level Security (RLS).

## Step 1: Define Your Database Schema

We start by creating two tables: one to declare the entitlements for each plan variant and another to track feature usage per account. Both tables are set up with strict security rules using RLS policies.

### Creating the `plan_entitlements` Table

This table stores entitlement definitions. Each row defines which features are enabled for a specific plan variant. Note the use of a unique constraint to avoid duplicate entries and strict permission controls to ensure data security.

```sql {% title="apps/web/supabase/migrations/20250205034829_subscription-entitlements.sql" %}
-- Table to store plan entitlements
CREATE TABLE public.plan_entitlements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id VARCHAR(255) NOT NULL,
  feature VARCHAR(255) NOT NULL,
  entitlement JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (variant_id, feature)
);

revoke all on public.plan_entitlements from public;

alter table public.plan_entitlements enable row level security;

grant select on public.plan_entitlements to authenticated;

create policy select_plan_entitlements
    on public.plan_entitlements
    for select
    to authenticated
    using (true);
```

### Creating the `feature_usage` Table

This table tracks the usage of features for each account. We use JSONB to support flexible usage metrics and add an index for efficient lookups.

```sql {% title="apps/web/supabase/migrations/20250205034829_subscription-entitlements.sql" %}
e to store feature usage
CREATE TABLE public.feature_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id UUID NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  feature VARCHAR(255) NOT NULL,
  usage JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (account_id, feature)
);

revoke all on public.feature_usage from public;
grant select on public.feature_usage to authenticated;

alter table public.feature_usage enable row level security;

create policy select_feature_usage
    on public.feature_usage
    for select
    to authenticated
    using (
        public.has_role_on_account(account_id) or ((select auth.uid()) = account_id)
    );

-- Index for faster lookups
CREATE INDEX idx_feature_usage_account_id ON public.feature_usage(account_id, feature);
```

### Automatically Creating a Usage Row for New Accounts

Use a trigger to ensure that as soon as an account is created, a corresponding row in `feature_usage` is created:

```sql {% title="apps/web/supabase/migrations/20250205034829_subscription-entitlements.sql" %}
-- Function to auto-create a feature_usage row upon account creation
CREATE OR REPLACE FUNCTION public.create_feature_usage_row()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.feature_usage (account_id, feature)
  VALUES (NEW.id, '');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger to execute the above function after account creation
CREATE TRIGGER create_feature_usage_row
AFTER INSERT ON public.accounts
FOR EACH ROW
EXECUTE FUNCTION public.create_feature_usage_row();
```
---

## Step 2: Develop PostgreSQL Functions for Entitlements

Encapsulate the core entitlement logic inside PostgreSQL functions. Each function is designed to be secure (using `SECURITY INVOKER` or `SECURITY DEFINER` where needed) and atomic.

### Check if an Account Can Use a Feature

This function determines if an account meets the criteria to use a given feature based on its subscription and plan entitlements.

```sql

-- Function to check if an account can use a feature
CREATE OR REPLACE FUNCTION public.can_use_feature(
  p_account_id UUID,
  p_feature VARCHAR
)
RETURNS BOOLEAN
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  entitlement_data JSONB;
  subscription_type public.subscription_item_type;
  account_member_count INTEGER;
  usage_count INTEGER;
  feature_usage_exists BOOLEAN;
BEGIN
  -- Verify the account exists
  PERFORM 1 FROM public.accounts WHERE id = p_account_id;
  IF NOT FOUND THEN
    RETURN FALSE;
  END IF;

  -- verify the user has access to the account
  if (select public.has_role_on_account(p_account_id) is false) then
    return false;
  end if;

  -- Simplified approach:
  -- 1. Get the subscription items for the account
  -- 2. Find which subscription item has a plan entitlement for the feature
  -- 3. Choose the most appropriate item based on type priority

  SELECT
    si.type,
    pe.entitlement
  INTO
    subscription_type,
    entitlement_data
  FROM
    public.subscriptions s
    JOIN public.subscription_items si ON s.id = si.subscription_id
    JOIN public.plan_entitlements pe ON si.variant_id = pe.variant_id
  WHERE
    s.account_id = p_account_id
    AND s.active = true
    AND pe.feature = p_feature
  ORDER BY
    -- Prioritize by subscription type (flat > per_seat > metered)
    CASE
      WHEN si.type = 'flat' THEN 1
      WHEN si.type = 'per_seat' THEN 2
      WHEN si.type = 'metered' THEN 3
      ELSE 4
    END,
    -- Then by max_usage (higher limits first)
    COALESCE((pe.entitlement->>'max_usage')::INTEGER, 0) DESC
  LIMIT 1;

  -- If no subscription or entitlement found for the feature, return false
  IF subscription_type IS NULL THEN
    RETURN FALSE;
  END IF;

  -- Check if the subscription type is flat
  IF subscription_type = 'flat' THEN
    -- If the subscription type is flat, then the account can use the feature
    RETURN TRUE;
  END IF;

  -- Check if the subscription type is per_seat
  IF subscription_type = 'per_seat' THEN
    -- Get the number of users in the account
    SELECT COUNT(*) INTO account_member_count FROM public.accounts_memberships WHERE account_id = p_account_id;

    -- Check if the number of users in the account is within the allowed limit
    -- Use strict less-than to prevent exceeding the limit
    IF account_member_count < (entitlement_data ->> 'max_usage')::INTEGER THEN
      -- If the number of users in the account is within the allowed limit, then the account can use the feature
      RETURN TRUE;
    ELSE
      -- If the number of users in the account is not within the allowed limit, then the account cannot use the feature
      RETURN FALSE;
    END IF;
  END IF;

  -- Check if the subscription type is metered
  IF subscription_type = 'metered' THEN
    -- Check if feature usage record exists
    SELECT EXISTS (
      SELECT 1 FROM public.feature_usage
      WHERE account_id = p_account_id AND feature = p_feature
    ) INTO feature_usage_exists;

    -- If no feature usage record exists, create one with zero usage
    IF NOT feature_usage_exists THEN
      -- insert a new feature usage record with zero usage
      INSERT INTO public.feature_usage (account_id, feature, usage)
      VALUES (p_account_id, p_feature, '{"count": 0}'::jsonb);
    END IF;

    -- Get the usage count from the feature usage record
    SELECT (usage ->> 'count')::INTEGER INTO usage_count FROM public.feature_usage WHERE account_id = p_account_id AND feature = p_feature;

    -- Check if the feature usage is within the allowed limit
    -- Use strict less-than to prevent exceeding the limit
    IF usage_count < (entitlement_data ->> 'max_usage')::INTEGER THEN
      -- If the feature usage is strictly less than the limit, then the account can use the feature
      RETURN TRUE;
    ELSE
      -- If the feature usage has reached or exceeded the limit, then the account cannot use the feature
      RETURN FALSE;
    END IF;
  END IF;

  -- If the subscription type is not flat, per_seat, or metered, then the account cannot use the feature
  RETURN FALSE;
END;
$$ LANGUAGE plpgsql;
```

### Retrieve Entitlement Details

The following function returns the details of an entitlement along with any usage data for the account.

```sql {% title="apps/web/supabase/migrations/20250205034829_subscription-entitlements.sql" %}
- Function to get entitlement details
CREATE OR REPLACE FUNCTION public.get_entitlement(
  p_account_id UUID,
  p_feature VARCHAR
)
RETURNS TABLE(variant_id varchar(255), entitlement JSONB, type public.subscription_item_type, usage JSONB)
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  RETURN QUERY
  SELECT
    si.variant_id,
    pe.entitlement,
    si.type,
    COALESCE(fu.usage, '{}'::jsonb) as usage
  FROM
    public.subscriptions s
    JOIN public.subscription_items si ON s.id = si.subscription_id
    JOIN public.plan_entitlements pe ON si.variant_id = pe.variant_id
    LEFT JOIN public.feature_usage fu ON s.account_id = fu.account_id AND pe.feature = fu.feature
  WHERE
    s.account_id = p_account_id
    AND pe.feature = p_feature
  ORDER BY
    -- First by active status
    s.active DESC,
    -- Then by subscription type (flat > per_seat > metered)
    CASE
      WHEN si.type = 'flat' THEN 1
      WHEN si.type = 'per_seat' THEN 2
      WHEN si.type = 'metered' THEN 3
      ELSE 4
    END,
    -- Then by max_usage (higher limits first)
    COALESCE((pe.entitlement->>'max_usage')::INTEGER, 0) DESC;
END;
$$ LANGUAGE plpgsql;
```

### Update Feature Usage

These functions update the `feature_usage` table. The first function handles merging JSON usage data, and the second one atomically updates quota usage using an UPSERT pattern.

```sql
-- Function to update feature usage
CREATE OR REPLACE FUNCTION public.update_feature_usage(p_account_id UUID, p_feature VARCHAR, p_usage JSONB)
RETURNS VOID
SET search_path = ''
AS $$
BEGIN
  PERFORM 1 FROM public.accounts WHERE id = p_account_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Cannot update feature usage for non-existent account';
  END IF;

  INSERT INTO public.feature_usage (account_id, feature, usage)
  VALUES (p_account_id, p_feature, p_usage)
  ON CONFLICT (account_id, feature)
  DO UPDATE SET usage = public.feature_usage.usage || p_usage, updated_at = NOW();
END;
$$ LANGUAGE plpgsql;

-- Atomic update for feature quota usage using UPSERT
CREATE OR REPLACE FUNCTION public.update_feature_quota_usage(
  p_account_id UUID,
  p_feature VARCHAR,
  p_count INTEGER
)
RETURNS VOID
SECURITY INVOKER
SET search_path = ''
AS $$
BEGIN
  -- Verify the account exists
  PERFORM 1 FROM public.accounts WHERE id = p_account_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Cannot update feature usage for non-existent account';
  END IF;

  INSERT INTO public.feature_usage (account_id, feature, usage, updated_at)
  VALUES (
    p_account_id,
    p_feature,
    jsonb_build_object('count', p_count),
    NOW()
  )
  ON CONFLICT (account_id, feature) DO UPDATE
  SET usage = jsonb_set(
      COALESCE(public.feature_usage.usage, '{}'::jsonb),
      '{count}',
      to_jsonb(
        p_count
      )
    ),
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql;
```

Grant execute permissions securely:

```sql
-- Grant execute permissions
GRANT EXECUTE ON FUNCTION public.can_use_feature(UUID, VARCHAR) TO authenticated, service_role;

GRANT EXECUTE ON FUNCTION public.get_entitlement(UUID, VARCHAR) TO authenticated, service_role;

GRANT EXECUTE ON FUNCTION public.update_feature_usage(UUID, VARCHAR, JSONB) TO service_role;

GRANT EXECUTE ON FUNCTION public.update_feature_quota_usage(UUID, VARCHAR, INTEGER) TO service_role;
```

## Step 3: Create the Entitlements Service in TypeScript

Encapsulate your entitlements logic in a TypeScript service. This service communicates with the Supabase backend via RPC and provides a clean API for your application.

```typescript {% title="apps/web/lib/server/entitlements.service.ts" %}
import type { SupabaseClient } from '@supabase/supabase-js';

import { object } from 'zod';

// Example API route or server action for handling an API request
import { getSupabaseServerClient } from '@kit/supabase/server-client';

import type { Database, Json } from '~/lib/database.types';

export function createEntitlementsService(
  client: SupabaseClient<Database>,
  accountId: string,
) {
  return new EntitlementsService(client, accountId);
}

class EntitlementsService {
  constructor(
    private readonly client: SupabaseClient<Database>,
    private readonly accountId: string,
  ) {}

  async canUseFeature(feature: string) {
    const { data, error } = await this.client.rpc('can_use_feature', {
      p_account_id: this.accountId,
      p_feature: feature,
    });

    if (error) throw error;

    return data;
  }

  async getEntitlement(feature: string) {
    const { data, error } = await this.client
      .rpc('get_entitlement', {
        p_account_id: this.accountId,
        p_feature: feature,
      })
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  }

  async updateFeatureUsage(feature: string, usage: Json) {
    const { error } = await this.client.rpc('update_feature_usage', {
      p_account_id: this.accountId,
      p_feature: feature,
      p_usage: usage,
    });

    if (error) throw error;
  }

  async updateFeatureQuotaUsage(feature: string, count: number) {
    const { error } = await this.client.rpc('update_feature_quota_usage', {
      p_account_id: this.accountId,
      p_feature: feature,
      p_count: count,
    });

    if (error) throw error;
  }
}
```

### How to Use the Entitlements Service

In your API route or server component, you can use the service to check for entitlements and update usage data. For example:

```tsx
// Example API route or server action for handling an API request
import { getSupabaseServerClient } from '@kit/supabase/server-client';
import { createEntitlementsService } from '~/lib/server/entitlements.service';

export async function handleApiRequest(accountId: string, endpoint: string) {
  const client = getSupabaseServerClient();
  const entitlementsService = createEntitlementsService(client, accountId);

  const canUseAPI = await entitlementsService.canUseFeature('api_access');

  if (!canUseAPI) {
    throw new Error('No access to API');
  }

  const entitlement = await entitlementsService.getEntitlement('api_calls');

  // Adjust processing based on entitlement type (flat, quota, etc.)
  if (entitlement && entitlement.entitlement.type === 'flat') {
    // NB: processApiRequest is a placeholder for your actual API request processing logic
    return processApiRequest(endpoint);
  } else if (entitlement && entitlement.entitlement.type === 'quota') {
    const currentUsage = Number(entitlement.usage?.count ?? 0);
    const limit = entitlement.entitlement.limit;

    if (currentUsage < limit) {
      // Atomically update usage count
      await entitlementsService.updateFeatureUsage('api_calls', { count: currentUsage + 1 });

      // NB: processApiRequest is a placeholder for your actual API request processing logic
      return processApiRequest(endpoint);
    } else {
      throw new Error('API call quota exceeded');
    }
  }
  throw new Error('Invalid entitlement state');
}
```

## Step 4: Enforcing Entitlements in Row Level Security

One of the major benefits of this approach is that you can enforce entitlements at the database level using RLS policies. For example, to restrict access to a table based on entitlement checks:

```sql
-- Example RLS policy using the can_use_feature function
CREATE POLICY "users_can_access_feature" ON public.some_table
  FOR SELECT
  TO authenticated
  USING (
    public.can_use_feature(auth.uid(), 'some_feature')
  );
```

This ensures that only users with the correct entitlements can access sensitive data.

## Step 5: Integrating with Billing Webhooks

When a billing event occurs (such as an invoice being paid), use a webhook to update entitlements accordingly. Below is an example using a Next.js API route with structured logging for observability:

```typescript
'use server';
import { enhanceRouteHandler } from '@kit/next/routes';
import { getSupabaseServerAdminClient } from '@kit/supabase/server-admin-client';
import { createEntitlementsService } from '~/lib/server/entitlements.service';
import { getLogger } from '@kit/shared/logger';
import { billingConfig } from '~/config/billing';

export const POST = enhanceRouteHandler(
  async ({ request }) => {
    const provider = billingConfig.provider;
    const logger = await getLogger();
    const ctx = { name: 'billing.webhook', provider };

    logger.info(ctx, 'Received billing webhook. Processing...');

    try {
      // Handle billing event using your billing event handler service...
      await handleInvoicePaidEvent(request, ctx);
      logger.info(ctx, 'Successfully processed billing webhook');
      return new Response('OK', { status: 200 });
    } catch (error) {
      logger.error({ ...ctx, error }, 'Failed to process billing webhook');
      return new Response('Failed to process billing webhook', { status: 500 });
    }
  },
  { auth: false }
);

async function handleInvoicePaidEvent(request: Request, ctx: Record<string, unknown>) {
  // Assume the request contains the account_id for which the invoice was paid
  const accountId = 'extracted-account-id'; // Extract account id securely from the request payload

  const entitlementsService = createEntitlementsService(getSupabaseServerAdminClient(), accountId);
  const entitlement = await entitlementsService.getEntitlement('api_calls');

  if (!entitlement) {
    ctx['error'] = `No entitlement found for "api_calls"`;
    throw new Error(ctx['error']);
  }

  const count = entitlement?.entitlement?.limit ?? 0;
  if (!count) {
    ctx['error'] = 'No limit found for "api_calls" entitlement';
    throw new Error(ctx['error']);
  }

  await entitlementsService.updateFeatureUsage('api_calls', { count });
  return;
}
```

## PgTap tests

Please add the following tests to your project and modify them as needed:

```sql
begin;
create extension "basejump-supabase_test_helpers" version '0.0.6';

select no_plan();

select tests.create_supabase_user('foreigner', 'foreigner@makerkit.dev');

-- Create test users
select makerkit.set_identifier('primary_owner', 'test@makerkit.dev');
select makerkit.set_identifier('member', 'member@makerkit.dev');
select makerkit.set_identifier('foreigner', 'foreigner@makerkit.dev');

-- Setup test data
set local role postgres;

-- Insert test plan entitlements
insert into public.plan_entitlements (variant_id, feature, entitlement)
values 
  ('basic_plan', 'api_calls', '{"limit": 1000, "period": "month"}'::jsonb),
  ('pro_plan', 'api_calls', '{"limit": 10000, "period": "month"}'::jsonb),
  ('basic_plan', 'storage', '{"limit": 5, "unit": "GB"}'::jsonb),
  ('pro_plan', 'storage', '{"limit": 50, "unit": "GB"}'::jsonb);

-- Create test billing customers and subscriptions
INSERT INTO public.billing_customers(account_id, provider, customer_id)
VALUES (makerkit.get_account_id_by_slug('makerkit'), 'stripe', 'cus_test');

-- Create a subscription with basic plan
SELECT public.upsert_subscription(
  makerkit.get_account_id_by_slug('makerkit'),
  'cus_test',
  'sub_test_basic',
  true,
  'active',
  'stripe',
  false,
  'usd',
  now(),
  now() + interval '1 month',
  '[{
    "id": "sub_basic",
    "product_id": "prod_basic",
    "variant_id": "basic_plan",
    "type": "flat",
    "price_amount": 1000,
    "quantity": 1,
    "interval": "month",
    "interval_count": 1
  }]'
);

-- Test as primary owner
select tests.authenticate_as('primary_owner');

-- Test reading plan entitlements
select isnt_empty(
  $$ select * from plan_entitlements where variant_id = 'basic_plan' $$,
  'Primary owner can read plan entitlements'
);

-- Test can_use_feature function
select is(
  (select public.can_use_feature(makerkit.get_account_id_by_slug('makerkit'), 'api_calls')),
  true,
  'Account with basic plan can use api_calls feature'
);

-- Test get_entitlement function
select row_eq(
  $$ select entitlement->>'limit' from public.get_entitlement(makerkit.get_account_id_by_slug('makerkit'), 'api_calls') $$,
  row('1000'::text),
  'Get entitlement returns correct limit for api_calls'
);

set local role service_role;

-- Test feature usage tracking
select lives_ok(
  $$ select public.update_feature_quota_usage(makerkit.get_account_id_by_slug('makerkit'), 'api_calls', 100) $$,
  'Can update feature quota usage'
);

-- Test as primary owner
select tests.authenticate_as('primary_owner');

-- Verify feature usage was recorded
select row_eq(
  $$ select usage->>'count' from feature_usage where account_id = makerkit.get_account_id_by_slug('makerkit') and feature = 'api_calls' $$,
  row('100'::text),
  'Feature usage is recorded correctly'
);

-- Test as member
select tests.authenticate_as('member');

-- Members can read plan entitlements
select isnt_empty(
  $$ select * from plan_entitlements $$,
  'Members can read plan entitlements'
);

-- Members can read feature usage for their account
select isnt_empty(
  $$ select * from feature_usage where account_id = makerkit.get_account_id_by_slug('makerkit') $$,
  'Members can read feature usage for their account'
);

-- Test as foreigner
select tests.authenticate_as('foreigner');

-- Foreigners can read plan entitlements (public info)
select isnt_empty(
  $$ select * from plan_entitlements $$,
  'Foreigners can read plan entitlements'
);

-- Foreigners cannot read feature usage for other accounts
select is_empty(
  $$ select * from feature_usage where account_id = makerkit.get_account_id_by_slug('makerkit') $$,
  'Foreigners cannot read feature usage for other accounts'
);

-- Test updating to pro plan
set local role postgres;

SELECT public.upsert_subscription(
  makerkit.get_account_id_by_slug('makerkit'),
  'cus_test',
  'sub_test_basic',
  true,
  'active',
  'stripe',
  false,
  'usd',
  now(),
  now() + interval '1 month',
  '[{
    "id": "sub_pro",
    "product_id": "prod_pro",
    "variant_id": "pro_plan",
    "type": "flat",
    "price_amount": 2000,
    "quantity": 1,
    "interval": "month",
    "interval_count": 1
  }]'
);

select tests.authenticate_as('primary_owner');

-- Verify pro plan entitlements
select row_eq(
  $$ select entitlement->>'limit' from public.get_entitlement(makerkit.get_account_id_by_slug('makerkit'), 'api_calls') $$,
  row('10000'::text),
  'Get entitlement returns updated limit for api_calls after plan upgrade'
);

-- Test edge cases
-- Test non-existent feature
select is(
  (select public.can_use_feature(makerkit.get_account_id_by_slug('makerkit'), 'non_existent_feature')),
  false,
  'Cannot use non-existent feature'
);

-- Test non-existent account
select is(
  (select public.can_use_feature('12345678-1234-1234-1234-123456789012'::uuid, 'api_calls')),
  false,
  'Cannot use feature for non-existent account'
);

-- Test updating feature usage with invalid data
set local role postgres;

select throws_ok(
  $$ select public.update_feature_usage('12345678-1234-1234-1234-123456789012'::uuid, 'api_calls', '{"invalid": true}'::jsonb) $$,
  'Cannot update feature usage for non-existent account'
);

-- Additional tests for subscription entitlements

--------------------------------------------------------------------
-- Additional tests for update_feature_quota_usage (storage feature)
--------------------------------------------------------------------
set local role postgres;

-- Create or update a subscription for storage feature if not already set
-- We'll use the basic plan for storage
SELECT public.upsert_subscription(
  makerkit.get_account_id_by_slug('makerkit'),
  'cus_test',
  'sub_test_storage',
  true,
  'active',
  'stripe',
  false,
  'usd',
  now(),
  now() + interval '1 month',
  '[{
    "id": "sub_storage",
    "product_id": "prod_storage",
    "variant_id": "basic_plan",
    "type": "flat",
    "price_amount": 500,
    "quantity": 1,
    "interval": "month",
    "interval_count": 1
  }]'
);

-- Reset storage usage by updating its quota
select lives_ok(
  $$ select public.update_feature_quota_usage(makerkit.get_account_id_by_slug('makerkit'), 'storage', 5) $$,
  'Initial storage quota update sets usage to 5'
);

select row_eq(
  $$ select usage->>'count' from feature_usage where account_id = makerkit.get_account_id_by_slug('makerkit') and feature = 'storage' $$,
  row('5'::text),
  'Storage usage should be 5 after initial update'
);

-- Update storage usage by adding 3 more units
select lives_ok(
  $$ select public.update_feature_quota_usage(makerkit.get_account_id_by_slug('makerkit'), 'storage', 3) $$,
  'Additional storage quota update adds 3 units'
);

select row_eq(
  $$ select usage->>'count' from feature_usage where account_id = makerkit.get_account_id_by_slug('makerkit') and feature = 'storage' $$,
  row('8'::text),
  'Accumulated storage usage should be 8'
);

set local role service_role;

-- Update api_calls usage by adding an extra field
select lives_ok(
  $$ select public.update_feature_usage(makerkit.get_account_id_by_slug('makerkit'), 'api_calls', '{"extra": 100}'::jsonb) $$,
  'Feature usage update concatenates new JSON data for api_calls'
);

-- Verify that the api_calls usage JSON now contains the extra field by checking the "extra" key value directly
select is(
  (select usage::json->>'extra' from feature_usage 
    where account_id = makerkit.get_account_id_by_slug('makerkit') 
      and feature = 'api_calls'),
  '100',
  'Feature usage for api_calls contains extra field after update'
);

--------------------------------------------------------------------
-- Additional test for non-existent subscription item entitlement
--------------------------------------------------------------------
select is_empty(
  $$ select * from public.get_entitlement(makerkit.get_account_id_by_slug('makerkit'), 'nonexistent_feature') $$,
  'Get entitlement returns empty for a non-existent feature'
);

--------------------------------------------------------------------
-- Additional test for atomicity of updating feature usage
--------------------------------------------------------------------
set local role postgres;

CREATE OR REPLACE FUNCTION test_atomicity_feature_usage() RETURNS text AS $$
DECLARE
    baseline text;
    current_usage text;
BEGIN
    -- Capture the baseline storage usage for the 'storage' feature
    SELECT usage->>'count' INTO baseline
    FROM feature_usage
    WHERE account_id = makerkit.get_account_id_by_slug('makerkit')
      AND feature = 'storage';

    BEGIN
        -- Perform a valid update: add 10 units to storage usage
        PERFORM public.update_feature_quota_usage(makerkit.get_account_id_by_slug('makerkit'), 'storage', 10);
        -- Force an error by updating usage for a non-existent account
        PERFORM public.update_feature_usage('00000000-0000-0000-0000-000000000000'::uuid, 'storage', '{"bad":1}'::jsonb);
        -- If no error is raised, return an error message (this should not happen)
        RETURN 'error not raised';
    EXCEPTION WHEN OTHERS THEN
        -- Exception caught; the subtransaction should be rolled back
        NULL;
    END;

    -- Capture the current usage after the forced error
    SELECT usage->>'count' INTO current_usage
    FROM feature_usage
    WHERE account_id = makerkit.get_account_id_by_slug('makerkit') AND feature = 'storage';

    IF current_usage = baseline THEN
         RETURN 'ok';
    ELSE
         RETURN 'failed';
    END IF;
END;
$$ LANGUAGE plpgsql;

select is((select test_atomicity_feature_usage()), 'ok', 'Atomicity of updating feature usage is preserved');

-- End of additional atomicity tests

select * from finish();

rollback; 
```

## Benefits of This Approach

1. **Flexibility:**  
   Handle different entitlement types—from simple feature flags to complex usage quotas—without locking into a rigid model.
2. **Performance:**  
   Offload entitlement checks to PostgreSQL. This minimizes round-trips between your app and the database.
3. **Consistency & Security:**  
   The same functions are used in both your application code and in RLS policies, ensuring a uniform level of security.
4. **Maintainability:**  
   Encapsulating logic in PostgreSQL functions and a dedicated TypeScript service simplifies updates and helps prevent bugs.

## Conclusion

By moving entitlement logic into PostgreSQL functions and encapsulating access in a dedicated TypeScript service, you create a robust and secure system that scales with your application. This approach not only meets the complex needs of SaaS applications but also adheres to best practices for performance, security, and maintainability.

Feel free to evolve these patterns further to suit your specific billing scenarios and business logic needs. Happy coding!