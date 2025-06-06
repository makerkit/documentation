---
status: "published"
title: "Deploy Next.js Supabase to Vercel"
label: "Deploy to Vercel"
order: 5
description: "This gude will help you deploy the Next.js SaaS boilerplate to Vercel - the native platform for deploying Next.js applications."
---

{% sequence title="How to deploy the Next.js SaaS boilerplate to Vercel" description="This gude will help you deploy the Next.js SaaS boilerplate to Vercel - the native platform for deploying Next.js applications." %}

[Connect your Repository to Vercel](#connect-your-repository-to-vercel)

[Configure Environment Variables](#configure-environment-variables)

[Deploy the Project](#deploy-the-project)

[Troubleshooting](#troubleshooting)

[Deploying to Vercel Edge Functions](#deploying-to-vercel-edge-functions)

[I have more apps - how do I deploy them?](#i-have-more-apps---how-do-i-deploy-them)

{% /sequence %}

Deploying to Vercel should be straightforward. You can deploy the Next.js SaaS boilerplate to Vercel by following these steps:

## Connect your Repository to Vercel

{% img src="/assets/images/docs/vercel-turbo-preset.webp" width="1744" height="854" /%}

As you can see in the image, please make sure to:
1. use Next.js as the framework preset
2. point the root directory to the `apps/web` folder

{% alert type="warning" %}
Please don't miss the steps above - they are crucial for the project to deploy correctly.
{% /alert %}

## Configure Environment Variables

The first time this may fail if you don't yet have a custom domain connected since you cannot place it in the environment variables yet. It's fine. Make the first deployment fail, then pick the domain and add it. Redeploy.

Please make sure to set all the environment variables required for the project to work correctly.

A production deployment should be setting the below environment variables:

{% img src="/assets/images/docs/vercel-env-variables-turbo.webp" width="1694" height="1874" /%}

Failure to set the environment variables will result in the project not working correctly.

If the build fails, deep dive into the logs to see what is the issue. Our Zod configuration will validate and report any missing environment variables. To find out which environment variables are missing, please check the logs.

## Deploy the Project

Vercel should be able to automatically infer the project settings and deploy it correctly.

### Troubleshooting

In some cases, users have reported issues with the deployment to Vercel using the default parameters. If this is the case, please try the following:

1. Make sure to set the root directory to `apps/web`
2. Make sure to set the preset to Next.js
3. Manually enter the commands for installing and running the build, respectively: `pnpm i` for installing and `pnpm run build` for building the project. This is the case when Vercel tries to use `npm` instead of `pnpm`.

If the above steps don't work, please check the logs and see what the issue is. The logs should give you a hint on what is wrong.

## Deploying to Vercel Edge Functions

If you want to deploy the project with Edge Functions, then the same steps as Cloudflare apply.

Please follow the same steps as for [Cloudflare](cloudflare) and then deploy the project to Vercel.

1. Switch to an HTTP-based mailer (Cloudflare Mailer or Resend Mailer)
2. Switch to a remote CMS (Wordpress or Keystatic Github mode)

The above should be all! By following the steps, you should be able to deploy the Next.js SaaS boilerplate to Vercel's Edge Functions with zero cold starts, better speed and lower costs!

Please be mindful of the limitations of the Edge runtime:

1. potentially higher latency to your database
2. limited Node.js features
3. limited access to the Node.js ecosystem

If you are fine with the above, then Vercel is a great choice for deploying your Next.js SaaS boilerplate.

## I have more apps - how do I deploy them?

Vercel should automatically take care of deploying the app named `web`.

If you have multiple apps, you may need to customize the build command to point to the app being deployed.

```
cd ../.. && turbo run build --filter=<app-name>
```

Please replace `<app-name>` with the name of the app you want to deploy.

For more info refer to the [Vercel documentation](https://vercel.com/docs/monorepos/turborepo).
