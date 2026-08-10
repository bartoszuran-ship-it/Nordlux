export type Step = {
  title: string;
  description: string;
};

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex flex-col items-start">
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-6 top-12 hidden h-0.5 w-full bg-amber/30 md:block"
            />
          )}
          <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber text-lg font-bold text-white">
            {i + 1}
          </span>
          <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
