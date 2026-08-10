import Link from 'next/link';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

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
    <div className="relative z-10 -mt-16 pb-10 sm:-mt-20 sm:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 divide-x divide-y divide-black/5 overflow-hidden rounded-card bg-white shadow-2xl sm:grid-cols-4 sm:divide-y-0">
            {SERVICES.map((service) => (
              <TiltCard key={service.href} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col items-center justify-center gap-3 p-6 text-center transition hover:bg-paper sm:p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber/10 text-amber transition group-hover:bg-amber group-hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      {service.icon}
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-ink">{service.label}</span>
                </Link>
              </TiltCard>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
