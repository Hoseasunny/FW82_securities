import { useState } from "react";
import { Button } from "./Button";

export const CookieConsent = () => {
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
    <div className="fixed bottom-6 left-6 right-6 z-40 rounded-2xl border border-white/10 bg-navy/95 p-6 text-white shadow-lift md:left-auto md:right-6 md:max-w-sm">
      <p className="text-sm text-white/80">
        We use cookies to improve your experience and analyze site performance. You can accept or close this notice.
      </p>
      <div className="mt-4 flex gap-3">
        <Button type="button" onClick={handleAccept} className="text-xs">
          Accept
        </Button>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="text-xs font-semibold text-white/70 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};
