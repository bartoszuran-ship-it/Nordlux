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
  title: 'Fassadenreinigung – gepflegte Optik für jede Fassade',
  description:
    `Professionelle Fassadenreinigung in ${REGION}: Algen, Moos und Verschmutzungen schonend entfernt, fachgerechte Entsorgung, optional mit Imprägnierung. Festpreisgarantie.`,
  alternates: { canonical: '/fassadenreinigung/' },
};

export default function FassadenreinigungPage() {
  return (
    <>
      <PageHero
        title="Fassadenreinigung"
        subtitle="Algen, Moos und Verschmutzungen fachgerecht entfernt — für eine Fassade, die wieder strahlt."
        image="/images/leistung-fassade.webp"
        alt="Handwerker reinigt eine Hausfassade mit einer langstieligen Bürste und Wasserschlauch"
      />

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Warum eine professionelle Fassadenreinigung sinnvoll ist
            </h2>
            <div className="mt-6 space-y-4 text-ink/70">
              <p>
                Feuchtigkeit, Schatten und Witterung begünstigen auf Fassaden das Wachstum von
                Algen, Moos und Grünbelag. Was zunächst nur optisch stört, kann auf Dauer den Putz
                angreifen und die Bausubstanz schädigen. Regelmäßige Reinigung erhält nicht nur die
                Optik, sondern auch den Wert Ihrer Fassade.
              </p>
              <p>
                Da nicht jede Fassade gleich ist, setzen wir für jede Oberfläche das passende
                Reinigungsmittel ein — abgestimmt auf Putz, Klinker, Naturstein oder Wärmedämmverbundsystem.
                So wird der Belag zuverlässig entfernt, ohne die Fassade anzugreifen oder
                Verfärbungen zu hinterlassen.
              </p>
              <p>
                Unser Verfahren arbeitet schonend mit kontrolliertem Druck und geeigneten
                Reinigungsmitteln. Das anfallende Abwasser fangen wir auf und entsorgen es
                fachgerecht nach den geltenden Vorgaben — Umweltschutz und saubere Arbeit gehören
                für uns zusammen. Auf Wunsch imprägnieren wir Ihre Fassade im Anschluss, um neuen
                Bewuchs deutlich länger hinauszuzögern.
              </p>
              <p>
                Besonders betroffen sind schattige, wenig besonnte Fassadenseiten sowie Bereiche
                unterhalb von Dachüberständen oder in der Nähe von Bäumen und Sträuchern — hier
                trocknet Feuchtigkeit langsamer ab und Algen finden ideale Wachstumsbedingungen.
                Auch Spritzwasserzonen im Sockelbereich neigen zu hartnäckigen Verschmutzungen.
              </p>
              <p>
                Bei der Besichtigung begutachten wir neben dem sichtbaren Belag auch den Zustand
                von Putz und Anstrich, um Ihnen eine ehrliche Einschätzung zu geben, ob eine
                Reinigung ausreicht oder ob zusätzliche Maßnahmen wie eine Ausbesserung des Putzes
                sinnvoll wären.
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
                  title: 'Passendes Verfahren je Fassadenart',
                  description: 'Wir wählen Reinigungsmittel und Druck individuell nach Putz, Klinker, Naturstein oder WDVS.',
                },
                {
                  title: 'Schonende Reinigung',
                  description: 'Kontrollierter Druck entfernt Algen und Moos zuverlässig, ohne die Oberfläche anzugreifen.',
                },
                {
                  title: 'Fachgerechte Entsorgung',
                  description: 'Wir fangen das Abwasser auf und entsorgen es gemäß den geltenden Vorgaben umweltgerecht.',
                },
                {
                  title: 'Optionale Imprägnierung',
                  description: 'Auf Wunsch versiegeln wir Ihre Fassade im Anschluss gegen neuen Algen- und Moosbefall.',
                },
                {
                  title: 'Spürbare optische Aufwertung',
                  description: 'Eine saubere Fassade lässt Ihr gesamtes Haus wieder gepflegt und modern wirken.',
                },
                {
                  title: 'Festpreisgarantie',
                  description: 'Klares Angebot nach kostenloser Besichtigung — ohne versteckte Zusatzkosten.',
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
                { title: 'Besichtigung', description: 'Wir bestimmen Fassadenart, Verschmutzungsgrad und geeignetes Verfahren.' },
                { title: 'Vorbereitung', description: 'Fenster, Pflanzen und angrenzende Flächen werden sorgfältig geschützt.' },
                { title: 'Schonende Reinigung', description: 'Auftrag des passenden Reinigungsmittels und schonende mechanische Reinigung.' },
                { title: 'Entsorgung & Imprägnierung', description: 'Fachgerechte Entsorgung des Abwassers, optional abschließende Imprägnierung.' },
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
              Bewegen Sie den Regler und sehen Sie den Unterschied einer professionellen Fassadenreinigung.
            </p>
          </Reveal>
          <Reveal delay={100} className="mx-auto mt-10 max-w-2xl">
            <BeforeAfterSlider
              vorherSrc="/images/fassade-vorher.webp"
              nachherSrc="/images/fassade-nachher.webp"
              vorherAlt="Weiße Hausfassade mit Grünbelag und Schmutzstreifen vor der Fassadenreinigung"
              nachherAlt="Dieselbe Hausfassade strahlend sauber nach der Fassadenreinigung"
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
                  frage: 'Eignet sich das Verfahren für jede Fassadenart?',
                  antwort:
                    'Ja, wir passen Reinigungsmittel und Druck individuell an Putz, Klinker, Naturstein oder Wärmedämmverbundsysteme an. Bei der Besichtigung bestimmen wir das für Ihre Fassade passende Verfahren.',
                },
                {
                  frage: 'Was passiert mit dem Schmutzwasser?',
                  antwort:
                    'Wir fangen das anfallende Abwasser auf und entsorgen es fachgerecht nach den geltenden umweltrechtlichen Vorgaben. Es gelangt nicht ungefiltert in die Kanalisation oder ins Erdreich.',
                },
                {
                  frage: 'Wie lange bleibt die Fassade nach der Reinigung sauber?',
                  antwort:
                    'Ohne Imprägnierung bildet sich je nach Lage und Witterung nach einigen Jahren erneut Belag. Mit einer anschließenden Imprägnierung verlängert sich dieser Zeitraum spürbar.',
                },
                {
                  frage: 'Muss ich bei der Reinigung anwesend sein?',
                  antwort:
                    'Nein, unser Team führt die Arbeiten selbstständig durch. Wir sprechen den Ablauf vorab mit Ihnen ab und melden uns nach Fertigstellung für die gemeinsame Abnahme.',
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
