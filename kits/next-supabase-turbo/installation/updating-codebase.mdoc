---
status: "published"
title: "Updating your Next.js Supabase Turbo Starter Kit"
label: "Updating the Codebase"
order: 6
description: "Learn how to update your Next.js Supabase Turbo Starter Kit to the latest version."
---

This guide will walk you through the process of updating your codebase by pulling the latest changes from the GitHub repository and merging them into your project. This ensures you're always equipped with the latest features and bug fixes.

If you've been following along with our previous guides, you should already have a Git repository set up for your project, with an `upstream` remote pointing to the original repository.

Updating your project involves fetching the latest changes from the `upstream` remote and merging them into your project. Let's dive into the steps!

{% sequence title="Steps to update your codebase" description="Learn how to update your Next.js Supabase Turbo Starter Kit to the latest version." %}
[Stashing your changes (if any)](#0.-stashing-your-changes-(if-any))

[Refresh the `upstream` remote](#1.-refresh-the-remote)

[Resolve any conflicts](#2.-resolve-any-conflicts)

[Run a health check on your project](#run-a-health-check-on-your-project-after-resolving-conflicts)

[Merge the changes](#3.-merge-the-changes)
{% /sequence %}

## 0. Stashing your changes (if any)

If you have uncommited changes, before updating your project, it's a good idea to stash your changes to avoid any conflicts during the update process. You can stash your changes by running:

```bash
git stash
```

This will save your changes temporarily, allowing you to update your project without any conflicts. Once you've updated your project, you can apply your changes back by running:

```bash
git stash pop
```

If you don't have any changes to stash, you can skip this step and proceed with the update process. 🛅

Alternatively, you can commit your changes.

## 1. Refresh the `upstream` remote

Create a new branch for your updates from the `main` branch:

```bash
git checkout -b update-codebase-<date>
```

In this way, you can keep track of your updates and visualize the changes in the branch before merging them into your main branch.

Now, fetch the latest changes from the `upstream` remote. You can do this by running the following command:

```bash
git pull upstream main
```

When prompted the first time, please opt for **merging instead of rebasing**.

Now, run `pnpm i` to update the dependencies:

```bash
pnpm i
```

## 2. Resolve any conflicts

Encountered conflicts during the merge? No worries! You'll need to resolve them manually. Git will highlight the files with conflicts, and you can edit them to resolve the issues.

### 2.1 Conflicts in the lock file "pnpm-lock.yaml"

If you find conflicts in the `pnpm-lock.yaml` file, accept either of the two changes (avoid manual edits), then run:

```bash
pnpm i
```

Your lock file will now reflect both your changes and the updates from the `upstream` repository. 🎉

### 2.2 Conflicts in the DB types "database.types.ts"

Your types might differ from those in the `upstream` repository, so you'll need to rebuild them and accept the latest state of the DB.

To do this, first you want to reset the DB to apply the latest changes from the `upstream` repository:

```bash
npm run supabase:web:reset
```

Next, regenerate the types with the following command:

```bash
npm run supabase:web:typegen
```

Your types will now reflect the changes from both the `upstream` repository and your project. 🚀

### Run a health check on your project after resolving conflicts

After resolving the conflicts, it's time to test your project to ensure everything is working as expected. Run your project locally and navigate through the various features to verify that everything is functioning correctly.

You can run the following commands for a quick health check:

```bash
pnpm run typecheck
```

And lint your code with:

```bash
pnpm run lint
```

## 3. Merge the changes

If everything looks good, commit the changes and push them to your remote repository:

```bash
git commit -m "COMMIT_MESSAGE"
git push origin update-codebase-<date>
```

Once the changes are pushed, you can create a pull request to merge the changes into the `main` branch, assuming all is working fine.

Your project is now up to date with the latest changes from the `upstream` repository. 🎉