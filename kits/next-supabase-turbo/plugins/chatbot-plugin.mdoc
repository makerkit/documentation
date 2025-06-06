---
status: "published"
title: 'Add an AI Chatbot to the Next.js Supabase SaaS Starter kit'
label: 'AI Chatbot'
order: 4
description: 'Add an AI chatbot to your Next.js Supabase SaaS Starter kit to provide instant support to your users.'
---

This plugin allows you to create a chatbot for your app. Users can interact with the chatbot to get information about
your app.

The chatbot will index your app's content and provide answers to user queries.

## Installation

Install the chatbot plugin from your main app:

```bash
npx @makerkit/cli plugins install chatbot
```

Now, install the plugin from your main app by adding the following to your `package.json` file:

 ```json {% title="apps/web/package.json" %}
{
  "dependencies": {
    "@kit/chatbot": "workspace:*"
  }
}
```

And then run `pnpm install` to install the plugin.

## Import the Chatbot component

You can now import the Chatbot component in your app:

```tsx
import { Chatbot } from '@kit/chatbot';

<Chatbot sitename={'Makerkit'} />
```

## Create the API route handler

You can add this anywhere since it's configurable, but my suggestion is to add it to the `api/chat` directory. Create a new file called `route.ts` at `apps/web/app/api/chat/route.ts`:

```ts
import { handleChatBotRequest } from '@kit/chatbot/server';

export const POST = handleChatBotRequest;
```

If you use a different path, please set the `NEXT_PUBLIC_CHATBOT_API_URL` environment variable:

```bash
NEXT_PUBLIC_CHATBOT_API_URL=/api/some-other-path
```

## Add the Migration file

Copy the migration file at `packages/plugins/chatbot/migrations` into your apps migration directory at `apps/web/supabase/migrations`.

Make sure to reset the database after copying the migration file and make sure to push this to your remote instance.

### Tailwind CSS Styles

If using TailwindCSS v3, please update the Tailwind CSS styles to include the new folder:

```js { % title="tooling/tailwind/index.ts" %}
export default {
  darkMode: ['class'],
  content: [
    '../../packages/ui/src/**/*.tsx',
    '../../packages/billing/gateway/src/**/*.tsx',
    '../../packages/features/auth/src/**/*.tsx',
    '../../packages/features/notifications/src/**/*.tsx',
    '../../packages/features/admin/src/**/*.tsx',
    '../../packages/features/accounts/src/**/*.tsx',
    '../../packages/features/team-accounts/src/**/*.tsx',
    '../../packages/plugins/chatbot/src/**/*.tsx'  // <-- add this line
    '!**/node_modules',
  ],
  // ...
};
```

The above is not required if you are using TailwindCSS v4.

If using TailwindCSS v4, please add the following style to `apps/wer/styles/globals.css`:

```css {% title="apps/web/styles/globals.css" %}
@import '@kit/chatbot/style';
```

## Configuration

The Chatbot component accepts the following props:

```tsx
interface ChatBotProps {
    siteName: string;

    conversationId?: string;
    defaultPrompts?: string[];
    isOpen?: boolean;
    isDisabled?: boolean;
    settings?: ChatbotSettings;
    storageKey?: string;

    onClear?: () => void;
    onMessage?: (message: string) => void;
}
```

## Customizing the Chatbot

You can customize the chatbot by providing a `settings` object:

```tsx
type Position = `bottom-left` | `bottom-right`;

interface Branding {
    primaryColor: string;
    accentColor: string;
    textColor: string;
}

export interface ChatbotSettings {
    title: string;
    order: Position;
    branding: Branding;
}
```

For example:

```tsx
<Chatbot
    settings={{
        title: 'Chat with us',
        order: 'bottom-right',
        branding: {
            primaryColor: '#000',
            accentColor: '#000',
            textColor: '#fff',
        },
    }}
/>
```

## Indexing Content

At this time - the Chatbot will crawl your app's content and index it - by reading the sitemap.xml file.

The crawler will infer the sitemap.xml from the website's robots.txt file. Otherwise, you can provide the sitemap.xml
URL using the `CHATBOT_WEBSITE_SITEMAP_URL` environment variable.

```bash
CHATBOT_WEBSITE_SITEMAP_URL=https://example.com/sitemap.xml
```

To index your website's content, the chatbot will read the `sitemap.xml` file. If the sitemap of your website is not located at `/sitemap.xml`, you can set the `CHATBOT_WEBSITE_SITEMAP_URL` environment variable to the correct URL.

```bash
CHATBOT_WEBSITE_SITEMAP_URL=https://example.com/my-sitemap.xml
```

To launch the chatbot crawler, run the command:

```bash
pnpm --filter chatbot indexer -- --url <url> --include <include-paths> --exclude <excluded-paths>
```

For example:

```bash
pnpm --filter chatbot indexer -- --url https://example.com --include /docs,/blog --exclude /blog/secret
```

The `--url` flag is required and should point to the website's root URL. The `--include` and `--exclude` flags are optional and should be comma-separated paths.

It's highly recommended to include the `--exclude` flag to prevent the chatbot from indexing way too many pages or stuff you don't want to be indexed.

## Environment Variables

### Chatbot Configuration

You can customize the chatbot model by providing the following environment variables at `apps/web/.env.local`:

```bash {% title="apps/web/.env.local" %}
LLM_MODEL_NAME=gpt-3.5-turbo
LLM_BASE_URL=
LLM_API_KEY=
```

The model needs to be compatible with the OpenAI API.

1. `LLM_MODEL_NAME` - The model name to use. For example, `gpt-3.5-turbo`.
2. `LLM_BASE_URL` - The base URL for the API. For example, `https://api.openai.com/v1`. If you use OpenAI, you can leave this empty.
3. `LLM_API_KEY` - The API key to use. You can get this from OpenAI.

If you use an OpenAI-compatible model, you can set the `LLM_BASE_URL` to the URL of the API. Otherwise, you can leave it empty.

### Chatbot Indexer

In addition, we need to provide the following environment variables for the chatbot indexer:

{% alert type="info" %}
The chatbot indexer is a separate service that indexes your app's content and provides answers to user queries. As such, the `.env.local` file is located in the `packages/plugins/chatbot` directory, not in `apps/web`.
{% /alert %}

``` bash {% title="packages/plugins/chatbot/.env.local" %}
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SUPABASE_URL=
LLM_MODEL_NAME=
LLM_BASE_URL=
LLM_API_KEY=
```

1. `SUPABASE_SERVICE_ROLE_KEY` - The service role key for the Supabase instance.
2. `NEXT_PUBLIC_SUPABASE_URL` - The URL of the Supabase instance.

By adjusting these variables, you can choose which Supabase instance to use for the chatbot indexer. Normally, you would use the same Supabase instance as your app.

You can also use your local Supabase instance for development purposes.

In that case, these values would be the same ones you're using for your app's Supabase instance in `apps/web/.env.development`.
