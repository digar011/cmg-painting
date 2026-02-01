# CMG Painting and Design Website

Professional website for CMG Painting and Design, a painting and design services company serving Northern New Jersey.

## Project Overview

This is a Next.js 14 website built with TypeScript and Tailwind CSS. It features:
- Modern, responsive design optimized for all devices
- SEO-optimized pages with Schema.org markup
- Sanity CMS integration for gallery management
- Contact form with validation
- Comprehensive Playwright E2E testing

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
git clone <repository-url>
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

Run all Playwright tests:
```bash
npm test
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
│   ├── api/contact/         # Contact form API
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots configuration
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # Page sections
│   ├── ui/                  # Reusable UI components
│   └── forms/               # Form components
├── lib/
│   └── constants.ts         # Site configuration
├── sanity/                  # Sanity CMS configuration
│   ├── schemas/             # Content schemas
│   └── lib/                 # Sanity client & queries
├── tests/                   # Playwright tests
│   ├── e2e/                 # E2E smoke & navigation tests
│   └── *.spec.ts            # Feature tests
├── docs/                    # Documentation
└── public/                  # Static assets
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL | Yes |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | For CMS |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | For CMS |
| `SMTP_HOST` | Email SMTP host | For contact form |
| `SMTP_PORT` | Email SMTP port | For contact form |
| `SMTP_USER` | Email SMTP user | For contact form |
| `SMTP_PASS` | Email SMTP password | For contact form |

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
- **Email**: CMGpaintinganddesign@hotmail.com
- **Address**: 63 Gristmill Rd, Randolph, NJ 07869
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

## License

Private - All rights reserved.
