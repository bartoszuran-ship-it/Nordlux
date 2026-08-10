export default function RoofAccent({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 44"
      width="64"
      height="40"
      fill="none"
      aria-hidden="true"
      className={`roof-accent mx-auto ${className}`}
    >
      <path
        className="roof-accent-roof"
        d="M4 40 L36 8 L68 40"
        stroke="#e8842c"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="roof-accent-chimney"
        d="M50 22 L50 10 L59 10 L59 31"
        stroke="#e8842c"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
