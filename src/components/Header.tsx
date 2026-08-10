'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TELEFONNUMMER, TELEFONNUMMER_HREF } from '@/config/site';

const LEISTUNGEN = [
  { href: '/dachbeschichtung/', label: 'Dachbeschichtung' },
  { href: '/dachreinigung/', label: 'Dachreinigung' },
  { href: '/fassadenreinigung/', label: 'Fassadenreinigung' },
  { href: '/solarreinigung/', label: 'Solarreinigung' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/90 text-white transition-shadow duration-300">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <Link href="/" className="flex items-baseline gap-2">
          <span
            className={`font-extrabold tracking-tight transition-all duration-300 ${
              scrolled ? 'text-lg' : 'text-xl'
            }`}
          >
            NORDLUX
          </span>
          <span className="text-sm font-light text-white/70">Dach &amp; Fassade</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
              aria-expanded={open}
            >
              Leistungen
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open && (
              <div className="absolute left-0 top-full w-64 overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-xl">
                {LEISTUNGEN.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/ueber-uns/" className="text-sm font-medium text-white/90 hover:text-white">
            Über uns
          </Link>
          <Link href="/kontakt/" className="text-sm font-medium text-white/90 hover:text-white">
            Kontakt
          </Link>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={TELEFONNUMMER_HREF} className="text-sm font-semibold text-white/90 hover:text-white">
            {TELEFONNUMMER}
          </a>
          <Link
            href="/kontakt/"
            className="rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-dark"
          >
            Kostenloses Angebot
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menü öffnen"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 px-4 pb-6 md:hidden">
          <button
            className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-white/90"
            onClick={() => setMobileLeistungenOpen((v) => !v)}
          >
            Leistungen
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition ${mobileLeistungenOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileLeistungenOpen && (
            <div className="pl-4">
              {LEISTUNGEN.map((item) => (
                <Link key={item.href} href={item.href} className="block py-2 text-sm text-white/80">
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          <Link href="/ueber-uns/" className="block py-3 text-sm font-medium text-white/90">
            Über uns
          </Link>
          <Link href="/kontakt/" className="block py-3 text-sm font-medium text-white/90">
            Kontakt
          </Link>
          <a href={TELEFONNUMMER_HREF} className="mt-2 block py-3 text-sm font-semibold text-white">
            {TELEFONNUMMER}
          </a>
          <Link
            href="/kontakt/"
            className="mt-2 block rounded-full bg-amber px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Kostenloses Angebot
          </Link>
        </div>
      )}
    </header>
  );
}
