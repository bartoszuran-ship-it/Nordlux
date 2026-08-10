'use client';

import { useEffect, useRef, useState } from 'react';

export type Step = {
  title: string;
  description: string;
};

const STAGGER_MS = 300;

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLOListElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleCount(steps.length);
      return;
    }

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          observer.disconnect();
          steps.forEach((_, i) => {
            timeouts.push(
              setTimeout(() => setVisibleCount((v) => Math.max(v, i + 1)), i * STAGGER_MS + 150)
            );
          });
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [steps]);

  return (
    <ol ref={containerRef} className="flex flex-col gap-10 md:flex-row">
      {steps.map((step, i) => {
        const isVisible = i < visibleCount;
        return (
          <li key={step.title} className="flex-1">
            <div className="flex items-center">
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber text-lg font-bold text-white shadow-lg shadow-amber/30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              >
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`ml-3 hidden h-[3px] flex-1 origin-left rounded-full bg-amber/25 transition-transform duration-500 ease-out md:block ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              )}
            </div>
            <h3
              className={`mt-5 pr-4 text-lg font-bold text-ink transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-2 pr-4 text-sm leading-relaxed text-ink/70 transition-all delay-75 duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              {step.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
