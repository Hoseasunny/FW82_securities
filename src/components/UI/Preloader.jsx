import { useEffect, useState } from "react";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy">
      <div className="text-center text-white">
        <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-gold/40 px-2 text-center">
          <span className="text-lg font-heading font-bold text-gold">FW82</span>
        </div>
        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-white/60">
          <span className="font-bold text-gold">FW82</span>{" "}
          <span className="font-bold text-white">Security Solutions Ltd</span>
        </p>
      </div>
    </div>
  );
};
