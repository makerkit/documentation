---
status: "published"
label: "Stripe"
title: "Configuring Stripe Billing"
description: "Learn how to configure Stripe in the Makerkit Next.js Supabase SaaS Kit"
order: 2
---

Stripe is the default billing provider in both the local config and the DB, so you don't need to set these values if you want to use Stripe.

{% sequence title="Steps to configure Stripe" description="Learn how to configure Stripe in the Makerkit Next.js Supabase SaaS Kit" %}

[Environment variables](#environment-variables)

[Stripe CLI](#stripe-cli)

[Configuring the Stripe Customer Portal](#configuring-the-stripe-customer-portal)

[Setting Production Webhooks in Stripe](#setting-production-webhooks-in-stripe)

[Setting Stripe Trials without collecting a card](#setting-stripe-trials-without-collecting-a-card)
{% /sequence %}

## Environment variables

For Stripe, you'll need to set the following environment variables:

```bash
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

While the `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is public and can be added anywhere - **please do not add the secret keys** to the `.env` file.

During development, you can place them in `.env.local` as it's not committed to the repository. In production, you can set them in the environment variables of your hosting provider.

## Stripe CLI

The Stripe CLI which allows you to listen to Stripe events straight to your own localhost. You can install and use the CLI using a variety of methods, but we recommend using Docker - since you already have it installed.

First - login to your Stripe account using the project you want to run:

```bash
docker run --rm -it --name=stripe -v ~/.config/stripe:/root/.config/stripe stripe/stripe-cli:latest login
```

Now, you can listen to Stripe events running the following command:

```bash
pnpm run stripe:listen
```

**If you have not logged in - the first time you set it up, you are required to sign in**. This is a one-time process. Once you sign in, you can use the CLI to listen to Stripe events.

Once you start listening to Stripe events, you can use the CLI to listen to Stripe events.

Now, please copy the webhook secret displayed in the terminal and set it as the `STRIPE_WEBHOOK_SECRET` environment variable in your `.env.local` file:

```bash
STRIPE_WEBHOOK_SECRET=*your_webhook_secret*
```

**Please sign in and then re-run the command**. Now, you can listen to Stripe events.

If you're not receiving events, please make sure that:

1. the webhook secret is correct
2. the account you signed in is the same as the one you're using in your app

## Configuring the Stripe Customer Portal

Stripe requires you to set up the Customer Portal so that users can manage their billing information, invoices and plan settings from there.

{% img src="/assets/images/docs/stripe-customer-portal.webp" width="2712" height="1870" /%}

1. Please make sure to enable the setting that lets users switch plans
2. Configure the behavior of the cancellation according to your needs

## Setting Production Webhooks in Stripe

When going to production, you will need to set the webhook URL and the events you want to listen to in Stripe.

The webhook path is `/api/billing/webhook`. If your app is hosted at `https://myapp.com` then you need to enter `https://myapp.com/api/billing/webhook`.

{% alert title="Use a public URL" type="warning" %}
Please make sure to use a public URL for your webhooks. If you use a private URL (such as Vercel preview URLs), you will not be able to receive webhooks from Stripe.
{% /alert %}

To ensure the URL is publicly accessible, please visit it using Incognito mode in your browser.

Makerkit needs the following events to work:

1. `checkout.session.completed`
2. `customer.subscription.updated`
3. `customer.subscription.deleted`

Only if you're using one-off payments, please add:

1. `checkout.session.async_payment_failed`
2. `checkout.session.async_payment_succeeded`

If your application needs more events, please add them, [but remember to handle them](billing-webhooks).

You can [handle additional events](billing-webhooks) by adding the required handlers in the `api/billing/webhook/route.ts` file.

### Setting Stripe Trials without collecting a card

Makerkit allows you to set trials without collecting a card. This is useful if you want to offer a free trial for your users.

To do so, you need to set the `STRIPE_ENABLE_TRIAL_WITHOUT_CC` environment variable to `true`.

```bash
STRIPE_ENABLE_TRIAL_WITHOUT_CC=true
```

Of course - you also must set a trial period for the plan you want to offer a free trial for.
