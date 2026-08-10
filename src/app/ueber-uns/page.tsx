import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import FeatureCards from '@/components/FeatureCards';
import CtaBlock from '@/components/CtaBlock';
import Reveal from '@/components/Reveal';
import { REGION } from '@/config/site';

export const metadata: Metadata = {
  title: 'Über uns',
  description: `Lernen Sie Nordlux Dach & Fassade kennen — Ihren Fachbetrieb für Dach- und Fassadenpflege in ${REGION}.`,
  alternates: { canonical: '/ueber-uns/' },
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        title="Über uns"
        subtitle="Handwerk mit Verantwortung — für Dächer und Fassaden, die lange schön bleiben."
        image="/images/team-arbeit.webp"
        alt="Zwei Handwerker mit Sicherheitsausrüstung stehen bei Sonnenuntergang auf einem Dach"
      />

      {/* FIRMENGESCHICHTE */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Unsere Geschichte</h2>
            <div className="mt-6 space-y-4 text-ink/70">
              {/* TODO: Platzhaltertext vor Livegang durch die echte Firmengeschichte ersetzen */}
              <p>
                [PLATZHALTER: Nordlux Dach &amp; Fassade wurde von [Name des Gründers] gegründet,
                nachdem [kurze Gründungsgeschichte, z. B. jahrelange Erfahrung im Dachdecker- oder
                Reinigungshandwerk] ihn dazu bewogen hat, einen eigenen Betrieb mit Fokus auf
                Dachbeschichtung und Gebäudereinigung aufzubauen.]
              </p>
              <p>
                [PLATZHALTER: Seit [Jahr] betreuen wir Hausbesitzer in {REGION} und haben seither
                [Anzahl] Dächer beschichtet, gereinigt und gepflegt. Was als kleiner Betrieb begann,
                ist heute ein eingespieltes Team aus erfahrenen Fachkräften.]
              </p>
              <p>
                [PLATZHALTER: Ergänzen Sie hier gerne Meilensteine, Zertifizierungen oder
                besondere Referenzprojekte, die Vertrauen bei neuen Kunden schaffen.]
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WERTE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Wofür wir stehen</h2>
          </Reveal>
          <div className="mt-10">
            <FeatureCards
              features={[
                {
                  title: 'Sauberkeit',
                  description: 'Wir hinterlassen jede Baustelle so, wie wir sie gerne selbst vorfinden würden — aufgeräumt und rücksichtsvoll gegenüber Ihrem Grundstück.',
                },
                {
                  title: 'Pünktlichkeit',
                  description: 'Vereinbarte Termine halten wir ein. Verzögerungen kommunizieren wir frühzeitig und transparent.',
                },
                {
                  title: 'Festpreis',
                  description: 'Unser Angebot ist verbindlich. Was wir vereinbaren, ist auch das, was Sie am Ende zahlen — ohne versteckte Zusatzkosten.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* REGION & TEAM */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-xl">
              <Image
                src="/images/team-arbeit.webp"
                alt="Zwei Handwerker mit Sicherheitsausrüstung stehen bei Sonnenuntergang auf einem Dach"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">Vor Ort in {REGION}</h2>
            <p className="mt-4 text-ink/70">
              Als regionaler Fachbetrieb kennen wir die typischen Dach- und Fassadenmaterialien in
              {' '}{REGION} und wissen, welche Verfahren sich für das jeweilige Klima und die
              baulichen Gegebenheiten am besten eignen. Kurze Wege bedeuten für Sie: schnelle
              Termine, persönliche Ansprache und ein Team, das auch nach Abschluss der Arbeiten
              erreichbar bleibt.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
