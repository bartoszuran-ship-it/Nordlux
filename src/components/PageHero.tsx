import Image from 'next/image';
import Link from 'next/link';
import CtaButtons from './CtaButtons';
import RoofAccent from './RoofAccent';

export default function PageHero({
  title,
  subtitle,
  image,
  alt,
}: {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-ink">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <RoofAccent className="mb-4" />
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">{subtitle}</p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/kontakt/"
            className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 font-semibold text-white shadow-lg shadow-amber/30 transition hover:bg-amber-dark sm:hidden"
          >
            Kostenlose Besichtigung sichern
          </Link>
          <div className="hidden sm:block">
            <CtaButtons variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
