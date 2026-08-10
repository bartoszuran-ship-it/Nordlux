import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';

export default function ServiceSection({
  title,
  paragraphs,
  points,
  image,
  alt,
  href,
  reverse = false,
}: {
  title: string;
  paragraphs: string[];
  points: string[];
  image: string;
  alt: string;
  href: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${reverse ? 'md:[direction:rtl]' : ''}`}>
      <Reveal className={reverse ? 'md:[direction:ltr]' : ''}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-xl">
          <Image
            src={image}
            alt={alt}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </Reveal>
      <Reveal delay={100} className={reverse ? 'md:[direction:ltr]' : ''}>
        <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">{title}</h3>
        <div className="mt-4 space-y-3 text-ink/70">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-5 space-y-2">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-ink">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="#e8842c" />
                <path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-amber hover:text-amber-dark"
        >
          Mehr erfahren
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </Reveal>
    </div>
  );
}
