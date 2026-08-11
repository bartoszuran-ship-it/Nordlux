'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const LEISTUNGEN = [
  {
    href: '/dachbeschichtung/',
    label: 'Dachbeschichtung',
    icon: (
      <>
        <rect x="4" y="4" width="12" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 10v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 13l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    href: '/dachreinigung/',
    label: 'Dachreinigung',
    icon: (
      <>
        <path d="M3 12l9-7 9 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 11v8h14v-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15.5c1 0 1.8-.8 1.8-1.8 0-1-1.8-3-1.8-3s-1.8 2-1.8 3c0 1 .8 1.8 1.8 1.8z" fill="currentColor" />
      </>
    ),
  },
  {
    href: '/fassadenreinigung/',
    label: 'Fassadenreinigung',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 7h2M14 7h2M8 12h2M14 12h2M8 17h2M14 17h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    href: '/solarreinigung/',
    label: 'Solarreinigung',
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 6v12M15 6v12M3 12h18" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
  },
];

const UEBER_UNS_ICON = (
  <>
    <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </>
);

const KONTAKT_ICON = (
  <path
    d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z M3.5 6.5l8.5 6 8.5-6"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />
);

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileLeistungenOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);
  const isActive = (href: string) => pathname === href;

  const navItemClasses = (active: boolean) =>
    `flex items-center gap-3 rounded-xl px-3 py-3.5 text-base font-medium transition ${
      active ? 'bg-amber/10 text-amber' : 'text-white/90 hover:bg-white/5'
    }`;

  return (
    <header className="sticky top-9 z-40 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/90 text-white transition-shadow duration-300">
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

      {mounted &&
        mobileOpen &&
        createPortal(
          <div
            className="mobile-menu-overlay fixed inset-0 z-[100] flex flex-col bg-ink md:hidden"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeMobile();
            }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <Link href="/" className="flex items-baseline gap-2" onClick={closeMobile}>
                <span className="text-xl font-extrabold tracking-tight text-white">NORDLUX</span>
                <span className="text-sm font-light text-white/70">Dach &amp; Fassade</span>
              </Link>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                aria-label="Menü schließen"
                onClick={closeMobile}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div
              className="flex-1 overflow-y-auto px-4 py-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeMobile();
              }}
            >
              <button
                className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left text-base font-medium text-white/90 transition hover:bg-white/5"
                onClick={() => setMobileLeistungenOpen((v) => !v)}
                aria-expanded={mobileLeistungenOpen}
              >
                <span className="flex items-center gap-3">
                  <IconBadge>
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
                  </IconBadge>
                  Leistungen
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`shrink-0 transition-transform duration-300 ${mobileLeistungenOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: mobileLeistungenOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 py-2 pl-4">
                    {LEISTUNGEN.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMobile}
                          className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                            active ? 'bg-amber/10 text-amber' : 'text-white/70 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <IconBadge>{item.icon}</IconBadge>
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-1 space-y-1">
                <Link href="/ueber-uns/" onClick={closeMobile} className={navItemClasses(isActive('/ueber-uns/'))}>
                  <IconBadge>{UEBER_UNS_ICON}</IconBadge>
                  Über uns
                </Link>
                <Link href="/kontakt/" onClick={closeMobile} className={navItemClasses(isActive('/kontakt/'))}>
                  <IconBadge>{KONTAKT_ICON}</IconBadge>
                  Kontakt
                </Link>
              </div>
            </div>

            <div className="border-t border-white/10 p-4">
              <Link
                href="/kontakt/"
                onClick={closeMobile}
                className="block rounded-full bg-amber px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-amber-dark"
              >
                Kostenloses Angebot
              </Link>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
