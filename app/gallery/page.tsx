import { Metadata } from 'next';
import Script from 'next/script';
import { projectsQuery } from '@/sanity/lib/queries';
import GalleryClient from './GalleryClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cmgpaintinganddesign.com';
const pageTitle = 'Project Gallery | CMG Painting and Design';
const pageDescription =
  'Browse our portfolio of completed painting projects across Morris, Essex, Union, and Sussex counties. Interior painting, exterior painting, powerwashing, and carpentry.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export const revalidate = 60;

interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  description: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  featured: boolean;
}

// Placeholder projects for when Sanity has no data
const placeholderProjects = [
  {
    id: 'placeholder-1',
    title: 'Modern Living Room Transformation',
    category: 'Interior',
    location: 'Morris County, NJ',
    description: 'Complete interior painting with custom color palette and accent wall.',
    imageSrc: '',
    imageAlt: 'Modern living room interior painting',
  },
  {
    id: 'placeholder-2',
    title: 'Colonial Home Exterior',
    category: 'Exterior',
    location: 'Essex County, NJ',
    description: 'Full exterior house painting with premium weather-resistant coating.',
    imageSrc: '',
    imageAlt: 'Colonial home exterior painting',
  },
  {
    id: 'placeholder-3',
    title: 'Deck Restoration Project',
    category: 'Powerwashing',
    location: 'Union County, NJ',
    description: 'Complete deck cleaning and staining restoration.',
    imageSrc: '',
    imageAlt: 'Deck powerwashing and restoration',
  },
  {
    id: 'placeholder-4',
    title: 'Crown Molding Installation',
    category: 'Carpentry',
    location: 'Sussex County, NJ',
    description: 'Custom crown molding installation throughout the home.',
    imageSrc: '',
    imageAlt: 'Crown molding carpentry work',
  },
  {
    id: 'placeholder-5',
    title: 'Kitchen Cabinet Refinishing',
    category: 'Interior',
    location: 'Morris County, NJ',
    description: 'Complete cabinet painting and refinishing project.',
    imageSrc: '',
    imageAlt: 'Kitchen cabinet painting',
  },
  {
    id: 'placeholder-6',
    title: 'Driveway & Patio Cleaning',
    category: 'Powerwashing',
    location: 'Essex County, NJ',
    description: 'Professional powerwashing of concrete driveway and patio.',
    imageSrc: '',
    imageAlt: 'Driveway powerwashing',
  },
];

export default async function GalleryPage() {
  const isProduction = process.env.NODE_ENV === 'production';
  const hasSanityConfig = isProduction && Boolean(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET
  );
  let projects: SanityProject[] = [];

  if (hasSanityConfig) {
    try {
      const { client } = await import('@/sanity/lib/client');
      projects = await client.fetch(projectsQuery);
    } catch (error) {
      console.error('Error fetching projects from Sanity:', error);
    }
  }

  const formattedProjects = projects.length > 0
    ? projects.map((project) => ({
        id: project._id,
        title: project.title,
        category: project.category,
        location: project.location || '',
        description: project.description || '',
        mainImage: project.mainImage,
        imageSrc: '',
        imageAlt: project.title,
      }))
    : placeholderProjects;

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/gallery#webpage`,
    url: `${siteUrl}/gallery`,
    name: pageTitle,
    description: pageDescription,
    about: {
      "@id": `${siteUrl}#localbusiness`,
    },
  };

  return (
    <>
      <Script
        id="schema-gallery"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <GalleryClient projects={formattedProjects} />
    </>
  );
}
