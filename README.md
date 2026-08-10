# Nordlux Dach & Fassade — Website

Statische Next.js-Website für einen Handwerksbetrieb (Dachbeschichtung, Dach-,
Fassaden- und Solarreinigung). Kein CMS, keine Datenbank — alle Inhalte liegen
direkt im Code bzw. in `src/config/site.ts`.

## Tech-Stack

- **Next.js 14** (App Router) mit `output: 'export'` → reiner statischer HTML/CSS/JS-Export
- **Tailwind CSS** für das Styling
- **TypeScript**
- Bilder als **WebP**, `next/image` mit `unoptimized: true` (da kein Node-Server läuft)
- Schriftart **Inter** über `next/font/google` — wird beim Build heruntergeladen und
  selbst gehostet (kein Laden von Google-Servern zur Laufzeit)

## Projektstruktur

```
src/
  app/                    Seiten (App Router). Jeder Ordner = eine URL.
    page.tsx              Startseite (/)
    dachbeschichtung/     /dachbeschichtung
    dachreinigung/        /dachreinigung
    fassadenreinigung/    /fassadenreinigung
    solarreinigung/       /solarreinigung
    ueber-uns/            /ueber-uns
    kontakt/              /kontakt
    impressum/            /impressum
    datenschutz/          /datenschutz
    not-found.tsx         eigene 404-Seite
    sitemap.ts            generiert sitemap.xml automatisch
    robots.ts             generiert robots.txt automatisch
    layout.tsx            Grundgerüst: Header, Footer, Sticky-Leiste, Schema.org
  components/             Wiederverwendbare UI-Bausteine
  config/site.ts          ALLE Kontakt-/Firmendaten (siehe unten)
  lib/schema.ts           Schema.org LocalBusiness JSON-LD
public/
  images/                 Alle Fotos (WebP)
```

## 1. Kontaktdaten & Firmendaten ändern

Alles Zentrale steht in **`src/config/site.ts`**. Diese Datei ist mit `TODO`-
Kommentaren markiert und muss vor dem Livegang ausgefüllt werden:

```ts
export const TELEFONNUMMER = '+49 40 1234567';
export const TELEFONNUMMER_HREF = 'tel:+49401234567';
export const WHATSAPP_NUMMER = '+49 151 12345678';
export const WHATSAPP_HREF = 'https://wa.me/4915112345678';
export const EMAIL = 'info@nordlux-dach.de';
export const ADRESSE = { strasse: '...', plz: '...', ort: '...', land: 'Deutschland' };
export const REGION = 'Hamburg und Umgebung';
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';
export const SITE_URL = 'https://www.nordlux-dach.de';
```

Diese Konstanten werden überall auf der Seite verwendet (Header, Footer, Hero,
Sticky-Leiste, Kontaktformular, Schema.org-Daten, Sitemap). Eine Änderung hier
reicht aus, um sie überall zu aktualisieren.

**Wichtig:** `TELEFONNUMMER_HREF` und `WHATSAPP_HREF` müssen im richtigen Format
sein (`tel:` ohne Leerzeichen, `wa.me` mit Ländervorwahl ohne führende 0),
sonst funktionieren die Klick-Buttons nicht korrekt.

## 2. Bilder austauschen

Alle Bilder liegen in **`public/images/`** als `.webp`. Die Dateinamen sind im
Code fest verankert — beim Austauschen einfach die **gleiche Datei ersetzen**
(gleicher Dateiname, gleiches Format):

| Datei | Verwendung |
|---|---|
| `hero-dach.webp` | Hero-Bild Startseite |
| `beschichtung-vorher.webp` / `-nachher.webp` | Vorher/Nachher-Slider Dachbeschichtung |
| `dachreinigung-vorher.webp` / `-nachher.webp` | Vorher/Nachher-Slider Dachreinigung |
| `fassade-vorher.webp` / `-nachher.webp` | Vorher/Nachher-Slider Fassadenreinigung |
| `solar-vorher.webp` / `-nachher.webp` | Vorher/Nachher-Slider Solarreinigung |
| `leistung-*.webp` | Arbeitsfotos auf Start- und Leistungsseiten |
| `team-arbeit.webp` | Über-uns-Bereich |

**Hinweis zu Vorher/Nachher-Bildern:** Die beiden Bilder eines Paares müssen
exakt denselben Bildausschnitt zeigen, sonst wirkt der Schieberegler nicht
glaubwürdig. Am einfachsten: ein neues "Vorher"-Foto machen und daraus per
Bildbearbeitung (oder erneut per KI-Bild-zu-Bild) ein "Nachher"-Pendant mit
identischer Kameraperspektive erzeugen.

Empfohlene Bildgrößen: Hero ca. 1920×1080 px, alle anderen ca. 1200×900 px.
Neue Bilder vor dem Hochladen als WebP komprimieren (z. B. mit `cwebp -q 80
neues-bild.png -o neues-bild.webp`), damit die Ladezeit niedrig bleibt.

Alle `alt`-Texte sind direkt in den jeweiligen `page.tsx`-Dateien bzw.
Komponenten hinterlegt und sollten bei einem inhaltlichen Bildwechsel
mit angepasst werden.

## 3. Texte ändern

Alle Texte sind direkt in den jeweiligen `.tsx`-Dateien unter `src/app/**`
und `src/components/**` als normaler JSX-Text hinterlegt — es gibt kein
separates CMS oder JSON-Datenfile. Zum Ändern:

1. Die passende Seite in `src/app/<seitenname>/page.tsx` öffnen.
2. Text direkt im JSX bearbeiten (Absätze, Überschriften, FAQ-Einträge etc.).
3. Speichern — bei `npm run dev` sieht man die Änderung sofort im Browser.

Wiederkehrende Bausteine wie FAQ-Akkordeon, Vorteile-Karten oder
Ablauf-Schritte werden über Komponenten mit Props befüllt (z. B.
`<Faq items={[...]} />` in jeder Leistungsseite) — neue Einträge einfach dem
jeweiligen Array hinzufügen.

## 4. Rechtliche Seiten (Impressum & Datenschutz)

`src/app/impressum/page.tsx` und `src/app/datenschutz/page.tsx` enthalten
**`[PLATZHALTER]`**-Markierungen für Angaben, die von der Rechtsform, dem
Hosting-Anbieter und den eingesetzten Diensten (z. B. Formspree) abhängen.

**Vor dem Livegang zwingend:**
- Alle `[PLATZHALTER]` durch echte Angaben ersetzen (Geschäftsführer,
  Handelsregister, USt-IdNr., Handwerkskammer, Hosting-Anbieter, etc.)
- Am besten mit einem Generator gegenprüfen (z. B. e-recht24.de oder der
  Generator der zuständigen IHK/Handwerkskammer)
- Diese Vorlage ersetzt keine Rechtsberatung.

## 5. Kontaktformular (Formspree)

Das Formular sendet per `fetch` an `FORMSPREE_ENDPOINT` (siehe
`src/config/site.ts`). Einrichtung:

1. Kostenloses Projekt unter [formspree.io](https://formspree.io) anlegen.
2. Die erhaltene Endpoint-URL (Format `https://formspree.io/f/xxxxxxxx`) in
   `FORMSPREE_ENDPOINT` eintragen.
3. Fertig — das Formular validiert Pflichtfelder, prüft die DSGVO-Checkbox
   und zeigt bei Erfolg eine Bestätigung an.

Schlägt der Versand fehl (z. B. weil der Endpoint noch nicht eingerichtet
ist), bekommt der Nutzer automatisch einen **mailto-Fallback-Link** mit
vorausgefüllten Formulardaten angezeigt.

## Entwicklung starten

```bash
npm install
npm run dev
```

Seite läuft dann unter `http://localhost:3000`.

## Produktions-Build erzeugen

```bash
npm run build
```

Der komplette statische Export landet im Ordner `out/`. Diesen Ordner kann
man direkt auf jedem Static-Hosting (Vercel, Netlify, klassischer Webspace per
FTP, …) veröffentlichen.

Lokal testen, wie der Export im Browser aussieht:

```bash
npx serve out
```

## Deployment auf Vercel

**Variante A — über die Vercel-CLI:**

```bash
npm install -g vercel
vercel login
vercel --prod
```

Vercel erkennt Next.js automatisch. Da `next.config.js` bereits
`output: 'export'` gesetzt hat, wird automatisch der statische Export gebaut
und ausgeliefert.

**Variante B — über GitHub + Vercel-Dashboard:**

1. Projekt in ein GitHub-Repository pushen.
2. Auf [vercel.com](https://vercel.com) → "Add New Project" → Repository
   auswählen.
3. Framework-Preset "Next.js" wird automatisch erkannt, keine weiteren
   Einstellungen nötig.
4. Nach dem Deploy die eigene Domain unter "Settings → Domains" verbinden.
5. Nicht vergessen: `SITE_URL` in `src/config/site.ts` auf die finale Domain
   anpassen (wichtig für Sitemap, Open-Graph-Bilder und Schema.org-Daten) und
   danach neu deployen.

## Vor dem Livegang — Checkliste

- [ ] Alle Werte in `src/config/site.ts` ausgefüllt (Telefon, WhatsApp,
      E-Mail, Adresse, Region, `SITE_URL`, Formspree-Endpoint)
- [ ] Impressum & Datenschutz: alle `[PLATZHALTER]` ersetzt bzw. juristisch
      geprüft
- [ ] Echte Firmengeschichte in `/ueber-uns` statt Platzhaltertext eingetragen
- [ ] Google-Maps-Einbettung auf `/kontakt` ergänzt (aktuell Platzhalter)
- [ ] Bilder bei Bedarf durch echte Firmenfotos ersetzt
- [ ] `npm run build` läuft fehlerfrei durch
- [ ] Lighthouse-Check in Chrome DevTools (Ziel: 90+ in allen Kategorien)
