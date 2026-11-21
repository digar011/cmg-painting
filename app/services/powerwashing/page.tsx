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
      <main id="main">
        {/* Hero Section */}
        <PageHero
          eyebrow={{ label: 'All services', href: '/services' }}
          title="Powerwashing"
          lead="Decks, porches, patios and siding washed clean, then stained, sealed or prepped for paint."
          image={{ ...SERVICE_IMAGES['powerwashing'], testId: 'service-image' }}
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
                What We Clean
              </h2>
              <p className="text-lg text-cmg-gray max-w-2xl mt-4">
                Professional powerwashing for all your exterior surfaces.
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
        <CTA heading="Estimates for powerwashing" line="Tell us about the deck, porch or siding. We send a written proposal for washing and any stain or sealer." image={{ src: '/images/projects/deck-stain.webp', alt: 'Freshly stained wooden deck boards' }} />
      </main>
      <Footer />
    </>
  );
}
