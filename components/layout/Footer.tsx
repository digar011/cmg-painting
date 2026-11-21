import Link from 'next/link';
import Logo from '../ui/Logo';
import { SITE_CONFIG } from '@/lib/constants';

const footerLinks = {
  services: [
    { name: 'Interior painting', href: '/services/interior-painting' },
    { name: 'Exterior painting', href: '/services/exterior-painting' },
    { name: 'Powerwashing', href: '/services/powerwashing' },
    { name: 'Light carpentry', href: '/services/light-carpentry' },
  ],
  company: [
    { name: 'About us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy policy', href: '/privacy' },
  ],
  areas: SITE_CONFIG.counties.map((county) => ({
    name: county.replace(' County', ' Co.'),
    href: '/contact',
  })),
};

const SOCIAL_ICONS = {
  facebook:
    'M13.5 8.5V6.75c0-.83.67-1.5 1.5-1.5H17V2.5h-2c-2.48 0-4.5 2.02-4.5 4.5V8.5H8.5v2.75h2v10.25h3V11.25h2.85L17 8.5h-3.5z',
  instagram:
    'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-.97.04-1.5.2-1.85.34-.46.18-.8.4-1.15.75-.35.35-.57.69-.75 1.15-.14.35-.3.88-.34 1.85C3.11 8.5 3.1 8.85 3.1 12s.01 3.5.07 4.74c.04.97.2 1.5.34 1.85.18.46.4.8.75 1.15.35.35.69.57 1.15.75.35.14.88.3 1.85.34 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.97-.04 1.5-.2 1.85-.34.46-.18.8-.4 1.15-.75.35-.35.57-.69.75-1.15.14-.35.3-.88.34-1.85.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.97-.2-1.5-.34-1.85a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.35-.14-.88-.3-1.85-.34C15.5 4.01 15.15 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 8.15a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.3-8.35a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0z',
} as const;

const SOCIAL_NAMES: Record<keyof typeof SOCIAL_ICONS, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
};

// Only profiles with a URL in SITE_CONFIG.social are shown.
const socialLinks = (Object.keys(SOCIAL_ICONS) as (keyof typeof SOCIAL_ICONS)[])
  .map((key) => ({ name: SOCIAL_NAMES[key], href: SITE_CONFIG.social[key] as string, icon: SOCIAL_ICONS[key] }))
  .filter((link) => link.href);

export default function Footer() {
  const tel = `tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`;
  const columns = [
    { title: 'Services', testId: 'footer-services', links: footerLinks.services },
    { title: 'Company', testId: 'footer-company', links: footerLinks.company },
    { title: 'Service areas', testId: 'footer-areas', links: footerLinks.areas },
  ];

  return (
    <footer className="border-t border-cmg-line bg-cmg-sand text-cmg-ink" data-testid="site-footer">
      <div className="wrap py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <div data-testid="footer-logo">
              <Logo />
            </div>
            <ul className="mt-6 space-y-1 text-base">
              <li>
                <a href={tel} className="link-draw inline-flex min-h-[44px] items-center text-cmg-ink">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="link-draw inline-flex min-h-[44px] items-center break-all text-cmg-ink">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex min-h-[44px] items-center text-cmg-gray">
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-3" data-testid="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-inset ring-cmg-ink/20 text-cmg-ink transition-colors duration-200 hover:bg-cmg-royal hover:text-white hover:ring-cmg-royal"
                  aria-label={`CMG Painting and Design on ${social.name}`}
                  data-testid={`footer-social-${social.name.toLowerCase()}`}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col, i) => (
            <div key={col.title} data-testid={col.testId} className={i === 0 ? 'lg:col-span-3 lg:col-start-6' : 'lg:col-span-2'}>
              <h2 className="font-sans text-sm font-medium leading-snug tracking-normal text-cmg-gray">
                {col.title}
              </h2>
              <ul className="mt-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="link-draw inline-flex min-h-[44px] items-center text-base text-cmg-ink">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-cmg-ink/15 pt-6 text-sm text-cmg-gray sm:flex-row">
          <p>&copy; {new Date().getFullYear()} CMG Painting and Design LLC</p>
          <p>Serving Morris, Essex, Union and Sussex counties, NJ</p>
        </div>
      </div>
    </footer>
  );
}
