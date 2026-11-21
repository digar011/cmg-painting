'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';
import { SERVICES, SITE_CONFIG } from '@/lib/constants';
import { PRIMARY_ACTION } from '@/lib/copy';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

/** Header ("nav-mega" deal): an opaque bar on the content column; Services opens a panel. */
export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);

  // Close menus on route change.
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Lock page scroll under the full-screen mobile menu; Escape closes either menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setMegaOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  // Close the services panel when focus or a click leaves it.
  useEffect(() => {
    if (!megaOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    return () => document.removeEventListener('mousedown', onPointer);
  }, [megaOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cmg-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <header
        data-testid="site-header"
        className="sticky top-0 z-50 border-b border-cmg-line bg-cmg-paper"
      >
        <nav className="wrap" data-testid="primary-nav" aria-label="Main">
          <div className="flex h-[72px] items-center justify-between gap-3 sm:gap-6">
            <div data-testid="site-logo">
              <Logo priority />
            </div>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 md:flex">
              {navigation.map((item) =>
                item.name === 'Services' ? (
                  <li
                    key={item.name}
                    ref={megaRef}
                    className="relative flex items-center"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <Link
                      href={item.href}
                      data-testid="nav-link-services"
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={`rounded-full py-2.5 pl-4 pr-1 text-[15px] font-medium transition-colors hover:text-cmg-royal ${
                        isActive(item.href) ? 'text-cmg-royal' : 'text-cmg-ink'
                      }`}
                    >
                      Services
                    </Link>
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-controls="services-panel"
                      aria-label="Show services"
                      onClick={() => setMegaOpen((v) => !v)}
                      className="flex h-11 w-8 items-center justify-center rounded-full text-cmg-ink hover:text-cmg-royal"
                    >
                      <svg className={`h-4 w-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {/* Mega panel: four services and one photograph card */}
                    <div
                      id="services-panel"
                      hidden={!megaOpen}
                      className="absolute left-[-16px] top-full pt-3"
                      data-testid="services-panel"
                    >
                      <div className="grid w-[680px] grid-cols-[1fr_220px] gap-6 rounded-frame border border-cmg-line bg-cmg-paper p-6 shadow-glass-xl">
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-5">
                          {SERVICES.map((s) => (
                            <li key={s.id}>
                              <Link href={s.href} className="group block rounded-lg p-2 -m-2 hover:bg-cmg-sand">
                                <span className="block font-medium text-cmg-ink group-hover:text-cmg-royal">{s.name}</span>
                                <span className="mt-1 block text-sm leading-snug text-cmg-gray">{s.shortDescription}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link href="/gallery" className="photo-zoom group relative block overflow-hidden rounded-lg">
                          <Image
                            src="/images/projects/colonial-exterior.webp"
                            alt="Blue-gray colonial home with white trim painted by CMG"
                            width={220}
                            height={220}
                            className="h-full min-h-[180px] w-full object-cover"
                          />
                          <span className="absolute inset-x-2 bottom-2 rounded-md bg-cmg-paper px-3 py-2 text-sm font-medium text-cmg-ink">
                            See the project gallery <span aria-hidden="true">→</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      data-testid={`nav-link-${item.name.toLowerCase()}`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={`block rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors hover:text-cmg-royal ${
                        isActive(item.href) ? 'text-cmg-royal' : 'text-cmg-ink'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <div className="flex items-center gap-1 sm:gap-2">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
                className="hidden whitespace-nowrap px-3 text-[15px] font-medium text-cmg-ink hover:text-cmg-royal lg:block"
              >
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" data-testid="header-cta" className="btn btn-primary min-h-[44px] whitespace-nowrap px-4 text-[15px] sm:px-5">
                <span className="hidden sm:inline">{PRIMARY_ACTION}</span>
                <span className="sm:hidden">Free estimate</span>
              </Link>
              <button
                type="button"
                data-testid="mobile-menu-toggle"
                className="flex h-11 w-11 items-center justify-center rounded-full text-cmg-ink md:hidden"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                  {menuOpen ? (
                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" d="M4 8h16M4 16h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu: full screen under the bar */}
        {menuOpen && (
          <div
            id="mobile-menu"
            data-testid="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[73px] z-40 overflow-y-auto bg-cmg-paper md:hidden"
          >
            <div className="wrap flex min-h-full flex-col py-6">
              <ul className="divide-y divide-cmg-line border-y border-cmg-line">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className="flex items-center justify-between py-4 font-display text-3xl tracking-tight text-cmg-ink"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                      <span aria-hidden="true" className="text-xl text-cmg-royal">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-3 pt-8">
                <a href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`} className="btn btn-secondary w-full">
                  Call {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
