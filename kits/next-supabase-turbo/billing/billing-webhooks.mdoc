---
status: "published"
label: "Handling Webhooks"
title: Handle billing webhooks with your custom code in Next.js Supabase Kit"
order: 9
description: "Learn how to handle billing webhooks with your custom code in Next.js Supabase Kit"
---

{% sequence title="Steps to handle billing webhooks" description="Learn how to handle billing webhooks with your custom code in Next.js Supabase Kit." %}

[Handling billing webhooks](#handling-billing-webhooks)

[Customizing the webhook handler](#customizing-the-webhook-handler)

{% /sequence %}

## Handling billing webhooks

Makerkit takes care of handling billing webhooks to update the Database based on the events received from Stripe.

Sometimes - you will need to set more webhooks, or do something custom with the webhooks.

In these cases, you can customize the billing webhook handler in Makerkit at `api/billing/webhooks/route.ts`.

By default, the webhook handler is set to `service.handleWebhookEvent(request)`:

```tsx
await service.handleWebhookEvent(request);
```

However, you can extend it using the callbacks provided by the `BillingService`:

```tsx
await service.handleWebhookEvent(request, {
  onPaymentFailed: async (sessionId) => {},
  onPaymentSucceeded: async (sessionId) => {},
  onCheckoutSessionCompleted: async (subscription, customerId) => {},
  onSubscriptionUpdated: async (subscription) => {},
  onSubscriptionDeleted: async (subscriptionId) => {},
});
```

You can provide one or more of the callbacks to handle the events you are interested in.

## Customizing the webhook handler

If the event is not in one of these methods, you can handle it in the `onEvent` method:

```tsx
await service.handleWebhookEvent(request, {
  async onEvent(data: unknown) {
    logger.info(
      `Received billing event`,
    );

    // Your custom code here
  }
});
```

However, you need to set the correct interface for the `data` parameter to handle the event correctly.

For example, to handle the `invoice.payment_succeeded` event, you can use the `onEvent` method:

```tsx
await service.handleWebhookEvent(request, {
  async onEvent(data: unknown) {
    if (data.type === 'invoice.payment_succeeded') {
      const invoice = data as Stripe.Invoice;
      // Your custom code here
    }
  }
});
```

You can find the list of events and their data in the [Stripe documentation](https://stripe.com/docs/api/events/types).
