export const FormInput = ({ label, error, helper, className = "", ...props }) => {
  return (
    <label className={`block text-sm text-slate ${className}`}>
      <span className="mb-2 block font-semibold text-ink">{label}</span>
      <input
        {...props}
        className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm focus-visible:focus-ring ${
          error ? "border-alert" : "border-slate/20"
        }`}
      />
      {helper && !error && <span className="mt-2 block text-xs text-slate">{helper}</span>}
      {error && <span className="mt-2 block text-xs text-alert">{error}</span>}
    </label>
  );
};
