import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../utils/constants";
import { Button } from "../UI/Button";
import { services } from "../../data/services";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const isCareers = location.pathname === "/careers";
  const primaryLinks = NAV_LINKS.filter((link) => link.path !== "/services");

  useEffect(() => {
    if (!open) setServicesOpen(false);
  }, [open]);

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
  }, [open, servicesOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-heading font-bold text-white">
            FW<span className="text-gold">82</span> Security
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {primaryLinks.map((link) => (
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
            <div className="group relative">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `gold-underline flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition hover:text-gold ${
                    isActive ? "text-gold" : "text-white"
                  }`
                }
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </NavLink>
              <div
                className="pointer-events-none absolute left-0 top-full mt-3 w-72 rounded-2xl border border-white/10 p-4 opacity-0 shadow-lift transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
                style={{ backgroundColor: "rgba(10, 22, 39, 0.829)" }}
              >
                <Link
                  to="/services"
                  className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 hover:bg-white/10 hover:text-gold"
                >
                  All Services
                </Link>
                <div className="my-3 h-px bg-white/10" />
                <div className="grid gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-gold"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
          open ? "opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: open ? `${menuHeight}px` : "0px" }}
      >
        <div ref={mobileMenuRef} className="mx-auto max-w-6xl overflow-hidden px-6 py-6">
          <div className="flex flex-col gap-4">
            {primaryLinks.map((link) => (
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
            <button
              type="button"
              className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide text-white"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`grid gap-2 overflow-hidden pl-3 transition-[max-height,opacity] duration-500 ease-in-out ${
                servicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="text-sm text-white/70 hover:text-gold"
              >
                All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-white/70 hover:text-gold"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <Button as={Link} to="/contact" className="text-sm">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
