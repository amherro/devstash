# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## DevStash

A developer knowledge hub for snippets, commands, prompts, notes, files, images, links, and custom types.

## Context Files

Read the following to get the full context of the project:

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md

## Commands

All commands run from the `devstash/` directory.

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

**DevStash** is a developer knowledge hub — a single place to store snippets, prompts, notes, commands, files, images, and links, organized into collections with search and AI features.

### Tech Stack

- **Framework:** Next.js 16 / React 19 with App Router, TypeScript
- **Styling:** Tailwind CSS v4 + ShadCN UI
- **Database:** PostgreSQL via [Neon](https://neon.tech) + Prisma 7 ORM
- **Auth:** NextAuth v5 (email/password + GitHub OAuth)
- **File Storage:** Cloudflare R2
- **AI:** OpenAI `gpt-5-nano`
- **Payments:** Stripe (freemium model)

### Key Conventions

- Path alias: `@/*` maps to `src/*`
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`)
- **Never use `db push`** — always create and run Prisma migrations

### Data Model Overview

- **User** — extends NextAuth; has `isPro`, `stripeCustomerId`, `stripeSubscriptionId`
- **Item** — core entity; has `contentType` (text | file), `content`, `fileUrl`, `url` (for links), `isFavorite`, `isPinned`, `language`
- **ItemType** — system types (snippet, prompt, note, command, file, image, link) + future custom types; system types have `isSystem: true` and no user relation
- **Collection** — groups items; items belong to multiple collections via `ItemCollection` join table
- **Tag** — many-to-many with items

### Item Types & Colors

| Type    | Color               | Icon       |
| ------- | ------------------- | ---------- |
| snippet | `#3b82f6` (blue)    | Code       |
| prompt  | `#8b5cf6` (purple)  | Sparkles   |
| command | `#f97316` (orange)  | Terminal   |
| note    | `#fde047` (yellow)  | StickyNote |
| file    | `#6b7280` (gray)    | File       |
| image   | `#ec4899` (pink)    | Image      |
| link    | `#10b981` (emerald) | Link       |

### Routing

Item type URLs follow the pattern `/items/snippets`, `/items/prompts`, etc.

### Freemium Tiers

- **Free:** 50 items, 3 collections, no file/image uploads, no AI
- **Pro ($8/mo or $72/yr):** Unlimited everything, file uploads, AI features, data export

During development, all users have access to all features.

### UI Patterns

- Layout: collapsible sidebar + main content area
- Items open in a slide-out drawer (not a new page)
- Dark mode by default
- Collection cards are color-coded based on the dominant item type they contain
- Item cards use border color; collection cards use background color
