---
title: "Using Actions in React Router Supabase Turbo"
label: "Actions"
description: "Learn how to use the Actions in React Router Supabase Turbo"
position: 2
---

Actions in Makerkit Supabase Turbo follow React Router's pattern, letting you perform server-side operations directly from your components. They provide a clean way to handle form submissions, data mutations, and other server interactions.

## What Are Actions?

Actions are server-side functions that can be triggered from the client. They handle operations like:
- Form submissions
- Data mutations (create, update, delete)
- Authentication flows
- Server-side business logic

## Basic Structure of an Action

Actions are exported from route files and receive a parameter object with:
- `request`: The incoming request object
- Other context information from React Router

```tsx
export const action = async (args: Route.ActionArgs) => {
  // Parse incoming data
  const json = SomeSchema.parse(await args.request.json());

  // Get Supabase client
  const client = getSupabaseServerClient(args.request);

  // Perform different operations based on the "intent"
  switch (json.intent) {
    case 'some-action':
      return doSomething({ client, data: json.payload });

    default:
      return new Response('Invalid action', { status: 400 });
  }
};
```

## Using Actions with Forms

From your components, you can trigger actions using React Router's `useFetcher`:

```tsx
'use client';

import { useFetcher } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function MyForm() {
  const form = useForm({
    resolver: zodResolver(MyFormSchema),
    defaultValues: {
      // Your default values
    },
  });

  const fetcher = useFetcher();
  const pending = fetcher.state === 'submitting';

  return (
    <form
      onSubmit={form.handleSubmit((data) => {
        return fetcher.submit(
          {
            intent: 'my-action-intent',
            payload: data,
          },
          {
            encType: 'application/json',
            method: 'POST',
          },
        );
      })}
    >
      {/* Form fields */}

      <Button type="submit" disabled={pending}>
        {pending ? 'Processing...' : 'Submit'}
      </Button>
    </form>
  );
}
```

## Action Patterns in Makerkit

### The Intent Pattern

Makerkit uses an "intent" pattern to handle multiple actions from a single route:

```tsx
// In your route file
export const action = async (args: Route.ActionArgs) => {
  const json = ActionsSchema.parse(await args.request.json());
  const client = getSupabaseServerClient(args.request);

  switch (json.intent) {
    case 'delete-account':
      return deletePersonalAccountAction({ client, otp: json.payload.otp });

    case 'update-profile':
      return updateProfileAction({ client, data: json.payload });

    default:
      return new Response('Invalid action', { status: 400 });
  }
};
```

### Creating Reusable Actions

For complex operations, create separate action functions:

```tsx
// In a separate file
export const deletePersonalAccountAction = async ({
  client,
  otp,
}: {
  client: SupabaseClient<Database>;
  otp: string;
}) => {
  // Implementation here
};

// In your route file
import { deletePersonalAccountAction } from './actions';

export const action = async (args: Route.ActionArgs) => {
  // ...
  return deletePersonalAccountAction({ client, otp });
};
```

## Data Validation with Zod

Always validate incoming data with Zod:

```tsx
const DeleteAccountFormSchema = z.object({
  otp: z.string().min(1),
});

// In your action
const data = DeleteAccountFormSchema.parse(json.payload);
```

## Error Handling

Handle errors gracefully and return appropriate responses:

```tsx
try {
  // Action implementation
  return redirectDocument('/success');
} catch (error) {
  console.error('Action failed:', error);
  return json(
    { error: 'Something went wrong' },
    { status: 500 }
  );
}
```

## Authentication in Actions

Check authentication status before performing sensitive operations:

```tsx
const auth = await requireUser(client);

if (!auth.data) {
  return redirectDocument(auth.redirectTo);
}

const user = auth.data;
// Continue with authorized action
```

## Example: Complete Account Deletion Flow

Here's a complete example of the account deletion flow:

1. **Route file exports the action:**

```tsx
export const action = async (args: Route.ActionArgs) => {
  const json = ActionsSchema.parse(await args.request.json());
  const client = getSupabaseServerClient(args.request);

  switch (json.intent) {
    case 'delete-account':
      return deletePersonalAccountAction({ client, otp: json.payload.otp });

    default:
      return new Response('Invalid action', { status: 400 });
  }
};
```

2. **Component uses the action:**

```tsx
function DeleteAccountForm(props: { email: string }) {
  const form = useForm({
    resolver: zodResolver(DeleteAccountFormSchema),
    defaultValues: {
      otp: '',
    },
  });

  const fetcher = useFetcher();
  const pending = fetcher.state === 'submitting';

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          return fetcher.submit(
            {
              intent: 'delete-account',
              payload: data,
            },
            {
              encType: 'application/json',
              method: 'POST',
            },
          );
        })}
      >
        {/* Form fields */}

        <Button
          type="submit"
          disabled={pending}
          variant="destructive"
        >
          {pending ? 'Deleting Account...' : 'Delete Account'}
        </Button>
      </form>
    </Form>
  );
}
```

3. **Implementation of the action:**

```tsx
export const deletePersonalAccountAction = async ({
  client,
  otp,
}: {
  client: SupabaseClient<Database>;
  otp: string;
}) => {
  const auth = await requireUser(client);

  if (!auth.data) {
    return redirectDocument(auth.redirectTo);
  }

  const user = auth.data;

  // Verify OTP
  const otpApi = createOtpApi(client);
  const result = await otpApi.verifyToken({
    purpose: 'delete-personal-account',
    userId: user.id,
    token: otp,
  });

  if (!result.valid) {
    throw new Error('Invalid OTP');
  }

  // Delete account
  await deleteAccount(user.id);

  // Sign out and redirect
  await client.auth.signOut();
  return redirectDocument('/');
};
```

## Tips for Effective Actions

1. **Keep them focused** - Each action should do one thing well
2. **Validate input** - Always validate input data with Zod
3. **Check permissions** - Verify the user has permission to perform the action
4. **Handle errors** - Return appropriate error responses
5. **Use services** - Move complex logic to service functions for better organization
6. **Provide feedback** - Return status information the UI can use to show feedback

By following these patterns, you'll be able to create robust, type-safe server actions in your Makerkit application.