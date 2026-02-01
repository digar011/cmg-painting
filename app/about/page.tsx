import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cmgpaintinganddesign.com';
const pageTitle = 'About Us | CMG Painting and Design';
const pageDescription =
  'Learn about CMG Painting and Design - professional painting services in Northern New Jersey. Quality craftsmanship, attention to detail, serving Morris, Essex, Union, and Sussex counties.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const stats = [
  { number: 'Quality', label: 'Craftsmanship' },
  { number: 'Local', label: 'NJ Business' },
  { number: '100%', label: 'Fully Insured' },
  { number: '5★', label: 'Customer Service' },
];

const values = [
  {
    title: 'Quality Craftsmanship',
    description:
      'We take pride in every detail. From the first brushstroke to the final touch, excellence is our standard.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Transparent Communication',
    description:
      'No surprises. We keep you informed every step of the way with honest quotes and regular updates.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Customer First',
    description:
      'Your satisfaction is our priority. We listen, adapt, and work tirelessly to exceed your expectations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Local Commitment',
    description:
      'We live and work in the communities we serve. Our reputation in Northern NJ means everything to us.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}/about#aboutpage`,
    url: `${siteUrl}/about`,
    name: pageTitle,
    description: pageDescription,
    about: {
      "@id": `${siteUrl}#localbusiness`,
    },
  };

  return (
    <>
      <Script
        id="schema-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cmg-charcoal via-cmg-royal to-cmg-blue py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cmg-taupe font-semibold uppercase tracking-widest mb-4">
              Who We Are
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cmg-white mb-6">
              About CMG Painting and Design
            </h1>
            <p className="text-lg sm:text-xl text-cmg-light max-w-3xl mx-auto">
              A local business built on quality, integrity, and a passion
              for transforming spaces across Northern New Jersey.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-cmg-charcoal" data-testid="about-stats">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-cmg-taupe mb-2">
                    {stat.number}
                  </p>
                  <p className="text-cmg-light text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-cmg-off-white" data-testid="about-story">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-cmg-royal font-semibold uppercase tracking-widest mb-2">
                  Our Story
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-cmg-charcoal mb-6">
                  Committed to Excellence
                </h2>
                <div className="space-y-4 text-cmg-gray">
                  <p>
                    CMG Painting and Design was founded with a simple mission: to bring
                    exceptional craftsmanship and honest service to homeowners in
                    Northern New Jersey.
                  </p>
                  <p>
                    We specialize in interior and exterior painting, powerwashing, and
                    light carpentry services. Every project, big or small, receives
                    the same attention to detail and commitment to quality.
                  </p>
                  <p>
                    We&apos;re not just painters; we&apos;re your neighbors. We live in the
                    communities we serve, and our reputation is our most valuable asset.
                    That&apos;s why we treat every home like it&apos;s our own.
                  </p>
                </div>
              </div>
              <div className="bg-cmg-light rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-cmg-gray/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-cmg-gray">Insert Team Photo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-cmg-light" data-testid="about-values">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-cmg-royal font-semibold uppercase tracking-widest mb-2">
                What Drives Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-cmg-charcoal mb-4">
                Our Core Values
              </h2>
              <p className="text-cmg-gray max-w-2xl mx-auto">
                These principles guide everything we do, from the first consultation
                to the final walkthrough.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-cmg-white border border-cmg-light rounded-xl p-6 text-center hover:shadow-glass-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-cmg-royal flex items-center justify-center text-cmg-taupe mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-cmg-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-cmg-gray text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cmg-royal relative overflow-hidden" data-testid="about-cta">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20stroke='%23ffffff'%20stroke-width='1'%20stroke-linecap='square'%3E%3Cpath%20d='M18%2018h12L18%2030h12'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-cmg-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-cmg-light mb-8">
              Let&apos;s discuss your project and show you why homeowners across
              Northern NJ trust CMG Painting and Design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 bg-cmg-taupe text-cmg-charcoal hover:-translate-y-0.5 hover:shadow-glass-lg px-8 py-3.5 text-lg"
              >
                Get Free Quote
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 bg-transparent border-2 border-cmg-white text-cmg-white hover:bg-cmg-white hover:text-cmg-royal px-8 py-3.5 text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
