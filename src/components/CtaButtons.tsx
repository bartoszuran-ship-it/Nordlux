import { TELEFONNUMMER_HREF, WHATSAPP_HREF } from '@/config/site';

export default function CtaButtons({
  variant = 'light',
  className = '',
}: {
  variant?: 'light' | 'dark';
  className?: string;
}) {
  const secondaryClasses =
    variant === 'light'
      ? 'border-2 border-white text-white hover:bg-white hover:text-ink'
      : 'border-2 border-ink text-ink hover:bg-ink hover:text-white';

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a
        href={TELEFONNUMMER_HREF}
        className="inline-flex min-w-[260px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-amber px-8 py-4 font-semibold text-white shadow-lg shadow-amber/30 transition hover:bg-amber-dark"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8c1.4 2.8 3.7 5 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"
            fill="currentColor"
          />
        </svg>
        Jetzt anrufen
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-w-[260px] items-center justify-center gap-2 whitespace-nowrap rounded-full px-8 py-4 font-semibold transition ${secondaryClasses}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3C8.5 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4-.1-.1-.5-1.2-.7-1.7-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.4 3.8 3.4.5.2.9.4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.1-.4-.2z"
            fill="currentColor"
          />
        </svg>
        WhatsApp schreiben
      </a>
    </div>
  );
}
