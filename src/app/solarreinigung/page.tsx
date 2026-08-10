import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FeatureCards from '@/components/FeatureCards';
import ProcessSteps from '@/components/ProcessSteps';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Faq from '@/components/Faq';
import CtaBlock from '@/components/CtaBlock';
import Reveal from '@/components/Reveal';
import { REGION } from '@/config/site';

export const metadata: Metadata = {
  title: 'Solarreinigung – mehr Ertrag für Ihre PV-Anlage',
  description:
    `Professionelle Solarreinigung in ${REGION}: Schmutz, Staub, Pollen und Vogelkot schonend entfernt für mehr Energieertrag. Materialschonende Technik, Festpreisgarantie.`,
  alternates: { canonical: '/solarreinigung/' },
};

export default function SolarreinigungPage() {
  return (
    <>
      <PageHero
        title="Solarreinigung"
        subtitle="Mehr Licht, mehr Ertrag: professionelle Reinigung Ihrer Solarmodule ohne Beschädigungsrisiko."
        image="/images/leistung-solar.webp"
        alt="Handwerker reinigt Solarmodule auf einem Dach mit einer Wasserbürste an einer Teleskopstange"
      />

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Warum eine regelmäßige Solarreinigung wichtig ist
            </h2>
            <div className="mt-6 space-y-4 text-ink/70">
              <p>
                Solarmodule sind das ganze Jahr über Staub, Pollenflug, Vogelkot und Verschmutzung
                durch Luftschadstoffe ausgesetzt. Was auf den ersten Blick wie eine dünne
                Staubschicht wirkt, kann die Lichtaufnahme der Module bereits um mehrere Prozent
                reduzieren — bei stärkerer Verschmutzung, etwa durch Vogelkot, sind Ertragseinbußen
                von deutlich mehr möglich.
              </p>
              <p>
                Da einzelne verschmutzte Zellen ganze Modulstränge ausbremsen können, wirkt sich
                schon punktueller Schmutz überproportional auf den Gesamtertrag Ihrer Anlage aus.
                Eine regelmäßige, fachgerechte Reinigung sorgt dafür, dass Ihre Module wieder mit
                der Leistung arbeiten, für die sie ausgelegt wurden.
              </p>
              <p>
                Wichtig dabei: Solarmodule haben eine empfindliche Glasoberfläche und Verkabelung.
                Wir setzen deshalb ausschließlich schonende Reinigungstechnik mit weichen Bürsten
                und reinem Wasser ein — ganz ohne aggressive Chemikalien oder Hochdruck, die die
                Module beschädigen oder die Herstellergarantie gefährden könnten.
              </p>
              <p>
                Besonders betroffen sind Anlagen in der Nähe von Bäumen, Feldern oder
                landwirtschaftlichen Flächen, da hier vermehrt Pollen, Blütenstaub und Vogelkot
                anfallen. Auch flach geneigte Module reinigen sich bei Regen deutlich schlechter
                selbst als steil montierte Anlagen und profitieren besonders von einer
                regelmäßigen professionellen Reinigung.
              </p>
              <p>
                Bei der Besichtigung prüfen wir zusätzlich die Zugänglichkeit und Absicherung
                Ihrer Anlage, damit die Reinigung sicher und ohne Risiko für Personen oder Module
                durchgeführt werden kann.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Ihre Vorteile</h2>
          </Reveal>
          <div className="mt-10">
            <FeatureCards
              features={[
                {
                  title: 'Mehr Energieertrag',
                  description: 'Saubere Module nehmen mehr Licht auf und arbeiten wieder mit voller Leistung.',
                },
                {
                  title: 'Materialschonende Technik',
                  description: 'Weiche Bürsten und reines Wasser statt Hochdruck oder aggressiver Chemikalien.',
                },
                {
                  title: 'Kein Garantierisiko',
                  description: 'Unser Verfahren gefährdet nicht die Herstellergarantie Ihrer Solarmodule.',
                },
                {
                  title: 'Entfernt hartnäckigen Schmutz',
                  description: 'Vogelkot, Pollen und Staubablagerungen werden gründlich und rückstandsfrei entfernt.',
                },
                {
                  title: 'Längere Anlagenlebensdauer',
                  description: 'Regelmäßige Pflege verhindert dauerhafte Verschattung einzelner Zellen und Zellstränge.',
                },
                {
                  title: 'Festpreisgarantie',
                  description: 'Transparentes Angebot nach kostenloser Besichtigung Ihrer Anlage.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Unser Ablauf</h2>
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <ProcessSteps
              steps={[
                { title: 'Besichtigung', description: 'Wir prüfen Anlagengröße, Neigung und Verschmutzungsgrad Ihrer Module.' },
                { title: 'Sicherheitscheck', description: 'Kontrolle der Dachsicherung und Zugänglichkeit vor Arbeitsbeginn.' },
                { title: 'Schonende Reinigung', description: 'Reinigung mit weicher Bürste und reinem Wasser, Modul für Modul.' },
                { title: 'Abnahme', description: 'Gemeinsame Sichtprüfung und Übergabe der gereinigten Anlage.' },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Vorher &amp; Nachher</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Bewegen Sie den Regler und sehen Sie den Unterschied einer professionellen Solarreinigung.
            </p>
          </Reveal>
          <Reveal delay={100} className="mx-auto mt-10 max-w-2xl">
            <BeforeAfterSlider
              vorherSrc="/images/solar-vorher.webp"
              nachherSrc="/images/solar-nachher.webp"
              vorherAlt="Solarmodule mit Staub, Pollen und Vogelkot verschmutzt vor der Solarreinigung"
              nachherAlt="Dieselben Solarmodule blitzsauber mit Himmelspiegelung nach der Solarreinigung"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Häufige Fragen</h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <Faq
              items={[
                {
                  frage: 'Wie oft sollten Solarmodule gereinigt werden?',
                  antwort:
                    'Je nach Standort und Umgebung empfehlen wir eine Reinigung ein- bis zweimal jährlich, etwa nach der Pollenflugsaison oder vor dem sonnenreichen Sommerhalbjahr. Bei starker Verschmutzung, etwa durch Vogelkot, beraten wir Sie gerne individuell.',
                },
                {
                  frage: 'Besteht ein Risiko für die Module bei der Reinigung?',
                  antwort:
                    'Nein, wir arbeiten ausschließlich mit weichen Bürsten und reinem Wasser ohne Hochdruck oder aggressive Chemikalien. Dieses Verfahren schont die Glasoberfläche und gefährdet nicht Ihre Herstellergarantie.',
                },
                {
                  frage: 'Muss die Anlage während der Reinigung abgeschaltet werden?',
                  antwort:
                    'In der Regel nicht — unser Verfahren ist für den Betrieb der Anlage unbedenklich. Bei besonderen technischen Gegebenheiten stimmen wir das Vorgehen vorab mit Ihnen ab.',
                },
                {
                  frage: 'Lohnt sich die Reinigung finanziell?',
                  antwort:
                    'Ja, in den meisten Fällen amortisieren sich die Reinigungskosten bereits nach kurzer Zeit durch den gesteigerten Energieertrag — besonders bei sichtbarer Verschmutzung oder Vogelkot auf einzelnen Modulen.',
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
