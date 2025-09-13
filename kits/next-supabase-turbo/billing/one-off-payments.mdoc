---
status: "published"
label: "One Off Payments"
title: "Configuring One Off Payments | Next.js Supabase Kit"
order: 8
description: "How to configure one-off payments in Makerkit for products that are not recurring in nature."
---

{% sequence title="One Off payments" description="Setting up one-off payments in Makerkit" %}

[Schema Definition](#schema-definition)

[Setting the billing mode](#setting-the-billing-mode)

{% /sequence %}

While not exactly a common SaaS billing mode, Makerkit offers support for one-off payments.

You can use the tables `orders` and `orders_items` to store single orders for products not recurring in nature. You can use this in two ways:

1. **Lifetime Access**: for products that are not recurring but offer lifetime access.
2. **Multiple one-off payments**: for products that are not recurring but can be purchased multiple times. For example, you have multiple add-ons that can be purchased separately.

Some of this will require custom code, but generally speaking, Makerkit does its best to support this use case in a broad sense. The specifics of your implementation will depend on your product and business model and may require additional customization.

## Schema Definition

One-off payments are defined by the following fields:

```tsx
export default createBillingSchema({
  provider,
  products: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'The perfect plan to get started',
      currency: 'USD',
      badge: `Value`,
      plans: [
        {
          name: 'Starter Monthly',
          id: 'starter-monthly',
          paymentType: 'one-time',
          lineItems: [
            {
              id: 'price_1NNwYHI1i3VnbZTqI2UzaHIe',
              name: 'Addon 2',
              cost: 9.99,
              type: 'flat',
            },
          ],
        }
      ],
    }
  ]
});
```

When a products gets purchased, Makerkit will create an order in the `orders` table and an order item in the `orders_items` table. You can use this data to fulfill the order and grant access to the product.

## Setting the billing mode (prior to Makerkit 2.12.0)

NB: the below only applies to versions prior to 2.12.0. Otherwise, you can use one-off orders and subscriptions together.

If you would like to switch from `subscriptions` to `orders` as your primary billing mechanism, you can do so by setting the following environment variable:

```bash
BILLING_MODE=one-time
```

When this flags in set to `one-time`, Makerkit's plan's page will be looking for a valid order in the `orders` table instead of a subscription in the `subscriptions` table. This means that the billing section will display one-off payments instead of subscriptions.

As mentioned - this is a best-effort implementation. You may need to customize the billing pages to fit your specific use case.