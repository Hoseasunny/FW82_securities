import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400 && !document.querySelector(".cookie-notice"));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const noticeObserver = new MutationObserver(onScroll);
    noticeObserver.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      noticeObserver.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      className="back-to-top fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-3 z-40 flex min-h-12 min-w-12 items-center justify-center rounded-full bg-gold text-white shadow-lift transition hover:brightness-110 sm:right-6 md:bottom-6"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
};
