import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

const pageTitle = 'Privacy Policy';
const pageDescription =
  'How CMG Painting and Design collects, uses and protects the information you share through our website, phone, email and ads.';
const updated = 'September 24, 2026';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: 'Who we are',
    body: (
      <p>
        CMG Painting &amp; Design LLC (&ldquo;CMG&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a painting
        company based in Randolph, New Jersey. This policy explains what information we collect when you
        request an estimate or contact us, and how we use it.
      </p>
    ),
  },
  {
    heading: 'Information we collect',
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Information you give us:</strong> your name, email address, phone number, the service you
          are interested in, your project address or town, and anything you write in your message &mdash;
          through our website contact form, by phone, by email or text.
        </li>
        <li>
          <strong>Lead forms on Facebook and Instagram:</strong> if you submit a form in one of our ads, Meta
          shares the answers you provide in that form (for example name, phone, email, town and project
          details) with us.
        </li>
        <li>
          <strong>Basic technical data:</strong> our hosting provider keeps standard server logs (such as IP
          address and browser type) for security and reliability.
        </li>
      </ul>
    ),
  },
  {
    heading: 'How we use it',
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>To respond to your request, schedule a walkthrough and send you an estimate.</li>
        <li>To carry out and follow up on work you hire us for (scheduling, invoices, warranty questions).</li>
        <li>To keep records required for running our business.</li>
      </ul>
    ),
  },
  {
    heading: 'What we do not do',
    body: (
      <p>
        We do not sell or rent your personal information, and we do not share it with other companies for
        their own marketing. We will not add you to a marketing list unless you ask us to.
      </p>
    ),
  },
  {
    heading: 'Who we share it with',
    body: (
      <p>
        Only with service providers that help us run the business &mdash; for example our website host,
        email provider, and the tools we use to manage estimates and scheduling &mdash; and only as needed
        to provide our services, or when required by law.
      </p>
    ),
  },
  {
    heading: 'Calls and text messages',
    body: (
      <p>
        If you give us your phone number, we may call or text you about your estimate or project. Message
        and data rates may apply. You can ask us to stop at any time by replying STOP to a text or by telling
        us.
      </p>
    ),
  },
  {
    heading: 'How long we keep it',
    body: (
      <p>
        We keep estimate requests and project records for as long as needed to serve you and to meet our
        legal and tax obligations, then delete them.
      </p>
    ),
  },
  {
    heading: 'Your choices',
    body: (
      <p>
        You can ask us what information we have about you, ask us to correct it, or ask us to delete it, by
        contacting us using the details below. We will respond within a reasonable time.
      </p>
    ),
  },
  {
    heading: 'Children',
    body: <p>Our services are for adults. We do not knowingly collect information from children under 13.</p>,
  },
  {
    heading: 'Changes',
    body: <p>If we change this policy, we will post the new version on this page with a new date.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-cmg-white" data-testid="privacy-page">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-cmg-charcoal mb-2">Privacy Policy</h1>
          <p className="text-cmg-gray mb-10">Last updated: {updated}</p>
          <div className="space-y-10 text-cmg-charcoal leading-relaxed">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-2xl font-semibold mb-3">{s.heading}</h2>
                {s.body}
              </section>
            ))}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact us</h2>
              <p>
                CMG Painting &amp; Design LLC &middot; Randolph, NJ
                <br />
                Phone:{' '}
                <a className="underline" href={`tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, '')}`}>
                  {SITE_CONFIG.phone}
                </a>
                <br />
                Email:{' '}
                <a className="underline" href={`mailto:${SITE_CONFIG.email}`}>
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p className="mt-4">
                <Link className="underline" href="/contact">
                  Request a free estimate
                </Link>
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
