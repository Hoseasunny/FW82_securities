import { useEffect, useState } from "react";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cloud">
      <div className="text-center text-ink">
        <div className="glass-card mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl px-2 text-center">
          <span className="text-lg font-heading font-bold text-ink">FW</span>
          <span className="ml-1 text-lg font-heading font-bold text-sky-700">82</span>
        </div>
        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-slate">
          <span className="font-bold text-ink">FW82</span> Security Solutions
        </p>
      </div>
    </div>
  );
};
