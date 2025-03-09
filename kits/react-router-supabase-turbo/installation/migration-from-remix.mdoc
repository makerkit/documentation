---
status: "published"
title: "Guidelines for migrating from the Remix kit | React Router Supabase
SaaS Starter Kit"
label: "Migrating from Remix"
order: 9
description: "Guidelines for migrating from Remix to React Router SaaS
Boilerplate."
---

This guide outlines the key differences and migration steps when moving from the Remix version of the starter kit to the React Router 7 version.

## Routing System Changes

### File-based Routing to Configuration-based Routing

One of the most significant changes is the move away from Remix's file-based routing to a configuration-based approach using a central `routes.ts` file:

```typescript
// apps/web/app/routes.ts
import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

const rootRoutes = [
  route('robots.txt', 'routes/robots/route.tsx'),
  route('sitemap.xml', 'routes/sitemap/route.tsx'),
  // ...
];

const marketingLayout = layout('routes/marketing/layout.tsx', [
  index('routes/marketing/index.tsx'),
  route('pricing', 'routes/marketing/pricing.tsx'),
  // ...
]);

export default [
  ...rootRoutes,
  ...apiRoutes,
  marketingLayout,
  authLayout,
  // ...
] satisfies RouteConfig;
```

Instead of relying on the file system to define your routes, you now explicitly define them using the helper functions:

- `route(path, componentPath)`: Creates a standard route
- `layout(componentPath, children)`: Creates a layout route with nested children
- `index(componentPath)`: Creates an index route

This approach gives you more control over the routing structure but requires manual updates when adding new routes.

## Improved Type Safety

### Moving Away from Untyped APIs

The React Router version of the kit leverages React Router 7's type system to provide better type safety:

```typescript
// In the Remix version (untyped)
export const loader = async ({ request }: LoaderFunctionArgs) => {
  // Types were inferred from the context
};

// In the React Router version (typed)
export const loader = async (args: Route.LoaderArgs) => {
  // Types are explicitly defined
};
```

### Consolidated Imports

All React Router imports are now consolidated into a single package:

```typescript
// Instead of separate imports like:
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

// Now use a single import source:
import { useLoaderData, redirect, useRouteLoaderData } from 'react-router';
```

This simplifies imports and reduces confusion about which package to import from.

## Migration Steps

### 1. Update Route Components

For each route component, you'll need to:

1. Change the import statements to use `react-router`
2. Update loader and action functions to use the new type definitions
3. Update the export functions to match the React Router patterns

**Example - Before (Remix):**

```tsx
// routes/some-page.tsx
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // ...
  return json({ data });
};

export default function SomePage() {
  const { data } = useLoaderData<typeof loader>();
  // ...
}
```

**Example - After (React Router):**

```tsx
// routes/some-page.tsx
import { useLoaderData } from 'react-router';
import type { Route } from '~/types/app/routes/+types/some-page';

export const loader = async (args: Route.LoaderArgs) => {
  const { request } = args;
  // ...
  return { data };
};

export default function SomePage(props: Route.ComponentProps) {
  const { data } = props.loaderData;
  // ...
}
```

### 2. Update the Routes Configuration

1. Add each of your routes to the appropriate section in `routes.ts`
2. Organize your routes into logical layouts and groups
3. Ensure all paths and component paths are correct

### 3. Update Navigation Components

1. Replace any `Link` imports from Remix with React Router
2. Update navigation components to work with the new routing structure

```typescript
// Before (Remix)
import { Link } from '@remix-run/react';

// After (React Router)
import { Link } from 'react-router';
```

### 4. Adjust Data Loading Patterns

1. Instead of `useLoaderData<typeof loader>()`, use the props passed to your component:

```typescript
// Before (Remix)
const data = useLoaderData<typeof loader>();

// After (React Router)
export default function Component(props: Route.ComponentProps) {
  const { loaderData } = props;
  // ...
}
```

2. For accessing parent route data, use `useRouteLoaderData`:

```typescript
import { useRouteLoaderData } from 'react-router';

export default function ChildComponent() {
  const parentData = useRouteLoaderData('routes/parent/layout');
  // ...
}
```

NB: you can keep using `LoaderFunctionArgs` if you don't care about type
safety.

## Best Practices for the React Router Version

1. **Organize by Feature**: Group related routes in the routes.ts file by feature or section
2. **Use Type System**: Take advantage of the improved type system for actions and loaders
3. **Leverage Layouts**: Use the layout pattern for shared UI elements
4. **Keep Component Files in the Same Structure**: Maintain the same file organization even though routing is defined separately
5. **Update Component Props**: Components receive props like `loaderData` instead of using hooks

By following these guidelines, you can successfully migrate your Remix-based application to the React Router Supabase SaaS Starter Kit while maintaining functionality and improving type safety.