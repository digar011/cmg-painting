import type { Metadata, Viewport } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BackToTop from "@/components/ui/BackToTop";
import { SITE_CONFIG } from "@/lib/constants";

const display = Red_Hat_Display({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-display", display: "swap" });
const text = Red_Hat_Text({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-text", display: "swap" });

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
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F0E8",
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
    logo: `${siteUrl}/images/brand/cmg-logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    description: "Professional painting and design services including interior painting, exterior painting, powerwashing, and light carpentry across Morris, Essex, Union, and Sussex counties in New Jersey.",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      addressCountry: "US",
    },
    areaServed: SITE_CONFIG.counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: county,
    })),
    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),
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
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body className="font-sans">
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
