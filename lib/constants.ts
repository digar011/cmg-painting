// Site-wide constants for CMG Painting and Design

export const SITE_CONFIG = {
  name: 'CMG Painting and Design',
  tagline: 'Professional Painting & Design Services',
  phone: '973 123 4563',
  email: 'CMGpaintinganddesign@hotmail.com',
  address: {
    street: '63 Gristmill Rd',
    city: 'Randolph',
    state: 'NJ',
    zip: '07869',
    full: '63 Gristmill Rd, Randolph, NJ 07869',
  },
  counties: ['Morris County', 'Essex County', 'Union County', 'Sussex County'],
  social: {
    facebook: 'https://www.facebook.com/CMGPaintinganddesign/',
  },
} as const;

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
