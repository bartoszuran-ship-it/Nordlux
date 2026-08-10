import Link from 'next/link';
import CtaButtons from '@/components/CtaButtons';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber">Fehler 404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
          Diese Seite gibt es nicht.
        </h1>
        <p className="mt-5 text-lg text-white/80">
          Die aufgerufene Seite wurde nicht gefunden oder existiert nicht mehr. Vielleicht hilft
          Ihnen einer unserer Leistungsbereiche weiter, oder Sie kontaktieren uns direkt.
        </p>
        <div className="mt-10 flex justify-center">
          <CtaButtons variant="light" />
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </section>
  );
}
