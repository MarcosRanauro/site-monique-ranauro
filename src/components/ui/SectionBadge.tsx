export default function SectionBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-block w-fit border border-accent/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  );
}
