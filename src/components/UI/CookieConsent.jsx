import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlassButton } from "./GlassButton";

export const CookieBanner = () => {
  const [consentState, setConsentState] = useState(() => {
    if (typeof window === "undefined") return { visible: false, error: "" };
    try {
      const accepted = window.localStorage.getItem("fw82-cookie-consent") === "accepted";
      return { visible: !accepted, error: "" };
    } catch {
      return {
        visible: true,
        error: "Your browser is blocking preference storage. You can still close this notice."
      };
    }
  });

  const handleAccept = () => {
    try {
      window.localStorage.setItem("fw82-cookie-consent", "accepted");
      setConsentState({ visible: false, error: "" });
    } catch {
      setConsentState((current) => ({
        ...current,
        visible: true,
        error: "We couldn't save your choice in this browser. Please check your privacy settings and try again."
      }));
    }
  };

  return (
    <AnimatePresence>
      {consentState.visible && (
        <motion.aside
          aria-labelledby="privacy-preferences-title"
          initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="cookie-notice glass-card fixed left-3 right-3 z-50 max-h-[min(42vh,18rem)] overflow-y-auto rounded-2xl p-4 text-ink shadow-lift sm:left-4 sm:right-4 sm:p-5 md:left-auto md:right-6 md:max-h-[none] md:max-w-sm"
        >
          <h2 id="privacy-preferences-title" className="text-sm font-semibold text-ink">Privacy preferences</h2>
          <p className="text-sm leading-6 text-slate">
            Accept to save your privacy preference on this device. You can close this notice without saving a choice.
          </p>
          <div className="mt-4 flex gap-3">
            <GlassButton type="button" onClick={handleAccept} className="min-h-12 text-xs">
              Accept
            </GlassButton>
            <button
              type="button"
              onClick={() => setConsentState((current) => ({ ...current, visible: false }))}
              className="min-h-12 rounded-lg px-4 text-xs font-semibold text-slate hover:text-ink focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              Close
            </button>
          </div>
          {consentState.error && (
            <p className="mt-2 text-xs font-medium text-alert" role="status">{consentState.error}</p>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export const CookieConsent = CookieBanner;
