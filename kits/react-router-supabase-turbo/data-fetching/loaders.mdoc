---
title: "Using Loaders in React Router Supabase Turbo"
label: "Loaders"
description: "Learn how to use the Loaders in React Router Supabase Turbo"
position: 1
---

Loaders in Makerkit Supabase Turbo are a powerful React Router feature that let you fetch data before a route component renders. They provide a clean way to handle data fetching and make your application more responsive.

## What Are Loaders?

Loaders are server-side functions that:
- Fetch data before rendering a component
- Run on every navigation to their route
- Pass their data to components via `loaderData` props
- Enable type-safe data handling with TypeScript

## Basic Structure of a Loader

A basic loader exports a function that receives context from React Router:

```tsx
export const loader = async (args: Route.LoaderArgs) => {
  // Get Supabase client
  const client = getSupabaseServerClient(args.request);

  // Retrieve data
  const data = await fetchSomeData(client);

  // Return data to the component
  return {
    title: "My Page",
    data
  };
};
```

## Using Loader Data in Components

Components automatically receive loader data through props:

```tsx
export default function MyPage(props: Route.ComponentProps) {
  const { title, data } = props.loaderData;

  return (
    <div>
      <h1>{title}</h1>
      <DataDisplay data={data} />
    </div>
  );
}
```

## Type Safety with Route Types

Makerkit provides route types to ensure type safety throughout your loader chain:

```tsx
import type { Route } from '~/types/app/routes/home/account/+types';

export const loader = async (args: Route.LoaderArgs) => {
  // Typed arguments
  return {
    title: "My Page"
  };
};

export default function MyPage(props: Route.ComponentProps) {
  // props.loaderData is typed based on loader return type
  const { title } = props.loaderData;
  return <h1>{title}</h1>;
}
```

## Authentication in Loaders

Require authentication before processing a loader:

```tsx
export const loader = async (args: Route.LoaderArgs) => {
  // Require authenticated user
  await requireUserLoader(args.request);

  // Continue with loader logic
  return {
    title: "Protected Page"
  };
};
```

## Handling Errors and Redirects

Loaders can throw responses that React Router will catch:

```tsx
export const loader = async (args: Route.LoaderArgs) => {
  try {
    const data = await fetchData();
    return { data };
  } catch (error) {
    // Redirect to error page
    throw redirect('/error');
  }
};
```

## Common Loader Patterns in Makerkit

### Loading Team Account Workspace

```tsx
export const loader = async (args: Route.LoaderArgs) => {
  const accountSlug = args.params.account as string;
  const client = getSupabaseServerClient(args.request);

  const workspace = await loadTeamWorkspace({
    accountSlug,
    client,
  });

  return {
    workspace,
    accountSlug,
  };
};
```

### Shared Loaders for Reuse

Create reusable loader functions:

```tsx
// In a shared loader file
export async function loadMembersPageData(
  client: SupabaseClient<Database>,
  slug: string,
) {
  return Promise.all([
    loadAccountMembers(client, slug),
    loadInvitations(client, slug),
    loadUser(client),
    canAddMember(),
  ]);
}

// In your route file
export const loader = async (args: Route.LoaderArgs) => {
  const client = getSupabaseServerClient(args.request);
  const slug = args.params.account as string;

  const [members, invitations, user, canAdd] =
    await loadMembersPageData(client, slug);

  return {
    members,
    invitations,
    user,
    canAdd
  };
};
```

### Conditional Data Loading

Load different data based on configuration:

```tsx
const BILLING_MODE = z
  .enum(['subscription', 'one-time'])
  .default('subscription')
  .parse(process.env.BILLING_MODE);

export const loader = async (args: Route.LoaderArgs) => {
  const client = getSupabaseServerClient(args.request);
  const accountId = args.params.id;

  const api = createAccountsApi(client);

  const data = BILLING_MODE === 'subscription'
    ? await api.getSubscription(accountId)
    : await api.getOrder(accountId);

  return { data };
};
```

## Using Internationalization in Loaders

For internationalized apps, add translations to your loaders:

```tsx
export const loader = async (args: Route.LoaderArgs) => {
  const i18n = await createI18nServerInstance(args.request);

  return {
    title: i18n.t('account:settingsTab')
  };
};
```

## Type Inference in React Router

React Router 7 infers types from your loader to your components. Here's how it works:

1. **Route Types Definition**

Makerkit defines route types for each route in your application:

```tsx
// In ~/types/app/routes/home/account/+types.ts
export namespace Route {
  export type LoaderArgs = {
    request: Request;
    params: {
      account: string;
    };
  };

  export type LoaderData = Awaited<ReturnType<typeof loader>>;

  export type ComponentProps = {
    loaderData: LoaderData;
  };

  export type MetaArgs = {
    data: LoaderData | undefined;
  };
}
```

2. **Loader Type Inference**

The loader return type is automatically inferred:

```tsx
export const loader = async (args: Route.LoaderArgs) => {
  return {
    title: "My Page",
    data: [1, 2, 3]
  };
};
```

3. **Component Props Typing**

The component props are typed based on the loader return:

```tsx
export default function MyPage(props: Route.ComponentProps) {
  // TypeScript knows props.loaderData has:
  // - title: string
  // - data: number[]
  const { title, data } = props.loaderData;

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {data.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
```

## Best Practices for Loaders

1. **Keep loaders focused**
- Load only what the component needs
- Use separate loaders for different data concerns

2. **Handle errors gracefully**
- Use try/catch to handle errors
- Provide fallback UIs or redirects for error states

3. **Consider performance**
- Use parallel data fetching with `Promise.all` when appropriate
- Consider caching strategies for expensive data

4. **Type everything**
- Use TypeScript to ensure type safety
- Take advantage of Makerkit's type system

5. **Extract reusable loaders**
- Move common loading patterns to shared functions
- Keep route files clean and focused

## Example: Complete Page with Loader

Here's a complete example of a page with a loader:

```tsx
import { getSupabaseServerClient } from '@kit/supabase/server-client';
import { PageBody } from '@kit/ui/page';
import { Trans } from '@kit/ui/trans';

import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { requireUserLoader } from '~/lib/require-user-loader';
import type { Route } from '~/types/app/routes/home/account/+types';

import { TeamAccountLayoutPageHeader } from './_components/team-account-layout-page-header';
import { loadTeamData } from './_lib/team-data-loader.server';

export const loader = async (args: Route.LoaderArgs) => {
  const i18n = await createI18nServerInstance(args.request);

  // Require user authentication
  await requireUserLoader(args.request);

  const client = getSupabaseServerClient(args.request);
  const account = args.params.account as string;

  // Load team data
  const teamData = await loadTeamData(client, account);

  return {
    title: i18n.t('teams:home.pageTitle'),
    account,
    teamData
  };
};

export const meta = ({ data }: Route.MetaArgs) => {
  return [
    {
      title: data?.title,
    },
  ];
};

export default function TeamHomePage(props: Route.ComponentProps) {
  const { account, teamData } = props.loaderData;

  return (
    <>
      <TeamAccountLayoutPageHeader
        account={account}
        title={<Trans i18nKey={'common:teamDashboard'} />}
      />

      <PageBody>
        <TeamDataDisplay data={teamData} />
      </PageBody>
    </>
  );
}
```

By following these patterns, you'll be able to build robust, type-safe data fetching in your Makerkit application with React Router's powerful loader system.