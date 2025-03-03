---
status: "published"
label: "Temporary Landing Page"
title: "A temporary minimal landing page for your SaaS"
description: "Looking to ship as quickly as possible? Use the Coming Soon component to showcase your product's progress."
order: 9
---

If you're rushing to launch your SaaS, you can use the Coming Soon component to showcase a minimal landing page for your product and generate buzz before you launch.

{% component path="coming-soon" /%}

My suggestions is to replace the whole `(marketing)` layout using the Coming Soon component.

This will save you a lot of time making sure the landing page and the links are filled with the right information.

```tsx {% title="apps/web/app/(marketing)/layout.tsx" %}
import Link from 'next/link';

import {
  ComingSoon,
  ComingSoonButton,
  ComingSoonHeading,
  ComingSoonLogo,
  ComingSoonText,
} from '@kit/ui/marketing';

import { AppLogo } from '~/components/app-logo';
import appConfig from '~/config/app.config';

export default function SiteLayout() {
  return (
    <ComingSoon>
      <ComingSoonLogo>
        <AppLogo />
      </ComingSoonLogo>

      <ComingSoonHeading>{appConfig.name} is coming soon</ComingSoonHeading>

      <ComingSoonText>
        We&apos;re building something amazing. Our team is working hard to bring
        you a product that will revolutionize how you work.
      </ComingSoonText>

      <ComingSoonButton asChild>
        <Link href="#">Follow Our Progress</Link>
      </ComingSoonButton>

      {/* Additional custom content */}
      <div className="mt-8 flex justify-center gap-4">
        {/* Social icons, etc */}
      </div>
    </ComingSoon>
  );
}
```

Even better, you can use an env variable to check if it's a production build or not and displaying the normal layout during development:

```tsx {% title="apps/web/app/(marketing)/layout.tsx" %}
import Link from 'next/link';

import {
  ComingSoon,
  ComingSoonButton,
  ComingSoonHeading,
  ComingSoonLogo,
  ComingSoonText,
} from '@kit/ui/marketing';

import { SiteFooter } from '~/(marketing)/_components/site-footer';
import { SiteHeader } from '~/(marketing)/_components/site-header';
import { withI18n } from '~/lib/i18n/with-i18n';

import { AppLogo } from '~/components/app-logo';
import appConfig from '~/config/app.config';

function SiteLayout() {
  if (!appConfig.production) {
    return (
      <div className={'flex min-h-[100vh] flex-col'}>
        <SiteHeader />

        {props.children}

        <SiteFooter />
      </div>
    );
  }

  return (
    <ComingSoon>
      <ComingSoonLogo>
        <AppLogo />
      </ComingSoonLogo>

      <ComingSoonHeading>{appConfig.name} is coming soon</ComingSoonHeading>

      <ComingSoonText>
        We&apos;re building something amazing. Our team is working hard to bring
        you a product that will revolutionize how you work.
      </ComingSoonText>

      <ComingSoonButton asChild>
        <Link href="#">Follow Our Progress</Link>
      </ComingSoonButton>

      {/* Additional custom content */}
      <div className="mt-8 flex justify-center gap-4">
        {/* Social icons, etc */}
      </div>
    </ComingSoon>
  );
}

export default withI18n(SiteLayout);
```