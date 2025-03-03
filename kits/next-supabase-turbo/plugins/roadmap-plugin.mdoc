---
status: "published"
title: 'Roadmap Plugin in the Next.js Supabase SaaS Starter kit'
label: 'Roadmap Plugin'
order: 2
description: 'Learn how to install the Roadmap plugin in the Next.js Supabase SaaS Starter kit.'
---


This plugin allows you to create a roadmap for your project and display it on your website.

Your users can see what features are planned, in progress, and completed and suggest new features or comment on existing ones.

## Functionality

The plugin provides the following functionality:

1. Display the feature requests on the website.
2. Allow users to suggest new features.
3. Allow users to comment on existing features.
4. Display the Feature Requests in the Admin panel.
5. Allow Admins to manage the Feature Requests, update their status, and delete them.
6. Allow Admins to manage the comments on the Feature Requests.

## Installation

To install the plugin, run the following command:

```bash
npx @makerkit/cli plugins install
```

Since this plugin depends on the Kanban plugin, you need to install both. Please select the `kanban` plugin from the list of available plugins.

Then, please select the `roadmap` plugin from the list of available plugins.

### Add the translations

Add the following to your `apps/web/public/locales/en/roadmap.json` file:

 ```json {% title="apps/web/locales/en.json" %}
{
  "loadingComments": "Loading comments...",
  "noComments": "There are no comments on this feature request yet. Be the first to comment!",
  "comments": "Comments ({{count}})",
  "writtenOn": "Written on {{date}}",
  "loadMoreComments": "Load More Comments",
  "pleaseSignInComment": "Please sign in to leave a comment",
  "pleaseSignIn": "Please sign in to submit a post",
  "pleaseSignInDescription": "You must be signed in to submit a post to the community",
  "submitComment": "Submit Comment",
  "planned": "Planned",
  "inProgress": "In Progress",
  "completed": "Completed",
  "closed": "Closed",
  "underReview": "Under Review",
  "submitPost": "Submit your Post",
  "fillOutForm": "Fill out the form below to submit your post to the community",
  "type": "Type",
  "feature": "Feature",
  "bug": "Bug",
  "question": "Question",
  "task": "Task",
  "title": "Title",
  "titleDescription": "A concise title will help others understand your suggestion",
  "description": "Description",
  "descriptionDescription": "Provide as much detail as possible to help others understand your suggestion or issue",
  "submit": "Submit",
  "cancel": "Cancel",
  "votes": "{{votes}} votes",
  "improvement": "Improvement",
  "noIssues": "No feature requests found. Be the first to suggest a feature!",
  "noIssuesWithFilters": "No issues found with the current filters.",
  "clearFilters": "Clear Filters",
  "all": "All",
  "featureRequests": "Feature Requests",
  "bugReports": "Bug Reports",
  "recentlyCreated": "Recently Created",
  "mostVotes": "Most Votes",
  "allStatuses": "All Statuses",
  "issues": "Issues",
  "roadmap": "Roadmap",
  "heroPill": "Propose a feature, report a bug, or share your ideas",
  "subheading": "A place to share your ideas and collaborate on features."
}
```

Please adjust the translations to your needs.

Now, add the namespace to the loaded translations in your `apps/web/lib/i18n/i18n.settings.ts` file:

 ```tsx {% title="apps/web/lib/i18n/i18n.settings.ts" %}
export const defaultI18nNamespaces = [
  // Add the 'roadmap' namespace
  'roadmap',
];
```

### Migration

Create a new migration file by running the following command:

```bash
pnpm --filter web supabase migration new roadmap
```

And place the content you can see at `packages/plugins/roadmap/migrations/migration.sql` into the newly created file.

Then run the migration:

```bash
pnpm run supabase:web:reset
```

And update the types:

```bash
pnpm run supabase:web:typegen
```

Once the plugin is added to your repository, please install it as a dependency in your application in the package.json file of `apps/web`:

```json
{
    "dependencies": {
      "@kit/roadmap": "workspace:*"
    }
}
```

Now run the following command to install the plugin:

```bash
pnpm i
```

## Displaying the Roadmap and Feature Requests

To display the roadmap and feature requests on your website, add the following code to the `apps/web/app/(marketing)/roadmap/page.tsx` file:

```tsx
import { RoadmapPage } from "@kit/roadmap/server";

export default RoadmapPage;
```

Let's now add the comments GET route at `apps/web/app/(marketing)/roadmap/comments/route.ts`:

```tsx
import { createFetchCommentsRouteHandler } from '@kit/roadmap/route-handler';

export const GET = createFetchCommentsRouteHandler;
```

## Admin Pages

To add the Admin pages from where you can manage the roadmap and feature requests, add the following code to the `apps/web/app/admin/roadmap/page.tsx` file:

```tsx
import { AdminGuard } from '@kit/admin/components/admin-guard';
import { AdminIssuesPage } from '@kit/roadmap/admin';

export default AdminGuard(AdminIssuesPage);
```

And now, we add the feature request's detail page at `apps/web/app/admin/roadmap/[id]/page.tsx`:

```tsx
import { AdminGuard } from '@kit/admin/components/admin-guard';
import { AdminIssueDetailPage } from '@kit/roadmap/admin';

export default AdminGuard(AdminIssueDetailPage);
```

Add the sidebar item as well at `apps/web/app/admin/_components/admin-sidebar.tsx`:

```tsx
<SidebarItem
    path={'/admin/roadmap'}
    Icon={<FolderKanbanIcon className={'h-4'} />}
>
    Roadmap
</SidebarItem>
```

Import the `FolderKanbanIcon` icon from the existing `lucide-react` package.

You can now run the application and navigate to the Admin panel to manage the roadmap and feature requests.

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
    '../../packages/plugins/roadmap/src/**/*.tsx'  // <-- add this line
    '!**/node_modules',
  ],
  // ...
};
```

The above is not required if you are using TailwindCSS v4.