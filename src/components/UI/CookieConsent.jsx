import { useState } from "react";
import { GlassButton } from "./GlassButton";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.localStorage.getItem("fw82-cookie-consent");
  });

  if (!visible) return null;

  const handleAccept = () => {
    window.localStorage.setItem("fw82-cookie-consent", "accepted");
    setVisible(false);
  };

  return (
    <aside aria-label="Cookie notice" className="glass-card fixed bottom-4 left-4 right-4 z-40 rounded-2xl p-5 text-ink shadow-lift md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
      <p className="text-sm leading-6 text-slate">
        We use cookies to improve your experience and analyze site performance. You can accept or close this notice.
      </p>
      <div className="mt-4 flex gap-3">
        <GlassButton type="button" onClick={handleAccept} className="text-xs">
          Accept
        </GlassButton>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="min-h-11 rounded-lg px-3 text-xs font-semibold text-slate hover:text-ink focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          Close
        </button>
      </div>
    </aside>
  );
};

export const CookieConsent = CookieBanner;
