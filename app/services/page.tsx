import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SERVICES } from '@/lib/constants';
import { SERVICE_IMAGES } from '@/lib/projects';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';

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
    description: 'Walls, ceilings, trim, doors and staircases, in homes and commercial spaces. Furniture and floors are covered first, and every surface gets two finish coats.',
    features: ['Wall & ceiling painting', 'Trim & molding', 'Cabinet refinishing', 'Accent walls', 'Color consultation'],
    href: '/services/interior-painting',
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    description: 'Clapboard, cedar shingle, trim and doors, scraped, primed and repainted. We do a lot of older homes, where the prep matters most.',
    features: ['House painting', 'Deck staining', 'Fence painting', 'Shutters & trim', 'Surface preparation'],
    href: '/services/exterior-painting',
  },
  {
    id: 'powerwashing',
    title: 'Powerwashing',
    description: 'Decks, porches, patios, driveways and siding washed clean, then stained, sealed or prepped for paint.',
    features: ['Deck cleaning', 'Driveway cleaning', 'Siding wash', 'Patio restoration', 'Pre-paint prep'],
    href: '/services/powerwashing',
  },
  {
    id: 'light-carpentry',
    title: 'Light Carpentry',
    description: 'Trim, crown molding, baseboards, door frames and small repairs, done before the paint goes on so the job looks finished.',
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
      <main id="main">
        {/* Hero Section */}
        <PageHero
          eyebrow={{ label: 'Services' }}
          title="Painting and repair services in Northern NJ"
          lead="Interior and exterior painting, powerwashing and light carpentry for homes and businesses in Morris, Essex, Union and Sussex counties."
          image={{ src: '/images/projects/colonial-exterior.webp', alt: 'Two-story colonial repainted blue-gray with white trim by CMG' }}
        />

        {/* Services: one row each, with a photograph of CMG work */}
        <section className="py-20 lg:py-28" data-testid="services-list">
          <div className="wrap space-y-20 lg:space-y-28">
            {serviceDetails.map((service, i) => {
              const img = SERVICE_IMAGES[service.id as keyof typeof SERVICE_IMAGES];
              return (
                <article
                  key={service.id}
                  data-testid={`service-${service.id}`}
                  className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6"
                >
                  <Link
                    href={service.href}
                    className={`photo-zoom relative block aspect-[4/3] overflow-hidden rounded-frame lg:col-span-6 ${i % 2 ? 'lg:order-2 lg:col-start-7' : ''}`}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Image src={img.src} alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                  </Link>
                  <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-1' : 'lg:col-start-8'}`}>
                    <h2>{service.title}</h2>
                    <p className="mt-4 text-lg text-cmg-gray">{service.description}</p>
                    <ul className="mt-6 grid grid-cols-2 gap-x-6 border-t border-cmg-ink/15">
                      {service.features.map((feature) => (
                        <li key={feature} className="border-b border-cmg-ink/15 py-3 text-cmg-ink">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href} className="btn btn-secondary mt-8">
                      See {service.title.toLowerCase()}
                      <span aria-hidden="true" className="arrow">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <CTA heading="Free written estimates" primaryTestId="services-cta" secondaryTestId="services-cta-phone" testId="services-close" image={{ src: '/images/projects/victorian-porch-home.webp', alt: 'White Victorian home with a full front porch painted by CMG' }} />
      </main>
      <Footer />
    </>
  );
}
