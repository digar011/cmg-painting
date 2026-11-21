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

Design system from the 2026-11 redesign (warm paper ground, navy-black ink, the logo's royal blue).

- Color tokens in `tailwind.config.ts` (prefer the new names in new code):
  - Brand: `cmg-royal` (#0B3FA8, actions and links), `cmg-blue`, `cmg-sky` (accent on dark), `cmg-light`
  - Grounds: `cmg-paper` (#F4F0E8, page), `cmg-sand` (#EAE4D8, surface bands), `cmg-white`
  - Ink: `cmg-ink` (#101828), `cmg-ink-2`, `cmg-gray` (muted, 6:1 on paper), `cmg-taupe` (muted on ink), `cmg-line` (hairlines)
  - Legacy aliases still work: `cmg-off-white` = paper, `cmg-charcoal` = ink
- Type: Red Hat Display (headlines, weight 400, tight tracking, `font-display`) and Red Hat Text (body, 17px), both via `next/font/google` in `app/layout.tsx`. Headings take their size and weight from `app/globals.css`; don't add `font-bold` to h1/h2.
- Layout: every section's content sits in `.wrap` (1200px column, equal left/right edges).
- Shared classes in `globals.css`: `.btn` + `.btn-primary` / `.btn-secondary` / `.btn-ghost-light` (arrow step on hover, press on click), `.eyebrow`, `.link-draw` (underline draws on hover), `.photo-zoom` (photo zooms 1.03 in its frame), `.lift`.
- Shared copy in `lib/copy.ts`: `PRIMARY_ACTION` ("Request a free estimate") is the one main action in the nav, hero, closing band and form. Reuse it; don't write a new wording.
- Shared sections: `PageHero` (inner-page hero, optional photo) and `CTA` (closing band with a photo, configurable test IDs).
- Sentence-case labels; no all-caps eyebrows, gradients, glass/blur or check-icon lists.
- Motion respects `prefers-reduced-motion` (all animation off). The home page "develops" the Cape Cod after-photo once via `components/ui/Develop.tsx`.
- Responsive breakpoints: `sm` (640px), `md` (768px), `lg` (1024px). The header switches desktop/mobile with CSS only, not JS.

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
- Share and icon assets live in `public/` (`og-image.jpg` 1200x630, `favicon.ico`, `apple-touch-icon.png`, `icon.png`), built from the owner's logo and a real project photo; `tests/share-assets.spec.ts` guards them. Facebook caches previews: after changing `og-image.jpg`, re-scrape the URL in the Meta Sharing Debugger.
- Social profiles live in `SITE_CONFIG.social`; the footer and JSON-LD only show the ones with a URL (Instagram is empty until the page is live).
- Run Playwright against a production build (`npm run build && npx next start -p 3000`) for stable results; the dev server compiles routes on first hit and times out under parallel load. Don't run two Next servers at once: they share `.next/`.
- Contact page service-area towns (`app/contact/page.tsx`) differ from the documented `SERVICE_TOWNS` in `lib/constants.ts` used on the About page. Confirm with the owner before changing either.
