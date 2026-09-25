# Product Overview -- CMG Painting and Design Website

## Product Summary

A professional marketing and lead-generation website for **CMG Painting and Design**, a painting and home improvement services company based in Randolph, NJ. The website serves as the company's primary online presence, showcasing services, past work, and providing a contact mechanism for prospective customers across Northern New Jersey.

**Live:** https://cmgpaintinganddesign.com

---

## Target Audience

- **Homeowners** in Morris, Essex, Union, and Sussex counties, NJ seeking professional painting, powerwashing, or light carpentry services.
- **Property managers** looking for reliable painting contractors.
- **Referral visitors** arriving via social media (Facebook) or word-of-mouth.

---

## Business Goals

1. **Generate leads** through the online contact/quote request form.
2. **Establish credibility** by showcasing completed projects in the gallery.
3. **Rank in local search** for painting-related queries in Northern NJ.
4. **Provide information** about services, service areas, and company values.

---

## Pages and Features

### Home Page (`/`)

- **Hero section** with a full-bleed AI-generated background image (never presented as a real project), primary CTA ("Get Free Quote") and secondary CTA ("View Our Work").
- **Services overview** grid showing all four service categories with links to detail pages.
- **Why CMG** section highlighting differentiators: Expert Craftsmanship, Transparent Pricing, On-Time Delivery, Fully Insured (note: "Fully Insured" was removed from the About page as unverified; confirm with the owner).
- **Call-to-action** section with quote button and phone link.

### Services Hub (`/services`)

- Overview of all four services with feature lists and links to individual service pages.
- Bottom CTA for quote requests.

### Service Detail Pages

Each service has its own page with a real CMG header photo, detailed descriptions and Schema.org Service markup:

| Page | Path | Focus |
|------|------|-------|
| Interior Painting | `/services/interior-painting` | Walls, ceilings, trim, cabinets, accent walls, color consultation |
| Exterior Painting | `/services/exterior-painting` | House painting, deck staining, fence painting, shutters, surface prep |
| Powerwashing | `/services/powerwashing` | Deck cleaning, driveway cleaning, siding wash, patio restoration |
| Light Carpentry | `/services/light-carpentry` | Crown molding, baseboards, door/window trim, wainscoting, minor repairs |

### Gallery (`/gallery`)

- **Category filtering** (All, Interior, Exterior, Powerwashing, Carpentry).
- **21 real CMG project photos** (`lib/projects.ts`, WebP, EXIF/GPS stripped), including before/after pairs; captions describe only what is shown and locations stay general ("Northern New Jersey").
- **Project cards** displaying title, category, location, and image.
- **Lightbox modal** for enlarged image viewing.
- **Optional Sanity CMS**: queried only in production when configured; its documents replace the local list when any exist. Not configured in production yet.
- **60-second revalidation** for near-real-time content updates.

### About (`/about`)

Rewritten with fact-checked content from CMG's own proposals and records (PR #4):
- "More Than a Decade of Painting in Northern New Jersey" story: locally owned Randolph, NJ company, residential and commercial work, owner-run, with a real project photo.
- "What to Expect on Every Job": five-step process (walkthrough and written proposal, protection, preparation, two-coat Sherwin-Williams/Benjamin Moore finish, daily cleanup with labeled touch-up paint).
- Core values grid.
- "Real Projects by Our Crew" strip linking to the gallery.
- Service area with documented towns per county (`SERVICE_TOWNS`).
- CTA with phone and email links. JSON-LD `AboutPage` + `BreadcrumbList`.

### Contact (`/contact`)

- **Contact information cards**: Phone, Email, Location (Randolph, NJ; city and state only).
- **Quote request form** with fields: Name (required), Email (required), Phone (required), Service (optional), Message (optional).
- Client-side validation with inline error messages.
- Server-side validation via `/api/contact`, which emails the request to the business over SMTP (reply-to set to the visitor). If SMTP is not configured it returns 503 and asks the visitor to call; it never fakes success.
- Success confirmation state after submission.
- **"What to Expect"** process timeline (Quick Response, Free Consultation, Detailed Quote, Expert Execution).
- **Service areas** section listing towns by county (Morris, Essex, Union, Sussex).

### Privacy Policy (`/privacy`)

- Plain-language policy covering information collected (website form and Facebook/Instagram lead forms), use, sharing, calls/texts, retention, choices.
- Linked in the footer and included in the sitemap. Required by Meta Instant Form lead ads (PR #5).

### Sanity Studio (`/studio`)

- Embedded Sanity CMS for managing gallery projects.
- Accessible at `/studio` on the deployed site.
- Project content type with title, slug, category, location, description, images, featured flag, completion date, and display order.

---

## Technical Features

### SEO

- **Schema.org structured data** on every page:
  - `HousePainter` (LocalBusiness) -- global
  - `WebSite` -- global
  - `WebPage` -- per page
  - `Service` -- service detail pages
  - `ContactPage` -- contact page
  - `AboutPage` + `BreadcrumbList` -- about page
- **No street address or ZIP** in any markup (owner rule); `PostalAddress` holds city, state and country only, enforced by `tests/no-street-address.spec.ts`.
- **OpenGraph and Twitter Card** metadata for social sharing.
- **Dynamic XML sitemap** at `/sitemap.xml`.
- **robots.txt** allowing all crawlers, disallowing `/api/` and `/studio/`.
- **Per-page meta titles and descriptions** with template system.
- **Keyword targeting** for local painting services in NJ.

### Performance

- **Next.js Image Optimization** with AVIF and WebP formats.
- **Server-side rendering** for all pages.
- **Sanity CDN** for image delivery.
- **Device-responsive image sizes** (640, 750, 828, 1080, 1200, 1920).

### Responsive Design

- **Mobile-first** Tailwind CSS approach.
- **Mobile navigation** with hamburger menu and slide-out panel.
- **Adaptive CTA** (full text on desktop, abbreviated on mobile).
- Tested on Desktop Chrome (1280x720) and iPhone 13 (375x667).

### Accessibility

- Semantic HTML structure.
- ARIA labels on interactive elements (mobile menu toggle, social links).
- Focus rings on interactive elements.
- Keyboard-navigable form controls.

---

## Content Management

Gallery projects are managed through Sanity CMS. Non-gallery content (service descriptions, about page text, contact info) is hardcoded in the source. Business information is centralized in `lib/constants.ts` for easy updates.

### Content Update Matrix

| Content Type | Where to Update | Requires Deploy |
|-------------|----------------|-----------------|
| Gallery projects | Sanity Studio (`/studio`) | No (60s revalidation) |
| Business info (phone, email, city/state) | `lib/constants.ts` | Yes |
| Project photos and captions | `public/images/projects/` + `lib/projects.ts` | Yes |
| Service descriptions | `app/services/*/page.tsx` | Yes |
| About page text | `app/about/page.tsx` | Yes |
| SEO metadata | Individual `page.tsx` files | Yes |
| Navigation links | `lib/constants.ts` + `components/layout/Header.tsx` | Yes |
| Service area towns (Contact page) | `app/contact/page.tsx` | Yes |
| Documented service towns (About page) | `SERVICE_TOWNS` in `lib/constants.ts` | Yes |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `cmg-royal` | #0B3FA8 | Primary brand color, CTAs, links |
| `cmg-blue` | #2E63C6 | Secondary blue, hover states |
| `cmg-light` | #D6E2F3 | Light blue backgrounds, borders |
| `cmg-taupe` | #B8AFA6 | Accent color, secondary CTAs |
| `cmg-white` | #FFFFFF | White backgrounds |
| `cmg-off-white` | #FAFAFA | Page background |
| `cmg-charcoal` | #1F2937 | Dark text, dark backgrounds |
| `cmg-gray` | #6B7280 | Secondary text, muted content |

### Typography

- **Font**: Inter (Google Fonts), system-ui fallback.
- **Headings**: Bold, tight letter-spacing, responsive sizes.
- **Body**: Regular weight, cmg-charcoal color.

### Components

Reusable UI components documented in `docs/COMPONENT-GUIDE.md`:
- Button (primary, secondary, ghost variants)
- Logo (sizes and color variants)
- ServiceCard
- ProjectCard
- BackToTop

---

## Service Areas

The Contact page lists the following towns (`app/contact/page.tsx`). The About page uses a shorter list of towns with documented completed projects (`SERVICE_TOWNS` in `lib/constants.ts`). The two lists differ and should be reconciled with the owner.

| County | Towns |
|--------|-------|
| Morris | Morristown, Parsippany, Denville, Randolph, Madison, Chatham, Florham Park |
| Essex | Montclair, West Orange, Livingston, Millburn, South Orange, Maplewood, Glen Ridge |
| Union | Summit, Westfield, Cranford, Scotch Plains, New Providence, Berkeley Heights, Mountainside |
| Sussex | Newton, Sparta, Vernon, Hopatcong, Andover, Byram, Frankford |

---

## Integrations

| Integration | Purpose | Status |
|-------------|---------|--------|
| Vercel | Hosting, preview deployments | Active (deploys `master`) |
| Sanity CMS | Gallery content management | Wired up, not configured in production |
| Nodemailer (SMTP) | Contact form email delivery | Active (SMTP env vars set in production) |
| Meta (Facebook/Instagram) lead ads | Lead generation | Privacy page ready; ads not launched |
| Meta Pixel / Conversions API | Ad conversion tracking | Not implemented |
| Facebook | Social media link | Active |
| Google Search Console | SEO monitoring | Not yet configured |
| Google Analytics | Traffic analytics | Not yet configured |

---

## Known Limitations

1. **No `og-image.jpg`, `favicon.ico` or `apple-touch-icon.png`** in `public/`, although `app/layout.tsx` references them (they 404 in production). Social previews and browser icons will not display until they are added.
2. **No reviews/testimonials** section yet.
3. **No Google Analytics, Search Console or Google Business Profile** integration yet.
4. **No Meta Pixel / Conversions API** yet (needed before running Meta ads).
5. **Contact form has no rate limiting or spam protection.**
