'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';

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
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
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
        className="absolute inset-0"
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
        className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-white shadow-md"
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
