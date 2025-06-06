---
label: "Next.js Best Practices"
title: "Next.js Security Best Practices"
description: "Learn best practices for Next.js in the Next.js Supabase Turbo kit."
order: 1
---

This section contains a list of best practices for Next.js in general, applicable to both the Next.js Supabase Turbo kit or any other Next.js application.

{% sequence title="Best practices for Next.js in the Next.js Supabase Turbo kit" description="Learn best practices for Next.js in the Next.js Supabase Turbo kit." %}

[Do not pass sensitive data to client components](#do-not-pass-sensitive-data-to-client-components)

[Do not mix up client and server imports](#do-not-mix-up-client-and-server-imports)

[Environment variables](#environment-variables)

[Proper use of .env files](#proper-use-of-.env-files)

{% /sequence %}

## What goes in client components will be passed to the client

The first and most important rule you must remember is that what goes in client components will be passed to the client.

From this rule, you can derive the following best practices:

- Do not pass sensitive data to client components. If you're using an API Key server-side, do not pass it to the client.
- Avoid exporting server and client code from the same file. Instead, define separate entry points for server and client code.
- Use the `import 'server-only'` package to raise errors when server code unexpectedly ends up in the client bundle.

## Do not pass sensitive data to client components

One common mistake made by Next.js developers is passing sensitive data to client components. This is easier than it sounds, and it can happen without you even noticing it.

Let's look at the following example: we are using an API call in a server component, and we end up passing the API Key to the client.

```tsx
async function ServerComponent() {
    const config = {
        apiKey: process.env.API_KEY,
        storeId: process.env.STORE_ID,
    };

    const data = await fetchData(config);

    return <ClientComponent data={data} config={config} />;
}
```

In this example, the `config` object contains sensitive data, such as the API Key and the Store ID (which is a public identifier for the store, so safe to pass to the client). This data will be passed to the client, and can be accessed by the client.

```tsx
'use client';

function ClientComponent({ data, config }: { data: any, config: any }) {
    // ...
}
```

This is a problem, because the `config` object contains sensitive data, such as the API Key and the Store ID. The fact we pass it down to a `'use client'` component means that the data will be passed to the client and this means leaking sensitive data to the client, which is a security risk.

This can happen in many other ways, and it's a good idea to be aware of this.

A better approach is to define a service using `import 'server-only'` and use it in the server component.

```ts
import 'server-only';

const config = {
    apiKey: process.env.API_KEY,
    storeId: process.env.STORE_ID,
};

export async function fetchData() {
    const data = await fecthDataFromExternalApi(config);
    const storeId = config.storeId;

    return { data, storeId };
}
```

Now, we can use this service in the server component.

```tsx
import { fetchData } from './fetch-data';

async function ServerComponent() {
    const data = await fetchData();

    return <ClientComponent data={data} />;
}
```

While this doesn't fully solve the problem (you can still pass the config object to the client, but it's a lot harder), it's a good start and will help you separate concerns.

The [Taint API](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#preventing-sensitive-data-from-being-exposed-to-the-client) will eventually help us solve this issue even better, but it's still experimental.

## Do not mix up client and server imports

Sometimes, you have a package that exports both client and server code. This is a problem, because it will end up in the client bundle.

For example, we assume we have a barrel file `index.ts` from which we export a `fetchData` function and a client component `ClientComponent`.

```ts
export * from './fetch-data';
export * from './client-component';
```

This is a problem, because it's possible that some server-side code ends up in the client bundle. 

Adding `import 'server-only'` to the barrel file will solve this issue and raise an error, however, as a best practice, you should avoid this in the first place and **use different barrel files for server and client code**; then use the `exports` field in `package.json` to re-export the server and client code from the barrel file.

```json
{
    "exports": {
        "./server": "./server.ts",
        "./client": "./client.tsx"
    }
}
```

This way, you can import the server and client code separately and you won't end up with a mix of server and client code in the client bundle.

## Environment variables

Environment variables are essential for configuring your application across different environments. However, they require careful management to prevent security vulnerabilities.

### Use NEXT_PUBLIC prefix for environment variables that are available on the client

Next.js handles environment variables uniquely, distinguishing between server-only and client-available variables:

- Variables without the `NEXT_PUBLIC_` prefix are only available on the server
- Variables with the `NEXT_PUBLIC_` prefix are available on both server and client

Client components can only access environment variables prefixed with `NEXT_PUBLIC_`:

```tsx
// This is available in client components
console.log(process.env.NEXT_PUBLIC_API_URL)

// This is undefined in client components
console.log(process.env.SECRET_API_KEY)
```

### Never use NEXT_PUBLIC_ variables for sensitive data

Since `NEXT_PUBLIC_` variables are embedded in the JavaScript bundle sent to browsers, they should never contain sensitive information:

```
# .env
# UNSAFE: This will be exposed to the client
NEXT_PUBLIC_API_KEY=sk_live_1234567890  # NEVER DO THIS!
```

#### SAFE: This is only available server-side
```
API_KEY=sk_live_1234567890  # This is correct
```

Remember:

1. API keys, secrets, tokens, and passwords should never use the `NEXT_PUBLIC_` prefix
2. Use `NEXT_PUBLIC_` only for genuinely public information like public API URLs, feature flags, or public identifiers

### Proper use of .env files

Next.js supports various .env files for different environments:

```
.env                # Loaded in all environments
.env.local          # Loaded in all environments, ignored by git
.env.development    # Only loaded in development environment
.env.production     # Only loaded in production environment
.env.production.local # Only loaded in production environment, ignored by git
.env.test           # Only loaded in test environment
```

As a general rule, **never add sensitive data to the `.env` file or any other committed file**. Instead, add it to the `.env.local` file, which by default is ignored by git (though you must check this if you're not using Makerkit).

### Best practices:

1. Store sensitive values in `.env.local` which should not be committed to your repository
2. Use environment-specific files for values that differ between environments
3. Use environment variables for sensitive data, not hardcoded values
4. Use `NEXT_PUBLIC_` prefix for environment variables that are available on the client
5. Never use `NEXT_PUBLIC_` variables for sensitive data
6. Use `import 'server-only'` for server-only code
7. Separate server and client code in different files and never mix them up in barrel files
8. Use the Taint API to prevent sensitive data from being exposed to the client (experimental). Makerkit will at some point adopt this API.
