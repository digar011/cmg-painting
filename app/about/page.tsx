import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG, SERVICE_TOWNS } from '@/lib/constants';
import { PROJECTS, type Project } from '@/lib/projects';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cmgpaintinganddesign.com';
// The root layout template appends " | CMG Painting and Design".
const pageTitle = 'About Us — Randolph, NJ Painting Company';
const fullTitle = `${pageTitle} | ${SITE_CONFIG.name}`;
const pageDescription =
  'Locally owned painting company in Randolph, NJ. Over a decade of interior, exterior and commercial painting across Morris, Essex, Union and Sussex counties.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/about' },
  openGraph: {
    title: fullTitle,
    description: pageDescription,
    url: '/about',
  },
};

const stats = [
  { number: '10+', label: 'Years in Business' },
  { number: '4', label: 'NJ Counties Served' },
  { number: '2', label: 'Finish Coats, Standard' },
  { number: 'Free', label: 'Written Estimates' },
];

const processSteps = [
  {
    title: 'Walkthrough & Written Proposal',
    description:
      'We visit, look at every surface with you, and put the scope in writing area by area, with one clear price for labor and materials.',
  },
  {
    title: 'Protection First',
    description:
      'Furniture, fixtures, rugs and floors are covered with drop cloths and plastic. Switch plates, outlet and vent covers come off before painting and go back on after.',
  },
  {
    title: 'Careful Preparation',
    description:
      'Patching, sanding, caulking and priming where needed, so the finish goes on over a sound, clean surface and lasts.',
  },
  {
    title: 'Quality Paint, Two Coats',
    description:
      'We use Sherwin-Williams or Benjamin Moore products and apply two finish coats to walls, ceilings, trim and doors.',
  },
  {
    title: 'Daily Cleanup & Touch-Up Paint',
    description:
      'Work areas are cleaned and debris is removed every day. When the job is done, we leave labeled touch-up paint for you.',
  },
];

const values = [
  {
    title: 'Locally Owned',
    description:
      'Based in Randolph and run by its owner. Our name is on every proposal, and our reputation in Northern NJ is built one home at a time.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Clear, Written Scopes',
    description:
      'No guesswork. You see exactly which rooms, surfaces and coats are included before we start, and changes are agreed in writing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Respect for Your Space',
    description:
      'Covered floors and furniture, daily cleanup, and hardware put back where it belongs. We work in your home the way we would want someone to work in ours.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Residential & Commercial',
    description:
      'From a single front door to senior-living communities, offices and showrooms, every job gets the same prep, protection and cleanup.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const featuredProjectIds = ['clapboard-restoration-after', 'built-ins-fireplace-wall', 'senior-living-corridor'];
const featuredProjects: Project[] = featuredProjectIds
  .map((id) => PROJECTS.find((p) => p.id === id))
  .filter((p): p is Project => p !== undefined);

const storyImage = PROJECTS.find((p) => p.id === 'cape-cod-after');

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${siteUrl}/about#aboutpage`,
        url: `${siteUrl}/about`,
        name: fullTitle,
        description: pageDescription,
        about: { '@id': `${siteUrl}#localbusiness` },
        mainEntity: { '@id': `${siteUrl}#localbusiness` },
        breadcrumb: { '@id': `${siteUrl}/about#breadcrumb` },
        ...(storyImage && { primaryImageOfPage: `${siteUrl}${storyImage.imageSrc}` }),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/about#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'About', item: `${siteUrl}/about` },
        ],
      },
    ],
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
      <main id="main">
        {/* Hero Section */}
        <PageHero
          eyebrow={{ label: 'About' }}
          title="About CMG Painting and Design"
          lead={<>A locally owned painting company from {SITE_CONFIG.address.city}, New Jersey, painting homes and businesses across Northern New Jersey for more than a decade.</>}
        />

        {/* Stats Section */}
        <section className="py-12 bg-cmg-charcoal" data-testid="about-stats">
          <div className="wrap">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-cmg-taupe mb-2">
                    {stat.number}
                  </p>
                  <p className="text-cmg-light text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-cmg-off-white" data-testid="about-story">
          <div className="wrap">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-cmg-royal font-semibold mb-2">
                  Our Story
                </p>
                <h2 className="text-cmg-charcoal mb-6">
                  More Than a Decade of Painting in Northern New Jersey
                </h2>
                <div className="space-y-4 text-cmg-gray">
                  <p>
                    CMG Painting &amp; Design LLC is a locally owned painting company based in{' '}
                    {SITE_CONFIG.address.city}, New Jersey. For more than a decade we have painted
                    homes and businesses across Morris, Essex, Union and Sussex counties, from a
                    single room or front door to full exterior repaints and multi-unit commercial
                    projects.
                  </p>
                  <p>
                    Most of our work is for homeowners: interior and exterior repaints, deck and
                    porch staining, powerwashing, wallpaper, and the drywall, trim, door and light
                    carpentry repairs that make a paint job look finished. We also work for
                    commercial clients, including senior-living communities, offices, schools and
                    auto dealerships, repainting residences, corridors, suites and showrooms.
                  </p>
                  <p>
                    Older homes are a big part of what we do. We have scraped and restored peeling
                    clapboard, painted weathered cedar shingles, and refreshed colonials, Dutch
                    colonials and Victorian porch homes, always with the prep those surfaces need.
                  </p>
                  <p>
                    CMG is owner-run: every proposal is written and signed by owner Diego J.
                    Garnica, so you know who is accountable for your project from the first visit
                    to the final coat.
                  </p>
                </div>
              </div>
              {storyImage && (
                <figure>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-glass-lg">
                    <Image
                      src={storyImage.imageSrc}
                      alt={storyImage.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                      data-testid="about-story-image"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-cmg-gray text-center">
                    A CMG exterior repaint: weathered cedar shingles prepped, primed and painted.
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-cmg-white" data-testid="about-process">
          <div className="wrap">
            <div className="text-center mb-16">
              <p className="text-cmg-royal font-semibold mb-2">
                How We Work
              </p>
              <h2 className="text-cmg-charcoal mb-4">
                What to Expect on Every Job
              </h2>
              <p className="text-cmg-gray max-w-2xl mx-auto">
                These standards are written into our proposals, whether we are painting
                one bedroom or an entire building.
              </p>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="bg-cmg-off-white border border-cmg-light rounded-xl p-6"
                  data-testid="about-process-step"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cmg-royal text-cmg-white font-bold mb-4" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-medium text-cmg-charcoal mb-2">{step.title}</h3>
                  <p className="text-cmg-gray text-sm">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-cmg-sand" data-testid="about-values">
          <div className="wrap">
            <div className="text-center mb-16">
              <p className="text-cmg-royal font-semibold mb-2">
                Why Choose CMG
              </p>
              <h2 className="text-cmg-charcoal mb-4">
                Our Core Values
              </h2>
              <p className="text-cmg-gray max-w-2xl mx-auto">
                These principles guide everything we do, from the first walkthrough to the last
                touch-up.
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
                  <h3 className="text-lg font-medium text-cmg-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-cmg-gray text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Work Section */}
        <section className="py-20 bg-cmg-off-white" data-testid="about-work">
          <div className="wrap">
            <div className="text-center mb-12">
              <p className="text-cmg-royal font-semibold mb-2">
                Our Work
              </p>
              <h2 className="text-cmg-charcoal mb-4">
                Real Projects by Our Crew
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <figure
                  key={project.id}
                  className="bg-cmg-white rounded-xl overflow-hidden shadow-glass-sm"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-5">
                    <h3 className="text-lg font-medium text-cmg-charcoal mb-1">{project.title}</h3>
                    <p className="text-sm text-cmg-gray">{project.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/gallery"
                className="inline-flex items-center font-semibold text-cmg-royal hover:text-cmg-blue"
                data-testid="about-gallery-link"
              >
                See more in our project gallery
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 bg-cmg-white" data-testid="about-service-area">
          <div className="wrap">
            <div className="text-center mb-12">
              <p className="text-cmg-royal font-semibold mb-2">
                Where We Work
              </p>
              <h2 className="text-cmg-charcoal mb-4">
                Serving Morris, Essex, Union &amp; Sussex Counties
              </h2>
              <p className="text-cmg-gray max-w-2xl mx-auto">
                From our base in {SITE_CONFIG.address.city}, we serve homeowners and businesses
                across Northern New Jersey. Communities where we have completed projects include:
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {SERVICE_TOWNS.map((group) => (
                <div key={group.county} className="text-center sm:text-left">
                  <h3 className="text-lg font-medium text-cmg-charcoal mb-2">{group.county}</h3>
                  <ul className="text-cmg-gray text-sm space-y-1">
                    {group.towns.map((town) => (
                      <li key={town}>{town}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-cmg-gray text-sm mt-10">
              Don&apos;t see your town? We also serve Sussex County and take on larger commercial
              projects elsewhere in New Jersey. Just ask.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <CTA heading="Free written estimates" testId="about-cta" primaryTestId="about-cta-quote" secondaryTestId="about-cta-phone" image={{ src: '/images/projects/dutch-colonial-exterior.webp', alt: 'Dutch colonial home painted greige with white trim' }} />
      </main>
      <Footer />
    </>
  );
}
