import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cmgpaintinganddesign.com';
const pageTitle = 'Light Carpentry Services | CMG Painting and Design';
const pageDescription =
  'Professional light carpentry services in Northern New Jersey. Crown molding, trim, baseboards, and repairs. Serving Morris, Essex, Union, and Sussex counties.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const features = [
  {
    title: 'Crown Molding',
    description: 'Elegant crown molding installation to add character and value to your rooms.',
  },
  {
    title: 'Baseboard Installation',
    description: 'New baseboard installation or replacement to complete your interior finish.',
  },
  {
    title: 'Door & Window Trim',
    description: 'Custom trim work around doors and windows for a polished look.',
  },
  {
    title: 'Wainscoting',
    description: 'Classic wainscoting panels to add texture and sophistication.',
  },
  {
    title: 'Chair Rail',
    description: 'Decorative chair rail molding for dining rooms and hallways.',
  },
  {
    title: 'Minor Repairs',
    description: 'Repair and replacement of damaged trim, molding, and woodwork.',
  },
];

export default function LightCarpentryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/light-carpentry#service`,
    name: "Light Carpentry",
    description: pageDescription,
    provider: {
      "@id": `${siteUrl}#localbusiness`,
    },
    areaServed: ["Morris County", "Essex County", "Union County", "Sussex County"],
  };

  return (
    <>
      <Script
        id="schema-light-carpentry"
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
              Light Carpentry
            </h1>
            <p className="text-lg sm:text-xl text-cmg-light max-w-3xl">
              Quality carpentry work including trim installation, crown molding,
              baseboards, door frames, and minor repairs to complement your painting project.
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
                <p className="text-cmg-gray">Insert Light Carpentry Image</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-cmg-white" data-testid="service-features">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-cmg-charcoal mb-4">
                What We Offer
              </h2>
              <p className="text-cmg-gray max-w-2xl mx-auto">
                Professional carpentry services to complete your interior finishing.
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
              Ready to Add Finishing Touches?
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
