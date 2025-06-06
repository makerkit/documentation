---
status: "published"
title: "Using translations in your Next.js Supabase project"
label: "Using translations"
description: "Makerkit uses i18next to translate your project into multiple languages. This guide will show you how to use translations in your Next.js Supabase project."
order: 0
---

Makerkit uses the library `i18next` for translations, but it's abstracted behind the `@kit/i18n` package. This abstraction ensures that any future changes to the translation library won't impact your code.

{% sequence title="Steps to use translations" description="Learn how to use translations in your Next.js Supabase project." %}

[Using Translations in your Next.js Supabase Project](#using-translations-in-your-nextjs-supabase-project)

[Initializing i18n in Server Components](#initializing-i18n-in-server-components)

[Using Translations in Client Components](#using-translations-in-client-components)

{% /sequence %}

The translation system in Makerkit is versatile and can be used in:

1. Server components (RSC)
2. Client components
3. Server-side rendering

## Using Translations in your Next.js Supabase Project

The guide below will show you how to use translations in your Next.js Supabase project in all the scenarios mentioned above.

### Initializing i18n in Server Components

When creating a new page, ensure to wrap it with the `withI18n` function. This function initializes the translations before rendering the server component.

Given that server components are rendered in parallel, it's uncertain which one will render first. Therefore, it's crucial to initialize the translations before rendering the server component on each page/layout.

```tsx
import { withI18n } from '~/lib/i18n/with-i18n';

const Page = () => {
  return <div>My page</div>;
};

export default withI18n(Page);
```

### Implementing Translations in Server Components

After initializing the translations, you can use the `Trans` component to translate strings in your server components.

```tsx
import { Trans } from '@kit/ui';

const Page = () => {
  return (
    <div>
      <Trans i18nKey="auth:signIn" />
    </div>
  );
};

export default withI18n(Page);
```

Ensure to import the `Trans` component from `@kit/ui` and not directly from `react-i18next`.

## Using Translations in Client Components

Besides simply using the `Trans` component, you can also use the `useTranslation` hook to translate strings in your client components.

### Using the useTranslation Hook

The `useTranslation` hook is another way to translate strings in components that are not in the render path.

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <div>{t('auth:signIn')}</div>;
};
```

### Conclusion

By following these steps, you can easily add translations to your Next.js Supabase project. This approach ensures that your application is accessible to a global audience, providing a better user experience for all users.