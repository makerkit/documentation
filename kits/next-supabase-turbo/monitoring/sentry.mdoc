---
status: "published"
description: 'Learn how to configure Sentry in your Next.js Supabase SaaS kit'
title: 'Configuring Sentry in your Next.js Supabase SaaS kit'
label: 'Sentry'
order: 2
---

{% sequence title="Steps to configure Sentry" description="Learn how to configure Sentry in your Next.js Supabase SaaS kit." %}

[Configuring Sentry in Makerkit](#configuring-sentry-in-makerkit)

[Uploading source maps](#uploading-source-maps)

{% /sequence %}

## Configuring Sentry in Makerkit

[Sentry](https://sentry.io) is an observability platform that helps you monitor your application's performance and errors. In this guide, you'll learn how to configure Sentry in your Next.js Supabase SaaS kit.

To use [Sentry](https://sentry.io) to capture exceptions and performance metrics of your app, please define the below variables:

```bash
NEXT_PUBLIC_MONITORING_PROVIDER=sentry
NEXT_PUBLIC_SENTRY_DSN=your_dsn
```

Please install the package `@sentry/nextjs` in `apps/web/package.json` as a dependency.

```bash
pnpm i @sentry/nextjs --filter web
```

Finally, update the Next.js configuration in your `next.config.js` file:

 ```tsx {% title="next.config.mjs" %}
import { withSentryConfig } from '@sentry/nextjs';

// wrap your Next.js configuration with the Sentry configuration
withSentryConfig(nextConfig);
```

You can find your Sentry DSN in the Sentry dashboard.

## Uploading source maps

To upload source maps to Sentry, use the following options:

 ```tsx {% title="next.config.mjs" %}
import { withSentryConfig } from '@sentry/nextjs';

export default withSentryConfig(
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })(config),
  {
    org: 'your-sentry-org-name',
    project: 'your-sentry-project-name',

    // An auth token is required for uploading source maps.
    authToken: process.env.SENTRY_AUTH_TOKEN,

    silent: !IS_PRODUCTION, // Used to suppress logs
    autoInstrumentServerFunctions: false,
    widenClientFileUpload: true,
  },
);
```

And make sure to add the `SENTRY_AUTH_TOKEN` to your CI environment variables.

```bash
SENTRY_AUTH_TOKEN=your_auth_token
```
