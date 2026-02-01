import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  testId?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  testId,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full" data-testid={testId}>
      <div className="relative h-full bg-cmg-white border border-cmg-light rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg overflow-hidden flex flex-col">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-cmg-royal transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

        {/* Icon */}
        <div className="w-14 h-14 rounded-lg bg-cmg-royal flex items-center justify-center mb-4 shadow-md">
          <div className="text-cmg-white">{icon}</div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-cmg-charcoal mb-2 group-hover:text-cmg-royal transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-cmg-gray leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Link indicator */}
        <div className="mt-auto flex items-center font-medium text-sm text-cmg-royal">
          <span>Learn more</span>
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
