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
  title: 'Dachreinigung – schonend & professionell',
  description:
    `Professionelle Dachreinigung in ${REGION}: Moos, Algen und Verschmutzungen schonend entfernt. Ideale Vorbereitung für Imprägnierung oder Beschichtung. Festpreisgarantie.`,
  alternates: { canonical: '/dachreinigung/' },
};

export default function DachreinigungPage() {
  return (
    <>
      <PageHero
        title="Dachreinigung"
        subtitle="Schonende, professionelle Reinigung gegen Moos, Algen und Verschmutzungen — für ein gesundes, langlebiges Dach."
        image="/images/leistung-dachreinigung.webp"
        alt="Handwerker reinigt ein moosbedecktes Ziegeldach mit einer Reinigungslanze"
      />

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Warum eine professionelle Dachreinigung wichtig ist
            </h2>
            <div className="mt-6 space-y-4 text-ink/70">
              <p>
                Moos, Algen und Flechten sehen nicht nur unschön aus — sie schädigen auf Dauer auch
                die Bausubstanz Ihres Dachs. Moospolster speichern Feuchtigkeit direkt auf der
                Ziegeloberfläche, was bei Frost zu Rissen führen kann. Wurzelgeflechte dringen in
                feine Poren ein und lockern mit der Zeit die Struktur der Ziegel.
              </p>
              <p>
                Mit unserer schonenden Reinigungstechnik entfernen wir Bewuchs und Verschmutzungen
                gründlich, ohne die empfindliche Oberfläche der Ziegel zu beschädigen. Wir arbeiten
                mit angepasstem Druck und geeigneten Reinigungsmitteln, abgestimmt auf Ihren
                Dachtyp und dessen Zustand.
              </p>
              <p>
                Eine regelmäßige Dachreinigung — je nach Lage und Bewuchs alle fünf bis zehn Jahre
                empfohlen — verlängert die Lebensdauer Ihres Dachs spürbar und ist zugleich die
                unverzichtbare Grundlage für jede nachfolgende Imprägnierung oder Beschichtung.
                Ohne gründliche Reinigung haftet keine Versiegelung dauerhaft.
              </p>
              <p>
                Besonders Dächer in der Nähe von Bäumen, in schattigen Lagen oder mit
                Nordausrichtung sind anfällig für starken Bewuchs, da Feuchtigkeit dort langsamer
                abtrocknet. Auch die Dachneigung spielt eine Rolle: Flachere Dächer neigen eher zu
                Staunässe und damit zu schnellerem Moos- und Algenwachstum als steile Dachflächen.
              </p>
              <p>
                Wir prüfen bei der Besichtigung nicht nur den sichtbaren Bewuchs, sondern auch den
                allgemeinen Zustand der Dachhaut, der Dachrinnen und der Anschlüsse. So erkennen
                wir frühzeitig, ob neben der Reinigung weitere Maßnahmen sinnvoll sind, und können
                Ihnen eine ehrliche, auf Ihr Dach zugeschnittene Empfehlung geben.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Vorteile der regelmäßigen Reinigung</h2>
          </Reveal>
          <div className="mt-10">
            <FeatureCards
              features={[
                {
                  title: 'Schützt die Bausubstanz',
                  description: 'Entfernt feuchtigkeitsspeichernden Bewuchs, bevor er Ziegel und Dachlatten schädigen kann.',
                },
                {
                  title: 'Verlängert die Lebensdauer',
                  description: 'Regelmäßige Reinigung verzögert die natürliche Alterung Ihrer Dachziegel spürbar.',
                },
                {
                  title: 'Vorbereitung für Imprägnierung',
                  description: 'Nur ein sauberes Dach nimmt eine Imprägnierung oder Beschichtung dauerhaft an.',
                },
                {
                  title: 'Bessere Optik',
                  description: 'Ein moosfreies Dach wertet das gesamte Erscheinungsbild Ihres Hauses sichtbar auf.',
                },
                {
                  title: 'Schonendes Verfahren',
                  description: 'Angepasster Druck und geeignete Mittel schützen die Ziegeloberfläche zuverlässig.',
                },
                {
                  title: 'Festpreisgarantie',
                  description: 'Transparentes Angebot nach kostenloser Besichtigung — ohne versteckte Kosten.',
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
                { title: 'Besichtigung', description: 'Wir begutachten Dachtyp, Bewuchs und Zustand der Ziegel vor Ort.' },
                { title: 'Schutz der Umgebung', description: 'Pflanzen, Fallrohre und angrenzende Flächen werden vor Beginn geschützt.' },
                { title: 'Schonende Reinigung', description: 'Moos, Algen und Verschmutzungen werden mit angepasstem Druck entfernt.' },
                { title: 'Abnahme & Empfehlung', description: 'Gemeinsame Kontrolle sowie Empfehlung zu Imprägnierung oder Beschichtung.' },
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
              Der Regler zeigt: aus einem stark vermoosten Dach wird wieder ein gepflegtes Dach.
            </p>
          </Reveal>
          <Reveal delay={100} className="mx-auto mt-10 max-w-2xl">
            <BeforeAfterSlider
              vorherSrc="/images/dachreinigung-vorher.webp"
              nachherSrc="/images/dachreinigung-nachher.webp"
              vorherAlt="Ziegeldach stark bewachsen mit Moos und Flechten vor der Reinigung"
              nachherAlt="Dasselbe Ziegeldach vollständig gereinigt und moosfrei nach der Dachreinigung"
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
                  frage: 'Wie oft sollte ein Dach gereinigt werden?',
                  antwort:
                    'Das hängt von Lage, Ausrichtung und Umgebung ab — bei starkem Baumbestand oder Nordausrichtung häufiger, ansonsten meist alle fünf bis zehn Jahre. Bei der Besichtigung geben wir Ihnen eine individuelle Einschätzung.',
                },
                {
                  frage: 'Werden bei der Reinigung Chemikalien eingesetzt?',
                  antwort:
                    'Wir setzen ausschließlich Reinigungsmittel ein, die für die jeweilige Dacheindeckung geeignet und umweltverträglich sind. Art und Menge stimmen wir individuell auf Bewuchs und Ziegeltyp ab.',
                },
                {
                  frage: 'Können bei der Reinigung Ziegel beschädigt werden?',
                  antwort:
                    'Bei fachgerechter Ausführung mit angepasstem Druck und geeigneter Technik nicht. Wir prüfen vorab den Zustand Ihrer Ziegel und passen das Verfahren entsprechend an, um Schäden zu vermeiden.',
                },
                {
                  frage: 'Sollte ich nach der Reinigung imprägnieren lassen?',
                  antwort:
                    'Eine anschließende Imprägnierung ist sinnvoll, um neuen Bewuchs länger zu verzögern, und ist optional buchbar. Wir beraten Sie nach der Reinigung gerne zu den passenden Möglichkeiten für Ihr Dach.',
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
