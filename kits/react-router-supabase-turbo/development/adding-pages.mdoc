---
status: "published"
label: "Adding Pages"
title: "Adding Pages in the React Router Supabase Turbo Starter Kit"
description: "Learn how to create new pages in the React Router Supabase Turbo Starter Kit."
order: 8
---

Adding new pages to your React Router Supabase Turbo Starter Kit application involves understanding the routing structure and following some conventions. This guide will walk you through creating new pages in both the marketing section and authenticated application areas.

## Understanding the Router Structure

The starter kit uses React Router and organizes routes in a file-based structure. Looking at the `apps/web/app/routes.ts` file, you can see how routes are grouped:

- `rootRoutes`: Static utility routes like robots.txt, sitemap, etc.
- `apiRoutes`: Backend API endpoints
- `marketingLayout`: Public-facing pages (homepage, blog, etc.)
- `authLayout`: Authentication-related pages
- `adminLayout`: Admin portal pages
- `userAccountLayout`: User personal account pages
- `teamAccountLayout`: Team account pages

## Route Configuration Format

Routes are defined using these helper functions:

```typescript
route('path', 'component-path')
layout('layout-component', [child-routes])
index('index-component')
```

## Adding a New Page to the Marketing Section

Let's create a new "Features" page in the marketing section:

1. **Create a new component file**:

```tsx
// apps/web/app/routes/marketing/features.tsx
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { SitePageHeader } from '~/routes/marketing/_components/site-page-header';
import type { Route } from '~/types/app/routes/marketing/+types/features';

export const meta = ({ data }: Route.MetaArgs) => {
  return [
    {
      title: data?.title,
    },
  ];
};

export const loader = async function ({ request }: Route.LoaderArgs) {
  const { t } = await createI18nServerInstance(request);

  return {
    title: t('marketing:features'),
    subtitle: t('marketing:featuresDescription'),
  };
};

export default function FeaturesPage(props: Route.ComponentProps) {
  const data = props.loaderData;

  return (
    <div>
      <SitePageHeader title={data.title} subtitle={data.subtitle} />

      <div className={'container mx-auto py-8'}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature cards */}
          <FeatureCard
            title="Multi-tenant Support"
            description="Support for multiple organizations and team accounts"
          />
          <FeatureCard
            title="Authentication"
            description="Various authentication methods including email, password, and OAuth"
          />
          <FeatureCard
            title="Billing Integration"
            description="Seamless integration with popular payment providers"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  );
}
```

2. **Update the routes configuration** in `apps/web/app/routes.ts`:

```typescript
const marketingLayout = layout('routes/marketing/layout.tsx', [
  index('routes/marketing/index.tsx'),
  route('terms-of-service', 'routes/marketing/terms-of-service.tsx'),
  route('privacy-policy', 'routes/marketing/privacy-policy.tsx'),
  route('pricing', 'routes/marketing/pricing.tsx'),
  route('contact', 'routes/marketing/contact/index.tsx'),
  route('features', 'routes/marketing/features.tsx'), // Add your new route here
  route('faq', 'routes/marketing/faq.tsx'),
  // ...other routes
]);
```

3. **Update navigation** in `apps/web/app/routes/marketing/_components/site-navigation.tsx`:

```typescript
const links = {
  Blog: {
    label: 'marketing:blog',
    path: '/blog',
  },
  Features: {    // Add this new item
    label: 'marketing:features',
    path: '/features',
  },
  Docs: {
    label: 'marketing:documentation',
    path: '/docs',
  },
  // ...other links
};
```

4. **Add translations** (optional) by updating your i18n files with the new labels.

## Adding a Page to the Authenticated App Area

Let's add a "Reports" page for authenticated users:

1. **Create the component file**:

```tsx
// apps/web/app/routes/home/user/reports.tsx
import { AppBreadcrumbs } from '@kit/ui/app-breadcrumbs';
import { PageBody } from '@kit/ui/page';
import { Trans } from '@kit/ui/trans';

import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { requireUserLoader } from '~/lib/require-user-loader';
import type { Route } from '~/types/app/routes/home/user/+types/reports';

import { HomeLayoutPageHeader } from './_components/home-page-header';

export const meta = ({ data }: Route.MetaArgs) => {
  return [
    {
      title: data?.title,
    },
  ];
};

export const loader = async (args: Route.LoaderArgs) => {
  // require user
  await requireUserLoader(args.request);

  const i18n = await createI18nServerInstance(args.request);
  const title = i18n.t('account:reportsTab');

  return {
    title,
  };
};

export default function UserReportsPage(props: Route.ComponentProps) {
  return (
    <>
      <HomeLayoutPageHeader
        title={<Trans i18nKey={'account:reportsTabLabel'} />}
        description={<AppBreadcrumbs />}
      />

      <PageBody>
        <div className="flex w-full flex-col space-y-6">
          <h1 className="text-2xl font-semibold">Reports</h1>
          <p className="text-muted-foreground">
            View usage statistics and reports for your account.
          </p>

          {/* Add your reports components here */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ReportCard title="Usage Statistics" />
            <ReportCard title="Activity Log" />
          </div>
        </div>
      </PageBody>
    </>
  );
}

function ReportCard({ title }: { title: string }) {
  return (
    <div className="rounded-md border p-4">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="h-32 w-full bg-gray-100 dark:bg-gray-800 mt-2 flex items-center justify-center">
        <span className="text-muted-foreground">Report data will appear here</span>
      </div>
    </div>
  );
}
```

2. **Update the routes configuration** in `apps/web/app/routes.ts`:

```typescript
const userAccountLayout = layout('routes/home/user/layout.tsx', [
  route('home', 'routes/home/user/index.tsx'),
  route('home/settings', 'routes/home/user/settings.tsx'),
  route('home/billing', 'routes/home/user/billing.tsx'),
  route('home/billing/return', 'routes/home/user/billing-return.tsx'),
  route('home/reports', 'routes/home/user/reports.tsx'), // Add your new route here
]);
```

3. **Update navigation configuration** in `~/config/personal-account-navigation.config.ts`:

```typescript
// Add this to the routes array
{
  label: 'account:reportsTabLabel',
  Icon: <BarChart className={'h-4'} />,
  path: '/home/reports',
  end: true,
},
```

## Creating Nested Routes

For more complex scenarios, you might need nested routes with their own layout:

1. **Create a layout component**:

```tsx
// apps/web/app/routes/home/user/reports/layout.tsx
import { Outlet } from 'react-router';
import { PageHeader } from '@kit/ui/page';
import { Tabs, TabsList, TabsTrigger } from '@kit/ui/tabs';

export default function ReportsLayout() {
  return (
    <div className="flex flex-col space-y-4">
      <PageHeader>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview" href="/home/reports">Overview</TabsTrigger>
            <TabsTrigger value="activity" href="/home/reports/activity">Activity</TabsTrigger>
            <TabsTrigger value="usage" href="/home/reports/usage">Usage</TabsTrigger>
          </TabsList>
        </Tabs>
      </PageHeader>

      <Outlet />
    </div>
  );
}
```

2. **Create child route components**:

```tsx
// apps/web/app/routes/home/user/reports/activity.tsx
export default function ActivityReport() {
  return <div>Activity report content here</div>;
}
```

3. **Update the routes configuration** with a nested structure:

```typescript
const reportsLayout = layout('routes/home/user/reports/layout.tsx', [
  index('routes/home/user/reports/index.tsx'),
  route('activity', 'routes/home/user/reports/activity.tsx'),
  route('usage', 'routes/home/user/reports/usage.tsx'),
]);

const userAccountLayout = layout('routes/home/user/layout.tsx', [
  // ... existing routes
  reportsLayout, // Add the nested layout
]);
```

## Best Practices

1. **Route Organization**:
- Group related routes under shared layouts
- Use descriptive naming for route paths and components
2. **UI Consistency**:
- Reuse existing components like `PageHeader`, `PageBody`, etc.
- Follow the established UI patterns for each section
3. **Authentication**:
- Use `requireUserLoader` for authenticated routes
- Consider permissions for team/admin routes
4. **i18n Support**:
- Always use translation keys for user-visible text
- Structure translation keys logically (e.g., `marketing:features`)
5. **Type Safety**:
- Create proper type definitions for loaders and components
- Use the existing Route types pattern

By following these conventions, you can seamlessly add new pages to the starter kit while maintaining consistent structure and behavior.