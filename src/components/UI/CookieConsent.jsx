import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlassButton } from "./GlassButton";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.localStorage.getItem("fw82-cookie-consent");
  });

  const handleAccept = () => {
    window.localStorage.setItem("fw82-cookie-consent", "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          aria-label="Cookie notice"
          initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="glass-card fixed bottom-4 left-4 right-4 z-40 rounded-2xl p-5 text-ink shadow-lift md:bottom-6 md:left-auto md:right-6 md:max-w-sm"
        >
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
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export const CookieConsent = CookieBanner;
