import Image from 'next/image';
import Link from 'next/link';
import { SERVICE_IMAGES } from '@/lib/projects';

const services = [
  {
    id: 'interior-painting',
    name: 'Interior painting',
    line: 'Walls, ceilings, trim, doors and staircases, plus wallpaper. Furniture and floors are covered before we start.',
  },
  {
    id: 'exterior-painting',
    name: 'Exterior painting',
    line: 'Clapboard, cedar shingle and trim scraped, primed and repainted, including older homes.',
  },
  {
    id: 'powerwashing',
    name: 'Powerwashing',
    line: 'Decks, porches and siding washed clean, then stained or sealed.',
  },
  {
    id: 'light-carpentry',
    name: 'Light carpentry',
    line: 'Trim, door, drywall and built-in repairs, so the paint job looks finished.',
  },
] as const;

/** Services as a list, each row with its own photograph of CMG work. */
export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28" data-testid="services-overview" aria-labelledby="services-heading">
      <div className="wrap">
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <h2 id="services-heading" className="lg:col-span-7">What we paint and repair</h2>
          <p className="max-w-[46ch] text-lg text-cmg-gray lg:col-span-5">
            Mostly homes, plus offices, senior-living communities and car showrooms.
          </p>
        </div>

        <ul className="mt-12 border-t border-cmg-ink/15">
          {services.map((s) => {
            const img = SERVICE_IMAGES[s.id];
            return (
              <li key={s.id} className="border-b border-cmg-ink/15">
                <Link
                  href={`/services/${s.id}`}
                  data-testid={`service-card-${s.id}`}
                  className="photo-zoom group grid grid-cols-[1fr_96px] items-center gap-4 py-6 sm:grid-cols-[1fr_160px] sm:gap-8 lg:grid-cols-12 lg:py-7"
                >
                  <span className="lg:col-span-4">
                    <span className="block font-display text-[1.75rem] leading-tight tracking-[-0.025em] text-cmg-ink transition-colors group-hover:text-cmg-royal sm:text-4xl">
                      {s.name}
                    </span>
                    <span className="mt-2 block text-base text-cmg-gray lg:hidden">{s.line}</span>
                  </span>
                  <span className="hidden text-base leading-relaxed text-cmg-gray lg:col-span-5 lg:block">{s.line}</span>
                  <span className="relative block aspect-[4/3] overflow-hidden rounded-lg lg:col-span-2 lg:col-start-10">
                    <Image src={img.src} alt={img.alt} fill sizes="160px" className="object-cover" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden justify-self-end text-2xl text-cmg-royal transition-transform group-hover:translate-x-1 lg:col-span-1 lg:block"
                  >
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
