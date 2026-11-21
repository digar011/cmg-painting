import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'white';
  clickable?: boolean;
  className?: string;
}

/**
 * CMG wordmark: "CMG" set in the display face with the logo's brush stroke
 * as an underline, "Painting & Design" beside it.
 */
export default function Logo({ variant = 'default', clickable = true, className = '' }: LogoProps) {
  const ink = variant === 'white' ? 'text-white' : 'text-cmg-ink';
  const sub = variant === 'white' ? 'text-cmg-taupe' : 'text-cmg-gray';

  const content = (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative font-display text-[28px] font-medium leading-none tracking-[-0.04em] text-cmg-royal">
        <span className={variant === 'white' ? 'text-white' : ''}>CMG</span>
        <span aria-hidden="true" className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-cmg-royal" />
      </span>
      <span className={`font-display text-[13px] font-medium uppercase leading-[1.1] tracking-[0.08em] ${ink}`}>
        Painting
        <span className={`block ${sub}`}>&amp; Design</span>
      </span>
    </span>
  );

  if (!clickable) return content;

  return (
    <Link href="/" className="inline-flex min-h-[44px] items-center rounded" aria-label="CMG Painting and Design, home">
      {content}
    </Link>
  );
}
