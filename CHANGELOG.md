# Changelog

All notable changes to the CMG Painting and Design website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
