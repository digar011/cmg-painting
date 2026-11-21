# Task Queue -- CMG Painting and Design Website

## Queue

- [ ] Add Meta Pixel + Conversions API (CAPI) for ad conversion tracking (behind a feature flag)
- [ ] Launch Meta (Facebook/Instagram) lead ads -- blocked on ad budget and ad account; plan and creatives are in the owner's local `cmg/marketing/meta-ads` folder
- [ ] Collect customer reviews and add a testimonials/reviews section (real, attributable reviews only)
- [ ] Set up Sanity CMS in production (project ID/dataset in Vercel) and load gallery content, or remove the integration
- [ ] Add the Instagram URL to `SITE_CONFIG.social.instagram` once the page is live (footer + JSON-LD pick it up)
- [ ] Owner: confirm the 2026-11-21 test quote request (subject "New quote request: Other — TEST - Codexium launch check") arrived in the contact inbox (check Junk)
- [ ] Reconcile Contact page service-area towns with the documented `SERVICE_TOWNS` list (confirm with owner)
- [ ] Owner: confirm insurance coverage. The "Fully Insured" claim was removed from home and footer; it can be restored once confirmed.
- [ ] Owner: supply higher-resolution project photos (most are older phone shots). No crew/people photos for now (owner, 2026-11-21)
- [ ] Old logo file prints 973-462-7532; confirmed business number is (973) 462-7310. Check printed materials
- [ ] Verify service-page feature lists (cabinet refinishing, color consultation, fence painting, faux finishes) against CMG records
- [ ] Set up Google Analytics integration
- [ ] Set up Google Business Profile and link to website (city/state only, service-area business)
- [ ] Verify site ownership in Google Search Console and submit sitemap
- [ ] Implement rate limiting on the `/api/contact` endpoint
- [ ] Add CAPTCHA or honeypot field to contact form to prevent spam
- [ ] Create 404 custom error page (`app/not-found.tsx`)
- [ ] Add loading states/skeletons for gallery page during Sanity data fetch
- [ ] Optimize Lighthouse performance score (target 90+)
- [ ] Add cookie consent banner if analytics is implemented
- [ ] Set up CI/CD pipeline with GitHub Actions for automated testing on PR

## In Progress

(No tasks currently in progress.)

## Completed

- [x] 2026-11-21 -- Site redesign (PR feature/site-redesign): new design system, rebuilt home page, shared PageHero/CTA, CSS-only responsive header. 421/421 tests on production build.

- [x] 2026-11-21 -- Added og-image.jpg + favicons (PR fix/og-image-favicons). Facebook share cards now show a picture.
- [x] 2026-11-21 -- Live test of the quote form: `/api/contact` returned success via SMTP in production.

- [x] Initial Next.js 14 project setup with TypeScript and Tailwind CSS
- [x] All core pages built (Home, Services, Gallery, About, Contact)
- [x] Four service detail pages (Interior, Exterior, Powerwashing, Light Carpentry)
- [x] Sanity CMS integration for gallery with project schema
- [x] Contact form with client-side and server-side validation
- [x] Responsive design with mobile navigation
- [x] Schema.org structured data on all pages
- [x] OpenGraph and Twitter Card metadata
- [x] Dynamic sitemap and robots.txt
- [x] Playwright E2E test suite (initially ~166 tests; now 207 tests x 2 projects = 414 runs)
- [x] Component documentation (`docs/COMPONENT-GUIDE.md`)
- [x] Gallery management guide (`docs/GALLERY-GUIDE.md`)
- [x] SEO implementation guide (`docs/SEO-GUIDE.md`)
- [x] Testing patterns guide (`docs/testing/playwright.md`)
- [x] Contact form email delivery via Nodemailer SMTP; honest 503 when SMTP is not configured (2026-09-24, PR #2)
- [x] Custom Tailwind theme with CMG brand colors
- [x] Reusable UI component library (Button, Logo, ServiceCard, ProjectCard, BackToTop)
- [x] Environment variable template (`.env.local.example`)
- [x] Real project photography: 21 projects in `lib/projects.ts`, service header photos, AI-generated hero image; EXIF/GPS stripped (2026-09-24, PR #2)
- [x] Real business phone number (973) 462-7310 in `lib/constants.ts` (2026-09-24, PR #2)
- [x] Vercel deployment config (`vercel.json`) (2026-09-24, PR #3)
- [x] Domain cmgpaintinganddesign.com live on Vercel with HTTPS (DNS at GoDaddy) (2026-09-24)
- [x] About page rewrite with fact-checked story; team photo placeholder replaced with a real project photo (2026-09-24, PR #4)
- [x] Privacy Policy page `/privacy` for Meta lead ads (2026-09-24, PR #5)
- [x] Remove street address and ZIP site-wide + guard test `tests/no-street-address.spec.ts` (2026-09-24, PR #6)
- [x] Docs sync with current code and live site; street address removed from docs (2026-09-25)
