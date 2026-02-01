import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cmgpaintinganddesign.com';
const pageTitle = 'Powerwashing Services | CMG Painting and Design';
const pageDescription =
  'Professional powerwashing services in Northern New Jersey. Decks, driveways, siding, patios, and more. Serving Morris, Essex, Union, and Sussex counties.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const features = [
  {
    title: 'Deck Cleaning',
    description: 'Remove dirt, mold, and mildew to restore your deck to like-new condition.',
  },
  {
    title: 'Driveway Cleaning',
    description: 'Clean concrete and asphalt driveways, removing oil stains and buildup.',
  },
  {
    title: 'Siding Wash',
    description: 'Gentle but effective cleaning for vinyl, wood, and other siding materials.',
  },
  {
    title: 'Patio Restoration',
    description: 'Revive patios, walkways, and outdoor living spaces.',
  },
  {
    title: 'Fence Cleaning',
    description: 'Clean wood, vinyl, and composite fencing to prepare for staining or sealing.',
  },
  {
    title: 'Pre-Paint Preparation',
    description: 'Essential surface cleaning before painting for optimal adhesion.',
  },
];

export default function PowerwashingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/powerwashing#service`,
    name: "Powerwashing",
    description: pageDescription,
    provider: {
      "@id": `${siteUrl}#localbusiness`,
    },
    areaServed: ["Morris County", "Essex County", "Union County", "Sussex County"],
  };

  return (
    <>
      <Script
        id="schema-powerwashing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cmg-charcoal via-cmg-royal to-cmg-blue py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-cmg-taupe hover:text-cmg-white mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cmg-white mb-6">
              Powerwashing
            </h1>
            <p className="text-lg sm:text-xl text-cmg-light max-w-3xl">
              Restore surfaces to like-new condition with professional powerwashing
              services. Perfect for decks, patios, driveways, siding, and more.
            </p>
          </div>
        </section>

        {/* Image Placeholder Section */}
        <section className="py-16 bg-cmg-off-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="aspect-[16/9] bg-cmg-light rounded-xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-cmg-gray/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-cmg-gray">Insert Powerwashing Image</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-cmg-white" data-testid="service-features">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-cmg-charcoal mb-4">
                What We Clean
              </h2>
              <p className="text-cmg-gray max-w-2xl mx-auto">
                Professional powerwashing for all your exterior surfaces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-cmg-off-white rounded-xl p-6">
                  <h3 className="text-lg font-bold text-cmg-charcoal mb-2">{feature.title}</h3>
                  <p className="text-cmg-gray text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cmg-royal">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-cmg-white mb-4">
              Ready to Restore Your Surfaces?
            </h2>
            <p className="text-lg text-cmg-light mb-8">
              Contact us today for a free consultation and quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 bg-cmg-taupe text-cmg-charcoal hover:-translate-y-0.5 hover:shadow-glass-lg px-8 py-3.5 text-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
