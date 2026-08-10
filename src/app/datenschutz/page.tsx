import type { Metadata } from 'next';
import { ADRESSE, EMAIL, FIRMENNAME, TELEFONNUMMER } from '@/config/site';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Nordlux Dach & Fassade.',
  alternates: { canonical: '/datenschutz/' },
  robots: { index: false, follow: true },
};

// TODO: Vor Livegang unbedingt durch einen Datenschutzgenerator
// (z. B. e-recht24.de oder einen Datenschutzbeauftragten) prüfen lassen
// und alle [PLATZHALTER] durch die tatsächlichen Angaben ersetzen. Diese
// Vorlage ersetzt keine Rechtsberatung.
export default function DatenschutzPage() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-ink">Datenschutzerklärung</h1>

        <div className="mt-10 space-y-8 text-ink/80">
          <div>
            <h2 className="text-lg font-bold text-ink">1. Verantwortlicher</h2>
            <p className="mt-2">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              {FIRMENNAME}
              <br />
              {ADRESSE.strasse}, {ADRESSE.plz} {ADRESSE.ort}
              <br />
              Telefon: {TELEFONNUMMER}
              <br />
              E-Mail: {EMAIL}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">2. Allgemeines zur Datenverarbeitung</h2>
            <p className="mt-2">
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies
              zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
              Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer
              erfolgt regelmäßig nur nach Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO
              oder auf Grundlage einer sonstigen gesetzlichen Erlaubnis.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">3. Hosting</h2>
            <p className="mt-2">
              Diese Website wird bei einem externen Hosting-Anbieter gehostet. [PLATZHALTER: Name
              und Anschrift des Hosting-Anbieters, z. B. Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, USA]. Die personenbezogenen Daten, die auf dieser Website erfasst
              werden, werden auf den Servern des Hosters gespeichert. Der Hosting-Anbieter erhebt
              in sogenannten Server-Log-Dateien automatisch Informationen wie Browsertyp,
              verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners und
              Uhrzeit der Serveranfrage.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">4. Kontaktformular</h2>
            <p className="mt-2">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in
              das Kontaktformular eingegebenen Daten erfolgt auf Grundlage eines berechtigten
              Interesses (Art. 6 Abs. 1 lit. f DSGVO) an der effektiven Bearbeitung von Anfragen.
            </p>
            <p className="mt-2">
              Zur Verarbeitung von Kontaktanfragen nutzen wir den Dienst [PLATZHALTER: Formspree,
              Formspree Inc., USA]. Dabei können Daten auch auf Servern außerhalb der EU
              verarbeitet werden. [PLATZHALTER: Details zum Auftragsverarbeitungsvertrag bzw. zu
              Standardvertragsklauseln ergänzen.]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">5. WhatsApp und Telefonkontakt</h2>
            <p className="mt-2">
              Wenn Sie uns über die auf der Website verlinkte WhatsApp-Nummer kontaktieren, gelten
              zusätzlich die Datenschutzbestimmungen von WhatsApp (Meta). Bei einem Telefonanruf
              verarbeiten wir die von Ihnen im Gespräch mitgeteilten Daten zur Bearbeitung Ihrer
              Anfrage.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">6. Cookies und Analyse-Tools</h2>
            <p className="mt-2">
              [PLATZHALTER: Falls Cookies, Analyse-Tools (z. B. Google Analytics) oder
              Marketing-Pixel eingesetzt werden, hier die entsprechenden Abschnitte inkl.
              Einwilligungsbanner ergänzen. Aktuell setzt diese Website keine Analyse- oder
              Marketing-Cookies ein.]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">7. Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben jederzeit das Recht auf Auskunft über Ihre bei uns gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der
              Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser
              Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie
              sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p className="mt-2">
              Ihnen steht zudem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde für den
              Datenschutz zu. [PLATZHALTER: Zuständige Landesdatenschutzbehörde eintragen.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
