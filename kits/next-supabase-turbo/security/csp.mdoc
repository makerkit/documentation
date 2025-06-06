---
label: "Content Security Policy (CSP)"
title: "Content Security Policy (CSP) in the Next.js Supabase Turbo kit"
description: "Learn how to secure your Next.js application with Content Security Policy (CSP) using the Next.js Supabase Turbo kit."
order: 4
---

The Next.js Supabase Turbo kit provides a secure way to include [CSP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) in your application. This functionality is available starting from version 2.8.0 and uses [Nosecone](https://docs.arcjet.com/nosecone/reference#headers) to generate the CSP headers.

{% sequence title="Steps to configure CSP" description="Learn how to configure CSP in the Next.js Supabase Turbo kit." %}

[How to enable a strict CSP](#how-to-enable-a-strict-csp)

[Making your application compliant with CSP](#making-your-application-compliant-with-csp)

[Adding a nonce to your application](#adding-a-nonce-to-your-application)

[Modifying the default CSP configuration](#modifying-the-default-csp-configuration)

{% /sequence %}

## How to enable a strict CSP

To enable a strict CSP, you need to set the following environment variable:

```bash
ENABLE_STRICT_CSP=true
```

By default, this setting is disabled due to the overhead required for development. While this is a bit advanced, it is recommended to enable it before going to production - or at some point in your development process.

Once enabled, the CSP headers will be automatically added to the response headers using the Next.js middleware. 

## Making your application compliant with CSP

Enabling a strict CSP has a few consequences on your application - you will need to make sure your application is compliant with the CSP rules.

1. You will need to add the `nonce` to any third-party script tags or stylesheets you have in your application.
2. If you make external HTTP requests, you will need to add the domains to the default list of allowed domains (by default, only requests to your Supabase project are allowed).

## Adding a nonce to your application

From a Server Component, you can retrieve a nonce from the `headers()` object.

```tsx
import { headers } from "next/headers";

const headersStore = await headers();
const nonce = headersStore.get("x-nonce");
```

If you want to pass the nonce to a Script tag, you can do so by adding the `nonce` attribute to the script tag.

```tsx
<script nonce={nonce} src="https://example.com/script.js"></script>
```

## Modifying the default CSP configuration

In the application middleware, modify the `apps/web/lib/create-csp-response.ts` file to modify the CSP configuration. You may need to do this to allow safe external requests that your application makes.

Please refer to the [Nosecone documentation](https://docs.arcjet.com/nosecone/reference#headers) for more information on the available options.

```ts {% filename="apps/web/lib/create-csp-response.ts" %}
const config: NoseconeOptions = {
...noseconeConfig,
contentSecurityPolicy: {
    directives: {
    ...noseconeConfig.contentSecurityPolicy.directives,
    connectSrc: [
        ...noseconeConfig.contentSecurityPolicy.directives.connectSrc,
        ...ALLOWED_ORIGINS,
    ],
    imgSrc: [
        ...noseconeConfig.contentSecurityPolicy.directives.imgSrc,
        ...IMG_SRC_ORIGINS,
    ],
    upgradeInsecureRequests: UPGRADE_INSECURE_REQUESTS,
    },
},
crossOriginEmbedderPolicy: CROSS_ORIGIN_EMBEDDER_POLICY,
};
```