import Image from 'next/image';

const steps = [
  {
    title: 'A written proposal',
    description: 'We walk every surface with you and write the scope room by room, with one price for labor and materials.',
  },
  {
    title: 'Protection and prep',
    description: 'Floors and furniture covered, plates removed. Then patching, sanding, caulking and priming where needed.',
  },
  {
    title: 'Two finish coats',
    description: 'Sherwin-Williams or Benjamin Moore, two coats on walls, ceilings, trim and doors.',
  },
  {
    title: 'Cleanup and touch-up paint',
    description: 'Work areas cleaned every day. At the end we leave labeled touch-up paint for you.',
  },
] as const;

/** How a CMG job runs: the dark band of the page, with a finished porch. */
export default function WhyCMG() {
  return (
    <section className="bg-cmg-ink py-20 text-white lg:py-28" data-testid="why-cmg" aria-labelledby="process-heading">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <h2 id="process-heading" className="text-white">How a CMG job runs</h2>
          <p className="mt-5 max-w-[40ch] text-lg text-cmg-taupe">
            Owner Diego J. Garnica writes and signs every proposal, so you know who answers for the
            job from the first visit to the last coat.
          </p>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-frame">
            <Image
              src="/images/projects/front-porch-steps.webp"
              alt="Front porch steps stained red with white risers, finished by CMG"
              fill
              sizes="(min-width: 1024px) 490px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {steps.map((step, i) => (
            <li
              key={step.title}
              data-testid={`why-cmg-card-${i + 1}`}
              className="grid grid-cols-[3rem_1fr] gap-4 border-t border-white/15 py-7 first:border-t-0 first:pt-0 lg:py-9"
            >
              <span className="font-display text-2xl text-cmg-sky" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-white">{step.title}</h3>
                <p className="mt-2 text-cmg-taupe">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
