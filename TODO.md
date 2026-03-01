# Task Queue -- CMG Painting and Design Website

## Queue

- [ ] Add `og-image.jpg` (1200x630) to `public/` folder for social sharing previews
- [ ] Replace team photo placeholder on About page with actual image
- [ ] Update phone number from placeholder (`973 123 4563`) to real business number in `lib/constants.ts`
- [ ] Set up Google Analytics integration
- [ ] Set up Google Business Profile and link to website
- [ ] Verify site ownership in Google Search Console and submit sitemap
- [ ] Add favicon files (`favicon.ico`, `apple-touch-icon.png`) to `public/` folder
- [ ] Implement rate limiting on the `/api/contact` endpoint
- [ ] Add CAPTCHA or honeypot field to contact form to prevent spam
- [ ] Add Google Maps embed to contact page for business location
- [ ] Create 404 custom error page (`app/not-found.tsx`)
- [ ] Add loading states/skeletons for gallery page during Sanity data fetch
- [ ] Add testimonials/reviews section to home or about page
- [ ] Optimize Lighthouse performance score (target 90+)
- [ ] Add cookie consent banner if analytics is implemented
- [ ] Set up CI/CD pipeline with GitHub Actions for automated testing on PR

## In Progress

(No tasks currently in progress.)

## Completed

- [x] Initial Next.js 14 project setup with TypeScript and Tailwind CSS
- [x] All core pages built (Home, Services, Gallery, About, Contact)
- [x] Four service detail pages (Interior, Exterior, Powerwashing, Light Carpentry)
- [x] Sanity CMS integration for gallery with project schema
- [x] Contact form with client-side and server-side validation
- [x] Responsive design with mobile navigation
- [x] Schema.org structured data on all pages
- [x] OpenGraph and Twitter Card metadata
- [x] Dynamic sitemap and robots.txt
- [x] Playwright E2E test suite (~166 tests)
- [x] Component documentation (`docs/COMPONENT-GUIDE.md`)
- [x] Gallery management guide (`docs/GALLERY-GUIDE.md`)
- [x] SEO implementation guide (`docs/SEO-GUIDE.md`)
- [x] Testing patterns guide (`docs/testing/playwright.md`)
- [x] Implement Nodemailer contact form email delivery (API route created, transport TODO)
- [x] Custom Tailwind theme with CMG brand colors
- [x] Reusable UI component library (Button, Logo, ServiceCard, ProjectCard, BackToTop)
- [x] Environment variable template (`.env.local.example`)
