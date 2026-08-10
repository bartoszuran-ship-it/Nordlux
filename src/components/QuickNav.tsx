import Link from 'next/link';
import Reveal from './Reveal';

const SERVICES = [
  {
    href: '/dachbeschichtung/',
    label: 'Dachbeschichtung',
    icon: (
      <>
        <rect x="3" y="4" width="7" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6.5 8v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6.5 12l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12.5 18l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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

export default function QuickNav() {
  return (
    <section className="bg-paper py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col items-center gap-3 rounded-card border border-black/5 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber/10 text-amber transition group-hover:bg-amber group-hover:text-white">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {service.icon}
                  </svg>
                </span>
                <span className="text-sm font-semibold text-ink">{service.label}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
