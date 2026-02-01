import Link from 'next/link';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'white';
  clickable?: boolean;
  className?: string;
}

export default function Logo({
  size = 'medium',
  variant = 'default',
  clickable = true,
  className = '',
}: LogoProps) {
  const sizeStyles = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl sm:text-3xl',
  };

  const colorStyles = {
    default: 'text-cmg-royal',
    white: 'text-cmg-white',
  };

  const logoContent = (
    <div className={`font-bold ${sizeStyles[size]} ${colorStyles[variant]} ${className}`}>
      <span>CMG</span>
      <span className={variant === 'white' ? 'text-cmg-taupe' : 'text-cmg-blue'}> Painting</span>
      <span className="block text-sm font-normal tracking-wider">& Design</span>
    </div>
  );

  if (clickable) {
    return (
      <Link
        href="/"
        className="inline-block focus:outline-none focus:ring-2 focus:ring-cmg-royal focus:ring-offset-2 rounded"
        aria-label="CMG Painting and Design Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
