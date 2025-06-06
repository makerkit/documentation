---
status: "published"
title: 'Using the Umami Analytics Provider in Next.js Supabase Turbo'
label: 'Umami'
description: 'Learn how to use the Umami Analytics provider in Next.js Supabase Turbo'
order: 4
---

The [Umami](https://umami.is/) analytics provider in Next.js Supabase Turbo is a simple way to integrate Umami Analytics into your Next.js application using the Makerkit's Analytics package.

{% sequence title="How to use the Umami Analytics provider in Next.js Supabase Turbo" description="Learn how to use the Umami Analytics provider in Next.js Supabase Turbo" %}

[Installation](#installation)

[Configuration](#configuration)

{% /sequence %}

First, you need to pull the `@kit/analytics` package into your project using the CLI

```bash
npx @makerkit/cli@latest plugins install
```

When prompted, select the `Umami` package from the list of available packages. Once the command completes, you should see the `packages/plugins/umami` directory in your project.

You can now import this package into your project:

```bash
pnpm add "@kit/umami@workspace:*" --filter "@kit/analytics" -D
```

You can now use the Google Analytics plugin in the Analytics package. Update the `packages/analytics/src/index.ts` file as follows:

 ```tsx {% title="packages/analytics/src/index.ts" %}
import { createUmamiAnalyticsService } from '@kit/umami';

import { createAnalyticsManager } from './analytics-manager';
import type { AnalyticsManager } from './types';

export const analytics: AnalyticsManager = createAnalyticsManager({
    providers: {
        umami: createUmamiAnalyticsService,
    },
});
```

## Configuration

Please add the following environment variables to your `.env` file:

```bash
NEXT_PUBLIC_UMAMI_HOST=your-umami-host
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-umami-website-id
```

The `NEXT_PUBLIC_UMAMI_HOST` is the URL of your Umami instance's script. Since Umami can be self-hosted, this can be any valid URL - or can be Umami's cloud service. For example, `https://umami.is/umami.js`. Please replace with the correct path to your Umami instance's JS script.

The `NEXT_PUBLIC_UMAMI_WEBSITE_ID` is the ID of your website in your Umami instance. This is a required field to track events in your website.

NB: by default, Umami doesn't track events on localhost. You can use the `NEXT_PUBLIC_UMAMI_DISABLE_LOCALHOST_TRACKING` environment variable to enable tracking on localhost.

```
NEXT_PUBLIC_UMAMI_DISABLE_LOCALHOST_TRACKING=false
```

This is useful for testing your analytics setup locally.
