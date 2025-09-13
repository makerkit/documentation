---
status: "published"
description: 'Learn how to configure Posthog Monitoring in your Next.js Supabase SaaS kit'
title: 'Configuring PostHog monitoring in your Next.js Supabase SaaS kit'
label: 'Posthog'
order: 3
---

PostHog is released as a plugin, so it's not in the core of the SaaS kit by default.

To install Posthog's plugin, you have 2 options:
1. Use the Makerkit CLI
2. Clone the plugin repository and add it manually by coping the files in the `plugins` folder

## Using the Makerkit CLI

Run the following command:

```bash
npx @makerkit/cli@latest plugins install
```

And choose the `posthog` option.

NB: skip this step if you already have the plugin installed (for example, the Posthog plugin for Analytics, they're the same).

## Registering the Monitoring Service

At `packages/monitoring/api/src/get-monitoring-provider.ts`, add `posthog` to the list of providers:

```tsx {% title="packages/monitoring/api/src/get-monitoring-provider.ts" %}
export const MONITORING_PROVIDER = z
  .enum(['sentry', 'posthog', '']) // <-- Add posthog here
  .optional()
  .transform((value) => value || undefined);
```

At `packages/monitoring/api/src/services/get-server-monitoring-service.ts`, register the Posthog service:

```tsx {% title="packages/monitoring/api/src/services/get-server-monitoring-service.ts" %}
// Register the 'posthog' monitoring service
serverMonitoringRegistry.register('posthog', async () => {
  const { PostHogServerMonitoringService } = await import(
    '@kit/posthog/monitoring/server'
  );

  return new PostHogServerMonitoringService();
});
```

At `packages/monitoring/api/src/components/provider.tsx`, register the Posthog Provider:

```tsx {% title="packages/monitoring/api/src/components/provider.tsx" %}
// Register the PostHog provider
monitoringProviderRegistry.register('posthog', async () => {
  const { PostHogProvider } = await import('@kit/posthog/provider');

  return {
    default: function PostHogProviderWrapper({
      children,
    }: React.PropsWithChildren) {
      return <PostHogProvider>{children}</PostHogProvider>;
    },
  };
});
```

## API Keys

You can skip this step if you already have the Posthog API key. Otherwise, please copy the API key from Posthog and add it to the environment variables:

Please follow the [Posthog Analytics plugin configuration](/docs/next-supabase-turbo/posthog-analytics-provider#configuration) to add the
Posthog API Keys to your Makerkit app.

That's it!