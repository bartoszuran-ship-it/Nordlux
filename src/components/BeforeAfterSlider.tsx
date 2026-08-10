'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function BeforeAfterSlider({
  vorherSrc,
  nachherSrc,
  vorherAlt,
  nachherAlt,
}: {
  vorherSrc: string;
  nachherSrc: string;
  vorherAlt: string;
  nachherAlt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDemoing, setIsDemoing] = useState(false);
  const dragging = useRef(false);
  const demoStarted = useRef(false);
  const demoTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const cancelDemo = useCallback(() => {
    demoTimeouts.current.forEach(clearTimeout);
    demoTimeouts.current = [];
    setIsDemoing(false);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || demoStarted.current) return;
          demoStarted.current = true;
          observer.disconnect();

          setIsDemoing(true);
          const sequence = [500, 28, 1250, 72, 2050, 50];
          for (let i = 0; i < sequence.length; i += 2) {
            const delay = sequence[i] as number;
            const target = sequence[i + 1] as number;
            demoTimeouts.current.push(setTimeout(() => setPosition(target), delay));
          }
          demoTimeouts.current.push(setTimeout(() => setIsDemoing(false), 2600));
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      demoTimeouts.current.forEach(clearTimeout);
    };
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    demoStarted.current = true;
    cancelDemo();
    dragging.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const transitionClass = isDemoing ? 'transition-all duration-700 ease-in-out' : '';

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-card shadow-xl touch-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <Image
        src={nachherSrc}
        alt={nachherAlt}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="pointer-events-none object-cover"
      />
      <div
        className={`absolute inset-0 ${transitionClass}`}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={vorherSrc}
          alt={vorherAlt}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="pointer-events-none object-cover"
        />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white">
        Vorher
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-amber/90 px-3 py-1 text-xs font-semibold text-white">
        Nachher
      </span>

      <div
        className={`absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-white shadow-md ${transitionClass}`}
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 5l-6 7 6 7M16 5l6 7-6 7" stroke="#18202e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
