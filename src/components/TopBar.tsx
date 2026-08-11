import { EMAIL, TELEFONNUMMER, TELEFONNUMMER_HREF } from '@/config/site';

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 hidden h-9 items-center border-b border-white/10 bg-ink text-white md:flex">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end gap-6 px-4 text-xs text-white/80 sm:px-6 lg:px-8">
        <a href={TELEFONNUMMER_HREF} className="flex items-center gap-1.5 hover:text-white">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.6 10.8c1.4 2.8 3.7 5 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"
              fill="currentColor"
            />
          </svg>
          {TELEFONNUMMER}
        </a>
        <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-white">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path d="M3.5 6.5l8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {EMAIL}
        </a>
      </div>
    </div>
  );
}
