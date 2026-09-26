import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "../../utils/constants";

export const MobileActionBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const nearFooter = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 160;
      setVisible(window.scrollY > 400 && !nearFooter);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  const phone = COMPANY.phone.replace(/\D/g, "");

  return (
    <div className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-navy/95 text-white shadow-lift backdrop-blur lg:hidden">
      <a href={`tel:${COMPANY.phone}`} className="flex min-h-14 items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide">
        <Phone className="h-4 w-4 text-red-400" aria-hidden="true" />
        Call now
      </a>
      <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="flex min-h-14 items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide">
        <MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
};