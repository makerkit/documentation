---
status: "published"
title: "CSRF Protection for your API Routes"
description: "Learn how to protect your API routes against CSRF attacks."
label: "CSRF Protection"
order: 6
---

{% sequence title="How to protect your API routes against CSRF attacks" description="Learn how to protect your API routes against CSRF attacks." %}

[CSRF Protection](#csrf-protection)

[Passing the CSRF Token to API Routes](#passing-the-csrf-token-to-api-routes)

{% /sequence %}

## CSRF Protection

By default, all POST, PUT, PATCH and DELETE requests to your API routes are protected against CSRF attacks. This means that you need to send a CSRF token with your requests, otherwise they will be rejected.

There are two exceptions to this rule:

1. **Server Actions**: When using Server Actions, protection is built-in and you don't need to worry about it.
2. **API Routes under /api**: When the route is under the `api` path. In this case, the CSRF protection is disabled, since we use this prefix for webhooks or external services that need to access your API.

## Passing the CSRF Token to API Routes

When using requests against API Route Handlers, you need to pass the CSRF token with your requests, otherwise the middleware will reject them.

To retrieve the CSRF token, you can use the `useGetCsrfToken` function from `@kit/shared/hooks`:

```tsx
'use client';

function MyComponent() {
  const csrfToken = useGetCsrfToken();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/my-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify({ message: 'Hello, world!' }),
    });
  };

  // your component code
}
```