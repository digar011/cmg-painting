import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_ACTION, PRIMARY_ACTION } from '@/lib/copy';
import { SITE_CONFIG } from '@/lib/constants';

/** Home hero ("split" deal): text left, a real CMG exterior on the right. */
export default function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-73px)] items-stretch py-8 lg:py-12"
      data-testid="home-hero"
      aria-labelledby="hero-heading"
    >
      <div className="wrap grid items-start gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col animate-enter lg:col-span-5">
          <p className="eyebrow flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-cmg-royal" />
            Owner-run painters in {SITE_CONFIG.address.full}
          </p>
          <h1 id="hero-heading" className="mt-4" data-testid="hero-heading">
            House painting in Northern New&nbsp;Jersey
          </h1>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-cmg-gray sm:text-xl">
            Interior and exterior repaints, deck staining, powerwashing and trim carpentry across
            Morris, Essex, Union and Sussex counties. Every job starts with a written,
            room-by-room proposal.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" data-testid="hero-cta-primary" className="btn btn-primary">
              {PRIMARY_ACTION}
              <span aria-hidden="true" className="arrow">→</span>
            </Link>
            <Link href="/gallery" data-testid="hero-cta-secondary" className="btn btn-secondary">
              {GALLERY_ACTION}
            </Link>
          </div>
        </div>

        <div className="relative animate-enter [animation-delay:120ms] lg:col-span-6 lg:col-start-7">
          <div className="relative h-[320px] overflow-hidden rounded-frame sm:h-[440px] lg:h-[calc(100svh-73px-6rem)] lg:max-h-[716px] lg:min-h-[520px]">
            <Image
              src="/images/projects/dutch-colonial-exterior.webp"
              alt="Dutch colonial home with gambrel roof, painted greige with white trim and railings by CMG"
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover object-[45%_50%]"
              data-testid="hero-image"
            />
          </div>
          <div className="absolute bottom-4 left-4 max-w-[280px] rounded-xl border border-cmg-line bg-cmg-paper p-4 sm:bottom-6 sm:left-6">
            <p className="flex items-center gap-2 text-sm font-medium text-cmg-ink">
              <span aria-hidden="true" className="h-2 w-2 animate-breathe rounded-full bg-cmg-royal" />
              Two finish coats, standard
            </p>
            <p className="mt-1 text-sm leading-snug text-cmg-gray">
              Sherwin-Williams or Benjamin Moore on walls, ceilings, trim and doors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
