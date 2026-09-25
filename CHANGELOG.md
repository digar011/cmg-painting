# Changelog

All notable changes to the CMG Painting and Design website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Changed

- **About page rewrite** (`app/about/page.tsx`). What: replaced generic copy with a specific, fact-checked story: locally owned Randolph, NJ company, more than a decade in business, residential and commercial work (senior-living, offices, schools, auto dealerships), older-home exterior work, and an owner-run note. Added a five-step "What to Expect on Every Job" section (walkthrough and written proposal, protection, preparation, Sherwin-Williams/Benjamin Moore two-coat finish, daily cleanup and labeled touch-up paint), a real-project strip linking to the gallery, a service-area section with documented towns per county, and an email link in the CTA. Replaced the "Insert Team Photo" placeholder with a real project photo. Why: the old page had placeholder content and unsupported claims ("100% Fully Insured", "5★ Customer Service"). All new facts come from CMG's own proposals and records. Outcome: a more specific, trustworthy About page. Lint, typecheck and build are clean, and all 395 Playwright tests pass (chromium and mobile).
- About page SEO: fixed the duplicated brand in the `<title>` caused by the root title template, rewrote the meta description, added a canonical URL and Open Graph overrides, and extended the JSON-LD to an `@graph` with `AboutPage` (`mainEntity`, `primaryImageOfPage`) and `BreadcrumbList`.
- `tel:` link on the About CTA now uses digits only.

### Added

- `SERVICE_TOWNS` in `lib/constants.ts`: towns with completed CMG projects, grouped by county.
- New About page Playwright tests: process steps, recent work, service area, and CTA link targets.

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
