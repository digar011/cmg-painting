# SEO Implementation Guide

## Overview

This guide documents the SEO implementation for the CMG Painting and Design website, including metadata, Schema.org markup, and optimization strategies.

## Metadata Structure

### Root Layout Metadata

Located in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CMG Painting and Design | Professional Painting Services...",
    template: "%s | CMG Painting and Design",
  },
  description: "Professional painting and design services...",
  keywords: ["painting", "interior painting", ...],
  openGraph: { ... },
  twitter: { ... },
  robots: { ... },
};
```

### Per-Page Metadata

Each page exports its own metadata:

```typescript
export const metadata: Metadata = {
  title: "Page Title", // Uses template from layout
  description: "Page-specific description...",
};
```

## Schema.org Markup

### Business Schema (HousePainter)

Applied globally in `app/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "HousePainter",
  "@id": "https://cmgpaintinganddesign.com#localbusiness",
  "name": "CMG Painting and Design",
  "url": "https://cmgpaintinganddesign.com",
  "telephone": "TBD",
  "email": "CMGpaintinganddesign@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "63 Gristmill Rd",
    "addressLocality": "Randolph",
    "addressRegion": "NJ",
    "postalCode": "07869",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Morris County" },
    { "@type": "AdministrativeArea", "name": "Essex County" },
    { "@type": "AdministrativeArea", "name": "Union County" },
    { "@type": "AdministrativeArea", "name": "Sussex County" }
  ],
  "sameAs": ["https://www.facebook.com/CMGPaintinganddesign/"]
}
```

### WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://cmgpaintinganddesign.com#website",
  "name": "CMG Painting and Design",
  "url": "https://cmgpaintinganddesign.com",
  "publisher": {
    "@id": "https://cmgpaintinganddesign.com#localbusiness"
  }
}
```

### WebPage Schema (per page)

Each page includes a WebPage schema:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://cmgpaintinganddesign.com/services#webpage",
  "url": "https://cmgpaintinganddesign.com/services",
  "name": "Our Services | CMG Painting and Design",
  "description": "Professional painting and design services...",
  "about": {
    "@id": "https://cmgpaintinganddesign.com#localbusiness"
  }
}
```

### Service Schema

Service pages include Service schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://cmgpaintinganddesign.com/services/interior-painting#service",
  "name": "Interior Painting",
  "description": "Professional interior painting services...",
  "provider": {
    "@id": "https://cmgpaintinganddesign.com#localbusiness"
  },
  "areaServed": ["Morris County", "Essex County", ...]
}
```

### ContactPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://cmgpaintinganddesign.com/contact#contactpage",
  "url": "https://cmgpaintinganddesign.com/contact",
  "name": "Contact Us | CMG Painting and Design",
  "about": {
    "@id": "https://cmgpaintinganddesign.com#localbusiness"
  }
}
```

### AboutPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://cmgpaintinganddesign.com/about#aboutpage",
  "url": "https://cmgpaintinganddesign.com/about",
  "name": "About Us | CMG Painting and Design",
  "about": {
    "@id": "https://cmgpaintinganddesign.com#localbusiness"
  }
}
```

## OpenGraph Configuration

```typescript
openGraph: {
  title: "CMG Painting and Design - Professional Painting Services",
  description: "...",
  url: "https://cmgpaintinganddesign.com",
  siteName: "CMG Painting and Design",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "CMG Painting and Design",
    },
  ],
  locale: "en_US",
  type: "website",
}
```

## Twitter Card Configuration

```typescript
twitter: {
  card: "summary_large_image",
  title: "CMG Painting and Design",
  description: "...",
  images: ["/og-image.jpg"],
}
```

## Sitemap

Dynamic sitemap generated in `app/sitemap.ts`:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/services/interior-painting',
    '/services/exterior-painting',
    '/services/powerwashing',
    '/services/light-carpentry',
    '/gallery',
    '/about',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
```

## Robots.txt

Generated in `app/robots.ts`:

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/studio/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

## Local SEO Optimization

### NAP Consistency

Ensure Name, Address, Phone are consistent everywhere:
- **Name**: CMG Painting and Design
- **Address**: 63 Gristmill Rd, Randolph, NJ 07869
- **Phone**: TBD

### Service Areas

Listed in footer and contact page:
- Morris County
- Essex County
- Union County
- Sussex County

With specific towns for each county.

## Image Optimization

### Next.js Image Configuration

```javascript
// next.config.js
images: {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ['image/avif', 'image/webp'],
}
```

### Image Best Practices

1. Use descriptive file names
2. Add alt text to all images
3. Use appropriate sizes
4. Lazy load below-fold images

## Google Search Console Setup

1. Verify ownership with DNS or HTML file
2. Submit sitemap.xml
3. Monitor for crawl errors
4. Check Core Web Vitals

## Validation Tools

### Schema Validation
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### SEO Analysis
- Google PageSpeed Insights
- Google Search Console
- Lighthouse (Chrome DevTools)

## Checklist

- [ ] Update phone number when available
- [ ] Add og-image.jpg to public folder
- [ ] Verify Google Search Console
- [ ] Submit sitemap
- [ ] Add Google Business Profile
- [ ] Set up Google Analytics (if needed)
