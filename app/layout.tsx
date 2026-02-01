import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BackToTop from "@/components/ui/BackToTop";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cmgpaintinganddesign.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CMG Painting and Design | Professional Painting Services | Morris, Essex, Union, Sussex Counties NJ",
    template: "%s | CMG Painting and Design",
  },
  description: "Professional painting and design services in Northern New Jersey. Interior painting, exterior painting, powerwashing, and light carpentry across Morris, Essex, Union, and Sussex counties.",
  keywords: [
    "painting",
    "interior painting",
    "exterior painting",
    "powerwashing",
    "light carpentry",
    "house painting",
    "residential painting",
    "commercial painting",
    "New Jersey",
    "Morris County",
    "Essex County",
    "Union County",
    "Sussex County",
    "Randolph NJ",
    "painting contractor",
  ],
  authors: [{ name: "CMG Painting and Design" }],
  creator: "CMG Painting and Design",
  publisher: "CMG Painting and Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "CMG Painting and Design - Professional Painting Services",
    description: "Professional painting and design services across Morris, Essex, Union, and Sussex counties, NJ. Interior painting, exterior painting, powerwashing, and light carpentry.",
    url: siteUrl,
    siteName: "CMG Painting and Design",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CMG Painting and Design - Professional Painting Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMG Painting and Design - Professional Painting Services",
    description: "Professional painting and design services across Northern NJ",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B3FA8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": `${siteUrl}#localbusiness`,
    name: SITE_CONFIG.name,
    url: siteUrl,
    description: "Professional painting and design services including interior painting, exterior painting, powerwashing, and light carpentry across Morris, Essex, Union, and Sussex counties in New Jersey.",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "US",
    },
    areaServed: SITE_CONFIG.counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: county,
    })),
    sameAs: [SITE_CONFIG.social.facebook],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: SITE_CONFIG.name,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}#localbusiness`,
    },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
