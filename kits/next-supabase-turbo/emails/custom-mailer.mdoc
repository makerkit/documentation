---
status: "published"
title: "Creating a Custom Mailer in the Next.js Supabase Starter Kit"
label: "Custom Mailer"
description: "Learn how to create a custom mailer in the Next.js Supabase Starter Kit, so you can send emails using your own email provider."
order: 5
---

{% sequence title="Steps to create a custom mailer" description="Learn how to create a custom mailer in the Next.js Supabase Starter Kit, so you can send emails using your own email provider." %}

[Implementing the sendEmail method](#implementing-the-sendemail-method)

[Registering the Mailer](#registering-the-mailer)

[Setting a new Mailer Provider](#setting-a-new-mailer-provider)

[Moving Megamailer to a separate package](#moving-megamailer-to-a-separate-package)

{% /sequence %}

Makerkit implements both Nodemailer (which can potentially support any SMTP provider) and Resend, using its HTTP API, which allows Makerkit to be compatible with edge runtimes (such as Cloudflare Workers).

However, if you want to use your own email provider, you can create a custom mailer using the `packages/mailers` package.

The mailer class is very simple:

```tsx
export abstract class Mailer<Res = unknown> {
  abstract sendEmail(data: z.infer<typeof MailerSchema>): Promise<Res>;
}
```

As such, you can create your own mailer by extending the `Mailer` class and implementing the `sendEmail` method.

## Implementing the sendEmail method

The `sendEmail` method takes in a `z.infer<typeof MailerSchema>` object, which is a Zod schema that defines the shape of the email data. This allows you to validate the email data before sending it.

Here's an example of how to implement the `sendEmail` method. For simplicity, we will call our custom mailer `megamailer` in the following examples.

```tsx {% title="packages/mailers/core/src/megamailer.ts" %}
import { z } from 'zod';

import { MailerSchema } from '../../shared/src/schema/mailer.schema';

export function createMegaMailer() {
  return new MegaMailer();
}

class MegaMailer implements Mailer<unknown> {
  async sendEmail(data: z.infer<typeof MailerSchema>) {
    // Implement your email sending logic here
    // For example, you can use Nodemailer to send emails
    // or use a third-party email provider like SendGrid

    return {};
  }
}
```

NB: for simplicity, we've placed the `megamailer.ts` file in the core package. However, if you have 5 minutes, you can move it to a separate package and import it in the `index.ts` file, just like we do for Nodemailer and Resend.

## Registering the Mailer

Now that we have our custom mailer, we need to register it in the `packages/mailers/core/src/registry.ts` file:

```tsx {% title="packages/mailers/core/src/registry.ts" %}
import { Mailer } from '@kit/mailers-shared';
import { createRegistry } from '@kit/shared/registry';

import { MailerProvider } from './provider-enum';

const mailerRegistry = createRegistry<Mailer, MailerProvider>();

// here we add our custom mailer to the registry
mailerRegistry.register('megamailer', async () => {
  const { createMegaMailer } = await import('@kit/megamailer');

  return createMegaMailer();
});

mailerRegistry.register('nodemailer', async () => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { createNodemailerService } = await import('@kit/nodemailer');

    return createNodemailerService();
  } else {
    throw new Error(
      'Nodemailer is not available on the edge runtime. Please use another mailer.',
    );
  }
});

mailerRegistry.register('resend', async () => {
  const { createResendMailer } = await import('@kit/resend');

  return createResendMailer();
});

export { mailerRegistry };
```

## Setting a new Mailer Provider

By setting the `MAILER_PROVIDER` environment variable to `megamailer`, you can use the Megamailer mailer in your application.

```
MAILER_PROVIDER=megamailer
```

## Moving Megamailer to a separate package

Let's move the Megamailer to a separate package. To do so, we create a new package called `@kit/megamailer` and move the `megamailer.ts` file to the new package.

Let's create a package at `packages/mailers/megamailer`.

1. Copy both the `package.json` and `tsconfig.json` files from the `resend` package to the new package and rename the package to `@kit/megamailer`
2. Copy the `megamailer.ts` file to the new package
3. Update the `index.ts` file to export the new package and use the Megamailer

#### Install the Megamailer package

To install the new package, run the following command:

```
pnpm i "@kit/megamailer:workspace:*" --filter "@kit/mailers"
```

#### Update the Mailer Registry

Now that we have the new package, we need to update the `registry.ts` file to export the new package and use the Megamailer.

```tsx {% title="packages/mailers/core/src/registry.ts" %}
// here we add our custom mailer to the registry
mailerRegistry.register('megamailer', async () => {
  const { createMegaMailer } = await import('@kit/megamailer');

  return createMegaMailer();
});
```