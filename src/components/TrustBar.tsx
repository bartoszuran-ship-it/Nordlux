import Reveal from './Reveal';

const ITEMS = [
  {
    label: 'Kostenlose Besichtigung',
    icon: (
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: 'Festpreisgarantie',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 12.5l1.8 1.8L15 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
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
    <section className="border-b border-black/5 bg-white py-10">
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/10 text-amber">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {item.icon}
                </svg>
              </span>
              <span className="text-sm font-semibold text-ink">{item.label}</span>
            </div>
          ))}

          {/* TODO: Sobald echte Google-Bewertungen vorliegen, hier durch echten Wert
              und Link zum Google-Unternehmensprofil ersetzen. */}
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/10 text-amber">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.9 5.8 20.3l1.6-6.8-5.2-4.6 6.9-.6L12 2z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-ink">
              Google-Bewertungen
              <span className="block text-xs font-normal text-ink/50">folgen in Kürze</span>
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
