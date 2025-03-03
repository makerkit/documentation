---
status: "published"
title: 'Add a Feedback Widget plugin to your Next.js Supabase SaaS Starter kit'
label: 'Feedback Widget'
order: 5
description: 'Add a Feedback Widget plugin to your Next.js Supabase SaaS Starter kit'
---


This plugin is a lighter version of the Roadmap plugin. It is recommended to install the Roadmap plugin if you need more features.

The feedback plugin allows you to add a feedback widget to your app. Users can provide feedback on your app, and you can view and manage feedback submissions in the admin panel.

### Installation

Pull the plugin from the main repository:

```
npx @makerkit/cli@latest plugins install feedback
```

Now, install the plugin from your main app by adding the following to your `package.json` file:

 ```json {% title="apps/web/package.json" %}
{
  "dependencies": {
    "@kit/feedback": "workspace:*"
  }
}
```

And then run `pnpm install` to install the plugin.

### Add the translations

Add the following to your `apps/web/public/locales/en/feedback.json` file:

 ```json {% title="apps/web/locales/en.json" %}
{
  "successTitle": "Thank you for your feedback!",
  "close": "Close",
  "errorTitle": "Sorry, Something went wrong!",
  "errorDescription": "Please try again later or contact us directly.",
  "contactUs": "Contact us about...",
  "email": "Email",
  "feedback": "Feedback",
  "question": "Question",
  "bug": "Bug",
  "send": "Send",
  "sending": "Sending...",
  "attachFileOrScreenshot": "Attach file or screenshot",
  "feedbackPlaceholder": "What do you like or dislike? What can we do better?",
  "questionPlaceholder": "Ask us anything",
  "bugPlaceholder": "What happened? What were you expecting to happen?",
  "uploadImage": "Upload Image"
}
```

Now, add the namespace to the loaded translations in your `apps/web/lib/i18n/i18n.settings.ts` file:

 ```tsx {% title="apps/web/lib/i18n/i18n.settings.ts" %}
export const defaultI18nNamespaces = [
  'common',
  'auth',
  'account',
  'teams',
  'billing',
  'marketing',

  // Add the feedback namespace
  'feedback',
];
```

### Add the migrations

Since the feedback relies on a new table in the database, you will need to run the migrations to create the table. Please create a new migration file:

```
pnpm --filter web supabase migration new feedback
```

And copy the content of the migration file from the plugin repository to your new migration file.

Run the reset command to apply the migration:

```
pnpm run supabase:web:reset
```

### Import the component

Now, you can import the component from the plugin:

```tsx
import { FeedbackPopup } from '@kit/feedback';
```

And use it in your app:

```tsx
<FeedbackPopup>
    <Button>Gimme feedback</Button>
</FeedbackPopup>
```

You can also import the form alone - so you can customize its appearance:

```tsx
import {FeedbackForm} from '@kit/feedback';
```

And use it in your app:

```tsx
<FeedbackForm/>
```

## Adding the Admin Panel pages

Add the following to your `apps/web/admin/feedback/page.tsx` file:

 ```tsx {% title="apps/web/admin/feedback/page.tsx" %}
import { FeedbackSubmissionsPage } from '@kit/feedback/admin';

export default FeedbackSubmissionsPage;
```

And the submission detail page at `apps/web/admin/feedback/[id]/route.tsx`:

 ```tsx {% title="apps/web/admin/feedback/[id]/page.tsx" %}
import { FeedbackSubmissionPage } from '@kit/feedback/admin';

export default FeedbackSubmissionPage;
```

Add the sidebar item to `apps/web/app/admin/_components/admin-sidebar.tsx`:

 ```tsx {% title="apps/web/app/admin/_components/admin-sidebar.tsx" %}
<SidebarItem
    path={'/admin/feedback'}
    Icon={<MessageCircle className={'h-4'} />}
    >
    Feedback
</SidebarItem>
```

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
    '../../packages/plugins/feedback/src/**/*.tsx'  // <-- add this line
    '!**/node_modules',
  ],
  // ...
};
```

The above is not required if you are using TailwindCSS v4.