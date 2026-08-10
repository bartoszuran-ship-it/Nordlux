import Reveal from './Reveal';

// TODO: Platzhalter-Kundenstimmen vor Livegang durch echte Bewertungen ersetzen
// (z. B. aus Google-Rezensionen übernehmen, mit Einverständnis der Kunden).
const PLATZHALTER_STIMMEN = [
  {
    zitat: '[Platzhalter-Kundenstimme: kurze, ehrliche Erfahrung mit der Dachreinigung oder -beschichtung einfügen.]',
    name: '[Name], [Ort]',
  },
  {
    zitat: '[Platzhalter-Kundenstimme: z. B. zu Pünktlichkeit, Sauberkeit und Festpreis einfügen.]',
    name: '[Name], [Ort]',
  },
  {
    zitat: '[Platzhalter-Kundenstimme: z. B. zum Ergebnis der Fassaden- oder Solarreinigung einfügen.]',
    name: '[Name], [Ort]',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Das sagen unsere Kunden</h2>
            <p className="mt-4 text-ink/70">
              Platzhalter-Stimmen — werden vor dem Livegang durch echte Kundenbewertungen ersetzt.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLATZHALTER_STIMMEN.map((stimme, i) => (
            <Reveal key={stimme.name + i} delay={i * 80}>
              <div className="flex h-full flex-col rounded-card border border-black/5 bg-paper p-6 shadow-sm">
                <div className="flex gap-1 text-amber">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg key={starIndex} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.9 5.8 20.3l1.6-6.8-5.2-4.6 6.9-.6L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm italic leading-relaxed text-ink/70">
                  &bdquo;{stimme.zitat}&ldquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-ink">{stimme.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
