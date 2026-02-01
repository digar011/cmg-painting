import { groq } from 'next-sanity';

// Get all projects
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc, completedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    location,
    description,
    mainImage,
    featured,
    completedAt
  }
`;

// Get projects by category
export const projectsByCategoryQuery = groq`
  *[_type == "project" && category == $category] | order(order asc, completedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    location,
    description,
    mainImage,
    featured,
    completedAt
  }
`;

// Get featured projects
export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) [0...6] {
    _id,
    title,
    "slug": slug.current,
    category,
    location,
    description,
    mainImage
  }
`;

// Get single project by slug
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    location,
    description,
    mainImage,
    gallery,
    completedAt
  }
`;
