---
status: "published"
label: "Authentication API"
order: 2
title: "Authentication API | Next.js Supabase SaaS Kit"
description: "A quick introduction to the Authentication API in Makerkit"
---

{% sequence title="How to use the Authentication API" description="Learn how to use the Authentication API in Makerkit" %}

[Checking if a user is signed in](#checking-if-a-user-is-signed-in)

[Using the Authentication API in Server Actions](#using-the-authentication-api-in-server-actions)

[Using the Authentication API in Client Components](#using-the-authentication-api-in-client-components)

{% /sequence %}

## Checking if a user is signed in

To check if users are authed, or to retrieve information about the currently signed-in user, use the `requireUser` function:

```tsx
import { redirect } from 'next/navigation';
import { requireUser } from '@kit/supabase/require-user';

import { getSupabaseServerClient } from '@kit/supabase/server-client';

async function ServerComponent() {
  const client = getSupabaseServerClient();
  const auth = await requireUser(client);

  // check if the user needs redirect
  if (auth.error) {
    redirect(auth.redirectTo);
  }

  // user is authed!
  const user = auth.data;
}
```

## Using the Authentication API in Server Actions

To use the Authentication API in server actions, you can use the `requireUser` function. This function will return the user data if the user is signed in, or redirect the user to the login page if they are not signed in.

```tsx
'use server';

import { redirect } from 'next/navigation';
import { requireUser } from '@kit/supabase/require-user';
import { getSupabaseServerClient } from '@kit/supabase/server-client';

export async function myServerAction() {
  const client = getSupabaseServerClient();
  const auth = await requireUser(client);

  // check if the user needs redirect
  if (auth.error) {
    redirect(auth.redirectTo);
  }

  // user is authed!
  const user = auth.data;
}
```

If the user needs MFA and is not yet verified, the `redirect` function will redirect the user to the MFA verification page. This is why it is important to check the `redirectTo` property in the response.

## Using the Authentication API in Client Components

To use the Authentication API in client components, you can use the `useUser` hook. This hook will return the user data if the user is signed in, or redirect the user to the login page if they are not signed in.

```tsx
import { useUser } from '@kit/supabase/hooks/use-user';

function MyComponent() {
  const user = useUser();

  // ...
}
```
