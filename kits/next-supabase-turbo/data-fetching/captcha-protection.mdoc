---
status: "published"
description: "Learn how to set up captcha protection for your API routes."
title: "Captcha Protection for your API Routes"
label: "Captcha Protection"
order: 7
---

For captcha protection, we use [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile). 

{% sequence title="How to set up captcha protection for your API routes" description="Learn how to set up captcha protection for your API routes" %}

[Setting up the environment variables](#setting-up-the-environment-variables)

[Enabling the captcha protection](#enabling-the-captcha-protection)

[Retrieving the token](#retrieving-the-token)

[Resetting the token](#resetting-the-token)

[Verifying the token](#verifying-the-token)

{% /sequence %}

## Setting up the environment variables

To enable it, you need to set the following environment variables:

```bash
CAPTCHA_SECRET_TOKEN=
NEXT_PUBLIC_CAPTCHA_SITE_KEY=
```

You can find the `CAPTCHA_SECRET_TOKEN` in the Turnstile configuration. The `NEXT_PUBLIC_CAPTCHA_SITE_KEY` is public and safe to share. Instead, the `CAPTCHA_SECRET_TOKEN` should be kept secret.

This guide assumes you have correctly set up your Turnstile configuration. If you haven't, please refer to the [Turnstile documentation](https://developers.cloudflare.com/turnstile).

## Enabling the captcha protection

When you set the token in the environment variables, the kit will automatically protect your API routes with captcha.

**NB**: you also need to set the token in the Supabase Dashboard!

## Retrieving the Token

To retrieve the captcha token, you can use the `useCaptchaToken` function from `@kit/auth/captcha/client`:

```tsx
import { useCaptchaToken } from '@kit/auth/captcha/client';

function MyComponent() {
  const { captchaToken } = useCaptchaToken();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/my-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-captcha-token': captchaToken,
      },
      body: JSON.stringify({ message: 'Hello, world!' }),
    });
  };

  // your component code
}
```

When using Server Actions, use `enhanceAction` from `@kit/next/actions`:

```tsx
const MySchema = z.object({
  message: z.string(),
  captchaToken: z.string().min(1),
});

export const myServerAction = enhanceAction(async (data) => {
  // your action code
}, {
  captcha: true,
  schema: MySchema
});
```

When calling the server action, you need to pass the captcha:

```tsx
function MyForm() {
  const { captchaToken, resetCaptchaToken } = useCaptchaToken();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       const response = await myServerAction({
        message: 'Hello, world!',
        captchaToken,
      });
    } finally {
      // always reset the token!
      resetCaptchaToken();
    }
  };

  // your component code
}
```

A token is valid for one request only. You need to reset the token after each request.

The library will take care of renewing the token automatically when needed - but you need to reset it manually when consuming the token.

## Resetting the Token

The underlying library [React Turnstile](https://github.com/marsidev/react-turnstile) resets the token automatically - but we need to reset it manually when actually consuming the token since the token is only valid for one request. 

To reset the token, please call `resetCaptchaToken` from the `useCaptchaToken` hook - as shown in the example above.

You should be doing so in all situations, whether the request was successful or not.

## Verifying the Token

To verify the captcha manually server-side, please use the following code:

```tsx
import { verifyCaptchaToken } from '@kit/auth/captcha/server';

function assertCaptchaValidity(request: Request) {
  const token = request.headers.get('x-captcha-token');

  await verifyCaptchaToken(token);
}
```

If you use the utilities provided by the kit `enhanceAction` and `enhanceRouteHandler`, you don't need to worry about this, as the kit will automatically verify the captcha token for you (as long as it is passed).
