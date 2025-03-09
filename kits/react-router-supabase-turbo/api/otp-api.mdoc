---
status: "published"
label: "OTP API"
order: 4
title: "OTP API | Next.js Supabase SaaS Kit"
description: "The OTP API is a simple interface for working with one-time passwords (OTPs) in your application."
---

This package provides a complete solution for generating, sending, and verifying one-time passwords or tokens in your application. It integrates with Supabase for secure token storage and verification.

It is used for various destructive actions in the SaaS Kit, such as deleting
accounts, deleting teams, and deleting users. However, you can use it for a
variety of other purposes as well, such as:

- Your custom destructive actions
- oAuth account connections
- etc.

## Overview

The OTP package offers:

- **Secure Token Generation**: Create time-limited tokens with configurable expiration
- **Email Delivery**: Send OTP codes via email with customizable templates
- **Verification UI**: Ready-to-use verification form component
- **Token Management**: Revoke, verify, and check token status

## Installation

If you're using Makerkit, this package is already included. For manual installation:

```bash
pnpm add @kit/otp
```

## Basic Usage

### Creating and Sending an OTP

To create and send an OTP, you can use the `createToken` method:

```typescript
import { createOtpApi } from '@kit/otp/api';
import { getSupabaseServerClient } from '@kit/supabase/server-client';

// Create the API instance
const client = getSupabaseServerClient();
const api = createOtpApi(client);

// Generate and send an OTP email
await api.createToken({
  userId: user.id,
  purpose: 'email-verification',
  expiresInSeconds: 3600, // 1 hour
  metadata: { redirectTo: '/verify-email' }
});

// Send the email with the OTP
await api.sendOtpEmail({
  email: userEmail,
  otp: token.token
});
```

### Verifying an OTP

To verify an OTP, you can use the `verifyToken` method:

```typescript
// Verify the token
const result = await api.verifyToken({
  token: submittedToken,
  purpose: 'email-verification'
});

if (result.valid) {
  // Token is valid, proceed with the operation
  const { userId, metadata } = result;
  // Handle successful verification
} else {
  // Token is invalid or expired
  // Handle verification failure
}
```

## Server Actions

The package includes a ready-to-use server action for sending OTP emails:

```typescript
import { sendOtpEmailAction } from '@kit/otp/server/server-actions';

// In a form submission handler
const result = await sendOtpEmailAction({
  email: userEmail,
  purpose: 'password-reset',
  expiresInSeconds: 1800 // 30 minutes
});

if (result.success) {
  // OTP was sent successfully
} else {
  // Handle error
}
```

NB: the `email` parameter is only used as verification mechanism, the actual
email address being used is the one associated with the user.

## Verification UI Component

The package includes a ready-to-use OTP verification form:

```tsx
import { VerifyOtpForm } from '@kit/otp/components';

function MyVerificationPage() {
  return (
    <VerifyOtpForm
      purpose="password-reset"
      email={userEmail}
      onSuccess={(otp) => {
        // Handle successful verification
        // Use the OTP for verification on the server
      }}
      CancelButton={
        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
      }
    />
  );
}
```

## API Reference

### `createOtpApi(client)`

Creates an instance of the OTP API.

**Parameters**:
- `client`: A Supabase client instance
- **Returns**: OTP API instance with the following methods:

### `api.createToken(params)`

Creates a new one-time token.

**Parameters**:
- `params.userId` (optional): User ID to associate with the token
- `params.purpose`: Purpose of the token (e.g., 'password-reset')
- `params.expiresInSeconds` (optional): Token expiration time in seconds (default: 3600)
- `params.metadata` (optional): Additional data to store with the token
- `params.description` (optional): Description of the token
- `params.tags` (optional): Array of string tags
- `params.scopes` (optional): Array of permission scopes
- `params.revokePrevious` (optional): Whether to revoke previous tokens with the same purpose (default: true)

**Returns**:
```typescript
{
  id: string;           // Database ID of the token
  token: string;        // The actual token to send to the user
  expiresAt: string;    // Expiration timestamp
  revokedPreviousCount: number; // Number of previously revoked tokens
}
  ```

### `api.verifyToken(params)`

Verifies a one-time token.

**Parameters**:
- `params.token`: The token to verify
- `params.purpose`: Purpose of the token (must match the purpose used when creating)
- `params.userId` (optional): User ID for additional verification
- `params.requiredScopes` (optional): Array of required permission scopes
- `params.maxVerificationAttempts` (optional): Maximum allowed verification attempts

**Returns**:
```typescript
{
  valid: boolean;       // Whether the token is valid
  userId?: string;      // User ID associated with the token (if valid)
  metadata?: object;    // Metadata associated with the token (if valid)
  message?: string;     // Error message (if invalid)
  scopes?: string[];    // Permission scopes (if valid)
  purpose?: string;     // Token purpose (if valid)
}
  ```

### `api.revokeToken(params)`

Revokes a token to prevent its future use.

**Parameters**:
- `params.id`: ID of the token to revoke
- `params.reason` (optional): Reason for revocation

**Returns**:
```typescript
{
  success: boolean;     // Whether the token was successfully revoked
}
  ```

### `api.getTokenStatus(params)`

Gets the status of a token.

**Parameters**:
- `params.id`: ID of the token

**Returns**:
```typescript
{
  exists: boolean;      // Whether the token exists
  purpose?: string;     // Token purpose
  userId?: string;      // User ID associated with the token
  createdAt?: string;   // Creation timestamp
  expiresAt?: string;   // Expiration timestamp
  usedAt?: string;      // When the token was used (if used)
  revoked?: boolean;    // Whether the token is revoked
  revokedReason?: string; // Reason for revocation (if revoked)
  verificationAttempts?: number; // Number of verification attempts
  lastVerificationAt?: string;  // Last verification attempt timestamp
  lastVerificationIp?: string;  // IP address of last verification attempt
  isValid?: boolean;    // Whether the token is still valid
}
  ```

### `api.sendOtpEmail(params)`

Sends an email containing the OTP code.

**Parameters**:
- `params.email`: Email address to send to
- `params.otp`: OTP code to include in the email

**Returns**: Promise that resolves when the email is sent

## Database Schema

The package uses a `nonces` table in your Supabase database with the following structure:

- `id`: UUID primary key
- `client_token`: Hashed token sent to client
- `nonce`: Securely stored token hash
- `user_id`: Optional reference to auth.users
- `purpose`: Purpose identifier (e.g., 'password-reset')
- Status fields: `expires_at`, `created_at`, `used_at`, etc.
- Audit fields: `verification_attempts`, `last_verification_at`, etc.
- Extensibility fields: `metadata`, `scopes`

## Best Practices

1. **Use Specific Purposes**: Always use descriptive, specific purpose identifiers for your tokens.
2. **Short Expiration Times**: Set token expiration times to the minimum necessary for your use case.
3. **Handle Verification Failures**: Provide clear error messages when verification fails.
4. **Secure Your Tokens**: Never log or expose tokens in client-side code or URLs.

## Example Use Cases

- Email verification
- Two-factor authentication
- Account deletion confirmation
- Important action verification

Each use case should use a distinct purpose identifier. The purpose will
always need to match the one used when creating the token.

When you need to assign a specific data to a token, you can modify the
purpose with a unique identifier, such as `email-verification-12345`.