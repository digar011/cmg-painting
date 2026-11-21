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
const pageTitle = 'Interior Painting Services | CMG Painting and Design';
const pageDescription =
  'Professional interior painting services in Northern New Jersey. Walls, ceilings, trim, cabinets, and more. Serving Morris, Essex, Union, and Sussex counties.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const features = [
  {
    title: 'Wall & Ceiling Painting',
    description: 'Complete wall and ceiling painting with proper preparation, priming, and finishing.',
  },
  {
    title: 'Trim & Molding',
    description: 'Detailed trim work including baseboards, crown molding, door frames, and window casings.',
  },
  {
    title: 'Cabinet Refinishing',
    description: 'Transform your kitchen or bathroom with professional cabinet painting and refinishing.',
  },
  {
    title: 'Accent Walls',
    description: 'Create stunning focal points with expertly painted accent walls in any color.',
  },
  {
    title: 'Color Consultation',
    description: 'Free color consultation to help you choose the perfect palette for your space.',
  },
  {
    title: 'Texture & Faux Finishes',
    description: 'Specialty finishes including texture, faux effects, and decorative techniques.',
  },
];

export default function InteriorPaintingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/interior-painting#service`,
    name: "Interior Painting",
    description: pageDescription,
    provider: {
      "@id": `${siteUrl}#localbusiness`,
    },
    areaServed: ["Morris County", "Essex County", "Union County", "Sussex County"],
  };

  return (
    <>
      <Script
        id="schema-interior-painting"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main id="main">
        {/* Hero Section */}
        <PageHero
          eyebrow={{ label: 'All services', href: '/services' }}
          title="Interior Painting"
          lead="Walls, ceilings, trim, doors, staircases and wallpaper, in homes and commercial spaces. Two finish coats of Sherwin-Williams or Benjamin Moore."
          image={{ ...SERVICE_IMAGES['interior-painting'], testId: 'service-image' }}
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
                Comprehensive interior painting services for every room in your home.
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

        {/* Process Section */}
        <section className="py-20 bg-cmg-sand">
          <div className="wrap">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-cmg-charcoal mb-4">
                Our Process
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Consultation', desc: 'Free in-home consultation to discuss your vision and provide a quote.' },
                { step: '2', title: 'Preparation', desc: 'Thorough surface preparation including patching, sanding, and priming.' },
                { step: '3', title: 'Painting', desc: 'Expert application using premium paints and professional techniques.' },
                { step: '4', title: 'Final Walkthrough', desc: 'Detailed inspection to ensure complete satisfaction with the results.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-cmg-royal text-cmg-white font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-medium text-cmg-charcoal mb-2">{item.title}</h3>
                  <p className="text-cmg-gray text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA heading="Estimates for interior painting" line="Tell us which rooms, ceilings and trim need paint. We walk through with you and send a written proposal with one price." image={{ src: '/images/projects/built-ins-fireplace-wall.webp', alt: 'Living room with white painted built-ins around a brick fireplace' }} />
      </main>
      <Footer />
    </>
  );
}
