---
status: "published"
label: "Team Account API"
order: 1
title: "Team Account API | Next.js Supabase SaaS Kit"
description: "A quick introduction to the Team Account API in the Next.js Supabase SaaS Kit"
---

You can use the Team Account API for retrieving information about the team account.

{% sequence title="How to use the Team Account API" description="Learn how to use the Team Account API in Makerkit" %}

[Using the Team Account API](#using-the-team-account-api)

[Get the team account by ID](#get-the-team-account-by-id)

[Get the team account subscription](#get-the-team-account-subscription)

[Get the team account order](#get-the-team-account-order)

[Get the account workspace data](#get-the-account-workspace-data)

[Checking a user's permission within an account](#checking-a-user-s-permission-within-an-account)

[Getting the members count in the account](#getting-the-members-count-in-the-account)

[Get the billing customer ID](#get-the-billing-customer-id)

[Retrieve an invitation](#retrieve-an-invitation)

{% /sequence %}

## Using the Team Account API

To use the Team Account API, you need to import the `createTeamAccountsApi` function from `@kit/team-account/api`.

We need to pass a valid `SupabaseClient` to the function - so we can interact with the database from the server.

```tsx
import { createTeamAccountsApi } from '@kit/team-accounts/api';
import { getSupabaseServerClient } from '@kit/supabase/server-client';

async function ServerComponent() {
  const client = getSupabaseServerClient();
  const api = createTeamAccountsApi(client);

  // use api
}
```

If you're in a Server Action context, you'd use:

```tsx
'use server';

import { createTeamAccountsApi } from '@kit/team-accounts/api';
import { getSupabaseServerClient } from '@kit/supabase/server-client';

export async function myServerAction() {
  const client = getSupabaseServerClient();
  const api = createTeamAccountsApi(client);

  // use api
}
```

## Methods

The Account API provides the following methods:

### Get the team account by ID

Retrieves the team account by ID using the `getTeamAccountById` method.

You can also use this method to check if the user is already in the account.

```tsx
const api = createTeamAccountsApi(client);
const account = await api.getTeamAccountById('account-id');
```

### Get the team account subscription

Get the subscription data for the account using the `getSubscription` method.

```tsx
const api = createTeamAccountsApi(client);
const subscription = await api.getSubscription('account-id');
```

### Get the team account order

Get the orders data for the given account using the `getOrder` method.

```tsx
const api = createTeamAccountsApi(client);
const order = await api.getOrder('account-id');
```

### Get the account workspace data

Get the account workspace data.

```tsx
const api = createTeamAccountsApi(client);
const workspace = await api.getAccountWorkspace('account-slug');
```

This method is already called in the account layout and is unlikely to be used in other contexts. This is used to hydrate the workspace data in the context.

Since it's already loaded, you can use the data from the context.

### Checking a user's permission within an account

Check if the user has permission to perform a specific action within the account using the `hasPermission` method.

```tsx
const api = createTeamAccountsApi(client);

const hasPermission = await api.hasPermission({
  accountId: 'account-id',
  userId: 'user-id',
  permission: 'billing.manage',
});
```

### Getting the members count in the account

Get the number of members in the account using the `getMembersCount` method.

```tsx
const api = createTeamAccountsApi(client);
const membersCount = await api.getMembersCount('account-id');
```

### Get the billing customer ID

Get the billing customer ID for the given account using the `getCustomerId` method.

```tsx
const api = createTeamAccountsApi(client);
const customerId = await api.getCustomerId('account-id');
```

### Retrieve an invitation

Get the invitation data from the invite token.

```tsx
const api = createTeamAccountsApi(client);
const invitation = await api.getInvitation(adminClient, 'invite-token');
```

This method is used to get the invitation data from the invite token. It's used when the user is not yet part of the account and needs to be invited. The `adminClient` is used to read the pending membership. The method returns the invitation data if it exists, otherwise `null`.
