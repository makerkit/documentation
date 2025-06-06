---
status: "published"
label: "Email Configuration"
description: "Learn how to configure the mailer provider to start sending emails from your Next.js Supabase Starter Kit."
title: "Email Configuration in the Next.js Supabase Starter Kit"
order: 0
---

{% sequence title="Sending Emails in Makerkit" description="Learn how to configure the mailer provider to start sending emails from your Next.js Supabase Starter Kit." %}

[Understanding Makerkit and Supabase Auth emails](#understanding-makerkit-and-supabase-auth-emails)

[Configuring the mailer provider](#configuring-the-mailer-provider)

[Nodemailer](#nodemailer)

[Resend](#resend)

{% /sequence %}

## Understanding Makerkit and Supabase Auth emails

Before we delve into the configuration details, it's crucial to distinguish between Makerkit emails and Supabase Auth emails.

1. **Makerkit Emails**: These are transactional emails used for actions like team member invitations, account deletion confirmations, and any additional ones you'll be implementing.
2. **Supabase Auth Emails**: These emails are used for authentication-related actions, such as email verification and password reset.

To have a comprehensive email setup in your application, you'll need to configure both Makerkit and Supabase Auth emails.

This guide focuses on setting up Makerkit emails. For Supabase Auth, please refer to the [Supabase documentation](https://supabase.com/docs/guides/auth/auth-smtp).

## Configuring the mailer provider

Makerkit offers the `@kit/mailers` package to configure and send emails, providing a straightforward API for email operations.

There are three mailer implementations provided by Makerkit:

1. `nodemailer`: This is the default mailer that leverages the `nodemailer` library. It's ideal for Node.js environments as it's compatible with any SMTP server, ensuring you're not tied to a specific provider.
2. `resend`: This mailer uses the [Resend](https://resend.com) API via HTTP. It's a suitable choice if you opt for Resend.

The following sections will guide you on configuring the mailer provider to start sending emails from your Next.js Supabase Starter Kit.

## Nodemailer

To specify the mailer provider, set the `MAILER_PROVIDER` environment variable in the `apps/web/.env` file. 

For instance, to use the `nodemailer` mailer, set `MAILER_PROVIDER` to `nodemailer`:

```bash
MAILER_PROVIDER=nodemailer
```

By default, `nodemailer` is used, so you don't need to set the `MAILER_PROVIDER` environment variable by yourself.

### SMTP Configuration

If you're using the `nodemailer` mailer, you'll need to set the SMTP configuration in your environment variables. Here's an example of the SMTP configuration:

```bash
EMAIL_USER=User # refer to your email provider's documentation
EMAIL_PASSWORD=your-password # refer to your email provider's documentation
EMAIL_HOST=smtp.your-email-provider.com # refer to your email provider's documentation
EMAIL_PORT=587 # or 465 for SSL
EMAIL_TLS=true # or false for SSL (see provider documentation)
EMAIL_SENDER=Makerkit <your-email@app.com> # refer to your email provider's documentation
```

The variables are:

1. `EMAIL_USER`: The email address username. This is provider-specific, so refer to your email provider's documentation.
2. `EMAIL_PASSWORD`: The email address password. This is provider-specific, so refer to your email provider's documentation.
3. `EMAIL_HOST`: The SMTP server host. This is provider-specific, so refer to your email provider's documentation.
4. `EMAIL_PORT`: The SMTP server port. This is provider-specific, so refer to your email provider's documentation.
5. `EMAIL_TLS`: The TLS configuration. This is provider-specific, so refer to your email provider's documentation. Generally, you can set it to `true`.
6. `EMAIL_SENDER`: The sender of the emails. This is usually the email address of your application. It's usually in the format `Sender Name <email@app.com>`.

### EMAIL_SENDER format

Sometimes, `EMAIL_SENDER` should be written in the format `Sender Name <email@app.com>` so that the email provider can identify the sender of the email. This setting can be different for different email providers, so please refer to your email provider's documentation.

{% alert type="warn" title="Double check the settings" %}
Please double check the settings above and confirm them with your email provider. If the settings are not correct, you won't be able to send emails.
{% /alert %}

## Resend

As an alternative, you can use [Resend](https://resend.com), a modern email service that provides a simple API for sending emails.

Set the `MAILER_PROVIDER` environment variable to `resend` in the `apps/web/.env` file:

```bash
MAILER_PROVIDER=resend
```

And provide the Resend API key:

```bash
RESEND_API_KEY=your-api-key
EMAIL_SENDER=your-email
```

That's it! You're now ready to send emails from your Next.js Supabase Starter Kit using the configured mailer provider.