import Reveal from './Reveal';

export type Feature = {
  title: string;
  description: string;
};

export default function FeatureCards({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, i) => (
        <Reveal key={feature.title} delay={i * 60}>
          <div className="h-full rounded-card border border-black/5 bg-white p-6 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/15 text-amber">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 12.5l3 3 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-4 font-bold text-ink">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{feature.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
