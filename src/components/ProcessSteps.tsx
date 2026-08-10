export type Step = {
  title: string;
  description: string;
};

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="flex flex-col gap-10 md:flex-row">
      {steps.map((step, i) => (
        <li key={step.title} className="flex-1">
          <div className="flex items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber text-lg font-bold text-white shadow-lg shadow-amber/30">
              {i + 1}
            </span>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="ml-3 hidden h-[3px] flex-1 rounded-full bg-amber/25 md:block"
              />
            )}
          </div>
          <h3 className="mt-5 pr-4 text-lg font-bold text-ink">{step.title}</h3>
          <p className="mt-2 pr-4 text-sm leading-relaxed text-ink/70">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
