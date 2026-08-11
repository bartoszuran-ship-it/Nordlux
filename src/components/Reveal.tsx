'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}) {
  // Observed on this untransformed wrapper — the animated element (below) can be
  // translated far off-screen, which would otherwise make IntersectionObserver
  // think it never enters the viewport and the reveal would never fire.
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 120px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const directionClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : '';

  return (
    <div ref={ref} className={className}>
      <div
        className={`reveal ${directionClass} ${visible ? 'is-visible' : ''}`}
        style={delay ? { animationDelay: `${delay}ms` } : undefined}
      >
        {children}
      </div>
    </div>
  );
}
