import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../utils/constants";
import { Button } from "../UI/Button";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const isCareers = location.pathname === "/careers";

  useEffect(() => {
    if (!open) {
      setMenuHeight(0);
      return;
    }
    const measure = () => {
      if (!mobileMenuRef.current) return;
      setMenuHeight(mobileMenuRef.current.scrollHeight);
    };
    measure();
    const frame = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(frame);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-heading font-bold text-white">
            FW<span className="text-gold">82</span> Security
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `gold-underline text-sm font-semibold uppercase tracking-wide transition hover:text-gold ${
                    isActive ? "text-gold" : "text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {isCareers && (
              <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
                We're Hiring
              </span>
            )}
            <Button as={Link} to="/contact" className="text-sm">
              Get Quote
            </Button>
          </nav>

          <button
            className="text-white lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={`glass lg:hidden transition-[max-height,opacity] duration-700 ease-in-out ${
          open ? "opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{ maxHeight: open ? `${menuHeight}px` : "0px" }}
      >
        <div ref={mobileMenuRef} className="mx-auto max-w-6xl overflow-hidden px-6 py-6">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `gold-underline text-sm font-semibold uppercase tracking-wide transition hover:text-gold ${
                    isActive ? "text-gold" : "text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button as={Link} to="/contact" className="text-sm">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
