---
status: "published"
title: "Using API Route Handlers in the Next.js Supabase SaaS Kit"
label: "Route Handlers"
description: "Learn how to write Route Handlers in the Next.js Supabase SaaS Kit to fetch and write data"
order: 2
---

{% sequence title="How to write API Route Handlers in the Next.js Supabase SaaS Kit" description="Learn how to write Route Handlers in the Next.js Supabase SaaS Kit to fetch and write data" %}

[What are API Route Handlers?](#what-are-api-route-handlers)

[Using the `enhanceRouteHandler` utility](#using-the-enhance-route-handler-utility)

[Using a Captcha token protection](#using-a-captcha-token-protection)

[Passing the CSRF Token to API Routes](#passing-the-csrf-token-to-api-routes)

{% /sequence %}

## What are API Route Handlers?

API Route handlers are added using the convention `route.ts` and exporting one or many HTTP methods (e.g., `GET`, `POST`, `PUT`, `DELETE`).

In the older Pages Router, we used to write API routes using the `api` folder. However, in the new App Router, simply use the `route.ts` file convention to define your API routes.

## Using the enhanceRouteHandler utility

While you won't be writing too many API route handlers (prefer Server Actions for mutations) - you can use the `enhanceRouteHandler` utility to help you with the following:

1. **User state**: checks the user state (if the user is authenticated)
2. **Validation**: given a Zod schema, it validates the request body
3. **Captcha**: given a captcha site key, it validates the captcha token

Fantastic, let's see how we can use it

```tsx
import { z } from 'zod';

import { enhanceRouteHandler } from '@kit/next/routes';
import { NextResponse } from 'next/server';

const ZodSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const POST = enhanceRouteHandler(
  async function({ body, user, request }) {
    // 1. "body" has been validated against the Zod schema, and it's safe to use
    // 2. "user" is the authenticated user
    // 3. "request" is the request object that contains the headers, query, etc.

    // ... your code here
    return NextResponse.json({
      success: true,
    });
  },
  {
    schema: ZodSchema,
  },
);
```

### Using a Captcha token protection

If you want to protect your API route handlers with a captcha token, you can do so by passing the captcha site token to the `enhanceRouteHandler` function and setting the `captcha` flag to `true`.

```tsx
import { enhanceRouteHandler } from '@kit/next/routes';

export const POST = enhanceRouteHandler(
  async function({ body, user, request }) {
    // ... your code here
    return NextResponse.json({
      success: true,
    });
  },
  {
    captcha: true,
    schema: ZodSchema,
  },
);
```

When calling the API route handler, we must supply the captcha token in the request body.

The captcha token can be retrieved from the `useCaptchaToken` hook in the package `@kit/auth/captcha/client`.

```tsx
import { useCaptchaToken } from '@kit/auth/captcha/client';

function Component() {
  const captchaToken = useCaptchaToken();
  
  // ... your code here
}
```

## Passing the CSRF Token to API Routes

When calling the API route handler, we can pass the captcha and the CSRF token. This is required if:

1. It's a mutation
2. The route is not inside the `/api` folder

NB: The CSRF token **must be added for all API routes** making mutations in routes that are outside `/api/*`. Routes inside `/api/*` are not protected by default as they're meant to be used externally.

```tsx
import { useCaptchaToken } from '@kit/auth/captcha/client';
import { useCsrfToken } from '@kit/shared/hooks';

function Component() {
  const captchaToken = useCaptchaToken();
  const csrfToken = useCsrfToken();
  
  const onSubmit = async (params: {
    email: string;
    password: string;
  }) => {
    const response = await fetch('/my-api-route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken,
        'x-captcha-token': captchaToken,
      },
      body: JSON.stringify(params),
    });
    
    // ... your code here
  };
  
  // ... your code here
}
```

You can improve the above using React Query:

```tsx
import { useMutation } from '@tanstack/react-query';
import { useCaptchaToken } from '@kit/auth/captcha/client';

function Component() {
  const captchaToken = useCaptchaToken();
  const mutation = useMutateData();

  const onSubmit = async (params: {
    email: string;
    password: string;
  }) => {
    await mutation.mutateAsync(params);
  };
  
  // ... your code here
}

function useMutateData() {
  return useMutation({
    mutationKey: 'my-mutation',
    mutationFn: async (params: { email: string; password: string }) => {
      const response = await fetch('/my-api-route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-captcha-token': captchaToken,
        },
        body: JSON.stringify(params),
      });
      
      if (!response.ok) {
        throw new Error('An error occurred');
      }

      return response.json();
    },
  });
}
```

NB: to use Captcha protection, you need to set the captcha token in the environment variables.

```bash
CAPTCHA_SECRET_TOKEN=
NEXT_PUBLIC_CAPTCHA_SITE_KEY=
```

As a secret environment variable, please do not add it to the `.env` file. Instead, add it to the environment variables of your CI/CD system.

The only captcha provider supported is Cloudflare Turnstile.