---
status: "published"
title: "Running the Next.js Supabase Turbo project"
label: "Running the Project"
order: 4
description: "Learn how to run the Next.js Supabase Turbo project on your local machine."
---

To run the project, follow these steps to start the development server, Supabase, and Stripe (optional for billing system testing).

{% sequence title="Steps to run the project" description="Learn how to run the Next.js Supabase Turbo project on your local machine." %}

[Ensure Docker is up and running](#0.-ensure-docker-is-running)

[Start Supabase](#1.-start-supabase)

[Start the Next.js development server](#2.-start-the-development-server)

[Start Stripe (optional for billing system testing)](#3.-start-stripe-(optional))
{% /sequence %}

## 1. Start Supabase

### Ensure Docker is running

Before starting the Supabase container, ensure Docker is running. This is because the Supabase container is a Docker container, and we can't start it without Docker running.

{% alert type="warning" title="Have Docker running" %}
If you don't have Docker running, please start it now, otherwise the Supabase container will not start.
{% /alert %}

[Docker Desktop](https://www.docker.com/products/docker-desktop/) is the best way to get started with Docker. Alternatively, on MacOS, you can use [OrbStack](https://orbstack.dev/) as an alternative to Docker Desktop.

### Starting the Supabase Container
After ensuring Docker is running, start the Supabase container using the following command:

```bash
pnpm run supabase:web:start
```

This command initiates the local Supabase web server. This allows us to develop locally without having to deploy to Supabase.

When you're ready to deploy the project to production, follow the [checklist](../going-to-production/checklist) to ensure everything is properly configured.

Please read the [Supabase documentation](https://supabase.com/docs/guides/local-development/cli/getting-started#running-supabase-locally) for more information about starting Supabase locally.

{% alert type="warning" title="Give Docker enough resources" %}
If the command above fails, you may need to give Docker more resources. Please refer to your Docker software's documentation for instructions on how to do this.
{% /alert %}

## Start the Development Server

To start the web application development server, run:

```bash
# Start the development server
pnpm dev
```

This command launches:

1. **Web Application**: The web application is built using Next.js and serves as the main user interface for the application at port 3000
2. **Dev Tools**: The dev tools are built using Next.js and serve as a debugging tool for the web application at port 3010. For more information, please refer to the [Dev Tools documentation](/docs/next-supabase-turbo/dev-tools/environment-variables).

You will mostly be using the web application at port 3000.

### Quick Start Credentials

Makerkit seeds the DB with a few users by default. To login as a test user, you can use the following credentials:

- **Email**: `test@makerkit.dev`
- **Password**: `testingpassword`

To confirm email addresses, visit [Inbucket](http://localhost:54324). Supabase uses Inbucket/Mailpit to capture emails sent during the authentication process.

Bookmark the Inbucket/Mailpit URL, as you will need it quite often.

**Ensure it's working:** Please try to use the test user credentials to login. If these credentials are not working, please try re-seeding the DB with the following command:

```bash
pnpm run supabase:web:reset
```

#### Troubleshooting

If you're hitting issues with loading modules (such as `Module not found:
Can't resolve 'react-dom/client'`), you're likely running into Windows-related
issues with Node.js.

Please see the [the Troubleshooting section](../troubleshooting/troubleshooting-module-not-found) for more information.

#### Super Admin Credentials

To login as a super admin, you can use the following credentials:

```json
{
  "email": "super-admin@makerkit.dev",
  "password": "testingpassword"
}
```

Makerkit forces MFA (multi-factor authentication) for the Super Admin user. Therefore, to sign in with the Super Admin user, please use the following steps to pass MFA:

1. **TOTP**: Use the following [TOTP generator](https://totp.danhersam.com/) to generate a TOTP code.
2. **Secret Key**: Use the test secret key `NHOHJVGPO3R3LKVPRMNIYLCDMBHUM2SE` to generate a TOTP code.
3. **Verify**: Use the TOTP code and the secret key to verify the MFA code.
Make sure the TOTP code is not expired when you verify the MFA code.

## 3. Start Stripe (Optional)

To test the billing system, start Stripe by running:

```bash
pnpm run stripe:listen
```

This command routes webhooks to your local machine.

You now have the Next.js Supabase Turbo project running on your local machine. 🚀

## 4. Email Server for local development

To receive emails during local development, Supabase uses [Mailpit](http://localhost:54324). It's from here that you will be receving emails from both Supabase Auth and transactional emails during local development.

You can bookmark the Mailpit URL, as you will need it quite often.

## Deploying to Production

When you're ready to deploy the project to production, follow the [checklist](../going-to-production/checklist) to ensure everything is set up correctly.

**Note:** Using Supabase's hosted instance is similar to deploying to production. Therefore, you still need to follow the checklist to ensure everything is properly configured.
