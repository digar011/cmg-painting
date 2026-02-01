'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
  };
  imageSrc: string;
  imageAlt: string;
}

interface GalleryClientProps {
  projects: Project[];
}

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'Interior', name: 'Interior' },
  { id: 'Exterior', name: 'Exterior' },
  { id: 'Powerwashing', name: 'Powerwashing' },
  { id: 'Carpentry', name: 'Carpentry' },
];

export default function GalleryClient({ projects }: GalleryClientProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cmg-charcoal via-cmg-royal to-cmg-blue py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cmg-taupe font-semibold uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cmg-white mb-6">
              Project Gallery
            </h1>
            <p className="text-lg sm:text-xl text-cmg-light max-w-3xl mx-auto">
              Browse our portfolio of completed projects across Morris, Essex, Union,
              and Sussex counties. Every project showcases our commitment to quality
              craftsmanship.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-cmg-off-white border-b border-cmg-light sticky top-20 z-40" data-testid="gallery-filters">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  data-testid={`filter-${category.id.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-cmg-royal text-cmg-white'
                      : 'bg-cmg-light text-cmg-gray hover:bg-cmg-royal/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-cmg-off-white" data-testid="gallery-grid">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    data-testid="project-card"
                    className="group relative rounded-xl overflow-hidden bg-cmg-light cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-cmg-light">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <svg
                            className="w-16 h-16 text-cmg-gray/30 mx-auto mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p className="text-xs text-cmg-gray/50">
                            Insert Project Image
                          </p>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cmg-charcoal/90 via-cmg-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cmg-royal text-cmg-white text-xs font-semibold uppercase tracking-wider rounded-full">
                          {project.category}
                        </span>
                      </div>

                      {/* View Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-4 py-2 bg-cmg-taupe text-cmg-charcoal font-semibold rounded-md">
                          View Project
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-cmg-white">
                      <h3 className="font-bold text-cmg-charcoal mb-1">
                        {project.title}
                      </h3>
                      <p className="text-cmg-gray text-sm flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {project.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-cmg-gray">
                  No projects found in this category.
                </p>
              </div>
            )}

            {/* Results Count */}
            <div className="mt-8 text-center">
              <p className="text-cmg-gray text-sm">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cmg-charcoal">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-cmg-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-cmg-taupe mb-8">
              Let&apos;s discuss your vision and create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                data-testid="gallery-cta"
                className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 bg-cmg-royal text-cmg-white hover:-translate-y-0.5 hover:shadow-glass-lg px-8 py-3.5 text-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cmg-charcoal/90"
            onClick={() => setSelectedProject(null)}
            data-testid="lightbox-modal"
          >
            <div
              className="relative max-w-4xl w-full bg-cmg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                data-testid="lightbox-close"
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-cmg-charcoal/50 hover:bg-cmg-charcoal/70 rounded-full flex items-center justify-center text-cmg-white transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image */}
              <div className="relative aspect-video bg-cmg-light">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-24 h-24 text-cmg-gray/30 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-cmg-gray/50">Insert Project Image</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-cmg-royal text-cmg-white text-xs font-semibold uppercase tracking-wider rounded-full mb-2">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-bold text-cmg-charcoal">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                <p className="text-cmg-royal font-medium mb-4 flex items-center gap-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {selectedProject.location}
                </p>

                <p className="text-cmg-gray mb-6">
                  {selectedProject.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 bg-cmg-blue text-cmg-white hover:-translate-y-0.5 px-6 py-3"
                >
                  Get a Similar Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
