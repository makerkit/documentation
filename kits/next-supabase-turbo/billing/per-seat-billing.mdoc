---
status: "published"
label: "Per Seat Billing"
title: "How to configure per seat billing in Makerkit"
order: 6
description: "Learn how to setup per seat billing in Makerkit to charge customers for additional seats (users) in your application."
---

{% sequence title="How to configure per seat billing in Makerkit" description="Learn how to setup per seat billing in Makerkit to charge customers for additional seats (users) in your application." %}

[What the kit does for you](#what-the-kit-does-for-you)

[Define a per-seat billing schema](#define-a-per-seat-billing-schema)

[Report the number of seats](#report-the-number-of-seats)

{% /sequence %}

Per Seat billing is a common pricing model for SaaS applications where customers are charged based on the number of seats (users) they have in the application. In this guide, we'll show you how to configure per seat billing in Makerkit.

## What the kit does for you

Makerkit will automatically:
1. understand if your pricing model depends on the number of seats (using the `per_seat` line item type in your pricing model)
2. calculate the number of seats based on the members count in a Team account
3. report the number of seats to your billing system when subscribing
4. report the number of seats to your billing system when adding or removing members

## Define a per-seat billing schema

Per-seat billing is defined by the following fields:

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
          trialDays: 7,
          paymentType: 'recurring',
          interval: 'month',
          lineItems: [
            {
              id: 'price_1NNwYHI1i3VnbZTqI2UzaHIe',
              name: 'Addon 2',
              cost: 0,
              type: 'per_seat',
              tiers: [
                {
                    upTo: 3,
                    cost: 0,
                },
                {
                    upTo: 5,
                    cost: 7.99,
                },
                {
                    upTo: 'unlimited',
                    cost: 5.99,
                }
              ]
            },
          ],
        }
      ],
    }
  ]
});
```

Let's break down the fields:
- **id**: The unique identifier for the line item. **This must match the price ID in the billing provider**. The schema will validate this, but please remember to set it correctly.
- **name**: The name of the line item
- **cost**: The cost of the line item. This can be set to `0` as the cost is calculated based on the tiers.
- **type**: The type of the line item (e.g., `flat`, `metered`, `per-seat`). In this case, it's `per-seat`.
- **tiers**: The tiers of the line item. Each tier is defined by the following fields:
- **upTo**: The upper limit of the tier. If the usage is below this limit, the cost is calculated based on this tier.
- **cost**: The cost of the tier. This is the cost per unit.

If you set the first tier to `0`, it basically means that the first `n` seats are free. This is a common practice in per-seat billing.

Please remember that the cost is set for UI purposes. **The billing provider will handle the actual billing** - therefore, **please make sure the cost is correctly set in the billing provider**.

## Report the number of seats

This is done automatically for you. Makerkit will report the number of seats to your billing provider when subscribing, and when adding or removing members.