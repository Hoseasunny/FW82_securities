export const TrustBadge = ({ label }) => {
  return (
    <span className="rounded-full border border-red-400/40 bg-navy/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-red-400">
      {label}
    </span>
  );
};
