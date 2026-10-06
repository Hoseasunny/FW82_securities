import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../utils/constants";
import { Button } from "../UI/Button";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const isCareers = location.pathname === "/careers";
  const reducedMotion = useReducedMotionSafe();

  useEffect(() => {
    let previousY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > 140 && currentY > previousY);
      previousY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-3 z-50 px-3"
      animate={{ y: hidden ? "-150%" : "0%" }}
      transition={reducedMotion
        ? { duration: 0.16 }
        : { type: "spring", stiffness: 120, damping: 18 }}
    >
      <div className="glass mx-auto max-w-6xl rounded-2xl lg:rounded-full">
        <div className="flex min-h-16 items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg font-heading font-bold tracking-tight text-ink sm:text-xl" aria-label="FW82 Security Solutions home">
            <span className="logo-mark inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-700 to-indigo-600 text-sm text-white shadow-soft">
              FW<span>82</span>
            </span>
            <span className="hidden text-sm font-semibold tracking-normal text-ink sm:inline">Security Solutions</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `gold-underline text-sm font-semibold uppercase tracking-wide transition hover:text-red-700 ${
                    isActive ? "text-red-700" : "text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {isCareers && (
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-800">
                We're Hiring
              </span>
            )}
            <Button as={Link} to="/contact" onClick={() => setOpen(false)} className="text-sm">
              Request a Quote
            </Button>
          </nav>

          <button
            className="flex min-h-11 min-w-11 items-center justify-center rounded-xl text-ink focus-visible:ring-2 focus-visible:ring-sky-500 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl transition-[max-height,opacity] duration-500 ease-in-out lg:hidden ${
          open ? "max-h-[80vh] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `gold-underline min-h-11 flex items-center text-sm font-semibold uppercase tracking-wide transition hover:text-red-700 ${
                    isActive ? "text-red-700" : "text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button as={Link} to="/contact" onClick={() => setOpen(false)} className="text-sm">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
