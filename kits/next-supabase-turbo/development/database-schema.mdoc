---
status: "published"
label: "Extending the DB Schema"
order: 2
title: "How to create new migrations and update the database schema in your Next.js Supabase application"
description: "Learn how to create new migrations and update the database schema in your Next.js Supabase application"
---

{% sequence title="Steps to create a new migration" description="Learn how to create new migrations and update the database schema in your Next.js Supabase application" %}

[Planning Your Schema Extension](#planning-your-schema-extension)

[Creating Schema Files](#creating-schema-files)

[Permissions and Access Control](#permissions-and-access-control)

[Building Tables with RLS](#building-tables-with-rls)

[Advanced Patterns](#advanced-patterns)

[Testing and Deployment](#testing-and-deployment)

{% /sequence %}

This guide walks you through extending Makerkit's database schema with new tables and features. We'll use a comprehensive example that demonstrates best practices, security patterns, and integration with Makerkit's multi-tenant architecture.

## Planning Your Schema Extension

Before writing any SQL, it's crucial to understand how your new features fit into Makerkit's multi-tenant architecture.

### Decision Framework

**Step 1: Determine Data Ownership**
Ask yourself: "Who owns this data - individual users or accounts?"

- **User-owned data**: Personal preferences, activity logs, user settings
- **Account-owned data**: Business content, shared resources, collaborative features

**Step 2: Define Access Patterns**
- **Public within account**: All team members can access
- **Private within account**: Only creator + specific permissions
- **Admin-only**: Requires special permissions or super admin access

**Step 3: Consider Integration Points**
- Does this feature affect billing? (usage tracking, feature gates)
- Does it need notifications? (in-app alerts, email triggers)
- Should it have audit trails? (compliance, change tracking)

## Creating Schema Files

Makerkit organizes database schema in numbered files for proper ordering. Follow this workflow:

### 1. Create Your Schema File

```bash
# Create a new schema file with the next number
touch apps/web/supabase/schemas/18-notes-feature.sql
```

### 2. Apply Development Workflow

```bash
# Start Supabase
pnpm supabase:web:start

# Create migration from your schema file
pnpm --filter web run supabase:db:diff -f notes-feature

# Restart with new schema
pnpm supabase:web:reset

# Generate TypeScript types
pnpm supabase:web:typegen
```

## Permissions and Access Control

### Adding New Permissions

Makerkit defines permissions in the `public.app_permissions` enum. Add feature-specific permissions:

```sql
-- Add new permissions for your feature
ALTER TYPE public.app_permissions ADD VALUE 'notes.create';
ALTER TYPE public.app_permissions ADD VALUE 'notes.manage';
ALTER TYPE public.app_permissions ADD VALUE 'notes.delete';
COMMIT;
```

NB: the Supabase diff function does not support adding new permissions to enum types. Please add the new permissions manually instead of using the diff function.

**Permission Naming Convention**: Use the pattern `resource.action` for consistency:
- `notes.create` - Create new notes
- `notes.manage` - Edit existing notes
- `notes.delete` - Delete notes
- `notes.share` - Share with external users

### Role Assignment

Consider which roles should have which permissions by default:

```sql
-- Grant permissions to roles
INSERT INTO public.role_permissions (role, permission) VALUES
  ('owner', 'notes.create'),
  ('owner', 'notes.manage'),
  ('owner', 'notes.delete'),
  ('owner', 'notes.share'),
  ('member', 'notes.create'),
  ('member', 'notes.manage');
```

## Building Tables with RLS

Let's create a comprehensive notes feature that demonstrates various patterns and best practices.

### Core Notes Table

```sql
-- Create the main notes table with all standard fields
CREATE TABLE IF NOT EXISTS public.notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  title varchar(500) NOT NULL,
  content text,
  is_published boolean NOT NULL DEFAULT false,
  tags text[] DEFAULT '{}',
  metadata jsonb DEFAULT '{}',
  
  -- Audit fields (always include these)
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id),
  updated_by uuid REFERENCES auth.users(id),
  
  -- Data integrity constraints
  CONSTRAINT notes_title_length CHECK (length(title) >= 1),
  CONSTRAINT notes_account_required CHECK (account_id IS NOT NULL)
);

-- Add helpful comments for documentation
COMMENT ON TABLE public.notes IS 'User-generated notes with sharing capabilities';
COMMENT ON COLUMN public.notes.account_id IS 'Account that owns this note (multi-tenant isolation)';
COMMENT ON COLUMN public.notes.is_published IS 'Whether note is visible to all account members';
COMMENT ON COLUMN public.notes.tags IS 'Searchable tags for categorization';
COMMENT ON COLUMN public.notes.metadata IS 'Flexible metadata (view preferences, etc.)';
```

### Performance Indexes

Consider creating indexes for your query patterns if you are scaling to a large number of records.

```sql
-- Essential indexes for performance
CREATE INDEX idx_notes_account_id ON public.notes(account_id);
CREATE INDEX idx_notes_created_at ON public.notes(created_at DESC);
CREATE INDEX idx_notes_account_created ON public.notes(account_id, created_at DESC);
CREATE INDEX idx_notes_published ON public.notes(account_id, is_published) WHERE is_published = true;
CREATE INDEX idx_notes_tags ON public.notes USING gin(tags);
```

### Security Setup

```sql
-- Always enable RLS (NEVER skip this!)
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;

-- Revoke default permissions and grant explicitly
REVOKE ALL ON public.notes FROM authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.notes TO authenticated, service_role;
```

### RLS Policies

Create comprehensive policies that handle both personal and team accounts:

```sql
-- SELECT policy: Read published notes or own private notes
CREATE POLICY "notes_select" ON public.notes
  FOR SELECT TO authenticated
  USING (
    -- Personal account: direct ownership
    account_id = (SELECT auth.uid())
    OR
    -- Team account: member can read published notes
    (public.has_role_on_account(account_id) AND is_published = true)
    OR
    -- Team account: creator can read their own drafts
    (public.has_role_on_account(account_id) AND created_by = auth.uid())
    OR
    -- Team account: users with manage permission can read all
    public.has_permission(auth.uid(), account_id, 'notes.manage')
  );

-- INSERT policy: Must have create permission
CREATE POLICY "notes_insert" ON public.notes
  FOR INSERT TO authenticated
  WITH CHECK (
    -- Personal account: direct ownership
    account_id = (SELECT auth.uid())
    OR
    -- Team account: must have create permission
    public.has_permission(auth.uid(), account_id, 'notes.create')
  );

-- UPDATE policy: Owner or manager can edit
CREATE POLICY "notes_update" ON public.notes
  FOR UPDATE TO authenticated
  USING (
    -- Personal account: direct ownership
    account_id = (SELECT auth.uid())
    OR
    -- Team account: creator can edit their own
    (public.has_role_on_account(account_id) AND created_by = auth.uid())
    OR
    -- Team account: users with manage permission
    public.has_permission(auth.uid(), account_id, 'notes.manage')
  )
  WITH CHECK (
    -- Same conditions for updates
    account_id = (SELECT auth.uid())
    OR
    (public.has_role_on_account(account_id) AND created_by = auth.uid())
    OR
    public.has_permission(auth.uid(), account_id, 'notes.manage')
  );

-- DELETE policy: Stricter permissions required
CREATE POLICY "notes_delete" ON public.notes
  FOR DELETE TO authenticated
  USING (
    -- Personal account: direct ownership
    account_id = (SELECT auth.uid())
    OR
    -- Team account: creator can delete own notes
    (public.has_role_on_account(account_id) AND created_by = auth.uid())
    OR
    -- Team account: users with delete permission
    public.has_permission(auth.uid(), account_id, 'notes.delete')
  );
```

### Automatic Triggers

Add triggers for common patterns:

```sql
-- Automatically update timestamps
CREATE TRIGGER notes_updated_at
  BEFORE UPDATE ON public.notes
  FOR EACH ROW
  EXECUTE FUNCTION kit.update_updated_at();

-- Track who made changes
CREATE TRIGGER notes_track_changes
  BEFORE INSERT OR UPDATE ON public.notes
  FOR EACH ROW
  EXECUTE FUNCTION kit.track_user_changes();
```

## Advanced Patterns

### 1. Hierarchical Notes (Categories)

```sql
-- Note categories with hierarchy
CREATE TABLE IF NOT EXISTS public.note_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  parent_id uuid REFERENCES public.note_categories(id) ON DELETE CASCADE,
  name varchar(255) NOT NULL,
  color varchar(7), -- hex color codes
  path ltree, -- efficient tree operations
  
  created_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id),
  
  -- Ensure hierarchy stays within account
  CONSTRAINT categories_same_account CHECK (
    parent_id IS NULL OR 
    (SELECT account_id FROM public.note_categories WHERE id = parent_id) = account_id
  ),
  
  -- Prevent circular references
  CONSTRAINT categories_no_self_parent CHECK (id != parent_id)
);

-- Link notes to categories
ALTER TABLE public.notes ADD COLUMN category_id uuid REFERENCES public.note_categories(id) ON DELETE SET NULL;

-- Index for tree operations
CREATE INDEX idx_note_categories_path ON public.note_categories USING gist(path);
CREATE INDEX idx_note_categories_account ON public.note_categories(account_id, parent_id);
```

### 2. Note Sharing and Collaboration

```sql
-- External sharing tokens
CREATE TABLE IF NOT EXISTS public.note_shares (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  note_id uuid NOT NULL REFERENCES public.notes(id) ON DELETE CASCADE,
  share_token varchar(64) NOT NULL UNIQUE,
  expires_at timestamptz,
  password_hash varchar(255), -- optional password protection
  view_count integer DEFAULT 0,
  max_views integer, -- optional view limit
  
  created_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id),
  
  -- Ensure token uniqueness
  CONSTRAINT share_token_format CHECK (share_token ~ '^[a-zA-Z0-9_-]{32,64}$')
);

-- Function to generate secure share tokens
CREATE OR REPLACE FUNCTION generate_note_share_token()
RETURNS varchar(64) AS $$
BEGIN
  RETURN encode(gen_random_bytes(32), 'base64url');
END;
$$ LANGUAGE plpgsql;
```

### 3. Usage Tracking for Billing

```sql
-- Track note creation for usage-based billing
CREATE TABLE IF NOT EXISTS public.note_usage_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  action varchar(50) NOT NULL, -- 'create', 'share', 'export'
  note_count integer DEFAULT 1,
  date date DEFAULT CURRENT_DATE,
  
  -- Daily aggregation
  UNIQUE(account_id, action, date)
);

-- Function to track note usage
CREATE OR REPLACE FUNCTION track_note_usage(
  target_account_id uuid,
  usage_action varchar(50)
) RETURNS void AS $$
BEGIN
  INSERT INTO public.note_usage_logs (account_id, action, note_count)
  VALUES (target_account_id, usage_action, 1)
  ON CONFLICT (account_id, action, date)
  DO UPDATE SET note_count = note_usage_logs.note_count + 1;
END;
$$ LANGUAGE plpgsql;

-- Trigger to track note creation
CREATE OR REPLACE FUNCTION trigger_track_note_creation()
RETURNS trigger AS $$
BEGIN
  PERFORM track_note_usage(NEW.account_id, 'create');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER notes_track_creation
  AFTER INSERT ON public.notes
  FOR EACH ROW
  EXECUTE FUNCTION trigger_track_note_creation();
```

### 4. Feature Access Control

```sql
-- Check if account has access to advanced note features
CREATE OR REPLACE FUNCTION has_advanced_notes_access(target_account_id uuid)
RETURNS boolean AS $$
DECLARE
  has_access boolean := false;
BEGIN
  -- Check active subscription with advanced features
  SELECT EXISTS(
    SELECT 1
    FROM public.subscriptions s
    JOIN public.subscription_items si ON s.id = si.subscription_id
    WHERE s.account_id = target_account_id
      AND s.status = 'active'
      AND si.price_id IN ('price_pro_plan', 'price_enterprise_plan')
  ) INTO has_access;
  
  RETURN has_access;
END;
$$ LANGUAGE plpgsql;

-- Restrictive policy for advanced features
CREATE POLICY "notes_advanced_features" ON public.notes
  AS RESTRICTIVE
  FOR ALL TO authenticated
  USING (
    -- Basic features always allowed
    is_published = true
    OR category_id IS NULL
    OR tags = '{}'
    OR 
    -- Advanced features require subscription
    has_advanced_notes_access(account_id)
  );
```

## Security Enhancements

### MFA Compliance

For sensitive note operations, enforce MFA:

```sql
-- Require MFA for note deletion
CREATE POLICY "notes_delete_mfa" ON public.notes
  AS RESTRICTIVE
  FOR DELETE TO authenticated
  USING (public.is_mfa_compliant());
```

### Super Admin Access

Allow super admins to access all notes for support purposes:

```sql
-- Super admin read access (for support)
CREATE POLICY "notes_super_admin_access" ON public.notes
  FOR SELECT TO authenticated
  USING (public.is_super_admin());
```

### Rate Limiting

Implement basic rate limiting for note creation:

```sql
-- Rate limiting: max 100 notes per day per account
CREATE OR REPLACE FUNCTION check_note_creation_limit(target_account_id uuid)
RETURNS boolean AS $$
DECLARE
  daily_count integer;
BEGIN
  SELECT COALESCE(note_count, 0) INTO daily_count
  FROM public.note_usage_logs
  WHERE account_id = target_account_id
    AND action = 'create'
    AND date = CURRENT_DATE;
    
  RETURN daily_count < 100; -- Adjust limit as needed
END;
$$ LANGUAGE plpgsql;

-- Policy to enforce rate limiting
CREATE POLICY "notes_rate_limit" ON public.notes
  AS RESTRICTIVE
  FOR INSERT TO authenticated
  WITH CHECK (check_note_creation_limit(account_id));
```

### Type Generation

After schema changes, always update TypeScript types:

```bash
# reset the database
pnpm supabase:web:reset

# Generate new types
pnpm supabase:web:typegen

# Verify types work in your application
pnpm typecheck
```

## Example Usage in Application

With your schema complete, here's how to use it in your application:

```typescript
// Server component - automatically inherits RLS protection
import { getSupabaseServerClient } from '@kit/supabase/server-client';

async function NotesPage({ params }: { params: { account: string } }) {
  const client = getSupabaseServerClient();
  
  // RLS automatically filters to accessible notes
  const { data: notes } = await client
    .from('notes')
    .select(`
      *,
      category:note_categories(name, color),
      creator:created_by(name, avatar_url)
    `)
    .eq('account_id', params.account)
    .order('created_at', { ascending: false });

  return <NotesList notes={notes} />;
}
```

From the client component, you can use the `useQuery` hook to fetch the notes.

```typescript
// Client component with real-time updates
'use client';
import { useSupabase } from '@kit/supabase/hooks/use-supabase';

function useNotes(accountId: string) {
  const supabase = useSupabase();
  
  return useQuery({
    queryKey: ['notes', accountId],
    queryFn: async () => {
      const { data } = await supabase
        .from('notes')
        .select('*, category:note_categories(name)')
        .eq('account_id', accountId);
      return data;
    }
  });
}
```

## Summary

You've now created a comprehensive notes feature that demonstrates:

✅ **Proper multi-tenancy** with account-based data isolation
✅ **Granular permissions** using Makerkit's role system  
✅ **Advanced features** like categories, sharing, and usage tracking
✅ **Security best practices** with comprehensive RLS policies
✅ **Performance optimization** with proper indexing
✅ **Integration patterns** with billing and feature gates

This pattern can be adapted for any feature in your SaaS application. Remember to always:
- Start with proper planning and data ownership decisions
- Enable RLS and create comprehensive policies
- Add appropriate indexes for your query patterns
- Test thoroughly before deploying
- Update TypeScript types after schema changes

Your database schema is now production-ready and follows Makerkit's security and architecture best practices!