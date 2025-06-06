---
status: "published"
title: "Fetching data from Server Components"
label: "Server Components"
description: "Learn how to fetch data from Server Components in the Next.js Supabase SaaS Kit"
order: 3
---

{% sequence title="How to fetch data from Server Components in the Next.js Supabase SaaS Kit" description="Learn how to fetch data from Server Components in the Next.js Supabase SaaS Kit" %}

[What are Server Components?](#what-are-server-components)

[Fetching data from Supabase in a Server Component](#fetching-data-from-supabase-in-a-server-component)

{% /sequence %}

## What are Server Components?

Server Components are the primary way we fetch and render data in the Next.js Supabase SaaS kit. 

When you create a new page and want to fetch some data, Server Components are the perfect place where to fetch it: it is done when you render your page (which means one less round-trip) and the data is streamed to the client (so it's very fast).

In Next.js, every component is a Server Component, unless you specify `use client`, which converts it to a client component. 

1. Client components are both server-rendered and client-rendered.
2. Server Components are only rendered on the server - so we can use data-fetching methods (using Supabase, in our case) and fetch all the required data for a particular layout or page. In general, you can use any server-side code inside a Server Component.

### Fetching data from Supabase in a Server Component

For example, let's assume we have a page that displayes a list of tasks from a `tasks` table. This is a Next.js page, and therefore a Server Component. It runs **on the server and on the server only**, and we can use to fetch data and render it streamed to the client. 

The client will never run the React code in this component: it will only render and bundle the code/data that is sent to it.

```tsx
export default async function TasksPage() {}
```

Let's now fetch some data from Supabase. To do so, we use the server component client.

```tsx
const supabase = getSupabaseServerClient();

const { data, error } = await supabase.from('tasks').select('*');
```

Now, let's put it all together:

```tsx
export default async function TasksPage() {
  const supabase = getSupabaseServerClient();

  const { data, error } = await supabase.from('tasks').select('*');

  if (error) {
    return <p>Error :(</p>;
  }

  return <TasksList data={data}>
}
```

As you can see, we are fetching data and rendering it in `TasksList`. All on the server.