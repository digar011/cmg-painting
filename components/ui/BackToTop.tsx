'use client';

import { useState, useEffect, useCallback } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 300);
  }, []);

  useEffect(() => {
    // Check initial scroll position
    toggleVisibility();

    // Use passive listener for better performance
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      data-testid="back-to-top"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2 text-sm font-medium text-cmg-charcoal bg-cmg-white/90 backdrop-blur-sm border border-cmg-light rounded-full shadow-glass-md hover:bg-cmg-white hover:shadow-glass-lg transition-all duration-200 hover:-translate-y-0.5"
      aria-label="Back to top"
    >
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
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      Back to top
    </button>
  );
}
