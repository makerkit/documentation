---
status: "published"
label: "Team Account Navigation Configuration"
title: "Setting your team account navigation configuration | React Router Supabase SaaS Kit"
description: "Learn how to setup the team account navigation of your React Router Supabase application"
order: 6
---

The team account navigation is set at `apps/web/config/team-account-navigation.config.tsx`. We use this configuration to define the menu of the team account. By default, it has four routes: dashboard, settings, members, and billing (if enabled).

We define it in one place so we can build different views at once (for example, the mobile menu).

**Please update this file to add more routes to the sidebar.**

 ```tsx {% title="apps/web/config/team-account-navigation.config.tsx" %}
const getRoutes = (account: string) => [
  {
    label: 'common:dashboardTabLabel',
    path: pathsConfig.app.accountHome.replace('[account]', account),
    Icon: <LayoutDashboard className={iconClasses} />,
    end: true,
  },
  {
    label: 'common:settingsTabLabel',
    collapsible: false,
    children: [
      {
        label: 'common:settingsTabLabel',
        path: createPath(pathsConfig.app.accountSettings, account),
        Icon: <Settings className={iconClasses} />,
      },
      {
        label: 'common:accountMembers',
        path: createPath(pathsConfig.app.accountMembers, account),
        Icon: <Users className={iconClasses} />,
      },
      featureFlagsConfig.enableTeamAccountBilling
        ? {
            label: 'common:billingTabLabel',
            path: createPath(pathsConfig.app.accountBilling, account),
            Icon: <CreditCard className={iconClasses} />,
          }
        : undefined,
    ].filter(Boolean),
  },
];

export function getTeamAccountSidebarConfig(account: string) {
  return SidebarConfigSchema.parse({
    routes: getRoutes(account),
    style: import.meta.env.VITE_TEAM_NAVIGATION_STYLE,
  });
}

function createPath(path: string, account: string) {
  return path.replace('[account]', account);
}
```

You can choose the style of the navigation by setting the `VITE_TEAM_NAVIGATION_STYLE` environment variable. The default style is `sidebar`.

```bash
VITE_TEAM_NAVIGATION_STYLE=sidebar
```

Alternatively, you can set the style to `header`:

```bash
VITE_TEAM_NAVIGATION_STYLE=header
```