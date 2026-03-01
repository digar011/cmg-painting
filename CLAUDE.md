# CLAUDE.md -- Project Standards for CMG Painting and Design

## Project Identity

- **Name**: CMG Painting and Design Website
- **Type**: Marketing / lead-generation website for a painting services company
- **Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Sanity CMS + Playwright
- **Node.js**: 18.x minimum
- **Package Manager**: npm

## Commands

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # ESLint (next/core-web-vitals)
npm test             # Playwright tests (all suites, ~166 tests)
npm run test:headed  # Playwright in visible browser
npm run test:ui      # Playwright UI mode
```

## Architecture Rules

- **App Router only**: All pages live in `app/`. Do not use the `pages/` directory.
- **Server Components by default**: Only add `'use client'` when the component requires browser APIs, state, or event handlers.
- **Centralized constants**: Business info (phone, email, address, services, nav links) lives in `lib/constants.ts`. Never hardcode business data in components.
- **Tailwind CSS only**: No CSS modules, no styled-components, no inline style objects (except for SVG background patterns). Use `cmg-` prefixed color tokens from `tailwind.config.ts`.
- **No `pages/` directory**: This project uses the App Router exclusively.

## File Organization

- `app/` -- Pages and API routes (Next.js App Router)
- `components/layout/` -- Header, Footer
- `components/sections/` -- Page-level sections (Hero, ServicesOverview, WhyCMG, CTA)
- `components/ui/` -- Reusable UI primitives (Button, Logo, ServiceCard, ProjectCard, BackToTop)
- `components/forms/` -- Form components (ContactForm)
- `lib/` -- Utilities and constants
- `sanity/` -- CMS configuration, schemas, client, queries
- `tests/` -- Playwright test files
- `tests/e2e/` -- Integration/smoke tests
- `docs/` -- Documentation

## Component Conventions

- Every component must have a TypeScript interface for its props.
- Every testable element must have a `data-testid` attribute.
- Test IDs use kebab-case: `data-testid="hero-cta-primary"`.
- Components are default-exported: `export default function ComponentName()`.
- No barrel exports (no `index.ts` re-export files) unless the directory has many components.

## Styling Conventions

- Use the `cmg-` color tokens defined in `tailwind.config.ts`:
  - Primary: `cmg-royal` (#0B3FA8)
  - Secondary: `cmg-blue` (#2E63C6)
  - Light: `cmg-light` (#D6E2F3)
  - Accent: `cmg-taupe` (#B8AFA6)
  - Dark: `cmg-charcoal` (#1F2937)
  - Muted: `cmg-gray` (#6B7280)
  - Backgrounds: `cmg-white`, `cmg-off-white`
- Use the custom shadow tokens: `shadow-glass-sm`, `shadow-glass-md`, `shadow-glass-lg`, `shadow-glass-xl`.
- Font: Inter (loaded via `next/font/google` in `app/layout.tsx`).
- Responsive breakpoints: `sm` (640px), `md` (768px), `lg` (1024px).

## SEO Requirements

- Every page must export a `metadata` object with `title` and `description`.
- Every page must include Schema.org JSON-LD via `<Script>` tag.
- The root layout provides the `metadataBase`, default title template, OpenGraph, and Twitter Card config.
- New pages must be added to `app/sitemap.ts`.

## Testing Standards

- Testing framework: Playwright.
- Test files go in `tests/` (feature tests) or `tests/e2e/` (integration tests).
- Use `data-testid` as the primary selector strategy.
- Each test file uses `test.describe()` blocks and `test.beforeEach()` for page navigation.
- Tests must run on both `chromium` (desktop) and `mobile` (iPhone 13) projects.
- Do not use `test.only()` in committed code (Playwright's `forbidOnly` is enabled in CI).

## Sanity CMS

- Sanity Studio is embedded at `/studio`.
- Project schema is in `sanity/schemas/project.ts`.
- GROQ queries are in `sanity/lib/queries.ts`.
- The gallery page gracefully falls back to placeholder data when Sanity is not configured.
- Revalidation is set to 60 seconds on the gallery page.

## Environment Variables

- All env vars are documented in `.env.local.example`.
- Public vars use the `NEXT_PUBLIC_` prefix.
- Never commit `.env.local` or any file with real credentials.
- The site must function (with degraded features) when optional env vars are missing.

## Git Practices

- Branch from `master`.
- Run `npm run lint` and `npm test` before opening a PR.
- Do not commit `node_modules/`, `.next/`, `.env.local`, `playwright-report/`, or `test-results/`.
- Commit messages should be concise and describe the change purpose.

## Important Warnings

- The contact form API route (`app/api/contact/route.ts`) does NOT send emails yet. It logs to console. The Nodemailer transport is commented out and awaiting SMTP configuration.
- The phone number in `lib/constants.ts` is a placeholder. Do not treat it as real.
- The `public/` folder should contain `og-image.jpg`, `favicon.ico`, and `apple-touch-icon.png` but these may not exist yet.
