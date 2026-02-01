import { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';
import { SITE_CONFIG } from '@/lib/constants';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cmgpaintinganddesign.com';
const pageTitle = 'Contact Us | CMG Painting and Design';
const pageDescription =
  'Get in touch with CMG Painting and Design for a free consultation. Serving Morris, Essex, Union, and Sussex counties, NJ with professional painting services.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const contactInfo = [
  {
    title: 'Phone',
    value: SITE_CONFIG.phone,
    description: 'Call for a free estimate',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: SITE_CONFIG.email,
    description: 'We respond within 24 hours',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Location',
    value: `${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}`,
    description: 'Serving Northern New Jersey',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const serviceAreas = [
  {
    county: 'Morris County',
    towns: ['Morristown', 'Parsippany', 'Denville', 'Randolph', 'Madison', 'Chatham', 'Florham Park'],
  },
  {
    county: 'Essex County',
    towns: ['Montclair', 'West Orange', 'Livingston', 'Millburn', 'South Orange', 'Maplewood', 'Glen Ridge'],
  },
  {
    county: 'Union County',
    towns: ['Summit', 'Westfield', 'Cranford', 'Scotch Plains', 'New Providence', 'Berkeley Heights', 'Mountainside'],
  },
  {
    county: 'Sussex County',
    towns: ['Newton', 'Sparta', 'Vernon', 'Hopatcong', 'Andover', 'Byram', 'Frankford'],
  },
];

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#contactpage`,
    url: `${siteUrl}/contact`,
    name: pageTitle,
    description: pageDescription,
    about: {
      "@id": `${siteUrl}#localbusiness`,
      "@type": "HousePainter",
      name: "CMG Painting and Design",
      areaServed: serviceAreas.flatMap(area => area.towns).map(town => ({
        "@type": "City",
        name: town
      })),
    },
  };

  return (
    <>
      <Script
        id="schema-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cmg-charcoal via-cmg-royal to-cmg-blue py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cmg-taupe font-semibold uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cmg-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-cmg-light max-w-3xl mx-auto">
              Ready to start your project? Reach out for a free,
              no-obligation consultation and quote.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-cmg-off-white" data-testid="contact-info">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-cmg-white border border-cmg-light rounded-xl p-6 text-center hover:shadow-glass-lg transition-shadow duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-cmg-royal flex items-center justify-center text-cmg-taupe mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-cmg-charcoal mb-2">{item.title}</h3>
                  <p className="text-xl font-semibold text-cmg-royal mb-1">{item.value}</p>
                  <p className="text-cmg-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-cmg-light" data-testid="contact-form-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <p className="text-cmg-royal font-semibold uppercase tracking-widest mb-2">
                  Free Consultation
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-cmg-charcoal mb-4">
                  Request a Quote
                </h2>
                <p className="text-cmg-gray mb-8">
                  Share a few details and we&apos;ll respond within 24 hours with
                  a tailored estimate and consultation availability.
                </p>
                <ContactForm />
              </div>

              {/* What to Expect */}
              <div>
                <div className="bg-cmg-charcoal rounded-2xl p-8 text-cmg-white h-full">
                  <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-cmg-royal text-cmg-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-cmg-taupe">Quick Response</h4>
                        <p className="text-cmg-light text-sm">
                          We&apos;ll review your request and respond within 24 hours with next steps.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-cmg-royal text-cmg-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-cmg-taupe">Free Consultation</h4>
                        <p className="text-cmg-light text-sm">
                          Schedule a no-obligation visit to review scope, materials, and options.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-cmg-royal text-cmg-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-cmg-taupe">Detailed Quote</h4>
                        <p className="text-cmg-light text-sm">
                          Receive a comprehensive, itemized quote with clear expectations.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-cmg-royal text-cmg-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-cmg-taupe">Expert Execution</h4>
                        <p className="text-cmg-light text-sm">
                          Professional work with attention to detail and minimal disruption.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 bg-cmg-off-white" data-testid="service-areas">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-cmg-royal font-semibold uppercase tracking-widest mb-2">
                Where We Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-cmg-charcoal mb-4">
                Our Service Areas
              </h2>
              <p className="text-cmg-gray max-w-2xl mx-auto">
                Proudly serving communities across Northern New Jersey with
                professional painting and design services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceAreas.map((area) => (
                <div
                  key={area.county}
                  className="bg-cmg-white border border-cmg-light rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-cmg-charcoal mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-cmg-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {area.county}
                  </h3>
                  <ul className="space-y-2">
                    {area.towns.map((town) => (
                      <li key={town} className="text-cmg-gray text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cmg-taupe flex-shrink-0" />
                        {town}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center text-cmg-gray mt-8 text-sm">
              Don&apos;t see your town listed? Contact us - we may still be able to help!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
