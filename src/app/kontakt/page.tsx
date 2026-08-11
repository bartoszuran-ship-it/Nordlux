import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import CtaButtons from '@/components/CtaButtons';
import Reveal from '@/components/Reveal';
import { ADRESSE, EMAIL, OEFFNUNGSZEITEN, REGION } from '@/config/site';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: `Kontaktieren Sie Nordlux Dach & Fassade in ${REGION} — telefonisch, per WhatsApp, E-Mail oder über unser Kontaktformular.`,
  alternates: { canonical: '/kontakt/' },
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Kontakt</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
            Wir freuen uns auf Ihre Anfrage — rufen Sie uns an, schreiben Sie uns per WhatsApp oder
            nutzen Sie das Formular unten.
          </p>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-amber">E-Mail</h2>
                  <a href={`mailto:${EMAIL}`} className="mt-1 block text-xl font-bold text-ink hover:text-amber">
                    {EMAIL}
                  </a>
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-amber">Adresse</h2>
                  <p className="mt-1 text-ink/80">
                    {ADRESSE.strasse}
                    <br />
                    {ADRESSE.plz} {ADRESSE.ort}
                    <br />
                    {ADRESSE.land}
                  </p>
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-amber">Erreichbarkeit</h2>
                  <p className="mt-1 text-ink/80">{OEFFNUNGSZEITEN}</p>
                </div>

                <CtaButtons variant="dark" />

                {/* TODO: Google-Maps-Einbettung mit echter Adresse ergänzen, sobald verfügbar */}
                <div className="flex aspect-video items-center justify-center rounded-card border border-dashed border-black/20 bg-white text-center text-sm text-ink/50">
                  Kartenansicht folgt
                  <br />
                  (TODO: Google Maps mit Firmenadresse einbetten)
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mb-4 text-xl font-bold text-ink">Kontaktformular</h2>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
