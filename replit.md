# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the Lenga Systems business website and a shared API server scaffold.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5 (api-server)
- **Database**: PostgreSQL + Drizzle ORM (available, not used by website)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle for API server)

## Artifacts

### Lenga Systems Website (`artifacts/lenga-systems`)
- **Kind**: react-vite
- **Preview path**: `/`
- **Brand color**: #5049b2 (`--primary: 244 42% 49%`)
- **Fonts**: Plus Jakarta Sans (display/headings), Inter (body)
- **Framework**: React + Vite + Tailwind CSS
- **Routing**: wouter
- **Animations**: framer-motion
- **Icons**: lucide-react

#### Pages
- `/` — Home (hero, value prop, services, why choose, AI section, solutions, testimonials, CTA, footer)
- `/about` — About (company intro, mission/vision, values, team)
- `/services` — Services (7 detailed service sections with benefits and use cases)
- `/solutions` — Solutions (9 real-world solution types with features and outcomes)
- `/contact` — Contact (form, contact info, FAQ accordion)

#### Key Files
- `src/App.tsx` — Main router and layout wrapper
- `src/index.css` — Global styles, CSS variables, theme
- `src/components/layout/Navbar.tsx` — Sticky responsive navigation
- `src/components/layout/Footer.tsx` — Dark footer with links
- `src/pages/home.tsx` — Homepage
- `src/pages/about.tsx` — About page
- `src/pages/services.tsx` — Services page
- `src/pages/solutions.tsx` — Solutions page
- `src/pages/contact.tsx` — Contact page with form

### API Server (`artifacts/api-server`)
- **Kind**: api
- **Preview path**: `/api`
- Shared Express API server — currently minimal (health check only)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/lenga-systems run dev` — run website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
