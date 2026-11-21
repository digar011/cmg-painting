import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  /** Header (compact) or footer (larger). */
  size?: 'header' | 'footer';
  clickable?: boolean;
  /** Load eagerly (above the fold). */
  priority?: boolean;
  className?: string;
}

/**
 * The owner's logo ("CMG - Logo Final", 2017), white background removed.
 * Source: public/images/brand/cmg-logo.png (1200x563).
 */
export const LOGO_SRC = '/images/brand/cmg-logo.png';

const HEIGHT = { header: 'h-[52px]', footer: 'h-20' } as const;

export default function Logo({ size = 'header', clickable = true, priority = false, className = '' }: LogoProps) {
  const img = (
    <Image
      src={LOGO_SRC}
      alt="CMG Painting and Design"
      width={1200}
      height={563}
      priority={priority}
      sizes={size === 'header' ? '111px' : '171px'}
      className={`${HEIGHT[size]} w-auto ${className}`}
    />
  );

  if (!clickable) return img;

  return (
    <Link href="/" className="inline-flex min-h-[44px] items-center rounded" aria-label="CMG Painting and Design, home">
      {img}
    </Link>
  );
}
