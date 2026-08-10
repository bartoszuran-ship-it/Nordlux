import Link from 'next/link';
import {
  ADRESSE,
  EMAIL,
  FIRMENNAME,
  OEFFNUNGSZEITEN,
  REGION,
  TELEFONNUMMER,
  TELEFONNUMMER_HREF,
} from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 pb-20 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-white">NORDLUX</span>
            <span className="text-sm font-light text-white/60">Dach &amp; Fassade</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Ihr Fachbetrieb für Dachbeschichtung, Dach-, Fassaden- und Solarreinigung in {REGION}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Leistungen</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/dachbeschichtung/" className="hover:text-white">Dachbeschichtung</Link></li>
            <li><Link href="/dachreinigung/" className="hover:text-white">Dachreinigung</Link></li>
            <li><Link href="/fassadenreinigung/" className="hover:text-white">Fassadenreinigung</Link></li>
            <li><Link href="/solarreinigung/" className="hover:text-white">Solarreinigung</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Unternehmen</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/ueber-uns/" className="hover:text-white">Über uns</Link></li>
            <li><Link href="/kontakt/" className="hover:text-white">Kontakt</Link></li>
            <li><Link href="/impressum/" className="hover:text-white">Impressum</Link></li>
            <li><Link href="/datenschutz/" className="hover:text-white">Datenschutz</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Kontakt</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={TELEFONNUMMER_HREF} className="hover:text-white">{TELEFONNUMMER}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
            </li>
            <li className="text-white/60">
              {ADRESSE.strasse}, {ADRESSE.plz} {ADRESSE.ort}
            </li>
            <li className="text-white/60">{OEFFNUNGSZEITEN}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="mx-auto max-w-7xl px-4 text-center text-xs text-white/40 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {FIRMENNAME}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
