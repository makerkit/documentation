---
title: "Using the Supabase Clients in React Router Supabase Turbo"
label: "Supabase Clients"
description: "Learn how to use the Supabase Clients in React Router Supabase Turbo"
position: 0
---

Before diving into the various ways we can communicate with the server, we need to introduce how we communicate with Supabase, which is hosting the database and therefore the source of our data.

Depending on where your code runs, you may need to use different clients to interact with Supabase. This is due to how cookies are set differently in various parts of the React Router application.

You can use 3 different clients to interact with Supabase:

1. **Browser** - This runs in the browser and is used to interact with Supabase from the client
2. **Server** - This runs in the server and is used to interact with Supabase from the server
3. **Server Admin** - This runs in the server and is used to interact with Supabase from the server, but with admin privileges

## Browser

To use the browser client, use the `useSupabase` hook:

```tsx
import { useSupabase } from '@kit/supabase/hooks/use-supabase';

export default function Home() {
  const supabase = useSupabase()

  return (
    <div>
      <h1>Supabase Browser Client</h1>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
    </div>
  )
}
```

## Server Client

To use the server actions client, use the `useSupabase` hook:

```tsx
import { LoaderFunctionArgs } from 'react-router';
import { getSupabaseServerClient } from '@kit/supabase/server-client';

export async function loader(args: LoaderFunctionArgs) {
  const supabase = getSupabaseServerClient()

  const { data, error } = await supabase.from('tasks').select('*');

  return {
    data,
  };
}
```

## Server Admin Client

To use the Server Admin client, use the `getSupabaseServerAdminClient` function:

```tsx
import { LoaderFunctionArgs } from 'react-router';
import { getSupabaseServerAdminClient } from '@kit/supabase/server-admin-client';

export async function loader(args: LoaderFunctionArgs) {
  const supabase = getSupabaseServerAdminClient()

  const { data, error } = await supabase.from('tasks').select('*');

  return {
    data,
  };
}
```

NB: only use this client when you need to perform admin operations, such as bypassing row-level security. Do not use this client for regular operations.