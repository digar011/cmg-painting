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
const pageTitle = 'Exterior Painting Services | CMG Painting and Design';
const pageDescription =
  'Professional exterior painting services in Northern New Jersey. House painting, deck staining, and more. Serving Morris, Essex, Union, and Sussex counties.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const features = [
  {
    title: 'House Painting',
    description: 'Complete exterior house painting with premium, weather-resistant paints.',
  },
  {
    title: 'Deck Staining',
    description: 'Protect and beautify your deck with professional staining and sealing.',
  },
  {
    title: 'Fence Painting',
    description: 'Refresh and protect fences with quality paint or stain application.',
  },
  {
    title: 'Shutters & Trim',
    description: 'Detailed painting of shutters, trim, fascia, and other exterior elements.',
  },
  {
    title: 'Surface Preparation',
    description: 'Thorough prep including pressure washing, scraping, sanding, and priming.',
  },
  {
    title: 'Weather Protection',
    description: 'Using only premium, weather-resistant coatings that last for years.',
  },
];

export default function ExteriorPaintingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/exterior-painting#service`,
    name: "Exterior Painting",
    description: pageDescription,
    provider: {
      "@id": `${siteUrl}#localbusiness`,
    },
    areaServed: ["Morris County", "Essex County", "Union County", "Sussex County"],
  };

  return (
    <>
      <Script
        id="schema-exterior-painting"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main id="main">
        {/* Hero Section */}
        <PageHero
          eyebrow={{ label: 'All services', href: '/services' }}
          title="Exterior Painting"
          lead="Clapboard, cedar shingle, trim, porches and doors, scraped, primed and repainted. Older homes are a big part of our work, from colonials to Victorian porch houses."
          image={{ ...SERVICE_IMAGES['exterior-painting'], testId: 'service-image' }}
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
                Comprehensive exterior painting services to protect and beautify your property.
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
        <CTA heading="Estimates for exterior painting" line="Tell us about the siding, trim and doors. We look at every side of the house and send a written proposal with one price." image={{ src: '/images/projects/victorian-porch-home.webp', alt: 'White Victorian home with a full front porch painted by CMG' }} />
      </main>
      <Footer />
    </>
  );
}
