'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function CTA() {
  return (
    <section className="py-20 bg-cmg-royal relative overflow-hidden" data-testid="cta-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20stroke='%23ffffff'%20stroke-width='1'%20stroke-linecap='square'%3E%3Cpath%20d='M18%2018h12L18%2030h12'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Glass Container */}
        <div className="bg-white/10 glass-lg rounded-2xl p-8 sm:p-12 border border-white/20">
          <h2 className="text-3xl sm:text-4xl font-bold text-cmg-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-cmg-light mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your painting or design
            project. We&apos;ll work with you to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              data-testid="cta-primary"
              className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-cmg-taupe text-cmg-charcoal hover:-translate-y-0.5 hover:shadow-glass-lg focus:ring-cmg-taupe px-8 py-3.5 text-lg"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              data-testid="cta-secondary"
              className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent border-2 border-cmg-white text-cmg-white hover:bg-cmg-white hover:text-cmg-royal focus:ring-cmg-white px-8 py-3.5 text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {SITE_CONFIG.phone}
            </a>
          </div>
          <p className="text-sm text-cmg-light/70 mt-6">
            Serving Morris, Essex, Union, and Sussex counties in New Jersey
          </p>
        </div>
      </div>
    </section>
  );
}
