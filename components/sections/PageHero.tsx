import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface PageHeroProps {
  /** Small line above the h1: a breadcrumb back link or a plain label. */
  eyebrow?: { label: string; href?: string };
  title: ReactNode;
  lead: ReactNode;
  image?: { src: string; alt: string; testId?: string };
  children?: ReactNode;
  testId?: string;
}

/** Inner-page hero: paper ground, display h1, lead, and an optional photograph of CMG work. */
export default function PageHero({ eyebrow, title, lead, image, children, testId }: PageHeroProps) {
  return (
    <section className="border-b border-cmg-line py-14 lg:py-20" data-testid={testId}>
      <div className={`wrap grid gap-10 ${image ? 'lg:grid-cols-12 lg:items-end lg:gap-6' : ''}`}>
        <div className={`animate-enter ${image ? 'lg:col-span-6' : 'max-w-4xl'}`}>
          {eyebrow &&
            (eyebrow.href ? (
              <Link href={eyebrow.href} className="eyebrow link-draw inline-flex min-h-[44px] items-center gap-2">
                <span aria-hidden="true">←</span> {eyebrow.label}
              </Link>
            ) : (
              <p className="eyebrow">{eyebrow.label}</p>
            ))}
          <h1 className="mt-3">{title}</h1>
          <div className="mt-6 max-w-[52ch] text-lg leading-relaxed text-cmg-gray sm:text-xl">{lead}</div>
          {children && <div className="mt-8">{children}</div>}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-frame animate-enter [animation-delay:120ms] lg:col-span-6">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
              data-testid={image.testId}
            />
          </div>
        )}
      </div>
    </section>
  );
}
