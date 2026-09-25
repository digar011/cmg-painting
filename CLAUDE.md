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
npm test             # Playwright tests (207 tests x chromium + mobile = 414 runs)
npx tsc --noEmit     # Typecheck
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
- `lib/` -- Utilities and constants (`constants.ts` business info, `projects.ts` real project imagery)
- `public/images/` -- `projects/` (21 real project photos, WebP, EXIF/GPS stripped), `services/` (service page headers), `hero-home.webp` (AI-generated)
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
- The gallery shows the 21 real projects from `lib/projects.ts` unless Sanity is configured in production and returns documents (Sanity is not configured on the live site yet).
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
- Commit messages follow Conventional Commits (`feat(scope): ...`, `fix(...)`, `docs(...)`).
- Never push to `master` directly; open a PR. **Merging to `master` deploys production** (Vercel).

## Deployment

- Hosted on Vercel (`vercel.json` declares the Next.js framework). Every merge to `master` deploys to production at https://cmgpaintinganddesign.com (HTTPS; DNS at GoDaddy points to Vercel). PR branches get Vercel preview deployments.
- Production env vars are set in the Vercel dashboard (see `.env.local.example`).

## Business Rules (owner-mandated)

- **City and state only.** Never publish a street address or ZIP code anywhere (UI, JSON-LD, metadata, docs). `SITE_CONFIG.address` holds `Randolph, NJ` only. `tests/no-street-address.spec.ts` guards `/`, `/about`, `/contact`, `/privacy`.
- **Phone** `(973) 462-7310` in `SITE_CONFIG.phone` is the confirmed real business number.
- **Imagery honesty.** Photos in `public/images/projects/` and `public/images/services/` are real CMG work. The home hero (`public/images/hero-home.webp`, `HERO_IMAGE`) is AI-generated and must never be captioned or presented as a real CMG project. Project captions describe only what the photo shows; locations stay general ("Northern New Jersey") for homeowner privacy.
- **Fact-checked copy.** About page claims come from CMG's own proposals and records. Do not add unverified claims (e.g. insurance, star ratings, review counts).
- `/privacy` is required by Meta lead ads (Instant Forms); keep it live and linked in the footer.

## Important Warnings

- **Contact form email** (`app/api/contact/route.ts`) sends via Nodemailer only when `SMTP_HOST`, `SMTP_USER` and `SMTP_PASS` are set (`SMTP_FROM` falls back to `SMTP_USER`; `CONTACT_EMAIL` falls back to `SITE_CONFIG.email`; port defaults to 465, `secure` only on 465). Without SMTP it returns an honest **503** telling the visitor to call. It never fakes success. Tests stub `/api/contact`, so they never send mail.
- `app/layout.tsx` references `/og-image.jpg`, `/favicon.ico` and `/apple-touch-icon.png`, but none exist in `public/` (they 404 in production). Add them before relying on social previews.
- Contact page service-area towns (`app/contact/page.tsx`) differ from the documented `SERVICE_TOWNS` in `lib/constants.ts` used on the About page. Confirm with the owner before changing either.
