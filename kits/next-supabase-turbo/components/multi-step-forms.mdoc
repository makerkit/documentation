---
status: "published"
label: "Multi Step Forms"
title: "Multi Step Forms in the Next.js Supabase SaaS kit"
description: "Building multi-step forms in the Next.js Supabase SaaS kit"
order: 0
---

The Multi-Step Form Component is a powerful and flexible wrapper around React Hook Form, Zod, and Shadcn UI. It provides a simple API to create multi-step forms with ease, perfect for complex registration processes, surveys, or any scenario where you need to break down a long form into manageable steps.

## Features

- Easy integration with React Hook Form and Zod for form management and validation
- Built-in step management
- Customizable layout and styling
- Progress tracking with optional Stepper component
- TypeScript support for type-safe form schemas

{% component path="multi-step-form" /%}

## Usage

Here's a basic example of how to use the Multi-Step Form Component:

```tsx
import { MultiStepForm, MultiStepFormStep } from '@kit/ui/multi-step-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const FormSchema = createStepSchema({
  step1: z.object({ /* ... */ }),
  step2: z.object({ /* ... */ }),
});

export function MyForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    // ...
  });

  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <MultiStepForm schema={FormSchema} form={form} onSubmit={onSubmit}>
      <MultiStepFormStep name="step1">
        {/* Step 1 fields */}
      </MultiStepFormStep>
      <MultiStepFormStep name="step2">
        {/* Step 2 fields */}
      </MultiStepFormStep>
    </MultiStepForm>
  );
}
```

## Key Components

### MultiStepForm

The main wrapper component that manages the form state and step progression.

Props:
- `schema`: Zod schema for form validation
- `form`: React Hook Form's `useForm` instance
- `onSubmit`: Function to handle form submission
- `className`: Optional CSS classes

### MultiStepFormStep

Represents an individual step in the form.

Props:
- `name`: Unique identifier for the step (should match a key in your schema)
- `children`: Step content

### MultiStepFormHeader

Optional component for adding a header to your form, often used with the Stepper component.

### MultiStepFormContextProvider

Provides access to form context within child components.

### useMultiStepFormContext

The hook returns an object with the following properties:

- `form: UseFormReturn<z.infer<Schema>>` - The original form object.
- `currentStep: string` - The name of the current step.
- `currentStepIndex: number` - The index of the current step (0-based).
- `totalSteps: number` - The total number of steps in the form.
- `isFirstStep: boolean` - Whether the current step is the first step.
- `isLastStep: boolean` - Whether the current step is the last step.
- `nextStep: (e: React.SyntheticEvent) => void` - Function to move to the next step.
- `prevStep: (e: React.SyntheticEvent) => void` - Function to move to the previous step.
- `goToStep: (index: number) => void` - Function to jump to a specific step by index.
- `direction: 'forward' | 'backward' | undefined` - The direction of the last step change.
- `isStepValid: () => boolean` - Function to check if the current step is valid.
- `isValid: boolean` - Whether the entire form is valid.
- `errors: FieldErrors<z.infer<Schema>>` - Form errors from React Hook Form.
- `mutation: UseMutationResult` - A mutation object for handling form submission.

## Example

Here's a more complete example of a multi-step form with three steps: Account, Profile, and Review. The form uses Zod for schema validation and React Hook Form for form management.

```tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@kit/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@kit/ui/form';
import { Input } from '@kit/ui/input';
import {
  MultiStepForm,
  MultiStepFormContextProvider,
  MultiStepFormHeader,
  MultiStepFormStep,
  createStepSchema,
  useMultiStepFormContext,
} from '@kit/ui/multi-step-form';
import { Stepper } from '@kit/ui/stepper';

const FormSchema = createStepSchema({
  account: z.object({
    username: z.string().min(3),
    email: z.string().email(),
  }),
  profile: z.object({
    password: z.string().min(8),
    age: z.coerce.number().min(18),
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export function MultiStepFormDemo() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      account: {
        username: '',
        email: '',
      },
      profile: {
        password: '',
      },
    },
    reValidateMode: 'onBlur',
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  return (
    <MultiStepForm
      className={'space-y-10 p-8 rounded-xl border'}
      schema={FormSchema}
      form={form}
      onSubmit={onSubmit}
    >
      <MultiStepFormHeader
        className={'flex w-full flex-col justify-center space-y-6'}
      >
        <h2 className={'text-xl font-bold'}>Create your account</h2>

        <MultiStepFormContextProvider>
          {({ currentStepIndex }) => (
            <Stepper
              variant={'numbers'}
              steps={['Account', 'Profile', 'Review']}
              currentStep={currentStepIndex}
            />
          )}
        </MultiStepFormContextProvider>
      </MultiStepFormHeader>

      <MultiStepFormStep name="account">
        <AccountStep />
      </MultiStepFormStep>

      <MultiStepFormStep name="profile">
        <ProfileStep />
      </MultiStepFormStep>

      <MultiStepFormStep name="review">
        <ReviewStep />
      </MultiStepFormStep>
    </MultiStepForm>
  );
}

function AccountStep() {
  const { form, nextStep, isStepValid } = useMultiStepFormContext();

  return (
    <Form {...form}>
      <div className={'flex flex-col gap-4'}>
        <FormField
          name="account.username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="account.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button onClick={nextStep} disabled={!isStepValid()}>
            Next
          </Button>
        </div>
      </div>
    </Form>
  );
}

function ProfileStep() {
  const { form, nextStep, prevStep } = useMultiStepFormContext();

  return (
    <Form {...form}>
      <div className={'flex flex-col gap-4'}>
        <FormField
          name="profile.password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="profile.age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2">
          <Button type={'button'} variant={'outline'} onClick={prevStep}>
            Previous
          </Button>

          <Button onClick={nextStep}>Next</Button>
        </div>
      </div>
    </Form>
  );
}

function ReviewStep() {
  const { prevStep, form } = useMultiStepFormContext<typeof FormSchema>();
  const values = form.getValues();

  return (
    <div className={'flex flex-col space-y-4'}>
      <div className={'flex flex-col space-y-4'}>
        <div>Great! Please review the values.</div>

        <div className={'flex flex-col space-y-2 text-sm'}>
          <div>
            <span>Username</span>: <span>{values.account.username}</span>
          </div>
          <div>
            <span>Email</span>: <span>{values.account.email}</span>
          </div>
          <div>
            <span>Age</span>: <span>{values.profile.age}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type={'button'} variant={'outline'} onClick={prevStep}>
          Back
        </Button>

        <Button type={'submit'}>Create Account</Button>
      </div>
    </div>
  );
}
```

The inner components `AccountStep`, `ProfileStep`, and `ReviewStep` represent the individual steps of the form. They use the `useMultiStepFormContext` hook to access form utilities like `nextStep`, `prevStep`, and `isStepValid`.

These are built using ShadcnUI - so please [do refer to the ShadcnUI documentation](https://ui.shadcn.com/docs/components/form) for more information on how to use the components.

## Tips

1. Use the `createStepSchema` helper to easily create Zod schemas for your multi-step form.
2. Leverage the `useMultiStepFormContext` hook in your step components to access form utilities.
3. Combine with the Stepper component for visual progress indication.
4. Customize the look and feel using the provided `className` props and your own CSS.

The Multi-Step Form Component simplifies the creation of complex, multi-step forms while providing a great user experience. It's flexible enough to handle a wide variety of use cases while keeping your code clean and maintainable.


