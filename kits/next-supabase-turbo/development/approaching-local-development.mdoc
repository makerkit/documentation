---
status: "published"
label: "Getting Started with Development"
order: 0
title: "How to approach local development | Next.js Supabase Turbo"
description: "Your introduction to building with Makerkit - understanding the development approach and navigating the guides"
---

Welcome to the Makerkit development section! This guide introduces you to the development philosophy and helps you navigate the comprehensive resources available for building your SaaS application.

## Development Philosophy

Makerkit is designed around a **security-first, account-centric architecture** that makes building multi-tenant SaaS applications straightforward and secure. Understanding this philosophy will guide all your development decisions.

### Core Principles

**Security by Default**: Every feature you build leverages Makerkit's Row Level Security (RLS) and permission system. You don't need to manually implement access controls - they're built into the architecture.

**Multi-Tenant from Day One**: All business data belongs to accounts (personal or team). This design enables both B2C and B2B use cases while ensuring proper data isolation.

**Leverage Pre-Built Infrastructure**: Authentication, billing, notifications, admin systems, and more are already implemented. Focus on your unique business logic rather than rebuilding these complex features.

**Type-Safe Development**: TypeScript types are automatically generated from your database schema, ensuring end-to-end type safety from database to UI.

## Your Development Journey

Building with Makerkit typically follows this progression:

### 1. **Foundation & Planning** 
Start by understanding your domain and planning your database schema. Most development time should be spent on thoughtful planning rather than rushing into code.

**Key Questions to Answer:**
- What are your core business entities?
- How do they relate to each other?
- Who should have access to what data?
- Will you focus on B2C (personal accounts) or B2B (team accounts)?

### 2. **Database Design**
Design your schema following Makerkit's patterns for security and multi-tenancy. This is the foundation everything else builds upon.

### 3. **Business Logic Implementation**
Build your core features using Makerkit's established patterns for data access, server actions, and API design.

### 4. **User Interface Development**
Create compelling user experiences using Makerkit's component library and routing conventions.

### 5. **Production Readiness**
Optimize, test, and deploy your application with confidence using Makerkit's built-in production patterns.

## Development Guides Overview

This section contains comprehensive guides for every aspect of development. Here's how to navigate them:

### 🏗️ **Database & Data**

**[Database Architecture](./database-architecture)** - Deep dive into Makerkit's database design, security model, and multi-tenant architecture. Start here to understand the foundation.

**[Extending the Database Schema](./database-schema)** - Learn how to add new tables and features to your database with proper security and performance patterns.

**[Database Functions](./database-functions)** - Understand when and how to create custom database functions for complex business logic.

**[Migrations](./migrations)** - Best practices for managing database schema changes during development and deployment.

**[Loading Data](./loading-data-from-database)** - Patterns for fetching data securely and efficiently in both server and client components.

**[Writing Data](./writing-data-to-database)** - How to implement forms and data mutations using server actions and proper validation.

**[Database Webhooks](./database-webhooks)** - Set up real-time triggers and external integrations using Supabase webhooks.

### 🔐 **Security & Access**

**[Permissions and Roles](./permissions-and-roles)** - Master Makerkit's role-based access control system and learn how to implement granular permissions.

### 🎨 **Frontend & User Experience**

**[Marketing Pages](./marketing-pages)** - Build compelling landing pages and marketing content for your SaaS.

**[Legal Pages](./legal-pages)** - Implement privacy policies, terms of service, and other required legal pages.

**[SEO](./seo)** - Optimize your application for search engines and social media sharing.

### 🏢 **Architecture & Scaling**

**[Adding Turborepo Apps](./adding-turborepo-app)** - Extend your monorepo with new applications (mobile apps, admin dashboards, etc.).

**[Adding Turborepo Packages](./adding-turborepo-package)** - Create shared packages for reusable business logic and components.

**[External Marketing Website](./external-marketing-website)** - Set up a separate marketing website that integrates with your main application.

## Recommended Learning Path

Follow this progression to build a solid foundation and develop expertise with Makerkit:

### Essential Foundation (Start Here)
1. **[Database Architecture](./database-architecture)** - Understand Makerkit's multi-tenant architecture and security model
2. **[Permissions and Roles](./permissions-and-roles)** - Learn how access control works throughout the system
3. **[Extending the Database Schema](./database-schema)** - Build your first feature with proper patterns

### Core Development Skills
4. **[Loading Data](./loading-data-from-database)** - Master data fetching patterns for server and client components
5. **[Writing Data](./writing-data-to-database)** - Implement forms and data mutations with proper validation
6. **[Migrations](./migrations)** - Manage database changes safely during development and deployment

### Advanced Features (As Needed)
- **[Database Functions](./database-functions)** - Complex business logic and custom database operations
- **[Database Webhooks](./database-webhooks)** - Real-time triggers and external integrations
- **[Adding Turborepo Apps](./adding-turborepo-app)** - Multi-app architectures (mobile, admin dashboards)
- **[Adding Turborepo Packages](./adding-turborepo-package)** - Shared libraries and reusable components

### User Experience & Marketing
- **[Marketing Pages](./marketing-pages)** - Landing pages and marketing content
- **[SEO](./seo)** - Search engine optimization
- **[Legal Pages](./legal-pages)** - Privacy policies and terms of service

## Development Environment Setup

Before diving into the guides, ensure your development environment is ready:

```bash
# Start all services
pnpm dev

# Or start services individually
pnpm --filter web dev          # Main app (port 3000)
pnmp --filter dev-tool dev     # Dev tools (port 3010)
pnpm supabase:web:start        # Local Supabase

# Database operations
pnpm supabase:web:reset        # Reset database
pnpm supabase:web:typegen      # Generate types
```

**Key Development URLs:**
- Main app: http://localhost:3000
- Dev tools: http://localhost:3010  
- Supabase Studio: http://localhost:54323

## Common Development Patterns

As you work through the guides, you'll notice these recurring patterns:

### The Account-Centric Pattern
Every business entity references an `account_id` for proper multi-tenancy:

```sql
CREATE TABLE your_feature (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES accounts(id) ON DELETE CASCADE,
  -- your fields here
);
```

### The Security-First Pattern
Every table has Row Level Security enabled with careful policies:

```sql
ALTER TABLE your_feature ENABLE ROW LEVEL SECURITY;

CREATE POLICY "feature_access" ON your_feature
  FOR ALL TO authenticated
  USING (public.has_role_on_account(account_id));
```

### The Type-Safe Pattern
Database schema automatically generates TypeScript types:

```typescript
import { Tables } from '@kit/supabase/database';

type YourFeature = Tables<'your_feature'>;
```

## Getting Help

As you develop with Makerkit:

- **Use the guides** in this section for detailed implementation patterns
- **Check the examples** in each guide for copy-paste starting points  
- **Follow the established patterns** rather than creating custom approaches
- **Test security** regularly using the debugging techniques in the guides

## What's Next?

Ready to start building? Here's what we recommend:

1. **Read [Database Architecture](./database-architecture)** to understand the foundation
2. **Plan your first feature** using the domain modeling approaches
3. **Implement it step-by-step** following the [Extending the Database Schema](./database-schema) guide
4. **Expand from there** using the other guides as your application grows

The development guides are designed to be practical, comprehensive, and production-ready. Each guide builds upon the knowledge from previous ones, so you'll develop a deep understanding of Makerkit's architecture and best practices.

Let's build something amazing! 🚀