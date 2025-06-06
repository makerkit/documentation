---
status: "published"
description: "React Query is the best React library for managing asynchronous data fetching in your applications. Learn how to use it with Next.js Supabase."
title: "Using React Query with Next.js Supabase"
label: "React Query"
order: 5
---

{% sequence title="How to use React Query with Next.js Supabase" description="React Query is the best React library for managing asynchronous data fetching in your applications. Learn how to use it with Next.js Supabase." %}

[Using React Query](#using-react-query)

[Use the `use client` directive](#use-the-use-client-directive)

[Fetching data from Supabase using React Query](#fetching-data-from-supabase-using-react-query)

{% /sequence %}

## Using React Query

Makerkit uses React Query for client-side data fetching. This allows you to fetch data from your Supabase database and display it on the client-side using an ergonomic API.

### Use the `use client` directive

Since we use React Hooks, you need to use the `use client` directive at the top of your component. If you use this code inside a page, please write a separate component (with `use client`) and import it in your page.

### Fetching data from Supabase using React Query

In the example below, we fetch the tasks from the Supabase database and display them in a list.

```tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { useSupabase } from '@kit/supabase/hooks/use-supabase';

function TasksList(accountId: string) {
  const client = useSupabase();

  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks', accountId],
    queryFn: async () => {
      const { data, error } = await client
        .from('tasks')
        .select('*')
        .eq('account_id', accountId)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading tasks</div>;
  }

  return (
    <ul>
      {data.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
```

By leveraging the `useSupabase` hook, you can access the Supabase DB data right from your React components.

Similarly, you can use React Query for mutations:

```tsx
import { useMutation } from '@tanstack/react-query';
import { useSupabase } from '@kit/supabase/hooks/use-supabase';

function CreateTaskForm() {
  const client = useSupabase();

  const mutation = useMutation({
    mutationFn: async (data) => {
      const { data, error } = await client
        .from('tasks')
        .insert({
          title: data.title,
          description: data.description,
          account_id: data.accountId,
        })
        .select('*')
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
  });

  const handleSubmit = async (data) => {
    const { data, error } = await mutation.mutateAsync(data);

    if (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <input type="text" name="description" />
      <button type="submit">Create Task</button>
    </form>
  );
}
```