import Reveal from './Reveal';
import CountUp from './CountUp';

const ICON_ITEMS = [
  {
    label: 'Kostenlose Besichtigung',
    icon: (
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: 'Versichert & zertifiziert',
    icon: (
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="bg-ink py-14 sm:py-16">
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg font-extrabold text-amber">
              <CountUp to={4} />
            </span>
            <span className="text-sm font-semibold text-white">Leistungen aus einer Hand</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-base font-extrabold text-amber">
              <CountUp to={100} suffix="%" />
            </span>
            <span className="text-sm font-semibold text-white">Festpreisgarantie</span>
          </div>

          {ICON_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {item.icon}
                </svg>
              </span>
              <span className="text-sm font-semibold text-white">{item.label}</span>
            </div>
          ))}

          {/* TODO: Sobald echte Google-Bewertungen vorliegen, hier durch echten Wert
              und Link zum Google-Unternehmensprofil ersetzen. */}
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.9 5.8 20.3l1.6-6.8-5.2-4.6 6.9-.6L12 2z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-white">
              Google-Bewertungen
              <span className="block text-xs font-normal text-white/50">folgen in Kürze</span>
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
