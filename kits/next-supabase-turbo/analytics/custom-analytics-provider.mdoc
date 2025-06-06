---
status: "published"
title: 'Creating a Custom Analytics Provider in Makerkit'
label: 'Custom Analytics Provider'
description: 'Learn how to create a custom analytics provider in Makerkit to integrate with your preferred analytics service.'
order: 5
---

{% sequence title="How to create a custom analytics provider in Makerkit" description="Learn how to create a custom analytics provider in Makerkit to integrate with your preferred analytics service." %}

[Create your custom analytics service](#create-your-custom-analytics-service)

[Register your custom provider](#register-your-custom-provider)

[Using the Custom Analytics Provider](#using-the-custom-analytics-provider)

{% /sequence %}

The Analytics package in Makerkit is meant to be flexible and extensible. You can easily create custom analytics providers to integrate with your preferred analytics service.

To create a custom analytics provider, you need to implement the `AnalyticsService` interface and then register it with the `AnalyticsManager`.

You can define one or more custom analytics providers, and the `AnalyticsManager` will handle the initialization and tracking of events for each provider.

NB: the methods expect to be Promise-based, so you can use async/await or return a Promise, or use the keyword `void` to ignore the return value and use it in non-async functions.

## Create your custom analytics service

Let's create a custom analytics service that implements the `AnalyticsService` interface:

 ```typescript {% title="packages/analytics/src/my-custom-analytics-service.ts" %}
import { AnalyticsService } from './path-to-types';

class MyCustomAnalyticsService implements AnalyticsService {
  async initialize() {
    // Initialize your analytics service
  }

  async identify(userId: string, traits?: Record<string, string>) {
    // Implement user identification
  }

  async trackPageView(url: string) {
    // Implement page view tracking
  }

  async trackEvent(eventName: string, eventProperties?: Record<string, string | string[]>) {
    // Implement event tracking
  }
}
```

### Register your custom provider

Update your analytics configuration file to include your custom provider:

 ```typescript {% title="packages/analytics/src/index.ts" %} {6, 8}
import { createAnalyticsManager } from './analytics-manager';
import { MyCustomAnalyticsService } from './my-custom-analytics-service';
import type { AnalyticsManager } from './types';

export const analytics: AnalyticsManager = createAnalyticsManager({
  providers: {
    myCustom: (config) => new MyCustomAnalyticsService(config),
    null: () => NullAnalyticsService,
  },
});
```

## Using the Custom Analytics Provider

Once you've created and registered your custom analytics provider, you can use it in your application as you would with any other analytics provider:

All the registered providers will dispatch the same events, so you can use them interchangeably:

```typescript
const analytics = createAnalyticsManager({
  providers: {
    googleAnalytics: (config) => new GoogleAnalyticsService(config),
    mixpanel: (config) => new MixpanelService(config),
    myCustom: (config) => new MyCustomAnalyticsService(config),
    null: () => NullAnalyticsService,
  },
});
```

That's it! You've successfully created a custom analytics provider in Makerkit. You can now integrate with any analytics service of your choice.

## Using the Custom Analytics Provider

Once you've created and registered your custom analytics provider, you can use it in your application as you would with any other analytics provider:

```typescript
import { analytics } from '@kit/analytics';

void analytics.identify('user123', { name: 'John Doe' });
void analytics.trackEvent('Button Clicked', { buttonName: 'Submit' });
```

That's it! You've successfully created a custom analytics provider in Makerkit. You can now integrate with any analytics service of your choice.