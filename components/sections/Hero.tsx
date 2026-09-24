import Image from 'next/image';
import Link from 'next/link';
import { HERO_IMAGE } from '@/lib/projects';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" data-testid="home-hero">
      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-br from-cmg-charcoal via-cmg-royal to-cmg-blue">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          data-testid="hero-image"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cmg-charcoal/80 via-cmg-charcoal/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <p className="text-cmg-taupe font-semibold uppercase tracking-widest mb-4 drop-shadow-lg">
            Morris, Essex, Union & Sussex Counties, NJ
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-xl" data-testid="hero-heading">
            Transform Your Space
            <span className="block text-cmg-taupe drop-shadow-lg">With Expert Painting</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl drop-shadow-md">
            Professional painting and design services that bring your vision to
            life. Quality craftsmanship, attention to detail, and results that
            last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              data-testid="hero-cta-primary"
              className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-cmg-taupe text-cmg-charcoal hover:-translate-y-0.5 hover:shadow-glass-lg focus:ring-cmg-taupe px-8 py-3.5 text-lg shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/gallery"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent border-2 border-cmg-white text-cmg-white hover:bg-cmg-white hover:text-cmg-charcoal focus:ring-cmg-white px-8 py-3.5 text-lg shadow-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cmg-off-white to-transparent z-20" />
    </section>
  );
}
