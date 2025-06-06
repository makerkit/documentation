---
label: "Data Validation"
title: "Data Validation in the Next.js Supabase Turbo kit"
description: "Learn how to validate data in the Next.js Supabase Turbo kit."
order: 3
---

Data Validation is a crucial aspect of building secure applications. In this section, we will look at how to validate data in the Next.js Supabase Turbo kit.

{% sequence title="Steps to validate data" description="Learn how to validate data in the Next.js Supabase Turbo kit." %}

[What are we validating?](#what-are-we-validating)

[Using Zod to validate data](#using-zod-to-validate-data)

[Validating payload data to Server Side API](#validating-payload-data-to-server-side-api)

[Validating Cookies](#validating-cookies)

[Validating URL parameters](#validating-url-parameters)

{% /sequence %}

## What are we validating?

A general rule, is that all client-side provided data should be validated/sanitized. This includes:

- URL parameters
- Search params
- Form data
- Cookies
- Any data provided by the user

## Using Zod to validate data

The Next.js Supabase Turbo kit uses [Zod](https://zod.dev/) to validate data. You can use the `z` object to validate data in your application.

```ts
import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

// Validate the data
const validatedData = userSchema.parse(data);
```

## Validating payload data to Server Side API

We generally use two ways for sending data from a client to a server:

1. Server Actions
2. API Route Handlers

Let's look at how we can validate data for both of these cases.

### Server Actions: Using the "enhanceAction" utility

The `enhanceAction` hook is a utility hook that enhances the `action` function with Zod validation.

```ts
'use server';

import { enhanceAction } from "@kit/next/actions";
import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export const createUserAction = enhanceAction(async (parsedInput, user) => {
  // parsedInput is now validated against the UserSchema

  // do something with the validated data
}, {
    schema: UserSchema,
    auth: true,
});
```

The `enhanceAction` hook is a utility hook that enhances Next.js Server Actions with Zod validation and authentication.

When you define an action using the `enhanceAction` hook, the `parsedInput` argument is now validated against the `schema` option automatically, without you having to do anything else. In addition, the `user` argument is now available to you, which is the authenticated user.

### API Route Handlers: Using the "enhanceRouteHandler" utility

The `enhanceRouteHandler` hook is a utility hook that enhances Next.js API Route Handlers with Zod validation.

```ts
import { enhanceRouteHandler } from "@kit/next/api-routes";
import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export const POST = enhanceRouteHandler(async ({ parsedInput, user, request }) => {
  // parsedInput is now validated against the UserSchema
  // user is the authenticated user
  // request is the incoming request

  // do something with the validated data
}, {
    schema: UserSchema,
    auth: true,
});
```

Very similar to the `enhanceAction` hook, the `enhanceRouteHandler` hook enhances the `handler` function with Zod validation and authentication.

When you define an API route using the `enhanceRouteHandler` hook, the `parsedInput` argument is now validated against the `schema` option automatically, without you having to do anything else. In addition, the `user` argument is now available to you, which is the authenticated user. Instead, the `request` argument is the incoming request object that you would have received in a standard API route handler.

## Validating Cookies

Whenever you use a cookie in your application, you should validate the cookie data. 

Let's assume you receive a cookie with the name `my-cookie`, and you expect it to be a number. You can validate the cookie data as follows:

```ts
import { z } from "zod";
import { cookies } from "next/headers";

const cookieStore = await cookies();

const cookie = z.coerce.number()
    .safeParse(cookieStore.get("my-cookie")?.value);

if (!cookie.success) {
  // handle the error or provide a default value
}
```

## Validating URL parameters

Whenever you receive a URL parameter, you should validate the parameter data. Let's assume you receive a URL parameter with the name `my-param`, and you expect it to be a number. You can validate the parameter data as follows:

```ts
interface PageProps {
    searchParams: Promise<{ myParam: string }>;
}

async function Page({ searchParams }: PageProps) {
    const params = await searchParams;

    const param = z.coerce.number()
        .safeParse(params.myParam);

    if (!param.success) {
        // handle the error or provide a default value
    }

    // render the page with the validated data
}
```

Going forward, remember to validate all data that you receive from the client, and never trust anything the client provides you with. Always have a default value ready to handle invalid data, which can prevent potential security issues or bugs in your application.