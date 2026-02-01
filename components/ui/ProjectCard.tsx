interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
  testId?: string;
}

export default function ProjectCard({
  title,
  category,
  location,
  imageUrl,
  onClick,
  testId,
}: ProjectCardProps) {
  return (
    <div
      className="group relative rounded-xl overflow-hidden bg-cmg-light cursor-pointer"
      onClick={onClick}
      data-testid={testId}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cmg-light">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-cmg-gray/30 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xs text-cmg-gray/50">
                Insert Project Image
              </p>
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cmg-charcoal/90 via-cmg-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-cmg-royal text-cmg-white text-xs font-semibold uppercase tracking-wider rounded-full">
            {category}
          </span>
        </div>

        {/* View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 bg-cmg-taupe text-cmg-charcoal font-semibold rounded-md">
            View Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-cmg-white">
        <h3 className="font-bold text-cmg-charcoal mb-1">{title}</h3>
        <p className="text-cmg-gray text-sm flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </p>
      </div>
    </div>
  );
}
