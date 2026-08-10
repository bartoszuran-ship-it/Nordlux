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
  title: 'Dachbeschichtung – Schutz & optische Aufwertung zum Festpreis',
  description:
    `Professionelle Dachbeschichtung in ${REGION}: Werterhalt, Witterungsschutz und ein Dach wie neu. Kostenlose Besichtigung, 6-Schritte-Verfahren, Festpreisgarantie.`,
  alternates: { canonical: '/dachbeschichtung/' },
};

export default function DachbeschichtungPage() {
  return (
    <>
      <PageHero
        title="Dachbeschichtung"
        subtitle="Schutz, Werterhalt und ein Dach wie neu — ohne die Kosten einer kompletten Neueindeckung."
        image="/images/leistung-beschichtung.webp"
        alt="Handwerker mit Sicherheitsausrüstung sprüht graue Dachbeschichtung mit einer Sprühpistole auf ein Ziegeldach"
      />

      {/* WARUM SINNVOLL */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Warum eine Dachbeschichtung sinnvoll ist
            </h2>
            <div className="mt-6 space-y-4 text-ink/70">
              <p>
                Ein Dach ist über Jahrzehnte Wind, Regen, UV-Strahlung und Frost ausgesetzt. Mit
                der Zeit werden Ziegel porös, verlieren ihre Schutzschicht und werden anfällig für
                Moos-, Algen- und Flechtenbefall. Eine professionelle Dachbeschichtung schließt die
                Poren des Materials, macht die Oberfläche wasserabweisend und schützt Ihr Dach so
                nachhaltig vor weiterer Witterungseinwirkung.
              </p>
              <p>
                Neben dem reinen Schutz bringt eine Beschichtung auch eine spürbare optische
                Aufwertung: Verblasste, ungleichmäßig verwitterte Ziegel erhalten wieder eine
                satte, gleichmäßige Farbe. Für viele Hausbesitzer ist das der einfachste Weg, die
                Optik des gesamten Hauses aufzufrischen, ohne ein aufwendiges und teures
                Neueindecken in Kauf nehmen zu müssen.
              </p>
              <p>
                Nicht zuletzt zahlt sich eine Beschichtung auch beim Werterhalt Ihrer Immobilie
                aus: Ein gepflegtes, dicht wirkendes Dach ist für Käufer und Gutachter ein klares
                Qualitätsmerkmal — und ein Argument, das sich beim Wiederverkauf oder bei der
                Immobilienbewertung positiv bemerkbar macht.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VORTEILE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Ihre Vorteile auf einen Blick</h2>
          </Reveal>
          <div className="mt-10">
            <FeatureCards
              features={[
                {
                  title: 'Langfristiger Witterungsschutz',
                  description: 'Die Beschichtung schließt die Poren der Ziegel und schützt zuverlässig vor Feuchtigkeit, Frost und UV-Strahlung.',
                },
                {
                  title: 'Optische Aufwertung',
                  description: 'Verblasste und ungleichmäßig verwitterte Dachflächen erhalten wieder eine satte, gleichmäßige Farbe.',
                },
                {
                  title: 'Werterhalt Ihrer Immobilie',
                  description: 'Ein gepflegtes Dach ist ein klares Qualitätsmerkmal — wertvoll beim Verkauf oder bei der Begutachtung.',
                },
                {
                  title: 'Deutlich günstiger als Neueindeckung',
                  description: 'Sie erreichen einen vergleichbaren optischen Effekt zu einem Bruchteil der Kosten einer kompletten Neueindeckung.',
                },
                {
                  title: 'Hemmt neuen Moosbefall',
                  description: 'Die glatte, versiegelte Oberfläche bietet Moos und Algen deutlich weniger Angriffsfläche als unbehandelte Ziegel.',
                },
                {
                  title: 'Festpreisgarantie',
                  description: 'Nach der Besichtigung erhalten Sie ein verbindliches Angebot — ohne versteckte Kosten oder Nachträge.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* HALTBARKEIT & MATERIAL */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Reveal>
            <h3 className="text-2xl font-extrabold text-ink">Haltbarkeit</h3>
            <p className="mt-4 text-ink/70">
              Je nach Ausgangszustand des Dachs, Dachneigung und gewähltem Beschichtungssystem
              hält eine fachgerecht aufgetragene Dachbeschichtung in der Regel 10 bis 15 Jahre.
              Voraussetzung dafür ist eine gründliche Vorbereitung: Nur ein sauberes, trockenes und
              tragfähiges Dach nimmt die Beschichtung dauerhaft an. Deshalb ist bei uns die
              professionelle Dachreinigung fester Bestandteil jedes Beschichtungsauftrags.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-2xl font-extrabold text-ink">Materialqualität</h3>
            <p className="mt-4 text-ink/70">
              Wir setzen ausschließlich hochwertige, für den deutschen Klimaraum geeignete
              Beschichtungssysteme ein, die diffusionsoffen sind — Ihr Dach kann also weiterhin
              „atmen", während die Oberfläche zuverlässig vor Nässe geschützt bleibt. Auf Wunsch
              ergänzen wir die Beschichtung um eine zusätzliche Nano-Versiegelung für noch mehr
              Widerstandsfähigkeit und einen dauerhaften Selbstreinigungseffekt bei Regen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Unser Verfahren in 6 Schritten
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <ProcessSteps
              steps={[
                { title: 'Dachkontrolle', description: 'Wir prüfen die Ziegel auf Schäden, Tragfähigkeit und Eignung für eine Beschichtung.' },
                { title: 'Gründliche Reinigung', description: 'Moos, Algen und Verschmutzungen werden schonend und vollständig entfernt.' },
                { title: 'Vorbereitung & Grundierung', description: 'Das Dach trocknet ab und wird mit einer Grundierung für optimale Haftung vorbereitet.' },
                { title: 'Erste Beschichtung', description: 'Die erste Schicht wird gleichmäßig aufgetragen und verschließt die Poren der Ziegel.' },
                { title: 'Zweite Beschichtung', description: 'Eine zweite Schicht sorgt für gleichmäßige Deckkraft und zusätzliche Widerstandsfähigkeit.' },
                { title: 'Optional: Nano-Versiegelung', description: 'Eine zusätzliche Versiegelung für extra Langlebigkeit und Selbstreinigungseffekt.' },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* VORHER NACHHER */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Vorher &amp; Nachher</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Bewegen Sie den Regler und sehen Sie, wie eine Dachbeschichtung Ihr Dach verwandelt.
            </p>
          </Reveal>
          <Reveal delay={100} className="mx-auto mt-10 max-w-2xl">
            <BeforeAfterSlider
              vorherSrc="/images/beschichtung-vorher.webp"
              nachherSrc="/images/beschichtung-nachher.webp"
              vorherAlt="Verwittertes, moosbedecktes Ziegeldach vor der Dachbeschichtung"
              nachherAlt="Dasselbe Dach frisch anthrazit beschichtet nach der Dachbeschichtung"
            />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Häufige Fragen</h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <Faq
              items={[
                {
                  frage: 'Für welche Dachtypen eignet sich eine Beschichtung?',
                  antwort:
                    'Eine Beschichtung eignet sich für die meisten Beton- und Tondachziegel sowie für Faserzement- und Schieferdächer, sofern die Bausubstanz intakt ist. Bei der kostenlosen Besichtigung prüfen wir, ob Ihr Dach für eine Beschichtung geeignet ist oder ob zunächst Reparaturen nötig sind.',
                },
                {
                  frage: 'Wie lange dauert die Beschichtung eines Einfamilienhauses?',
                  antwort:
                    'Je nach Dachgröße, Neigung und Witterung dauert die Ausführung in der Regel zwei bis vier Arbeitstage, inklusive Reinigung, Grundierung und zwei Beschichtungsschichten. Den genauen Zeitrahmen nennen wir Ihnen verbindlich in Ihrem Festpreis-Angebot.',
                },
                {
                  frage: 'Muss ich während der Arbeiten zu Hause sein?',
                  antwort:
                    'Nein, das ist nicht notwendig. Unser Team arbeitet selbstständig auf dem Dach. Wir stimmen den Ablauf vorab mit Ihnen ab und melden uns nach Abschluss der Arbeiten für die gemeinsame Abnahme.',
                },
                {
                  frage: 'Welche Garantie geben Sie auf die Beschichtung?',
                  antwort:
                    'Wir gewähren eine Garantie auf unsere Werkleistung und stehen für Materialqualität und fachgerechte Ausführung ein. Die genauen Garantiebedingungen erhalten Sie schriftlich mit Ihrem Festpreis-Angebot.',
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
