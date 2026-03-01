# Product Overview -- CMG Painting and Design Website

## Product Summary

A professional marketing and lead-generation website for **CMG Painting and Design**, a painting and home improvement services company based in Randolph, NJ. The website serves as the company's primary online presence, showcasing services, past work, and providing a contact mechanism for prospective customers across Northern New Jersey.

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

- **Hero section** with primary CTA ("Get Free Quote") and secondary CTA ("View Our Work").
- **Services overview** grid showing all four service categories with links to detail pages.
- **Why CMG** section highlighting differentiators: Expert Craftsmanship, Transparent Pricing, On-Time Delivery, Fully Insured.
- **Call-to-action** section with quote button and phone link.

### Services Hub (`/services`)

- Overview of all four services with feature lists and links to individual service pages.
- Bottom CTA for quote requests.

### Service Detail Pages

Each service has its own page with detailed descriptions and Schema.org Service markup:

| Page | Path | Focus |
|------|------|-------|
| Interior Painting | `/services/interior-painting` | Walls, ceilings, trim, cabinets, accent walls, color consultation |
| Exterior Painting | `/services/exterior-painting` | House painting, deck staining, fence painting, shutters, surface prep |
| Powerwashing | `/services/powerwashing` | Deck cleaning, driveway cleaning, siding wash, patio restoration |
| Light Carpentry | `/services/light-carpentry` | Crown molding, baseboards, door/window trim, wainscoting, minor repairs |

### Gallery (`/gallery`)

- **Category filtering** (All, Interior, Exterior, Powerwashing, Carpentry).
- **Project cards** displaying title, category, location, and image.
- **Lightbox modal** for enlarged image viewing.
- **Sanity CMS integration** for content management (falls back to placeholder data when CMS is not configured).
- **60-second revalidation** for near-real-time content updates.

### About (`/about`)

- Company overview and mission statement.
- Stats section (Quality, Local, Fully Insured, 5-star Service).
- "Our Story" narrative section with team photo placeholder.
- Core values grid: Quality Craftsmanship, Transparent Communication, Customer First, Local Commitment.
- Bottom CTA.

### Contact (`/contact`)

- **Contact information cards**: Phone, Email, Location.
- **Quote request form** with fields: Name (required), Email (required), Phone (required), Service (optional), Message (optional).
- Client-side validation with inline error messages.
- Server-side validation via `/api/contact` API route.
- Success confirmation state after submission.
- **"What to Expect"** process timeline (Quick Response, Free Consultation, Detailed Quote, Expert Execution).
- **Service areas** section listing towns by county (Morris, Essex, Union, Sussex).

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
  - `AboutPage` -- about page
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
| Business info (phone, email, address) | `lib/constants.ts` | Yes |
| Service descriptions | `app/services/*/page.tsx` | Yes |
| About page text | `app/about/page.tsx` | Yes |
| SEO metadata | Individual `page.tsx` files | Yes |
| Navigation links | `lib/constants.ts` + `components/layout/Header.tsx` | Yes |
| Service area towns | `app/contact/page.tsx` | Yes |

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

The business serves the following Northern NJ counties and towns:

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
| Sanity CMS | Gallery content management | Configured (requires project ID) |
| Nodemailer (SMTP) | Contact form email delivery | Placeholder (TODO: implement transport) |
| Facebook | Social media link | Active |
| Google Search Console | SEO monitoring | Not yet configured |
| Google Analytics | Traffic analytics | Not yet configured |

---

## Known Limitations

1. **Contact form email sending** is not yet implemented -- form submissions are logged to console only. The Nodemailer transport code needs to be uncommented and configured in `app/api/contact/route.ts`.
2. **Phone number** is a placeholder (`973 123 4563`) and needs to be updated with the real business number.
3. **No og-image.jpg** in the public folder yet -- OpenGraph/Twitter card images will not display until this is added.
4. **Team photo placeholder** on the About page needs to be replaced with an actual image.
5. **No Google Analytics or Google Business Profile** integration yet.
