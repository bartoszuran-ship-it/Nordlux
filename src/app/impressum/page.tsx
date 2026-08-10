import type { Metadata } from 'next';
import { ADRESSE, EMAIL, FIRMENNAME, TELEFONNUMMER } from '@/config/site';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Nordlux Dach & Fassade gemäß § 5 TMG.',
  alternates: { canonical: '/impressum/' },
  robots: { index: false, follow: true },
};

// TODO: Vor Livegang unbedingt prüfen bzw. mit einem Impressums-Generator
// (z. B. der IHK oder e-recht24.de) gegenprüfen und alle [PLATZHALTER] ersetzen.
export default function ImpressumPage() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-ink">Impressum</h1>

        <div className="mt-10 space-y-8 text-ink/80">
          <div>
            <h2 className="text-lg font-bold text-ink">Angaben gemäß § 5 TMG</h2>
            <p className="mt-2">
              {FIRMENNAME}
              <br />
              [PLATZHALTER: Inhaber/Geschäftsführer, Rechtsform]
              <br />
              {ADRESSE.strasse}
              <br />
              {ADRESSE.plz} {ADRESSE.ort}
              <br />
              {ADRESSE.land}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">Kontakt</h2>
            <p className="mt-2">
              Telefon: {TELEFONNUMMER}
              <br />
              E-Mail: {EMAIL}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">Handelsregister</h2>
            <p className="mt-2">
              [PLATZHALTER: Registergericht]
              <br />
              [PLATZHALTER: Registernummer]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">Umsatzsteuer-ID</h2>
            <p className="mt-2">
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
              <br />
              [PLATZHALTER: USt-IdNr.]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="mt-2">
              [PLATZHALTER: Zuständige Handwerkskammer]
              <br />
              [PLATZHALTER: Eintragung in die Handwerksrolle, Nummer]
              <br />
              Verliehen in: Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="mt-2">
              [PLATZHALTER: Name, Anschrift wie oben]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">EU-Streitschlichtung</h2>
            <p className="mt-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit: [PLATZHALTER: Link https://ec.europa.eu/consumers/odr/]. Unsere E-Mail-Adresse
              finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen. [PLATZHALTER: ggf. anpassen]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
