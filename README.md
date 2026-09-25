# CMG Painting and Design Website

Professional website for CMG Painting and Design, a painting and design services company serving Northern New Jersey.

**Live:** https://cmgpaintinganddesign.com (Vercel, auto-deployed from `master`)

## Project Overview

This is a Next.js 14 website built with TypeScript and Tailwind CSS. It features:
- Modern, responsive design optimized for all devices
- SEO-optimized pages with Schema.org markup
- Real project photography (21 projects in `lib/projects.ts`), with optional Sanity CMS for the gallery
- Quote request form that emails the business via SMTP (Nodemailer)
- Privacy Policy page (`/privacy`) for Meta lead ads
- Comprehensive Playwright E2E testing (414 test runs across desktop and mobile)

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.16 | React framework with App Router |
| TypeScript | 5.x | Type-safe JavaScript |
| Tailwind CSS | 3.3.x | Utility-first CSS |
| Sanity CMS | 3.x | Headless CMS for gallery |
| Playwright | 1.42.x | E2E testing |
| Nodemailer | 6.x | Contact form emails |

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/digar011/cmg-painting.git
cd cmg-painting
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your configuration values.

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:
```bash
npm run build
```

### Testing

Install browsers (first time), then run all Playwright tests:
```bash
npx playwright install --with-deps
npm test
```

Typecheck and lint:
```bash
npx tsc --noEmit
npm run lint
```

Run tests with UI:
```bash
npm run test:ui
```

Run tests in headed mode:
```bash
npm run test:headed
```

## Project Structure

```
cmg-painting/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── gallery/             # Gallery page
│   ├── services/            # Services pages
│   │   ├── page.tsx         # Services hub
│   │   ├── interior-painting/
│   │   ├── exterior-painting/
│   │   ├── powerwashing/
│   │   └── light-carpentry/
│   ├── privacy/             # Privacy Policy page
│   ├── api/contact/         # Contact form API (SMTP email)
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots configuration
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # Page sections
│   ├── ui/                  # Reusable UI components
│   └── forms/               # Form components
├── lib/
│   ├── constants.ts         # Business info, nav, services, service towns
│   └── projects.ts          # Real project photos, service images, hero image
├── sanity/                  # Sanity CMS configuration
│   ├── schemas/             # Content schemas
│   └── lib/                 # Sanity client & queries
├── tests/                   # Playwright tests
│   ├── e2e/                 # E2E smoke & navigation tests
│   └── *.spec.ts            # Feature tests
├── docs/                    # Documentation
├── public/images/           # projects/, services/, hero-home.webp
└── vercel.json              # Vercel framework config
```

## Environment Variables

Copy `.env.local.example` to `.env.local`. Every variable is optional locally; the site degrades gracefully.

| Variable | Description | Default / behavior when unset |
|----------|-------------|-------------------------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, JSON-LD, sitemap | `https://cmgpaintinganddesign.com` |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | Gallery uses `lib/projects.ts` |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version | `2024-01-01` |
| `SMTP_HOST` | SMTP server | Contact API returns 503 ("please call") |
| `SMTP_PORT` | SMTP port (465 = implicit TLS) | `465` |
| `SMTP_USER` | SMTP login | Contact API returns 503 |
| `SMTP_PASS` | SMTP password | Contact API returns 503 |
| `SMTP_FROM` | Sender address | `SMTP_USER` |
| `CONTACT_EMAIL` | Where quote requests are delivered | Business email in `lib/constants.ts` |

Production (Vercel) currently sets `NEXT_PUBLIC_SITE_URL`, `SMTP_*` and `CONTACT_EMAIL`. Sanity is not configured in production, so the gallery serves the photos in `lib/projects.ts`.

## Deployment

- Hosted on **Vercel** (project `cmg-painting`, `vercel.json` declares Next.js).
- Merging to `master` deploys production; pull requests get preview deployments.
- Domain `cmgpaintinganddesign.com` is registered at GoDaddy with DNS pointed to Vercel; HTTPS is issued by Vercel.
- Set or change env vars in the Vercel dashboard, then redeploy.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run Playwright tests |
| `npm run test:ui` | Run tests with Playwright UI |
| `npm run test:headed` | Run tests in browser |

## Business Information

- **Company**: CMG Painting and Design
- **Phone**: (973) 462-7310
- **Email**: CMGpaintinganddesign@hotmail.com
- **Location**: Randolph, NJ (city and state only; never publish a street address or ZIP)
- **Facebook**: https://www.facebook.com/CMGPaintinganddesign/
- **Service Areas**: Morris, Essex, Union, Sussex Counties (NJ)

## Services

1. **Interior Painting** - Walls, ceilings, trim, cabinets
2. **Exterior Painting** - House painting, deck staining
3. **Powerwashing** - Decks, driveways, siding
4. **Light Carpentry** - Crown molding, baseboards, trim

## Documentation

- [Testing Guide](docs/testing/playwright.md)
- [Gallery/Sanity Guide](docs/GALLERY-GUIDE.md)
- [Component Guide](docs/COMPONENT-GUIDE.md)
- [SEO Guide](docs/SEO-GUIDE.md)
- [Test Suite Overview](tests/README.md)

## Marketing

Meta (Facebook/Instagram) ads plan, ad copy and creatives are kept outside this repo in the owner's local `cmg/marketing/meta-ads` folder. Not launched yet (budget and ad account pending). The site-side prerequisite, `/privacy`, is live.

## License

Private - All rights reserved.
