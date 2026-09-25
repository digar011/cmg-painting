// Site-wide constants for CMG Painting and Design

export const SITE_CONFIG = {
  name: 'CMG Painting and Design',
  tagline: 'Professional Painting & Design Services',
  phone: '(973) 462-7310',
  email: 'CMGpaintinganddesign@hotmail.com',
  // Owner rule: never publish a street address or ZIP — city and state only.
  address: {
    city: 'Randolph',
    state: 'NJ',
    full: 'Randolph, NJ',
  },
  counties: ['Morris County', 'Essex County', 'Union County', 'Sussex County'],
  social: {
    facebook: 'https://www.facebook.com/CMGPaintinganddesign/',
  },
} as const;

/**
 * Towns where CMG has completed work, grouped by the counties listed in
 * SITE_CONFIG.counties. Sourced from past CMG proposals and invoices.
 * Sussex County is served but has no documented town list yet.
 */
export const SERVICE_TOWNS = [
  {
    county: 'Morris County',
    towns: ['Randolph', 'Morristown', 'Parsippany', 'Rockaway', 'Dover', 'Mine Hill', 'Chatham', 'Florham Park'],
  },
  { county: 'Essex County', towns: ['Livingston', 'West Orange'] },
  { county: 'Union County', towns: ['Summit', 'Westfield', 'New Providence'] },
] as const;

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SERVICES = [
  {
    id: 'interior-painting',
    name: 'Interior Painting',
    shortDescription: 'Transform your indoor spaces with expert interior painting services.',
    href: '/services/interior-painting',
  },
  {
    id: 'exterior-painting',
    name: 'Exterior Painting',
    shortDescription: 'Protect and beautify your home\'s exterior with professional painting.',
    href: '/services/exterior-painting',
  },
  {
    id: 'powerwashing',
    name: 'Powerwashing',
    shortDescription: 'Restore surfaces to like-new condition with professional powerwashing.',
    href: '/services/powerwashing',
  },
  {
    id: 'light-carpentry',
    name: 'Light Carpentry',
    shortDescription: 'Quality carpentry work including trim, molding, and repairs.',
    href: '/services/light-carpentry',
  },
] as const;

export const SERVICE_CATEGORIES = [
  'Interior',
  'Exterior',
  'Powerwashing',
  'Carpentry',
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];
