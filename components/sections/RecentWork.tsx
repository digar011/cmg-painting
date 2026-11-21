import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_ACTION } from '@/lib/copy';
import { PROJECTS } from '@/lib/projects';

const PICKS = [
  { id: 'clapboard-restoration-after', cls: 'lg:col-span-4 lg:row-span-2 aspect-[3/4] lg:aspect-auto' },
  { id: 'foyer-staircase', cls: 'lg:col-span-4 aspect-[4/3] lg:aspect-auto' },
  { id: 'red-front-door', cls: 'lg:col-span-4 lg:row-span-2 aspect-[3/4] lg:aspect-auto' },
  { id: 'built-ins-fireplace-wall', cls: 'lg:col-span-4 aspect-[4/3] lg:aspect-auto' },
] as const;

/** Four real projects in an uneven grid, linked to the gallery. */
export default function RecentWork() {
  const byId = new Map(PROJECTS.map((p) => [p.id, p]));
  return (
    <section className="py-20 lg:py-28" data-testid="recent-work" aria-labelledby="work-heading">
      <div className="wrap">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="work-heading">Recent projects</h2>
            <p className="mt-4 max-w-[48ch] text-lg text-cmg-gray">
              A restored clapboard farmhouse, a foyer and staircase, a red entry door and painted
              built-ins, all in Northern New Jersey.
            </p>
          </div>
          <Link href="/gallery" className="btn btn-secondary shrink-0">
            {GALLERY_ACTION}
            <span aria-hidden="true" className="arrow">→</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[260px_260px]">
          {PICKS.map(({ id, cls }) => {
            const p = byId.get(id);
            if (!p) return null;
            return (
              <Link
                key={id}
                href="/gallery"
                className={`photo-zoom relative block overflow-hidden rounded-lg ${cls}`}
                aria-label={`${p.title}, in the gallery`}
              >
                <Image src={p.imageSrc} alt={p.imageAlt} fill sizes="(min-width: 1024px) 400px, 50vw" className="object-cover" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
