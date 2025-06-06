---
status: "published"
label: "Sending Emails"
description: "Learn how to send emails in the Next.js Supabase SaaS Starter Kit."
title: "Sending Emails in the Next.js Supabase SaaS Starter Kit"
order: 1
---

{% sequence title="Steps to send emails" description="Learn how to send emails in the Next.js Supabase SaaS Starter Kit." %}

[Understanding the Mailer class](#understanding-the-mailer-class)

[Sending an email using the default mailer](#sending-an-email-using-the-default-mailer)

[Sending an HTML email](#sending-an-html-email)

{% /sequence %}

## Understanding the Mailer class

The Mailer class is extremely simple:

```tsx
import { z } from 'zod';

import { MailerSchema } from './schema/mailer.schema';

export abstract class Mailer<Res = unknown> {
  abstract sendEmail(data: z.infer<typeof MailerSchema>): Promise<Res>;
}
```

The `sendEmail` method is an abstract method that you need to implement in your mailer provider. The method receives an object with the following properties:

## Sending an email using the default mailer

Once you have configured the mailer provider, you can start sending emails using the `sendEmail` method. Here is an example of how to send an email using the default mailer:

```tsx
import { getMailer } from '@kit/mailers';

async function sendEmail(params: {
  from: string;
  to: string;
}) {
  const mailer = await getMailer();

  return mailer.sendEmail({
    to: params.from,
    from: params.to,
    subject: 'Hello',
    text: 'Hello, World!'
  });
}
```

The `sendEmail` method returns a promise that resolves when the email is sent successfully. If there is an error, the promise will be rejected with an error message.

## Sending an HTML email

If you want to send HTML emails, you can use the `html` property instead of the `text` property:

```tsx
import { getMailer } from '@kit/mailers';

async function sendEmail(params: {
  from: string;
  to: string;
}) {
  const mailer = await getMailer();

  return mailer.sendEmail({
    to: params.from,
    from: params.to,
    subject: 'Hello',
    html: '<h1>Hello, World!</h1>'
  });
}
```

Et voilà! You are now ready to send emails from your Next.js Supabase Starter Kit. 🚀