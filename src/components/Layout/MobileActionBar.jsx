import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "../../utils/constants";

export const MobileActionBar = () => {
  return (
    <div className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 px-3 pt-2 text-white shadow-lift backdrop-blur md:hidden">
      <a href={`tel:${COMPANY.phone}`} className="mobile-action-button mobile-action-call flex min-h-12 items-center justify-center gap-2 text-sm font-semibold">
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call us
      </a>
      <Link to="/contact" className="mobile-action-button mobile-action-quote flex min-h-12 items-center justify-center gap-2 text-sm font-semibold">
        Get a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
};