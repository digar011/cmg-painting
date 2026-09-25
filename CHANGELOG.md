# Changelog

All notable changes to the CMG Painting and Design website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Changed

- **Documentation synced with code and the live site** (README, CLAUDE.md, ONBOARDING, PRODUCT, TODO, `.env.local.example`, `docs/SEO-GUIDE.md`, `docs/COMPONENT-GUIDE.md`, `tests/README.md`). **Why:** docs still said the contact form did not send email, the phone was a placeholder and the gallery used placeholder data, and README/ONBOARDING/SEO-GUIDE still published the street address and ZIP. **Outcome:** docs match the code; street address removed from all docs (city and state only); live URL, Vercel deployment, all env vars (including `SMTP_FROM`) and current test counts (207 tests, 414 runs) documented.

---

## [0.2.0] - 2026-09-24

First production release at https://cmgpaintinganddesign.com.

### Added

- **Real project photography** (PR #2). 21 real CMG project photos in `public/images/projects/` (WebP, EXIF/GPS stripped) described in `lib/projects.ts`, which now feeds the gallery instead of placeholder data; real header photos on all four service pages. **Why:** replace placeholders with actual work. **Outcome:** gallery and service pages show real CMG projects.
- **Home hero background image** (`public/images/hero-home.webp`, PR #2). AI-generated; must never be presented as a real CMG project.
- **Contact form email delivery** (PR #2). `/api/contact` sends quote requests over SMTP with Nodemailer (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_EMAIL`), reply-to set to the visitor, HTML-escaped. When SMTP is not configured it returns 503 with the phone number instead of faking success. **Outcome:** leads reach the business inbox in production.
- **Vercel deployment** (PR #3). `vercel.json` declares the Next.js framework. Domain `cmgpaintinganddesign.com` (DNS at GoDaddy) points to Vercel with HTTPS; merges to `master` deploy production.
- **Privacy Policy page** (`/privacy`, PR #5), linked in the footer and sitemap. **Why:** Meta Instant Form lead ads require a privacy policy URL. **Outcome:** 2 E2E tests.
- `SERVICE_TOWNS` in `lib/constants.ts`: towns with completed CMG projects, grouped by county (PR #4).
- New About page Playwright tests: process steps, recent work, service area, and CTA link targets (PR #4).

### Changed

- **Real phone number** (973) 462-7310 replaces the placeholder in `lib/constants.ts` (PR #2).
- **About page rewrite** (`app/about/page.tsx`, PR #4). What: replaced generic copy with a specific, fact-checked story: locally owned Randolph, NJ company, more than a decade in business, residential and commercial work (senior-living, offices, schools, auto dealerships), older-home exterior work, and an owner-run note. Added a five-step "What to Expect on Every Job" section (walkthrough and written proposal, protection, preparation, Sherwin-Williams/Benjamin Moore two-coat finish, daily cleanup and labeled touch-up paint), a real-project strip linking to the gallery, a service-area section with documented towns per county, and an email link in the CTA. Replaced the "Insert Team Photo" placeholder with a real project photo. Why: the old page had placeholder content and unsupported claims ("100% Fully Insured", "5★ Customer Service"). All new facts come from CMG's own proposals and records. Outcome: a more specific, trustworthy About page. Lint, typecheck and build are clean, and all 395 Playwright tests pass (chromium and mobile).
- About page SEO: fixed the duplicated brand in the `<title>` caused by the root title template, rewrote the meta description, added a canonical URL and Open Graph overrides, and extended the JSON-LD to an `@graph` with `AboutPage` (`mainEntity`, `primaryImageOfPage`) and `BreadcrumbList`.
- `tel:` link on the About CTA now uses digits only.
- **Removed the street address and ZIP** from the site and structured data -- city and state only (PR #6). **Why:** owner rule (never publish a business street address). **Outcome:** guard test `tests/no-street-address.spec.ts` on /, /about, /contact, /privacy.

### Fixed

- Contact tests stub `/api/contact` (no real email is sent in tests), wait for hydration before filling the form, and add a test that a delivery failure shows the call-us message; the desktop-navigation suite is skipped on the mobile project (PR #2).

---

## [0.1.0] - 2026-02-28

### Added

- Initial project setup with Next.js 14, TypeScript, and Tailwind CSS.
- Home page with Hero, Services Overview, Why CMG, and CTA sections.
- Services hub page and four service detail pages (Interior Painting, Exterior Painting, Powerwashing, Light Carpentry).
- About page with stats, company story, core values, and CTA.
- Contact page with validated quote request form and service areas listing.
- Gallery page with category filtering, lightbox modal, and Sanity CMS integration.
- Contact form API route (`/api/contact`) with server-side validation.
- Sanity CMS configuration with project document schema for gallery management.
- Sanity Studio embedded at `/studio`.
- Reusable UI components: Button, Logo, ServiceCard, ProjectCard, BackToTop.
- Layout components: Header (sticky, responsive, mobile menu) and Footer (4-column).
- ContactForm component with client-side validation.
- Centralized site configuration in `lib/constants.ts`.
- Custom Tailwind theme with CMG brand colors, typography, and glass-effect utilities.
- SEO implementation: Schema.org structured data (HousePainter, WebSite, WebPage, Service, ContactPage, AboutPage).
- OpenGraph and Twitter Card metadata.
- Dynamic XML sitemap and robots.txt.
- Next.js Image Optimization with AVIF/WebP and Sanity CDN remote patterns.
- Playwright E2E test suite (~166 tests) covering all pages, components, navigation, forms, and responsive behavior.
- Test configuration for Desktop Chrome and iPhone 13 viewports.
- Documentation: Component Guide, Gallery Guide, SEO Guide, Playwright Testing Guide.
- Environment variable template (`.env.local.example`).
- ESLint configuration extending `next/core-web-vitals`.
