import { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyCMG from '@/components/sections/WhyCMG';
import CTA from '@/components/sections/CTA';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cmgpaintinganddesign.com';
const pageTitle = 'CMG Painting and Design | Professional Painting Services in Morris, Essex, Union & Sussex Counties, NJ';
const pageDescription =
  'Professional painting and design services in Northern New Jersey. Interior painting, exterior painting, powerwashing, and light carpentry across Morris, Essex, Union, and Sussex counties.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: pageTitle,
    description: pageDescription,
    about: {
      "@id": `${siteUrl}#localbusiness`,
    },
    publisher: {
      "@id": `${siteUrl}#localbusiness`,
    },
  };

  return (
    <>
      <Script
        id="schema-homepage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <WhyCMG />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
