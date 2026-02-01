'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll();
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cmg-white/80 backdrop-blur-lg shadow-glass-md'
          : 'bg-cmg-white'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-testid="primary-nav">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex h-20 items-center" data-testid="site-logo">
            <Logo size="large" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
                className="text-cmg-charcoal font-medium hover:text-cmg-royal transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          {!isMobile && (
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                data-testid="header-cta"
                className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-cmg-royal text-cmg-white hover:-translate-y-0.5 hover:shadow-glass-lg focus:ring-cmg-royal px-6 py-2.5 text-sm"
              >
                Get Free Quote
              </Link>
            </div>
          )}

          {/* CTA Button - Mobile */}
          {isMobile && (
            <Link
              href="/contact"
              data-testid="header-cta"
              className="inline-flex items-center justify-center font-semibold rounded-md bg-cmg-royal text-cmg-white px-4 py-2 text-sm mr-2"
            >
              Quote
            </Link>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              type="button"
              data-testid="mobile-menu-toggle"
              className="p-2 text-cmg-charcoal"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="py-4 border-t border-cmg-light" data-testid="mobile-menu">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                  className="text-cmg-charcoal font-medium hover:text-cmg-royal transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-cmg-royal text-cmg-white hover:-translate-y-0.5 hover:shadow-glass-lg focus:ring-cmg-royal px-6 py-2.5 text-sm mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
