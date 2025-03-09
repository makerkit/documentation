---
status: "published"
label: "CMS API"
title: "Introducing the CMS API that allows you to pull content from your CMS | React Router Supabase SaaS Kit"
description: "Introducing the CMS API that allows you to pull content from your CMS"
order: 3
---

To fetch content from your CMS, you can use the CMS API. The CMS API is an interface that allows you to pull content from your CMS and display it on your website. This is useful if you want to display dynamic content on your website that is stored in your CMS.

### Creating a CMS client

To create a CMS client, you can use the `createCmsClient` function. This function returns a client that you can use to fetch content from your CMS.

```tsx
import { createCmsClient } from '@kit/cms';

const client = await createCmsClient();
```

The implementation depends on the CMS you are using. By default, the CMS client uses the `keystatic` CMS. If you are using a different CMS, you can specify the CMS client to use by setting the `CMS_CLIENT` environment variable.

```
CMS_CLIENT=keystatic
```

### Fetching content items

To fetch content items from your CMS, you can use the `getContentItems` function.

```tsx
// import the createCmsClient function
import { createCmsClient } from '@kit/cms';

// create a client
const client = await createCmsClient();

// Fetch content items
const { items, count } = await client.getContentItems({
  collection: 'posts',
});
```

The `getContentItems` function takes an object with the following properties:
1. `collection` - The collection to fetch content items from.
2. `limit` - The number of content items to fetch.
3. `offset` - The offset to start fetching content items from.
4. `language` - The language to fetch content items in.
5. `sortBy` - The field to sort content items by.
6. `sortDirection` - The direction to sort content items in.

```tsx
import { createCmsClient } from '@kit/cms';

const getContentItems = cache(
  async (language: string | undefined, limit: number, offset: number) => {
    const client = await createCmsClient();

    return client.getContentItems({
      collection: 'posts',
      limit,
      offset,
      language,
      sortBy: 'publishedAt',
      sortDirection: 'desc',
    });
  },
);
```

NB: how these values are used is entirely dependent on the CMS you are using. For example, Wordpress will only support `posts` or `pages` as collections.

Additionally: how the language filtering is implemented is also dependent on the CMS you are using.

### Fetching a single content item

To fetch a single content item from your CMS, you can use the `getContentItemBySlug` function.

```tsx
import { createCmsClient } from '@kit/cms';

const client = await createCmsClient();

// Fetch a single content item
const item = await client.getContentItemBySlug({
  slug: 'hello-world',
  collection: 'posts'
});
```

The `getContentItemBySlug` function takes an object with the following properties:

1. `slug` - The slug of the content item to fetch.
2. `collection` - The collection to fetch the content item from.

#### Rendering pages using content from your CMS

You can use the `getContentItemBySlug` function to fetch content from your CMS and render pages using that content.

For example, if you want to store your Terms and Conditions in your CMS, you can fetch the content item for the Terms and Conditions page and render the page using that content.

{% alert type="info" title="Create the 'pages' collection in your CMS" %}
This example assumes that you have created the 'pages' collection in your CMS. By default, the kit includes the `posts` and `documents` collections.
{% alert /%}

```tsx
import { createCmsClient } from '@kit/cms';

async function TermsAndConditionsPage() {
  const client = await createCmsClient();

  const { content, title } = await client.getContentItemBySlug({
    slug: 'terms-and-conditions',
    collection: 'pages',
  });

  return (
    <div>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
}
```