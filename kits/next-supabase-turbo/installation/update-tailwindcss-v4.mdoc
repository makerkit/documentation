---
status: "published"
title: "Guidelines for updating Makerkit to Tailwind CSS v4"
label: "Updating to Tailwind CSS v4"
order: 9
description: "A guide to updating Makerkit to Tailwind CSS v4. All you need to know to migrate your codebase to the latest Tailwind CSS version."
---

Makerkit was originally built with Tailwind CSS v3, and has since been updated to Tailwind CSS v4. This guide will walk you through the changes and migration steps required to update your codebase to the latest version should you choose to update manually.

If you don't want to update manually, please pull the latest changes from Makerkit. You can use the below as a reference for the changes you need to make for the code you've written so far.

## Major Changes Overview

1. **Tailwind CSS Version Update**: Upgraded from v3.4.17 to v4.0.0
2. **CSS Architecture**: Moved to a component-based CSS architecture with separate stylesheets
3. **File Structure**: Reorganized CSS files into modular components
4. **Styling Changes**: Updated various UI components with new styling patterns

## File Structure Changes

The CSS structure has been reorganized into multiple files:

```txt {% title="apps/web/styles/*.css" %}
styles/
├── globals.css
├── theme.css
├── theme.utilities.css
├── shadcn-ui.css
├── markdoc.css
└── makerkit.css
```

1. `globals.css`: Global styles for the entire application
2. `theme.css`: Theme variables and colors
3. `theme.utilities.css`: Utility classes for the theme
4. `shadcn-ui.css`: ShadcN UI specific styles
5. `markdoc.css`: Markdown/documentation styles
6. `makerkit.css`: Makerkit specific components

### Retaining your existing styles

If you wish to kee your existing theme colors, please update the `shadcn-ui.css` file and keep the same variables for the theme.

NB: you have to use the `hsl` function to update the theme colors.

```css {% title="apps/web/styles/shadcn-ui.css" %}
@layer base {
  :root {
    --background: hsl(0 0% 100%);
    --foreground: hsl(224 71.4% 4.1%);
    --card: hsl(0 0% 100%);
    --card-foreground: hsl(224 71.4% 4.1%);
    --popover: hsl(0 0% 100%);
    --popover-foreground: hsl(224 71.4% 4.1%);
    --primary: hsl(220.9 39.3% 11%);
    --primary-foreground: hsl(210 20% 98%);
    --secondary: hsl(220 14.3% 95.9%);
    --secondary-foreground: hsl(220.9 39.3% 11%);
    --muted: hsl(220 14.3% 95.9%);
    --muted-foreground: hsl(220 8.9% 46.1%);
    --accent: hsl(220 14.3% 95.9%);
    --accent-foreground: hsl(220.9 39.3% 11%);
    --destructive: hsl(0 84.2% 60.2%);
    --destructive-foreground: hsl(210 20% 98%);
    --border: hsl(214.3 31.8% 94.4%);
    --input: hsl(214.3 31.8% 91.4%);
    --ring: hsl(224 71.4% 4.1%);
    --radius: 0.5rem;

    --chart-1: hsl(12 76% 61%);
    --chart-2: hsl(173 58% 39%);
    --chart-3: hsl(197 37% 24%);
    --chart-4: hsl(43 74% 66%);
    --chart-5: hsl(27 87% 67%);

    --sidebar-background: hsl(0 0% 98%);
    --sidebar-foreground: hsl(240 5.3% 26.1%);
    --sidebar-primary: hsl(240 5.9% 10%);
    --sidebar-primary-foreground: hsl(0 0% 98%);
    --sidebar-accent: hsl(240 4.8% 95.9%);
    --sidebar-accent-foreground: hsl(240 5.9% 10%);
    --sidebar-border: hsl(220 13% 91%);
    --sidebar-ring: hsl(217.2 91.2% 59.8%);
  }

  .dark {
    --background: hsl(224 71.4% 4.1%);
    --foreground: hsl(210 20% 98%);
    --card: hsl(224 71.4% 4.1%);
    --card-foreground: hsl(210 20% 98%);
    --popover: hsl(224 71.4% 4.1%);
    --popover-foreground: hsl(210 20% 98%);
    --primary: hsl(210 20% 98%);
    --primary-foreground: hsl(220.9 39.3% 11%);
    --secondary: hsl(215 27.9% 13%);
    --secondary-foreground: hsl(210 20% 98%);
    --muted: hsl(215 27.9% 13%);
    --muted-foreground: hsl(217.9 10.6% 64.9%);
    --accent: hsl(215 27.9% 13%);
    --accent-foreground: hsl(210 20% 98%);
    --destructive: hsl(0 62.8% 30.6%);
    --destructive-foreground: hsl(210 20% 98%);
    --border: hsl(215 27.9% 13%);
    --input: hsl(215 27.9% 13%);
    --ring: hsl(216 12.2% 83.9%);

    --chart-1: hsl(220 70% 50%);
    --chart-2: hsl(160 60% 45%);
    --chart-3: hsl(30 80% 55%);
    --chart-4: hsl(280 65% 60%);
    --chart-5: hsl(340 75% 55%);

    --sidebar-background: hsl(224 71.4% 4.1%);
    --sidebar-foreground: hsl(240 4.8% 95.9%);
    --sidebar-primary: hsl(224.3 76.3% 48%);
    --sidebar-primary-foreground: hsl(0 0% 100%);
    --sidebar-accent: hsl(215 27.9% 13%);
    --sidebar-accent-foreground: hsl(240 4.8% 95.9%);
    --sidebar-border: hsl(240 3.7% 15.9%);
    --sidebar-ring: hsl(217.2 91.2% 59.8%);
  }
}
```

## Breaking Changes

### 1. Class Name Updates

- Replace `space-x-` and `space-y-` with `gap-x-` and `gap-y-`
- Update shadow utilities:
- `shadow` → `shadow-xs`
- `shadow-sm` → `shadow-xs`
- `shadow-lg` → `shadow-xl`

NB: the spacing has changed from v3 using dynamic spacing, so you may need to update your custom spacing values.

### 2. Border Radius Changes

- Update rounded utilities:
- `rounded-sm` → `rounded-xs`
- Keep other rounded values the same

### 3. Color System Changes

- The theme has been updated with a better looking color system, especially on dark mode

### 4. Layout Updates

- Flex gap spacing:
- Replace `space-x-` with `gap-x-`
- Replace `space-y-` with `gap-y-`

### 5. Container Changes

```css
/* Old */
.container {
  @apply max-sm:px-4;
}

/* New */
@utility container {
  margin-inline: auto;
  @apply xl:max-w-[80rem] px-8;
}
```

1. **Outline Utilities**
```css
/* Old */
focus:outline-none

/* New */
focus:outline-hidden
```

2. **Shadow Utilities**
```css
/* Old */
shadow-sm

/* New */
shadow-xs
```

## Migration Steps

1. **Update Dependencies**
```json
{
  "dependencies": {
    "tailwindcss": "4.0.0",
    "@tailwindcss/postcss": "^4.0.0"
  }
}
```

The `tailwindcss-animate` dependency is now part of `apps/web/package.json` and should be removed from `package.json` in the Tailwind CSS v4 upgrade.

2. **Update PostCSS Config**
```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

3. **CSS Files**
- Move existing global styles to appropriate new CSS files
- Update import statements to include new CSS files
- Remove old tailwind.config.ts and replace with new CSS structure

4. **Component Updates**
- Review all components using spacing utilities
- Update shadow utilities
- Review and update color usage
- Update flex and grid gap utilities

## Testing Checklist

- [ ] Verify all components render correctly
- [ ] Check responsive layouts
- [ ] Test dark mode functionality
- [ ] Verify shadow and elevation styles
- [ ] Test container layouts
- [ ] Verify color system implementation
- [ ] Check form component styling
- [ ] Test navigation components
- [ ] Verify modal and overlay styling
- [ ] Check typography scaling

## Additional Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)