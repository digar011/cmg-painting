import Image from 'next/image';
import Develop from '@/components/ui/Develop';

/**
 * The page's dealt moment ("picture-develops"): the finished Cape Cod comes
 * up from a grey print beside the same house before work started.
 */
export default function BeforeAfter() {
  return (
    <section className="bg-cmg-sand py-20 lg:py-28" data-testid="before-after" aria-labelledby="before-after-heading">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <h2 id="before-after-heading">Cedar shingles, before and after</h2>
          <p className="mt-5 max-w-[38ch] text-lg text-cmg-gray">
            This Cape Cod had bare, weathered shingles. We prepped and primed them, then painted the
            body a warm yellow with crisp white trim.
          </p>
          <div className="mt-8 hidden lg:block">
            <p className="mb-3 text-sm font-medium text-cmg-ink">Before</p>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/projects/cape-cod-before.webp"
                alt="The same Cape Cod home before painting, with bare weathered cedar shingles"
                fill
                sizes="380px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="mb-3 text-sm font-medium text-cmg-ink">After</p>
          <Develop className="relative aspect-[4/3] overflow-hidden rounded-frame">
            <Image
              src="/images/projects/cape-cod-after.webp"
              alt="Cape Cod home after CMG painted the cedar shingles yellow with white trim"
              fill
              sizes="(min-width: 1024px) 790px, 100vw"
              className="object-cover"
            />
          </Develop>
        </div>

        <div className="lg:hidden">
          <p className="mb-3 text-sm font-medium text-cmg-ink">Before</p>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/projects/cape-cod-before.webp"
              alt="The same Cape Cod home before painting, with bare weathered cedar shingles"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
