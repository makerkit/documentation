---
status: "published"
label: "Authentication Configuration"
title: "Setting your authentication configuration"
description: "Learn how to setup the authentication configuration of your Next.js Supabase application"
order: 2
---

{% sequence title="Authentication Configuration" description="Learn how to setup the authentication configuration of your Next.js Supabase application" %}

[Supported Authentication Methods](#supported-authentication-methods)

[Using Magic Link, Password, or OTP](#using-magic-link-password-or-otp)

[OTP](#otp)

[Third Party Providers](#third-party-providers)

[Identity Linking](#identity-linking)

[Password Requirements](#password-requirements)

[Displaying Terms and Conditions](#displaying-terms-and-conditions)

{% /sequence %}

## Supported Authentication Methods

Makerkit supports three different authentication methods:

1. **Password** - the traditional email/password method, set to `true` by default
2. **Magic Link** - magic link, set to `false` by default
3. **OTP** - one-time password, set to `false` by default
4. **oAuth** - oAuth providers, by default we set Google Auth

The authentication configuration is set at `apps/web/config/auth.config.ts`.

The recommendation is **to not update this directly** - instead, please define the environment variables below and override the default behavior. The configuration is validated using the Zod schema `AuthConfigSchema`, so if something is off, you'll see the errors.

```tsx
const authConfig = AuthConfigSchema.parse({
  // NB: This is a public key, so it's safe to expose.
  // Copy the value from the Supabase Dashboard.
  captchaTokenSiteKey: process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY,

  // whether to display the terms checkbox during sign-up
  displayTermsCheckbox:
    process.env.NEXT_PUBLIC_DISPLAY_TERMS_AND_CONDITIONS_CHECKBOX === 'true',

  // whether to enable identity linking:
  // This needs to be enabled in the Supabase Console as well for it to work.
  enableIdentityLinking:
    process.env.NEXT_PUBLIC_AUTH_IDENTITY_LINKING === 'true',

  // NB: Enable the providers below in the Supabase Console
  // in your production project
  providers: {
    password: process.env.NEXT_PUBLIC_AUTH_PASSWORD === 'true',
    magicLink: process.env.NEXT_PUBLIC_AUTH_MAGIC_LINK === 'true',
    otp: process.env.NEXT_PUBLIC_AUTH_OTP === 'true',
    oAuth: ['google'],
  },
} satisfies z.infer<typeof AuthConfigSchema>);
```

### Using Magic Link, Password, or OTP

For example, if you wanted to switch from password auth to magic link, you'd set the below variables:

```bash
NEXT_PUBLIC_AUTH_PASSWORD=false
NEXT_PUBLIC_AUTH_MAGIC_LINK=true
```

If you wanted to enable OTP, you'd set the following:

```bash
NEXT_PUBLIC_AUTH_OTP=true
NEXT_PUBLIC_AUTH_PASSWORD=false
```

For enabling password authentication, simply leave as is, since it is set to `true` by default.

## OTP

Available starting in version 2.11.0.

If you decide to use OTP (One-Time Password) authentication, please ensure
to use the email template at `apps/web/supabase/templates/otp.html` for the
OTP email:

```toml {% title="apps/web/supabase/config.toml" %}
[auth.email.template.confirmation]
subject = "Confirm your email"
content_path = "./supabase/templates/otp.html"

[auth.email.template.magic_link]
subject = "Sign in to Makerkit"
content_path = "./supabase/templates/otp.html"
```

This is because OTP and Magic Link share the same email template. So please
use one of the two templates, either `otp.html` or `magic-link.html` and replace the email confirmation template as well. 

In addition, update the Templates in the Supabase Dashboard under **Authentication > Templates** accordingly for your remote project.

## Third Party Providers

To display third-party providers in the UI, you need to set the `oAuth` array to include the provider you want to display. The default is Google.

```tsx
providers: {
  oAuth: ['google'],
}
```

**The configuration is done on Supabase's side - not on Makerkit's side**.

Third Party providers need to be configured, managed and enabled fully on the provider's and Supabase's side. Makerkit does not need any configuration (beyond setting the provider to be displayed in the UI).

Please [read Supabase's documentation](https://supabase.com/docs/guides/auth/social-login) on how to set up third-party providers.

For local development, also check out [Supabase's documentation on how to set up OAuth providers locally](https://supabase.com/docs/guides/local-development/managing-config).

### Scopes

Scopes are used to request specific permissions from the user. Different providers support and require different scopes.

To add your required scopes, please specify them in the `OAuthProviders` component.

 ```tsx {% title="packages/features/auth/src/components/oauth-providers.tsx" %}
/**
 * @name OAUTH_SCOPES
 * @description
 * The OAuth scopes are used to specify the permissions that the application is requesting from the user.
 *
 * Please add your OAuth providers here and the scopes you want to use.
 *
 * @see https://supabase.com/docs/guides/auth/social-login
 */
const OAUTH_SCOPES: Partial<Record<Provider, string>> = {
  azure: 'email',
  // add your OAuth providers here
};
```

For example, if you want to request the user's email address, you can add the `email` scope to the Google provider.

 ```tsx {% title="packages/features/auth/src/components/oauth-providers.tsx" %}
const OAUTH_SCOPES: Partial<Record<Provider, string>> = {
  azure: 'email',
  google: 'email',
};
```

## Identity Linking

Available starting in version 2.11.0.

To enable identity linking, you need to set the following environment variable:

```
NEXT_PUBLIC_AUTH_IDENTITY_LINKING=true
```

In addition, you must enable identity linking in the Supabase Console under **Authentication > Settings**. This allows users to link multiple authentication methods to their account, such as linking a Google account with an email/password account.

## Password Requirements

To set the password requirements, you can set the following environment variables:

```bash
NEXT_PUBLIC_PASSWORD_REQUIRE_UPPERCASE=true
NEXT_PUBLIC_PASSWORD_REQUIRE_NUMBERS=true
NEXT_PUBLIC_PASSWORD_REQUIRE_SPECIAL_CHARS=true
```

The above will enforce the following rules:
1. At least one uppercase letter
2. At least one number
3. At least one special character

## Displaying Terms and Conditions

To display the terms and conditions checkbox during sign-up, set the following environment variable:

```bash
NEXT_PUBLIC_DISPLAY_TERMS_AND_CONDITIONS_CHECKBOX=true
```

This is off by default.

## MFA

To enforce MFA for RLS (Row Level Security) you need to customize the RLS policies as per [the Supabase documentation](https://supabase.com/blog/mfa-auth-via-rls).