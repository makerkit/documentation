---
status: "published"

label: "Conditional Rendering"
title: "Dynamic Conditional Rendering in the React Router Supabase SaaS kit"
description: "Learn how to use the If component in the React Router Supabase SaaS kit"
order: 4
---


The `If` component is a utility component for conditional rendering in React applications. It provides a clean, declarative way to render content based on a condition, with support for fallback content.

## Features

- Conditional rendering based on various types of conditions
- Support for render props pattern
- Optional fallback content
- Memoized for performance optimization

## Usage

```jsx
import { If } from '@kit/ui/if';

function MyComponent({ isLoggedIn, user }) {
  return (
    <If condition={isLoggedIn} fallback={<LoginPrompt />}>
      {(value) => <WelcomeMessage user={user} />}
    </If>
  );
}
```

## Props

The `If` component accepts the following props:

- `condition: Condition<Value>` (required): The condition to evaluate. Can be any value, where falsy values (`false`, `null`, `undefined`, `0`, `''`) are considered false.
- `children: React.ReactNode | ((value: Value) => React.ReactNode)` (required): The content to render when the condition is truthy. Can be a React node or a function (render prop).
- `fallback?: React.ReactNode` (optional): Content to render when the condition is falsy.

## Types

```typescript
type Condition<Value = unknown> = Value | false | null | undefined | 0 | '';
```

## Examples

### Basic usage

```jsx
<If condition={isLoading}>
  <LoadingSpinner />
</If>
```

### With fallback

```jsx
<If condition={hasData} fallback={<NoDataMessage />}>
  <DataDisplay data={data} />
</If>
```

### Using render props

```jsx
<If condition={user}>
  {(user) => <UserProfile username={user.name} />}
</If>
```

## Performance

The `If` component uses `useMemo` to optimize performance by memoizing the rendered output. This means it will only re-render when the `condition`, `children`, or `fallback` props change.

## Best Practices

1. Use the `If` component for simple conditional rendering to improve readability.
2. Leverage the render props pattern when you need to use the condition's value in the rendered content.
3. Provide a fallback for better user experience when the condition is false.
4. Remember that the condition is re-evaluated on every render, so keep it simple to avoid unnecessary computations.

## Typescript Support

The `If` component is fully typed - this allows for type-safe usage of the render props pattern:

```typescript
<If condition={user}>
  {(user) => <UserProfile name={user.name} email={user.email} />}
</If>
```

The `If` component provides a clean and efficient way to handle conditional rendering in React applications, improving code readability and maintainability.