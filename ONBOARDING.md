# Onboarding Guide -- CMG Painting and Design Website

Welcome to the CMG Painting and Design website project. This guide will help you get up and running quickly.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Local Setup](#local-setup)
4. [Architecture Overview](#architecture-overview)
5. [Key Directories and Files](#key-directories-and-files)
6. [Development Workflow](#development-workflow)
7. [Testing](#testing)
8. [Sanity CMS](#sanity-cms)
9. [Deployment](#deployment)
10. [Common Tasks](#common-tasks)
11. [Troubleshooting](#troubleshooting)
12. [Resources](#resources)

---

## Project Overview

This is a professional marketing website for **CMG Painting and Design**, a painting and design services company serving Northern New Jersey (Morris, Essex, Union, and Sussex counties). The site is built with Next.js 14 using the App Router, TypeScript, and Tailwind CSS. Gallery content is managed through Sanity CMS.

**Business contact**: CMGpaintinganddesign@hotmail.com
**Address**: 63 Gristmill Rd, Randolph, NJ 07869

---

## Prerequisites

Before starting, ensure you have the following installed:

| Tool | Minimum Version | Check Command |
|------|----------------|---------------|
| Node.js | 18.x | `node --version` |
| npm | 9.x | `npm --version` |
| Git | 2.x | `git --version` |

Optional (for CMS work):
- A Sanity.io account (free tier is sufficient)

---

## Local Setup

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd cmg-painting
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in the values:

| Variable | Where to Get It | Notes |
|----------|----------------|-------|
| `NEXT_PUBLIC_SITE_URL` | Use `http://localhost:3000` for dev | Production URL for deployed site |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity dashboard at sanity.io/manage | Required only for gallery CMS |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dashboard | Usually `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Leave as `2024-01-01` | Sanity API version |
| `SMTP_HOST` | Your email provider | Required only for contact form emails |
| `SMTP_PORT` | Your email provider | Typically `587` for TLS |
| `SMTP_USER` | Your email account | SMTP login |
| `SMTP_PASS` | Your email account | SMTP password |
| `CONTACT_EMAIL` | Business email | Where form submissions are sent |

**Note**: The site runs without Sanity or SMTP configured. The gallery will show placeholder projects and the contact form will log submissions to the console instead of sending emails.

### Step 4: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 5: Install Playwright Browsers (for testing)

```bash
npx playwright install --with-deps
```

---

## Architecture Overview

```
Browser Request
     |
     v
Next.js App Router (app/)
     |
     +-- Server Components (pages, layouts)
     |        |
     |        +-- Sanity CMS (gallery data via GROQ queries)
     |        +-- Schema.org JSON-LD (SEO structured data)
     |
     +-- Client Components ('use client')
     |        |
     |        +-- Header (scroll/resize effects, mobile menu)
     |        +-- ContactForm (validation, API submission)
     |        +-- GalleryClient (filtering, lightbox)
     |        +-- BackToTop (scroll listener)
     |
     +-- API Routes (app/api/)
              |
              +-- POST /api/contact (form validation, email via Nodemailer)
```

### Key Patterns

- **Server Components by default**: Pages are server-rendered unless they need interactivity.
- **Client Components**: Marked with `'use client'` directive for interactive UI (Header, ContactForm, GalleryClient, BackToTop).
- **Constants centralized**: All business information lives in `lib/constants.ts`. Update it there, not in individual components.
- **Schema.org markup**: Every page includes structured data for SEO via `<Script>` tags.
- **data-testid attributes**: All interactive elements have test IDs for Playwright tests.

---

## Key Directories and Files

```
cmg-painting/
|-- app/                         # Next.js App Router
|   |-- layout.tsx               # Root layout (metadata, fonts, Schema.org)
|   |-- page.tsx                 # Home page
|   |-- globals.css              # Global styles, CSS variables, Tailwind layers
|   |-- about/page.tsx           # About page
|   |-- contact/page.tsx         # Contact page with form
|   |-- gallery/                 # Gallery (server + client components)
|   |   |-- page.tsx             # Server: fetches Sanity data
|   |   |-- GalleryClient.tsx    # Client: filtering, lightbox
|   |-- services/                # Services hub + 4 subpages
|   |-- api/contact/route.ts     # Contact form API endpoint
|   |-- sitemap.ts               # Dynamic XML sitemap
|   |-- robots.ts                # robots.txt configuration
|
|-- components/
|   |-- layout/Header.tsx        # Sticky header with mobile menu
|   |-- layout/Footer.tsx        # 4-column footer
|   |-- sections/Hero.tsx        # Home hero section
|   |-- sections/ServicesOverview.tsx
|   |-- sections/WhyCMG.tsx      # Benefits section
|   |-- sections/CTA.tsx         # Call-to-action section
|   |-- forms/ContactForm.tsx    # Contact form with validation
|   |-- ui/Button.tsx            # Reusable button component
|   |-- ui/Logo.tsx              # Company logo
|   |-- ui/ServiceCard.tsx       # Service display card
|   |-- ui/ProjectCard.tsx       # Gallery project card
|   |-- ui/BackToTop.tsx         # Back-to-top floating button
|
|-- lib/constants.ts             # Site config, nav links, services data
|
|-- sanity/                      # Sanity CMS configuration
|   |-- env.ts                   # Environment variable exports
|   |-- schema.ts                # Schema export
|   |-- schemas/project.ts       # Project document schema
|   |-- lib/client.ts            # Sanity client
|   |-- lib/image.ts             # Image URL builder
|   |-- lib/queries.ts           # GROQ queries
|
|-- tests/                       # Playwright test suites
|   |-- e2e/                     # Integration tests (smoke, navigation, pages, CTA)
|   |-- home.spec.ts             # Home page tests
|   |-- services.spec.ts         # Services page tests
|   |-- gallery.spec.ts          # Gallery tests
|   |-- contact.spec.ts          # Contact form tests
|   |-- about.spec.ts            # About page tests
|   |-- components.spec.ts       # Component behavior tests
|
|-- docs/                        # Documentation
|   |-- COMPONENT-GUIDE.md       # All components, props, usage
|   |-- GALLERY-GUIDE.md         # Sanity CMS gallery management
|   |-- SEO-GUIDE.md             # SEO implementation details
|   |-- testing/playwright.md    # Testing patterns guide
```

---

## Development Workflow

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint checks |
| `npm test` | Run all Playwright tests |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:ui` | Open Playwright test UI |

### Making Changes

1. Create a feature branch from `master`.
2. Make your changes.
3. Run `npm run lint` to check for lint errors.
4. Run `npm test` to verify tests pass.
5. Create a pull request.

### Styling

- Use **Tailwind CSS** utility classes exclusively.
- Custom colors use the `cmg-` prefix (e.g., `text-cmg-royal`, `bg-cmg-charcoal`).
- See `tailwind.config.ts` for the full color palette and custom theme values.
- CSS variables are defined in `app/globals.css` under `:root`.
- Custom glass-effect utilities (`glass`, `glass-sm`, `glass-lg`) are in `globals.css`.

### Adding a New Page

1. Create `app/your-page/page.tsx`.
2. Export `metadata` for SEO.
3. Include `<Header />` and `<Footer />` layout components.
4. Add Schema.org JSON-LD via `<Script>` tag.
5. Add the route to `app/sitemap.ts`.
6. Add navigation links to `lib/constants.ts` and `components/layout/Header.tsx` if needed.
7. Add `data-testid` attributes to testable elements.
8. Write Playwright tests in `tests/`.

### Adding a New Component

1. Create the file in the appropriate `components/` subdirectory.
2. Define a TypeScript interface for props.
3. Add `data-testid` attributes for test selectors.
4. Use Tailwind classes with `cmg-` color tokens.
5. Write tests and update `docs/COMPONENT-GUIDE.md`.

---

## Testing

The project uses **Playwright** for end-to-end testing. There are approximately 166 tests covering all pages, components, navigation, forms, and responsive behavior.

### Quick Start

```bash
# Install browsers (first time only)
npx playwright install --with-deps

# Run all tests
npm test

# Run a specific test file
npx playwright test tests/home.spec.ts

# Debug a failing test
npx playwright test --debug

# View test report after run
npx playwright show-report
```

### Test Projects

Tests run against two viewports:
- **chromium**: Desktop Chrome (1280x720)
- **mobile**: iPhone 13 (375x667)

### Selector Convention

Tests use `data-testid` attributes as the primary selector strategy. See `docs/COMPONENT-GUIDE.md` for the full list of test IDs.

For more details, see `docs/testing/playwright.md`.

---

## Sanity CMS

The gallery is powered by **Sanity CMS**. In development without Sanity configured, placeholder projects are displayed.

### Accessing the Studio

Navigate to `/studio` on the running site (e.g., `http://localhost:3000/studio`).

### Project Schema Fields

| Field | Type | Required |
|-------|------|----------|
| title | string | Yes |
| slug | slug | Yes |
| category | Interior / Exterior / Powerwashing / Carpentry | Yes |
| location | string | No |
| description | text | No |
| mainImage | image (with hotspot) | Yes |
| gallery | array of images | No |
| featured | boolean | No |
| completedAt | date | No |
| order | number | No |

For the full gallery management guide, see `docs/GALLERY-GUIDE.md`.

---

## Deployment

The site is configured for deployment on **Vercel** (or any Next.js-compatible host).

### Vercel Deployment

1. Connect the Git repository to Vercel.
2. Set all environment variables from `.env.local.example` in the Vercel dashboard.
3. Deploy. Vercel auto-detects the Next.js framework.

### Environment Variables for Production

Ensure all variables from `.env.local.example` are set in the production environment:
- `NEXT_PUBLIC_SITE_URL` -- the production domain
- `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` -- for gallery
- SMTP variables -- for contact form emails
- `CONTACT_EMAIL` -- destination for form submissions

---

## Common Tasks

### Update Business Information

Edit `lib/constants.ts`. All pages and components reference this file for phone, email, address, service areas, and navigation links.

### Update SEO Metadata

Each page exports its own `metadata` object. The root layout in `app/layout.tsx` sets default metadata and OpenGraph/Twitter card configuration.

### Add a Gallery Project

Use the Sanity Studio at `/studio`. See `docs/GALLERY-GUIDE.md` for step-by-step instructions.

### Modify the Color Palette

Update `tailwind.config.ts` under `theme.extend.colors` and the CSS variables in `app/globals.css`.

---

## Troubleshooting

### Dev Server Will Not Start

- Verify Node.js 18+ is installed.
- Delete `node_modules` and `package-lock.json`, then run `npm install`.
- Check `.env.local` exists (copy from `.env.local.example`).

### Gallery Shows Placeholder Projects

This is expected behavior when Sanity is not configured or in development mode. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local` for live data.

### Contact Form Does Not Send Emails

The contact form API route currently logs to console. To enable email sending, configure the SMTP environment variables and uncomment the Nodemailer transport in `app/api/contact/route.ts`.

### Tests Fail

- Ensure the dev server is not already running on port 3000 (Playwright starts its own).
- Run `npx playwright install --with-deps` to install browser binaries.
- Check `playwright.config.ts` for configuration.

---

## Resources

| Resource | Location |
|----------|----------|
| Component Guide | `docs/COMPONENT-GUIDE.md` |
| Gallery/Sanity Guide | `docs/GALLERY-GUIDE.md` |
| SEO Guide | `docs/SEO-GUIDE.md` |
| Testing Guide | `docs/testing/playwright.md` |
| Test README | `tests/README.md` |
| Next.js Docs | https://nextjs.org/docs |
| Tailwind CSS Docs | https://tailwindcss.com/docs |
| Sanity Docs | https://www.sanity.io/docs |
| Playwright Docs | https://playwright.dev/docs/intro |
