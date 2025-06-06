---
status: "published"
title: "Checklist for deploying your Next.js Supabase SaaS to Production"
label: "Checklist"
description: "This guide will help you deploy your Next.js Supabase SaaS app to production! Please follow this checklist to ensure everything is set up correctly."
order: 0
---

When you're ready to deploy your project to production, follow this checklist.

{% alert type="warning" title="Please complete the following steps" %}
Not completing these steps will result in your project not working correctly. Please make sure to complete these steps before testing your project.
{% /alert %}

This process may take a few hours and some trial and error, so buckle up—you're almost there!

{% sequence title="Deployment Checklist" description="Follow these steps in order to deploy your Next.js Supabase SaaS to production." %}
Create a Supabase project and [link it locally](https://supabase.com/docs/guides/cli/local-development#link-your-project) using the Supabase CLI (`supabase link`).

[Push the migrations](https://supabase.com/docs/guides/cli/local-development#link-your-project) to the remote Supabase instance (`supabase db push`).

[Set your APP URL in the Supabase project settings](https://supabase.com/docs/guides/auth/redirect-urls). This is required for the OAuth flow. Make sure to add the path `/auth/callback**` to the allowed URLs. If you don't have it yet, wait.

[Set the OAuth providers in the Supabase](https://supabase.com/docs/guides/auth/social-login) project settings. If you use Google Auth, make sure to set it up. This requires creating a Google Cloud project and setting up the OAuth credentials.

Update the auth emails using the [following documentation](authentication-emails). The kit already implements the `confirm` route, but you need to update the emails in your Supabase settings.

Deploy the Next.js app to Vercel or any another hosting provider. Copy the URL and set it in the Supabase project settings.

Set up environment variables. The initial deploy **will likely fail** because you may not yet have a URL to set in your environment variables. This is normal. Once you have the URL, set the URL in the environment variables and redeploy.

[Set the DB Webhooks in Supabase](supabase) pointing against your Next.js app at `/api/db/webhooks`.

Get some SMTP details from an email service provider like SendGrid or Mailgun or Resend and configure the emails in both the Environment Variables and the [Supabase project settings](https://supabase.com/docs/guides/auth/auth-smtp).

Create a Stripe/Lemon Squeezy account, make sure to update the environment variables with the correct values. Point webhooks from these to `/api/billing/webhook`. Please use the relative documentation for more details.

Clear OTPs using a Cron Job or do so manually (optional).
{% /sequence %}

{% sequence title="Additional Tasks" description="Consider these minor but important tasks to complete your setup." %}
Update the legal pages with your company's information (privacy policy, terms of service, etc.).

Remove the placeholder blog and documentation content / or replace it with your own.

Update the favicon and logo with your own branding.

Update the FAQ and other static content with your own information.
{% /sequence %}

---

## Detailed Steps

{% sequence title="1. Create a Supabase Project" description="Set up your database, authentication, and storage services in the cloud." %}
Creating a Supabase project is the foundational step to set up your database, authentication, and storage services in the cloud. This will serve as the backend for your SaaS application.

Create a new Supabase project in the Supabase dashboard. Once created, [link the project locally](https://supabase.com/docs/guides/cli/local-development#link-your-project) using the Supabase CLI:
```bash
supabase link
```
{% /sequence %}

{% sequence title="2. Migrations" description="Configure your database schema." %}
Pushing database migrations ensures that your database schema in the remote Supabase instance is configured to match Makerkit's requirements. This step is crucial for the application to function correctly.

Push the database migrations to your remote Supabase instance:
```bash
supabase db push
```
{% /sequence %}

{% sequence title="3. Auth Configuration" description="Set up OAuth flows and redirect URLs." %}
Setting your APP URL in the Supabase project settings is critical for enabling OAuth flows and redirecting users correctly during authentication.

[Set your APP URL in the Supabase project settings](https://supabase.com/docs/guides/auth/redirect-urls). Add the path `/auth/callback` to the allowed URLs.
{% /sequence %}

{% sequence title="4. OAuth Providers" description="Set up external OAuth providers." %}
Configuring OAuth providers like Google ensures that users can log in using their existing accounts, enhancing user convenience and security. This is all done externally, in both Google and Supabase - not in the application code.

[Set up the OAuth providers](https://supabase.com/docs/guides/auth/social-login) in your Supabase project settings. For Google Auth, create a Google Cloud project and set up the OAuth credentials.
{% /sequence %}

{% sequence title="5. Auth Emails" description="Update authentication emails." %}
To provide a correct user experience with Makerkit's SSR authentication, you need to update the authentication emails to include the token hash and prevent errors usually related to PKCE - i.e when users click on the email and are redirected to a different browser - resulting in an error.

Update the authentication emails using the [Supabase documentation](https://supabase.com/docs/guides/auth/auth-smtp). The kit implements the `confirm` route, but you need to update the email templates in your Supabase settings.
{% /sequence %}

{% sequence title="6. Deploy Next.js" description="Deploy your application to a hosting provider." %}
Deploying your Next.js app to a hosting provider makes it accessible to users worldwide, allowing them to interact with your application.

Deploy your Next.js app to Vercel or another hosting provider. Copy the deployment URL and set it in your Supabase project settings.
{% /sequence %}

{% sequence title="7. Environment Variables" description="Set up environment variables." %}
Setting the correct environment variables is essential for the application to function correctly. These variables include API keys, database URLs, and other configuration details required for your app to connect to various services.

Please [generate the environment variables using our script](production-environment-variables) and then add them to your hosting provider's environment variables. Redeploy the app once you have the URL to set in the environment variables.
{% /sequence %}

{% sequence title="8. Webhooks" description="Set up database webhooks." %}
Configuring database webhooks allows your application to respond to changes in the database in real-time, such as sending notifications or updating records, ensuring your app stays in sync with the database.

[Set up the database webhooks in Supabase](https://supabase.com/docs/guides/database/webhooks) to point to your Next.js app at `/api/db/webhooks`.
{% /sequence %}

{% sequence title="9. Emails Configuration" description="Set up email service." %}
Properly configuring your email service ensures that your application can send emails for account verification, password resets, and other notifications, which are crucial for user communication.

Obtain SMTP details from an email service provider such as SendGrid, Mailgun, or Resend. Configure the emails in both the environment variables and the [Supabase project settings](https://supabase.com/docs/guides/auth/auth-smtp).
{% /sequence %}

{% sequence title="10. Billing Setup" description="Set up billing." %}
Setting up billing ensures that you can charge your users for using your SaaS application, enabling you to monetize your service and cover operational costs. This can take a while.

Create a Stripe or Lemon Squeezy account. Update the environment variables with the correct values for your billing service. Point webhooks from Stripe or Lemon Squeezy to `/api/billing/webhook`. Refer to the relevant documentation for more details on setting up billing.
{% /sequence %}

{% sequence title="11. OTPs (optional)" description="Clear unused DB records." %}
to remove unused DB records, we provide a function `kit.cleanup_expired_nonces()` to automatically clear unused or expired tokens

From your Supabase Studio, launch `select kit.cleanup_expired_nonces()` manually, or create a cron job to do so at a frequency of your choice
{% /sequence %}
