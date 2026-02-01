import Link from 'next/link';
import Logo from '../ui/Logo';
import { SITE_CONFIG } from '@/lib/constants';

const footerLinks = {
  services: [
    { name: 'Interior Painting', href: '/services/interior-painting' },
    { name: 'Exterior Painting', href: '/services/exterior-painting' },
    { name: 'Powerwashing', href: '/services/powerwashing' },
    { name: 'Light Carpentry', href: '/services/light-carpentry' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  areas: SITE_CONFIG.counties.map((county) => ({
    name: county.replace(' County', ' Co.'),
    href: '/contact',
  })),
};

export default function Footer() {
  return (
    <footer className="bg-cmg-charcoal text-cmg-white" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6" data-testid="footer-logo">
              <Logo size="small" variant="white" />
            </div>
            <p className="text-cmg-taupe text-sm leading-relaxed mb-6">
              Professional painting and design services across Morris, Essex,
              Union, and Sussex counties, New Jersey.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-cmg-taupe flex items-center gap-2">
                <svg className="w-4 h-4 text-cmg-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE_CONFIG.phone}
              </p>
              <p className="text-cmg-taupe flex items-center gap-2">
                <svg className="w-4 h-4 text-cmg-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {SITE_CONFIG.email}
              </p>
              <p className="text-cmg-taupe flex items-center gap-2">
                <svg className="w-4 h-4 text-cmg-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4" data-testid="footer-social">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cmg-gray text-cmg-taupe transition-colors duration-200 hover:border-cmg-blue hover:text-cmg-blue"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 8.5V6.75c0-.83.67-1.5 1.5-1.5H17V2.5h-2c-2.48 0-4.5 2.02-4.5 4.5V8.5H8.5v2.75h2v10.25h3V11.25h2.85L17 8.5h-3.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div data-testid="footer-services">
            <h4 className="text-cmg-blue font-semibold mb-4 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cmg-taupe hover:text-cmg-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div data-testid="footer-company">
            <h4 className="text-cmg-blue font-semibold mb-4 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cmg-taupe hover:text-cmg-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div data-testid="footer-areas">
            <h4 className="text-cmg-blue font-semibold mb-4 uppercase tracking-wider text-sm">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {footerLinks.areas.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cmg-taupe hover:text-cmg-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-cmg-gray">
              <p className="text-xs text-cmg-taupe">
                Fully Insured
                <br />
                Quality Guaranteed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cmg-gray flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cmg-taupe text-sm">
            &copy; {new Date().getFullYear()} CMG Painting and Design. All rights reserved.
          </p>
          <p className="text-cmg-taupe text-sm">
            Serving Northern New Jersey
          </p>
        </div>
      </div>
    </footer>
  );
}
