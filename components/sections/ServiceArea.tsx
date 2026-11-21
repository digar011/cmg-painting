import { SERVICE_TOWNS, SITE_CONFIG } from '@/lib/constants';

/** Type moment: the four counties set large, with towns CMG has worked in. */
export default function ServiceArea() {
  const towns = new Map<string, readonly string[]>(SERVICE_TOWNS.map((c) => [c.county, c.towns]));
  return (
    <section className="py-20 lg:py-28" data-testid="home-service-area" aria-labelledby="area-heading">
      <div className="wrap">
        <h2 id="area-heading" className="max-w-[18ch]">
          Four counties from our base in {SITE_CONFIG.address.city}
        </h2>
        <ul className="mt-12 border-t border-cmg-ink/15">
          {SITE_CONFIG.counties.map((county) => (
            <li
              key={county}
              className="grid gap-2 border-b border-cmg-ink/15 py-6 lg:grid-cols-12 lg:items-baseline lg:gap-6"
            >
              <span className="font-display text-5xl leading-none tracking-[-0.04em] text-cmg-ink sm:text-6xl lg:col-span-6 lg:text-[5.5rem]">
                {county.replace(' County', '')}
              </span>
              <span className="text-base text-cmg-gray lg:col-span-6">
                {towns.get(county)?.join(', ') ?? 'Ask us about your town'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
