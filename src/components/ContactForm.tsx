'use client';

import { FormEvent, useState } from 'react';
import { EMAIL, FORMSPREE_ENDPOINT } from '@/config/site';

const LEISTUNGEN = [
  'Dachbeschichtung',
  'Dachreinigung',
  'Fassadenreinigung',
  'Solarreinigung',
  'Sonstiges / mehrere Leistungen',
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [dsgvo, setDsgvo] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fallbackHref, setFallbackHref] = useState(`mailto:${EMAIL}`);

  const mailtoHref = (formData: FormData) => {
    const name = formData.get('name');
    const telefon = formData.get('telefon');
    const email = formData.get('email');
    const leistung = formData.get('leistung');
    const nachricht = formData.get('nachricht');
    const body = `Name: ${name}\nTelefon: ${telefon}\nE-Mail: ${email}\nLeistung: ${leistung}\n\nNachricht:\n${nachricht}`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent(
      'Anfrage über die Website'
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newErrors: Record<string, string> = {};
    if (!String(formData.get('name') || '').trim()) newErrors.name = 'Bitte geben Sie Ihren Namen ein.';
    if (!String(formData.get('telefon') || '').trim()) newErrors.telefon = 'Bitte geben Sie Ihre Telefonnummer ein.';
    const email = String(formData.get('email') || '').trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    if (!String(formData.get('nachricht') || '').trim()) newErrors.nachricht = 'Bitte beschreiben Sie kurz Ihr Anliegen.';
    if (!dsgvo) newErrors.dsgvo = 'Bitte stimmen Sie der Datenschutzerklärung zu.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('sending');
    try {
      // TODO: Formspree-Projekt anlegen (siehe src/config/site.ts) — bis dahin schlägt der Versand fehl
      // und der Nutzer erhält den mailto-Fallback-Link.
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
        setDsgvo(false);
      } else {
        setFallbackHref(mailtoHref(formData));
        setStatus('error');
      }
    } catch {
      setFallbackHref(mailtoHref(formData));
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-card bg-white p-8 text-center shadow-lg">
        <p className="text-lg font-semibold text-ink">Vielen Dank für Ihre Anfrage!</p>
        <p className="mt-2 text-sm text-ink/70">
          Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-card bg-white p-6 shadow-lg sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="telefon" className="mb-1.5 block text-sm font-medium text-ink">
            Telefon *
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
          />
          {errors.telefon && <p className="mt-1 text-xs text-red-600">{errors.telefon}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          E-Mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="leistung" className="mb-1.5 block text-sm font-medium text-ink">
          Gewünschte Leistung
        </label>
        <select
          id="leistung"
          name="leistung"
          defaultValue={LEISTUNGEN[0]}
          className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
        >
          {LEISTUNGEN.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="nachricht" className="mb-1.5 block text-sm font-medium text-ink">
          Nachricht *
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={4}
          className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
          placeholder="Beschreiben Sie kurz Ihr Anliegen, z. B. Dachart, Baujahr, gewünschter Termin …"
        />
        {errors.nachricht && <p className="mt-1 text-xs text-red-600">{errors.nachricht}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink/80">
          <input
            type="checkbox"
            checked={dsgvo}
            onChange={(e) => setDsgvo(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-black/30 text-amber focus:ring-amber/30"
          />
          <span>
            Ich habe die{' '}
            <a href="/datenschutz/" className="underline hover:text-amber">
              Datenschutzerklärung
            </a>{' '}
            gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage einverstanden. *
          </span>
        </label>
        {errors.dsgvo && <p className="mt-1 text-xs text-red-600">{errors.dsgvo}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full bg-amber px-8 py-4 font-semibold text-white transition hover:bg-amber-dark disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Wird gesendet …' : 'Anfrage absenden'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder senden Sie Ihre Anfrage
          direkt per{' '}
          <a className="underline" href={fallbackHref}>
            E-Mail
          </a>
          .
        </p>
      )}
    </form>
  );
}
