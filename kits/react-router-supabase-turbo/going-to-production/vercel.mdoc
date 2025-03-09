---
status: "published"
title: "Deploy React Router Supabase to Vercel"
label: "Deploy to Vercel"
order: 6
description: "Guide to deploy the React Router SaaS boilerplate to Vercel"
---

Deploying to Vercel should be straightforward. You can deploy the React Router SaaS boilerplate to Vercel by following these steps:

1. Connect your Repository to Vercel
2. Configure Environment Variables: the first time this may fail if you don't yet have a custom domain connected since you cannot place it in the environment variables yet. It's fine. Make the first deployment fail, then pick the domain and add it. Redeploy.
3. Deploy the Project

## Connect your Repository to Vercel

To deploy the React Router SaaS boilerplate to Vercel, you need to connect your repository to Vercel.

## Configure Environment Variables

Add the environment variables required for the project to work correctly. You can build them from [our environment variables generation](production-environment-variables).

## Set the correct Preset and Root Directory

Please make sure to set the "React Router" preset in the Vercel settings and to set the root directory to `apps/web`.

{% alert type="warning" %}
Failure to set the Preset to "React Router" will result in the project not working correctly.
{% /alert %}

## Update the Preset in your React Router Config

Install the `vercel-preset` package:

```bash
pnpm add --filter web --save-dev "@vercel/react-router"
```

Then, update the preset in your `react-router.config.ts` file:

```ts {% title="apps/web/react-router.config.ts" %}
import type { Config } from '@react-router/dev/config';

import { vercelPreset } from '@vercel/react-router/vite';

export default {
  ssr: true,
  presets: [
    vercelPreset()
  ],
} satisfies Config;
```

## Environment Variables

Please make sure to set all the environment variables required for the project to work correctly.

A production deployment should be setting the below environment variables:

{% img src="/assets/images/docs/vercel-env-variables-turbo.webp" width="1694" height="1874" /%}

Failure to set the environment variables will result in the project not working correctly.

## Deploying to Vercel Edge Functions

If you want to deploy the project with Edge Functions, then the same steps as Cloudflare apply.

Please follow the same steps as for [Cloudflare](cloudflare) and then deploy the project to Vercel.

1. Switch to an HTTP-based mailer (Cloudflare Mailer or Resend Mailer)
2. Switch to a remote CMS (Wordpress or Keystatic Github mode)

The above should be all! By following the steps, you should be able to deploy the React Router SaaS boilerplate to Vercel's Edge Functions with zero cold starts, better speed and lower costs!

Please be mindful of the limitations of the Edge runtime:

1. potentially higher latency to your database
2. limited Node.js features
3. limited access to the Node.js ecosystem

If you are fine with the above, then Vercel is a great choice for deploying your React Router SaaS boilerplate.

## I have more apps - how do I deploy them?

Vercel should automatically take care of deploying the app named `web`.

If you have multiple apps, you may need to customize the build command to point to the app being deployed.

```
cd ../.. && turbo run build --filter=<app-name>
```

Please replace `<app-name>` with the name of the app you want to deploy.

For more info refer to the [Vercel documentation](https://vercel.com/docs/monorepos/turborepo).
