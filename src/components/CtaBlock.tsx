import CtaButtons from './CtaButtons';

export default function CtaBlock({
  title = 'Kostenlose Besichtigung sichern',
  subtitle = 'Rufen Sie uns an oder schreiben Sie uns per WhatsApp — wir melden uns kurzfristig mit einem Termin für eine unverbindliche Vor-Ort-Besichtigung.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">{subtitle}</p>
        <div className="mt-8 flex justify-center">
          <CtaButtons variant="light" />
        </div>
      </div>
    </section>
  );
}
