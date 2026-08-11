import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import CtaButtons from '@/components/CtaButtons';
import ServiceSection from '@/components/ServiceSection';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ProcessSteps from '@/components/ProcessSteps';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import QuickNav from '@/components/QuickNav';
import Testimonials from '@/components/Testimonials';
import RoofAccent from '@/components/RoofAccent';
import { FIRMENNAME, REGION } from '@/config/site';

export const metadata: Metadata = {
  title: `${FIRMENNAME} | Dachbeschichtung, Dach- & Fassadenreinigung`,
  description:
    `Dachbeschichtung, Dachreinigung, Fassadenreinigung und Solarreinigung in ${REGION}. Kostenlose Besichtigung, Festpreisgarantie, versichert & zertifiziert. Jetzt anrufen oder per WhatsApp anfragen.`,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-ink">
        <Image
          src="/images/hero-dach.webp"
          alt="Frisch renoviertes, dunkelgraues Ziegeldach eines Einfamilienhauses aus der Vogelperspektive im goldenen Abendlicht"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <RoofAccent className="mb-5" />
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Dach &amp; Fassade
            <br />
            wie am ersten Tag.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
            Dachbeschichtung, Dach-, Fassaden- und Solarreinigung in {REGION} — schonend,
            sauber, zum Festpreis.
          </p>
          <div className="mt-10 flex justify-center">
            <CtaButtons variant="light" />
          </div>
        </div>
      </section>

      {/* SCHNELLNAVIGATION */}
      <QuickNav />

      {/* LEISTUNGEN */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Unsere Leistungen</h2>
              <p className="mt-4 text-ink/70">
                Vier Leistungen, ein Ziel: Ihr Haus schützen und optisch aufwerten — zuverlässig,
                sauber und mit Festpreisgarantie.
              </p>
            </div>
          </Reveal>

          <ServiceSection
            title="Dachbeschichtung"
            paragraphs={[
              'Eine professionelle Dachbeschichtung schützt Ihre Ziegel dauerhaft vor Witterung, Moosbefall und UV-Strahlung. Gleichzeitig verleiht sie Ihrem Dach ein sattes, gleichmäßiges Erscheinungsbild – fast wie neu gedeckt.',
              'So steigern Sie den Wert Ihrer Immobilie, ohne die hohen Kosten einer kompletten Neueindeckung zu tragen.',
            ]}
            points={['Bis zu 15 Jahre Schutz', 'Deutliche optische Aufwertung', 'Bruchteil der Kosten einer Neueindeckung']}
            image="/images/leistung-beschichtung.webp"
            alt="Handwerker mit Sicherheitsausrüstung sprüht graue Dachbeschichtung mit einer Sprühpistole auf ein Ziegeldach"
            href="/dachbeschichtung/"
          />

          <ServiceSection
            title="Dachreinigung"
            paragraphs={[
              'Moos, Algen und Flechten setzen sich mit den Jahren tief in die Poren Ihrer Dachziegel fest und schädigen das Material. Unsere schonende Reinigung entfernt Bewuchs und Verschmutzungen zuverlässig, ohne die Ziegel zu beschädigen.',
              'Ein sauberes Dach ist zudem die beste Vorbereitung für eine langlebige Beschichtung oder Imprägnierung.',
            ]}
            points={['Schonendes Reinigungsverfahren', 'Verlängert die Lebensdauer der Ziegel', 'Ideale Basis für eine Beschichtung']}
            image="/images/leistung-dachreinigung.webp"
            alt="Handwerker reinigt ein moosbedecktes Ziegeldach mit einer Reinigungslanze und Hochdruckstrahl"
            href="/dachreinigung/"
            reverse
          />

          <ServiceSection
            title="Fassadenreinigung"
            paragraphs={[
              'Grünbelag, Algen und Witterungsflecken lassen Fassaden schnell alt und ungepflegt wirken. Wir reinigen jede Fassadenart mit dem passenden, materialschonenden Verfahren und sorgen für ein frisches, gepflegtes Erscheinungsbild.',
              'Auf Wunsch imprägnieren wir Ihre Fassade anschließend gegen neuen Bewuchs.',
            ]}
            points={['Für jede Fassadenart geeignet', 'Fachgerechte Entsorgung des Abwassers', 'Optional mit Imprägnierung']}
            image="/images/leistung-fassade.webp"
            alt="Handwerker reinigt von einer Hubarbeitsbühne aus eine verschmutzte Hausfassade mit einem Hochdruckreiniger"
            href="/fassadenreinigung/"
          />

          <ServiceSection
            title="Solarreinigung"
            paragraphs={[
              'Staub, Pollen und Vogelkot mindern die Lichtausbeute Ihrer Solarmodule spürbar und senken den Energieertrag. Mit unserer schonenden Reinigungstechnik entfernen wir Verschmutzungen zuverlässig, ohne die empfindliche Oberfläche zu beschädigen.',
              'So arbeiten Ihre Module wieder mit voller Leistung.',
            ]}
            points={['Bis zu 15 % mehr Ertrag', 'Materialschonende Reinigungstechnik', 'Keine Beschädigung der Module']}
            image="/images/leistung-solar.webp"
            alt="Handwerker reinigt Solarmodule auf einem Dach mit einer Wasserbürste an einer Teleskopstange"
            href="/solarreinigung/"
            reverse
          />
        </div>
      </section>

      {/* VORHER / NACHHER */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Der Unterschied? Sehen Sie selbst.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Bewegen Sie den Regler und erleben Sie, wie viel eine professionelle Dachreinigung
              wirklich verändert.
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

      {/* ABLAUF */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">So einfach geht&apos;s</h2>
              <p className="mt-4 text-ink/70">
                Von der ersten Besichtigung bis zur Abnahme — transparent und ohne böse Überraschungen.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <ProcessSteps
              steps={[
                { title: 'Besichtigung', description: 'Wir prüfen Ihr Dach oder Ihre Fassade kostenlos und unverbindlich vor Ort.' },
                { title: 'Festpreis-Angebot', description: 'Sie erhalten ein transparentes Angebot zum Festpreis — ohne versteckte Kosten.' },
                { title: 'Ausführung', description: 'Unser Team führt die Arbeiten sauber, termingerecht und fachgerecht durch.' },
                { title: 'Abnahme & Garantie', description: 'Gemeinsame Abnahme der Arbeiten inklusive Garantie auf unsere Leistung.' },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ÜBER UNS KURZBLOCK */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-8">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-card shadow-xl">
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
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Handwerk, dem Sie vertrauen können
            </h2>
            <p className="mt-4 text-ink/70">
              Nordlux Dach &amp; Fassade steht für saubere Arbeit, verbindliche Termine und faire
              Festpreise. Wir sind versichert, zertifiziert und in {REGION} für Sie vor Ort — von
              der ersten Besichtigung bis zur letzten Abnahme.
            </p>
            <Link
              href="/ueber-uns/"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-amber hover:text-amber-dark"
            >
              Mehr über uns
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* KONTAKT */}
      <section id="kontakt" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
                Jetzt kostenlose Besichtigung anfragen
              </h2>
              <p className="mt-4 text-ink/70">
                Rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp — schnell, unkompliziert
                und ohne Warteschleife.
              </p>
              <div className="mt-8">
                <CtaButtons variant="dark" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="mb-4 text-xl font-bold text-ink">Kontaktformular</h3>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
