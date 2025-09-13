---
title: "Database Architecture in Makerkit"
label: "Database Architecture"
description: "Deep dive into Makerkit's database schema, security model, and best practices for building secure multi-tenant SaaS applications"
---

Makerkit implements a sophisticated, security-first database architecture designed for multi-tenant SaaS applications. 

This guide provides a comprehensive overview of the database schema, security patterns, and best practices you should follow when extending the system.

{% sequence title="Database Architecture" description="Deep dive into Makerkit's database schema, security model, and best practices for building secure multi-tenant SaaS applications" %}

[Multi-Tenant Design](#multi-tenant-design)

[Core Tables](#core-tables)

[Authentication & Security](#authentication-security)

[Billing & Commerce](#billing-commerce)

[Features & Functionality](#features-functionality)

[Database Functions & Views](#database-functions-views)

[Database Schema Relationships](#database-schema-relationships)

[Understanding the Database Tables](#understanding-the-database-tables)

[Extending the Database: Decision Trees and Patterns](#extending-the-database-decision-trees-and-patterns)

[Security Model](#security-model)

[Summary](#summary)

{% /sequence %}

### Multi-Tenant Design

Makerkit supports two types of accounts, providing flexibility for both B2C and B2B use cases:

#### Personal Accounts

Individual user accounts where the user ID equals the account ID. Perfect for B2C applications or personal workspaces.

```sql
-- Personal account characteristics
- id = auth.uid() (user's ID)
- is_personal_account = true
- slug = NULL (no public URL needed)
- Automatically created on user signup
```

#### Team Accounts

Shared workspaces with multiple members, roles, and permissions. Ideal for B2B applications or collaborative features.

```sql
-- Team account characteristics
- id = UUID (unique account ID)
- is_personal_account = false
- slug = unique string (for public URLs)
- Members managed through accounts_memberships
```

### Complete Database Schema

Makerkit's database consists of 17 core tables organized across several functional areas:

#### Core Tables
| Table | Purpose | Key Relationships |
|-------|---------|------------------|
| `accounts` | Multi-tenant accounts (personal/team) | References `auth.users` as owner |
| `accounts_memberships` | Team membership with roles | Links `auth.users` to `accounts` |
| `roles` | Role definitions with hierarchy | Referenced by memberships |
| `role_permissions` | Permissions per role | Links roles to app permissions |

#### Authentication & Security
| Table | Purpose | Key Features |
|-------|---------|--------------|
| `one_time_tokens` | OTP for sensitive operations | Purpose-based, auto-expiring |
| `invitations` | Team invitation system | Token-based with role assignment |

#### Billing & Commerce
| Table | Purpose | Provider Support |
|-------|---------|-----------------|
| `billing_customers` | Customer records per provider | Stripe, LemonSqueezy, Paddle |
| `subscriptions` | Active subscriptions | Multiple billing providers |
| `subscription_items` | Subscription line items | Flat, per-seat, metered pricing |
| `orders` | One-time purchases | Product sales, licenses |
| `order_items` | Order line items | Detailed purchase records |

#### Features & Functionality


| Table | Purpose | Key Features |
|-------|---------|--------------|
| `notifications` | Multi-channel notifications | In-app, email, real-time |

#### Database Functions & Views
| Type | Purpose | Security Model |
|------|---------|----------------|
| Views | Data access abstractions | Security invoker for RLS |
| Functions | Business logic & helpers | Security definer with validation |
| Triggers | Data consistency | Automatic field updates |

### Database Schema Relationships

{% img src="/images/database-architecture.webp" width="1000" height="1000" alt="Database Architecture" /%}

## Understanding the Database Tables

This section provides detailed explanations of each table group, their relationships, and practical guidance on how to work with them effectively.

### Core Multi-Tenancy Tables

The foundation of Makerkit's architecture rests on a sophisticated multi-tenant design that seamlessly handles both individual users and collaborative teams.

#### The `accounts` Table: Your Tenancy Foundation

The `accounts` table serves as the cornerstone of Makerkit's multi-tenant architecture. Every piece of data in your application ultimately belongs to an account, making this table critical for data isolation and security.

**When to use personal accounts**: Personal accounts are automatically created when users sign up and are perfect for B2C applications, personal productivity tools, or individual workspaces. The account ID directly matches the user's authentication ID, creating a simple 1:1 relationship that's easy to reason about.

**When to use team accounts**: Team accounts enable collaborative features essential for B2B SaaS applications. They support multiple members with different permission levels, shared resources, and centralized billing. Each team account gets a unique slug for branded URLs like `yourapp.com/acme-corp`.

```sql
-- Example: Creating a team account for collaboration
INSERT INTO accounts (name, is_personal_account, slug)
VALUES ('Acme Corporation', false, 'acme-corp');
```

**Key architectural decisions**: The conditional constraint system ensures data integrity - personal accounts cannot have slugs (they don't need public URLs), while team accounts must have them. This prevents common mistakes and enforces the intended usage patterns.

#### The `accounts_memberships` Table: Team Collaboration Hub

This junction table manages the many-to-many relationship between users and team accounts. It's where team collaboration comes to life through role-based access control.

**Understanding membership lifecycle**: When a team account is created, the creator automatically becomes a member with the highest role. Additional members join through invitations or direct assignment. The composite primary key (user_id, account_id) ensures users can't have duplicate memberships in the same account.

**Role hierarchy in action**: The system uses a numerical hierarchy where lower numbers indicate higher privileges. An owner (hierarchy level 1) can manage all aspects of the account, while members (hierarchy level 2) have limited permissions. This makes it easy to add new roles between existing ones.

```sql
-- Example: Adding a member to a team
INSERT INTO accounts_memberships (user_id, account_id, account_role)
VALUES ('user-uuid', 'team-account-uuid', 'member');
```

**Best practices for membership management**: Always validate role hierarchy when promoting or demoting members. The system prevents removing the primary owner's membership to maintain account ownership integrity.

#### The `roles` and `role_permissions` Tables: Granular Access Control

These tables work together to provide a flexible, hierarchical permission system that can adapt to complex organizational structures.

**Designing permission systems**: The `roles` table defines named roles with hierarchy levels, while `role_permissions` maps specific permissions to each role. This separation allows you to easily modify what each role can do without restructuring your entire permission system.

**Permission naming conventions**: Permissions follow a `resource.action` pattern (e.g., `billing.manage`, `members.invite`). This makes them self-documenting and easy to understand. When adding new features, follow this pattern to maintain consistency.

```sql
-- Example: Creating a custom role with specific permissions
INSERT INTO roles (name, hierarchy_level) VALUES ('manager', 1.5);
INSERT INTO role_permissions (role, permission) VALUES 
  ('manager', 'members.manage'),
  ('manager', 'settings.manage');
```

### Security and Access Control Tables

Makerkit implements multiple layers of security through specialized tables that handle authentication, authorization, and administrative access.

#### The `one_time_tokens` Table: Secure Operations Gateway

One-time tokens provide an additional security layer for sensitive operations that go beyond regular authentication. This table manages short-lived, purpose-specific codes that verify user intent for critical actions.

**Understanding token purposes**: Each token has a specific purpose (email verification, password reset, account deletion) and cannot be reused for other operations. This prevents token reuse attacks and ensures proper authorization flows.

**Implementation strategies**: Tokens automatically expire and are limited to specific scopes. When a user requests a new token for the same purpose, previous tokens are invalidated. This prevents accumulation of valid tokens and reduces security risks.

```sql
-- Example: Validating an OTP for account deletion
SELECT EXISTS(
  SELECT 1 FROM one_time_tokens 
  WHERE token = '123456' 
    AND purpose = 'account-deletion'
    AND target_id = 'user-uuid'
    AND expires_at > now()
    AND used_at IS NULL
);
```

**Security considerations**: Always validate the IP address and user agent when possible. The table tracks these for audit purposes and can help detect suspicious activity.

#### The `invitations` Table: Secure Team Building

The invitation system enables secure team expansion while maintaining strict access controls. It bridges the gap between open team joining and secure access management.

**Invitation workflow design**: Invitations are token-based with automatic expiration. The inviter's permissions are validated at creation time, ensuring only authorized users can extend invitations. Role assignment happens at invitation time, not acceptance, providing clear expectations.

**Managing invitation security**: Each invitation includes a cryptographically secure token that cannot be guessed. Expired invitations are automatically invalid, and the system tracks who sent each invitation for audit purposes.

```sql
-- Example: Creating a secure invitation
INSERT INTO invitations (email, account_id, role, invite_token, expires_at, invited_by)
VALUES ('new-member@company.com', 'team-uuid', 'member', 'secure-random-token', now() + interval '7 days', 'inviter-uuid');
```

**Best practices for invitations**: Set reasonable expiration times (typically 7 days), validate email addresses before sending, and provide clear role descriptions in invitation emails.

#### The `super_admins` Table: Platform Administration

This table manages platform-level administrators who can perform system-wide operations that transcend individual accounts. It's designed with the highest security standards.

**Admin privilege model**: Super admin status requires multi-factor authentication and is separate from regular account permissions. This creates a clear separation between application users and platform administrators.

**Security enforcement**: All super admin operations require MFA verification through the `is_aal2()` function. This ensures that even if an admin's password is compromised, sensitive operations remain protected.

### Billing and Commerce Infrastructure

Makerkit's billing system is designed to handle complex pricing models across multiple payment providers while maintaining clean data architecture.

#### The `billing_customers` Table: Payment Provider Bridge

This table creates the essential link between your application's accounts and external payment provider customer records. It's the foundation that enables multi-provider billing support.

**Provider abstraction benefits**: By storing customer IDs for each provider separately, you can migrate between billing providers, support multiple providers simultaneously, or offer region-specific payment options without data loss.

**Customer lifecycle management**: When an account first needs billing capabilities, a customer record is created with their chosen provider. This lazy creation approach prevents unnecessary external API calls and keeps your billing clean.

```sql
-- Example: Linking an account to Stripe
INSERT INTO billing_customers (account_id, customer_id, provider)
VALUES ('account-uuid', 'cus_stripe_customer_id', 'stripe');
```

**Multi-provider strategies**: Some applications use different providers for different markets (Stripe for US/EU, local providers for other regions). The table structure supports this with provider-specific customer records.

#### The `subscriptions` and `subscription_items` Tables: Flexible Pricing Models

These tables work together to support sophisticated pricing models including flat-rate, per-seat, and usage-based billing across multiple products and features.

**Subscription architecture**: The parent `subscriptions` table tracks overall subscription status, billing periods, and provider information. Child `subscription_items` handle individual components, enabling complex pricing like "basic plan + extra seats + API usage."

**Pricing model flexibility**: The `type` field in subscription items enables different billing models:
- **Flat**: Fixed monthly/yearly pricing
- **Per-seat**: Automatically adjusted based on team size
- **Metered**: Based on usage (API calls, storage, etc.)

```sql
-- Example: Complex subscription with multiple items
-- Base plan + per-seat pricing + metered API usage
INSERT INTO subscription_items (subscription_id, price_id, quantity, type) VALUES
  ('sub-uuid', 'price_base_plan', 1, 'flat'),
  ('sub-uuid', 'price_per_seat', 5, 'per_seat'),
  ('sub-uuid', 'price_api_calls', 0, 'metered');
```

**Automatic seat management**: The per-seat billing service automatically adjusts quantities when team members are added or removed. This eliminates manual billing adjustments and ensures accurate charges.

#### The `orders` and `order_items` Tables: One-Time Purchases

These tables handle non-recurring transactions like product purchases, one-time fees, or license sales that complement subscription revenue.

**Order vs subscription distinction**: Orders represent completed transactions for specific products or services, while subscriptions handle recurring billing. This separation enables hybrid business models with both recurring and one-time revenue streams.

**Order fulfillment tracking**: Orders include status tracking and detailed line items for complex transactions. This supports scenarios like software licenses, premium features, or physical products.

### Application Feature Tables

#### The `notifications` Table: Multi-Channel Communication

This table powers Makerkit's notification system, supporting both in-app notifications and email delivery with sophisticated targeting and lifecycle management.

**Channel strategy**: Notifications can target specific channels (in-app, email) or both. This enables rich notification experiences where users see immediate in-app alerts backed by email records for important updates.

**Lifecycle management**: Notifications include dismissal tracking and automatic expiration. This prevents notification bloat while ensuring important messages reach users. The metadata JSONB field stores channel-specific data like email templates or push notification payloads.

```sql
-- Example: Creating a billing notification
INSERT INTO notifications (account_id, type, channel, metadata, expires_at)
VALUES ('account-uuid', 'billing_issue', 'in_app', '{"severity": "high", "action_url": "/billing"}', now() + interval '30 days');
```

**Performance considerations**: Index notifications by account_id and dismissed status for fast user queries. Consider archiving old notifications to maintain performance as your application scales.

## Extending the Database: Decision Trees and Patterns

Understanding when and how to extend Makerkit's database requires careful consideration of data ownership, security, and scalability. This section provides practical guidance for common scenarios.

### Adding New Feature Tables

When building new features, you'll need to decide how they integrate with the existing multi-tenant architecture. Here's a decision framework:

#### Step 1: Determine Data Ownership

**Question**: Who owns this data - individual users or accounts?

**User-owned data**: Data like user preferences, personal settings, or individual activity logs should reference `auth.users` directly. This data follows the user across all their account memberships.

```sql
-- Example: User preferences that follow the user everywhere
CREATE TABLE user_preferences (
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  theme varchar(20) DEFAULT 'light',
  language varchar(10) DEFAULT 'en',
  email_notifications boolean DEFAULT true
);
```

**Account-owned data**: Business data, shared resources, and collaborative content should reference `accounts`. This ensures proper multi-tenant isolation and enables team collaboration.

```sql
-- Example: Account-owned documents with proper tenancy
CREATE TABLE documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES accounts(id) ON DELETE CASCADE,
  title text NOT NULL,
  content text,
  created_by uuid REFERENCES auth.users(id),
  -- Always include account_id for multi-tenancy
  CONSTRAINT documents_account_ownership CHECK (account_id IS NOT NULL)
);
```

#### Step 2: Define Access Patterns

**Public data within account**: Use standard RLS patterns that allow all account members to read but restrict writes based on permissions.

**Private data within account**: Add a `created_by` field and restrict access to the creator plus users with specific permissions.

**Hierarchical data**: Consider department-level or project-level access within accounts for complex organizations.

### Common Table Patterns

#### Pattern 1: Simple Account-Owned Resources

Most feature tables follow this pattern. They belong to an account and have basic RLS policies.

```sql
-- Template for account-owned resources
CREATE TABLE your_feature (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES accounts(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id),
  updated_by uuid REFERENCES auth.users(id)
);

-- Standard RLS policy
CREATE POLICY "feature_account_access" ON your_feature
  FOR ALL TO authenticated
  USING (public.has_role_on_account(account_id))
  WITH CHECK (public.has_permission(auth.uid(), account_id, 'feature.manage'));
```

#### Pattern 2: Hierarchical Resources

For features that need sub-categories or nested structures within accounts.

```sql
-- Example: Project categories with hierarchy
CREATE TABLE project_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES accounts(id) ON DELETE CASCADE NOT NULL,
  parent_id uuid REFERENCES project_categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  path ltree, -- PostgreSQL ltree for efficient tree operations
  
  -- Ensure hierarchy stays within account
  CONSTRAINT categories_same_account CHECK (
    parent_id IS NULL OR 
    (SELECT account_id FROM project_categories WHERE id = parent_id) = account_id
  )
);
```

#### Pattern 3: Permission-Gated Features

For sensitive features that require specific permissions beyond basic account membership.

```sql
-- Example: Financial reports requiring special permissions
CREATE TABLE financial_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES accounts(id) ON DELETE CASCADE NOT NULL,
  report_data jsonb NOT NULL,
  period_start date NOT NULL,
  period_end date NOT NULL,
  created_by uuid REFERENCES auth.users(id)
);

-- Restrictive RLS requiring specific permission
CREATE POLICY "financial_reports_access" ON financial_reports
  FOR ALL TO authenticated
  USING (public.has_permission(auth.uid(), account_id, 'reports.financial'))
  WITH CHECK (public.has_permission(auth.uid(), account_id, 'reports.financial'));
```

### Integration with Billing

When adding features that affect billing, consider these patterns:

#### Feature Access Control

For subscription-gated features, create lookup tables that determine feature availability.

```sql
-- Example: Feature access based on subscription
CREATE TABLE subscription_features (
  subscription_id uuid REFERENCES subscriptions(id) ON DELETE CASCADE,
  feature_name text NOT NULL,
  enabled boolean DEFAULT true,
  usage_limit integer, -- NULL means unlimited
  PRIMARY KEY (subscription_id, feature_name)
);

-- Helper function to check feature access
CREATE OR REPLACE FUNCTION has_feature_access(
  target_account_id uuid,
  feature_name text
) RETURNS boolean AS $$
DECLARE
  has_access boolean := false;
BEGIN
  SELECT sf.enabled INTO has_access
  FROM subscriptions s
  JOIN subscription_features sf ON s.id = sf.subscription_id
  WHERE s.account_id = target_account_id
    AND sf.feature_name = has_feature_access.feature_name
    AND s.active = true;
    
  RETURN COALESCE(has_access, false);
END;
$$ LANGUAGE plpgsql;
```

### Security Best Practices for Extensions

#### Always Enable RLS

Never create a table without enabling Row Level Security. This should be your default approach.

```sql
-- ALWAYS do this for new tables
CREATE TABLE your_new_table (...);
ALTER TABLE your_new_table ENABLE ROW LEVEL SECURITY;
```

#### Validate Cross-Account References

When tables reference multiple accounts, ensure data integrity through constraints.

```sql
-- Example: Collaboration requests between accounts
CREATE TABLE collaboration_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  from_account_id uuid REFERENCES accounts(id) ON DELETE CASCADE,
  to_account_id uuid REFERENCES accounts(id) ON DELETE CASCADE,
  status text CHECK (status IN ('pending', 'accepted', 'rejected')),
  
  -- Prevent self-collaboration
  CONSTRAINT no_self_collaboration CHECK (from_account_id != to_account_id)
);
```

### Key Design Principles

1. **Account-Centric**: All data associates with accounts via foreign keys for proper multi-tenancy
2. **Security by Default**: RLS enabled on all tables with explicit permission checks
3. **Provider Agnostic**: Billing supports multiple payment providers (Stripe, LemonSqueezy, Paddle)
4. **Audit Ready**: Comprehensive tracking with created_by, updated_by, timestamps
5. **Scalable**: Proper indexing and cascade relationships for performance

## Security Model

### Row Level Security (RLS)

> **⚠️ CRITICAL WARNING**: Always enable RLS on new tables. This is your first line of defense against unauthorized access.

Makerkit enforces RLS on all tables with carefully crafted policies:

```sql
-- Example: Notes table with proper RLS
CREATE TABLE if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references public.accounts(id) on delete cascade,
  content text,
  created_by uuid references auth.users(id)
);

-- Enable RLS (NEVER SKIP THIS!)
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;

-- Read policy: Owner or team member can read
CREATE POLICY "notes_read" ON public.notes FOR SELECT
  TO authenticated USING (
    account_id = (select auth.uid()) -- Personal account
    OR 
    public.has_role_on_account(account_id) -- Team member
  );

-- Write policy: Specific permission required
CREATE POLICY "notes_manage" ON public.notes FOR ALL
  TO authenticated USING (
    public.has_permission(auth.uid(), account_id, 'notes.manage'::app_permissions)
  );
```

### Security Helper Functions

Makerkit provides battle-tested security functions. **Always use these instead of creating your own**:

#### Account Access Functions
```sql
-- Check if user owns the account
public.is_account_owner(account_id)

-- Check if user is a team member
public.has_role_on_account(account_id, role?)

-- Check specific permission
public.has_permission(user_id, account_id, permission)

-- Check if user can manage another member
public.can_action_account_member(account_id, target_user_id)
```

#### Security Check Functions
```sql
-- Verify user is super admin
public.is_super_admin()

-- Check MFA compliance
public.is_aal2()
public.is_mfa_compliant()

-- Check feature flags
public.is_set(field_name)
```

### SECURITY DEFINER Functions

> **🚨 DANGER**: SECURITY DEFINER functions bypass RLS. Only use when absolutely necessary and ALWAYS validate permissions first.

#### ❌ Bad Pattern - Never Do This

```sql
CREATE FUNCTION dangerous_delete_all()
RETURNS void
SECURITY DEFINER AS $$
BEGIN
  -- This bypasses ALL security!
  DELETE FROM sensitive_table;
END;
$$ LANGUAGE plpgsql;
```

#### ✅ Good Pattern - Always Validate First

```sql
CREATE FUNCTION safe_admin_operation(target_account_id uuid)
RETURNS void
SECURITY DEFINER
SET search_path = '' AS $$
BEGIN
  -- MUST validate permissions FIRST
  IF NOT public.is_account_owner(target_account_id) THEN
    RAISE EXCEPTION 'Access denied: insufficient permissions';
  END IF;
  
  -- Now safe to proceed
  -- Your operation here
END;
$$ LANGUAGE plpgsql;
```

## Core Tables Explained

### Accounts Table

The heart of the multi-tenant system:

```sql
public.accounts (
  id                    -- UUID: Account identifier
  primary_owner_user_id -- UUID: Account owner (ref auth.users)
  name                  -- String: Display name
  slug                  -- String: URL slug (NULL for personal)
  email                 -- String: Contact email
  is_personal_account   -- Boolean: Account type
  picture_url          -- String: Avatar URL
  public_data          -- JSONB: Public metadata
)
```

**Key Features**:
- Automatic slug generation for team accounts
- Conditional constraints based on account type
- Protected fields preventing unauthorized updates
- Cascade deletion for data cleanup

### Memberships Table

Links users to team accounts with roles:

```sql
public.accounts_memberships (
  user_id      -- UUID: Member's user ID
  account_id   -- UUID: Team account ID
  account_role -- String: Role name (owner/member)
  PRIMARY KEY (user_id, account_id)
)
```

**Key Features**:
- Composite primary key prevents duplicates
- Role-based access control
- Automatic owner membership on account creation
- Prevention of owner removal

### Roles and Permissions

Hierarchical permission system:

```sql
public.roles (
  name            -- String: Role identifier
  hierarchy_level -- Integer: Permission level (lower = more access)
)

public.role_permissions (
  role       -- String: Role name
  permission -- Enum: Specific permission
)
```

**Available Permissions**:
- `roles.manage` - Manage team roles
- `billing.manage` - Handle billing
- `settings.manage` - Update settings
- `members.manage` - Manage members
- `invites.manage` - Send invitations

## Billing Architecture

### Subscription Model

```sql
billing_customers (
  account_id   -- Account reference
  customer_id  -- Provider's customer ID
  provider     -- stripe/lemonsqueezy/paddle
)
  ↓
subscriptions (
  customer_id        -- Billing customer
  status            -- active/canceled/past_due
  period_starts_at  -- Current period start
  period_ends_at    -- Current period end
)
  ↓
subscription_items (
  subscription_id  -- Parent subscription
  price_id        -- Provider's price ID
  quantity        -- Seats or usage
  type            -- flat/per_seat/metered
)
```

## Advanced Features

### Invitation System

Secure, token-based invitations:

```sql
public.invitations (
  email         -- Invitee's email
  account_id    -- Target team
  invite_token  -- Secure random token
  expires_at    -- Expiration timestamp
  role          -- Assigned role
)
```

**Security Features**:
- Unique tokens per invitation
- Automatic expiration
- Role hierarchy validation
- Batch invitation support

Generally speaking, you don't need to use this internally unless you are customizing the invitation system.

### One-Time Passwords (OTP)

Purpose-based authentication tokens:

```sql
public.one_time_tokens (
  token      -- 6-digit code
  target_id  -- User/resource ID
  purpose    -- Token purpose
  scope      -- Additional context
  ip_address -- Request origin
  expires_at -- Auto-expiration
)
```

**Use Cases**:
- Email verification
- Password reset
- Sensitive operations
- Account deletion

### Notifications

Multi-channel notification system:

```sql
public.notifications (
  account_id  -- Target account
  channel     -- in_app/email
  type        -- Notification category
  dismissed   -- Read status
  expires_at  -- Auto-cleanup
  metadata    -- Additional data
)
```

### Creating New Tables

```sql
-- 1. Create table with proper structure
CREATE TABLE if not exists public.your_table (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES accounts(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL,
  created_by uuid REFERENCES auth.users(id),
  -- your fields here
);

-- 2. Add comments for documentation
COMMENT ON TABLE public.your_table IS 'Description of your table';
COMMENT ON COLUMN public.your_table.account_id IS 'Account ownership';

-- 3. Create indexes for performance
CREATE INDEX idx_your_table_account_id ON public.your_table(account_id);
CREATE INDEX idx_your_table_created_at ON public.your_table(created_at DESC);

-- 4. Enable RLS (NEVER SKIP!)
ALTER TABLE public.your_table ENABLE ROW LEVEL SECURITY;

-- 5. Grant appropriate access
REVOKE ALL ON public.your_table FROM authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.your_table TO authenticated;

-- 6. Create RLS policies
CREATE POLICY "your_table_select" ON public.your_table
  FOR SELECT TO authenticated
  USING (
    account_id = (select auth.uid())
    OR public.has_role_on_account(account_id)
  );

CREATE POLICY "your_table_insert" ON public.your_table
  FOR INSERT TO authenticated
  WITH CHECK (
    account_id = (select auth.uid())
    OR public.has_permission(auth.uid(), account_id, 'your_feature.create')
  );
```

### 3. Creating Views

```sql
-- Always use security invoker for views
CREATE VIEW public.your_view
WITH (security_invoker = true) AS
SELECT 
  t.*,
  a.name as account_name
FROM your_table t
JOIN accounts a ON a.id = t.account_id;

-- Grant access
GRANT SELECT ON public.your_view TO authenticated;
```

{% alert type="warning" title="Security Invoker for Views" %}
Always use security invoker set to true for views.
{% /alert %}

### 4. Writing Triggers

```sql
-- Update timestamp trigger
CREATE TRIGGER update_your_table_updated_at
  BEFORE UPDATE ON public.your_table
  FOR EACH ROW
  EXECUTE FUNCTION kit.update_updated_at();

-- Audit trigger
CREATE TRIGGER track_your_table_changes
  BEFORE INSERT OR UPDATE ON public.your_table
  FOR EACH ROW
  EXECUTE FUNCTION kit.track_user_changes();
```

### 5. Storage Security

When implementing file storage:

```sql
-- Create bucket with proper RLS
INSERT INTO storage.buckets (id, name, public)
VALUES ('your_files', 'your_files', false);

-- RLS policy validating account ownership
CREATE POLICY "your_files_policy" ON storage.objects
FOR ALL USING (
  bucket_id = 'your_files'
  AND public.has_role_on_account(
    (storage.foldername(name))[1]::uuid
  )
);
```

NB: The above assumes that `(storage.foldername(name))[1]::uuid` is the account id. 

You can scope the account's files with the ID of the account, so that this RLS can protect the files from other accounts.

## Summary

Makerkit's database architecture provides:

- ✅ **Secure multi-tenancy** with RLS and permission checks
- ✅ **Flexible account types** for B2C and B2B use cases
- ✅ **Comprehensive billing** support for multiple providers
- ✅ **Built-in security** patterns and helper functions
- ✅ **Scalable design** with proper indexes and constraints

By following these patterns and best practices, you can confidently extend Makerkit's database while maintaining security, performance, and data integrity. 

Remember: when in doubt, always err on the side of security and use the provided helper functions rather than creating custom solutions.