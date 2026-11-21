import Image from 'next/image';
import Link from 'next/link';
import { PRIMARY_ACTION } from '@/lib/copy';
import { SITE_CONFIG } from '@/lib/constants';

interface CTAProps {
  heading?: string;
  line?: string;
  image?: { src: string; alt: string };
  testId?: string;
  primaryTestId?: string;
  secondaryTestId?: string;
}

const DEFAULT_IMAGE = {
  src: '/images/projects/white-colonial-exterior.webp',
  alt: 'White colonial home with black shutters and a red front door painted by CMG',
};

/** Closing band ("close-photo" deal): the head row, then a wide CMG photograph. */
export default function CTA({
  heading = 'Free written estimates',
  line = 'Tell us about the rooms or the outside of the house. We set up a walkthrough and send a written proposal with one price.',
  image = DEFAULT_IMAGE,
  testId = 'cta-section',
  primaryTestId = 'cta-primary',
  secondaryTestId = 'cta-secondary',
}: CTAProps) {
  const tel = `tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`;
  return (
    <section className="pb-16 pt-20 lg:pt-28" data-testid={testId} aria-labelledby="cta-heading">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 id="cta-heading">{heading}</h2>
            <p className="mt-5 max-w-[46ch] text-lg text-cmg-gray">
              {line}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Link href="/contact" data-testid={primaryTestId} className="btn btn-primary">
              {PRIMARY_ACTION}
              <span aria-hidden="true" className="arrow">→</span>
            </Link>
            <a href={tel} data-testid={secondaryTestId} className="btn btn-secondary">
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
        <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-frame sm:aspect-[16/7]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1264px) 1200px, 100vw"
            className="object-cover object-[50%_40%]"
          />
        </div>
      </div>
    </section>
  );
}
