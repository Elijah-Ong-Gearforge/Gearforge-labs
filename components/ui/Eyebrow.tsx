export default function Eyebrow({
  children,
  className = "text-ember-500",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`font-mono text-overline uppercase tracking-widest2 ${className}`}>
      {children}
    </p>
  );
}
