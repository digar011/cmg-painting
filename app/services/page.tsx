import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SERVICES } from '@/lib/constants';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cmgpaintinganddesign.com';
const pageTitle = 'Our Services | CMG Painting and Design';
const pageDescription =
  'Professional painting and design services including interior painting, exterior painting, powerwashing, and light carpentry. Serving Morris, Essex, Union, and Sussex counties, NJ.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const serviceDetails = [
  {
    id: 'interior-painting',
    title: 'Interior Painting',
    description: 'Transform your indoor spaces with expert interior painting services. We handle walls, ceilings, trim, doors, cabinets, and more with premium finishes that last.',
    features: ['Wall & ceiling painting', 'Trim & molding', 'Cabinet refinishing', 'Accent walls', 'Color consultation'],
    href: '/services/interior-painting',
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    description: 'Protect and beautify your home\'s exterior with professional painting services. We use weather-resistant coatings that stand the test of time.',
    features: ['House painting', 'Deck staining', 'Fence painting', 'Shutters & trim', 'Surface preparation'],
    href: '/services/exterior-painting',
  },
  {
    id: 'powerwashing',
    title: 'Powerwashing',
    description: 'Restore surfaces to like-new condition with professional powerwashing. Perfect for decks, patios, driveways, siding, and more.',
    features: ['Deck cleaning', 'Driveway cleaning', 'Siding wash', 'Patio restoration', 'Pre-paint prep'],
    href: '/services/powerwashing',
  },
  {
    id: 'light-carpentry',
    title: 'Light Carpentry',
    description: 'Quality carpentry work including trim installation, crown molding, baseboards, door frames, and minor repairs to complement your painting project.',
    features: ['Crown molding', 'Baseboard installation', 'Door & window trim', 'Wainscoting', 'Minor repairs'],
    href: '/services/light-carpentry',
  },
];

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/services#webpage`,
    url: `${siteUrl}/services`,
    name: pageTitle,
    description: pageDescription,
    about: {
      "@id": `${siteUrl}#localbusiness`,
    },
  };

  return (
    <>
      <Script
        id="schema-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cmg-charcoal via-cmg-royal to-cmg-blue py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cmg-taupe font-semibold uppercase tracking-widest mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cmg-white mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-cmg-light max-w-3xl mx-auto">
              Professional painting and design services tailored to your needs.
              From interior transformations to exterior protection, we deliver
              quality craftsmanship on every project.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-cmg-off-white" data-testid="services-list">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {serviceDetails.map((service) => (
                <div
                  key={service.id}
                  data-testid={`service-${service.id}`}
                  className="bg-cmg-white border border-cmg-light rounded-xl p-8 hover:shadow-glass-lg transition-shadow duration-300"
                >
                  <h2 className="text-2xl font-bold text-cmg-charcoal mb-4">
                    {service.title}
                  </h2>
                  <p className="text-cmg-gray mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-cmg-gray text-sm">
                        <svg className="w-5 h-5 text-cmg-royal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center font-semibold text-cmg-royal hover:text-cmg-blue transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cmg-royal">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-cmg-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-cmg-light mb-8">
              Contact us today for a free consultation and quote.
            </p>
            <Link
              href="/contact"
              data-testid="services-cta"
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
