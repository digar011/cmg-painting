import Image from 'next/image';
import { SERVICE_IMAGES } from '@/lib/projects';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { PRIMARY_ACTION } from '@/lib/copy';
import CTA from '@/components/sections/CTA';

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
      <main id="main">
        {/* Hero Section */}
        <PageHero
          eyebrow={{ label: 'All services', href: '/services' }}
          title="Light Carpentry"
          lead="Trim, crown molding, baseboards, door frames, drywall and built-ins repaired or installed, so the paint job looks finished."
          image={{ ...SERVICE_IMAGES['light-carpentry'], testId: 'service-image' }}
        >
          <Link href="/contact" className="btn btn-primary">
            {PRIMARY_ACTION}
            <span aria-hidden="true" className="arrow">→</span>
          </Link>
        </PageHero>

        {/* Features Section */}
        <section className="py-20 bg-cmg-white" data-testid="service-features">
          <div className="wrap">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-cmg-charcoal mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-cmg-gray max-w-2xl mt-4">
                Professional carpentry services to complete your interior finishing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-cmg-off-white rounded-xl p-6">
                  <h3 className="text-lg font-medium text-cmg-charcoal mb-2">{feature.title}</h3>
                  <p className="text-cmg-gray text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA heading="Estimates for carpentry repairs" line="Tell us what needs fixing before the paint goes on. We include the repairs in one written proposal." image={{ src: '/images/projects/front-porch-steps.webp', alt: 'Front porch steps stained red with white risers' }} />
      </main>
      <Footer />
    </>
  );
}
