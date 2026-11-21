'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface DevelopProps {
  children: ReactNode;
  className?: string;
}

/**
 * "Picture-develops" moment: the photograph inside comes up from a pale grey
 * print to full colour once, the first time it is on screen. Under reduced
 * motion it shows in colour at once (globals.css).
 */
export default function Develop({ children, className = '' }: DevelopProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-developed');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add('is-developed');
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-develop className={className}>
      {children}
    </div>
  );
}
