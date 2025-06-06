---
status: "published"
label: 'RBAC: Roles and Permissions'
title: 'RBAC: Understanding roles and permissions in Next.js Supabase'
description: 'Learn how to implement roles and permissions in Next.js Supabase'
order: 6
---

{% sequence title="How to implement roles and permissions" description="Learn how to implement roles and permissions in Next.js Supabase" %}

[Roles and Permissions tables](#roles-and-permissions-tables)

[Hierarchy levels](#hierarchy-levels)

[Adding new permissions](#adding-new-permissions)

[Default roles and permissions](#default-roles-and-permissions)

[Adding new roles and permissions](#adding-new-roles-and-permissions)

[Using roles and permissions in RLS](#using-roles-and-permissions-in-rls)

[Using roles and permissions in application code](#using-roles-and-permissions-in-application-code)

[Using permissions client-side](#using-permissions-client-side)

{% /sequence %}

Makerkit implements granular RBAC for team members. This allows you to define roles and permissions for each team member - giving you fine-grained control over who can access what.

## Roles and Permissions tables

Makerkit implements two tables for roles and permissions:

- `roles` table: This table stores the roles for each team member.
- `role_permissions` table: This table stores the permissions for each role.

## The "role_permissions" table

The table `role_permissions` has the following schema:

- `id`: The unique identifier for the role permission.
- `role`: The role for the team member.
- `permission`: The permission for the role.

## The "roles" table

The `roles` table has the following schema:

- `name`: The name of the role. This must be unique.
- `hierarchy_level`: The hierarchy level of the role.

### Hierarchy levels
We can use `hierarchy_level` to define the hierarchy of roles. For example, an `admin` role can have a higher hierarchy level than a `member` role. This will help you understand if a role has more permissions than another role.

### Adding new permissions

To add new permissions, we can use an enum for permissions `app_permissions`:

- `app_permissions` enum: This enum stores the permissions for each role.

By default, Makerkit comes with two roles: `owner` and `member` - and the following permissions:

```sql
create type public.app_permissions as enum(
  'roles.manage',
  'billing.manage',
  'settings.manage',
  'members.manage',
  'invites.manage'
);
```

You can add more roles and permissions as needed.

### Default roles and permissions

The default roles are defined as follows:

1. Members with `owner` role have full access to the application.
2. Members with `member` role have the following permissions: `members.manage` and `invites.manage`.

### Adding new roles and permissions

To add new permissions, you can update the `app_permissions` enum:

```sql
-- insert new permissions
alter type public.app_permissions add value 'tasks.write';
alter type public.app_permissions add value 'tasks.delete';
commit;
```

In the above, we added two new permissions: `tasks.write` and `tasks.delete`.

You can assign these permissions to roles in the `role_permissions` table for fine-grained access control:

```sql
insert into public.role_permissions (role, permission) values ('owner', 'tasks.write');
insert into public.role_permissions (role, permission) values ('owner', 'tasks.delete');
```

Of course - you will need to enforce these permissions in your application code and RLS.

### Using roles and permissions in RLS

To check if a user has a certain permission on an account, we can use the function `has_permission` - which you can use in your RLS to enforce permissions.

In the below, we create an RLS policy `insert_tasks` on the `tasks` table to check if a user can insert a new task. We use `public.has_permission` to check if the current user has the permission `tasks.write`:

```sql
create policy insert_tasks on public.tasks
    for insert
    to authenticated
    with check (
        public.has_permission(auth.uid(), account_id, 'tasks.write'::app_permissions)
    );
```

And now we can also add a policy to check if a user can delete a task:

```sql
create policy delete_tasks on public.tasks
    for delete
    to authenticated
    using (
        public.has_permission(auth.uid(), account_id, 'tasks.delete'::app_permissions)
    );
```

### Using roles and permissions in application code

You can use the exact same function `has_permission` in your application code to check if a user has a certain permission. You will call the function with the Supabase RPC method:

```tsx
async function hasPermissionToInsertTask(userId: string, accountId: string) {
  const { data: hasPermission, error } = await client.rpc('has_permission', {
    user_id: userId,
    account_id: accountId,
    permission: 'tasks.write',
  });

  if (error || !hasPermission) {
    throw new Error(`User has no permission to insert task`);
  }
}
```

You can now use `hasPermissionToInsertTask` to check if a user has permission to insert a task anywhere in your application code - provided you obtain the user and account IDs.

You can use this function to gate access to certain pages, or verify the user permissions before performing some server-side requests.

Of course, it's always worth making sure RLS is enforced on the database level as well.

### Using permissions client-side

While checks must be done always server-side, it is useful to have the permissions available client-side for UI purposes. For example, you may want to hide a certain button if the user does not have the permission to perform an action.

We fetch the permissions as part of the [Account Workspace API](account-workspace-api) - which is available to the layout around the account routes.

This API fetches the permissions for the current user and account and makes them available to the client-side simply by passing it from a page to the client components that require it.

Let's assume you have a page, and you want to check if the user has the permission to write tasks:

```tsx
import { loadTeamWorkspace } from '~/home/[account]/_lib/server/team-account-workspace.loader';

export default function TasksPage() {
  const data = await loadTeamWorkspace();
  const permissions = data.account.permissions; // string[]

  const canWriteTasks = permissions.includes('tasks.write');

  return (
    <div>
      {canWriteTasks && <button>Create Task</button>}
      // other UI elements // ...
    </div>
  );
}
```

You can also pass the permissions list to the components that need it as a prop.

This way, you can gate access to certain UI elements based on the user's permissions.

```tsx
import { loadTeamWorkspace } from '~/home/[account]/_lib/server/team-account-workspace.loader';

export default function TasksPage() {
  const data = await loadTeamWorkspace();
  const permissions = data.account.permissions; // string[]

  return (
    <div>
      <TaskList permissions={permissions} />
    </div>
  );
}
```

Similarly, you can use the permissions to gate access to certain routes or pages.

```tsx
import { loadTeamWorkspace } from '~/home/[account]/_lib/server/team-account-workspace.loader';

export default function TasksPage() {
  const data = await loadTeamWorkspace();
  const permissions = data.account.permissions; // string[]

  if (!permissions.includes('tasks.read')) {
    return <ErrorPage message="You do not have permission to write tasks" />;
  }

  return (
    <div>
      <TaskList permissions={permissions} />
    </div>
  );
}
```

Easy as that!
