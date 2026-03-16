import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS, SOCIALS } from "../../utils/constants";
import { Button } from "../UI/Button";

export const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-heading font-semibold">{COMPANY.name}</h3>
          <p className="mt-3 text-sm text-white/70">
            Trusted protection for businesses, communities, and homes across Kenya.
          </p>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            <p>{COMPANY.hq}</p>
            <p>{COMPANY.phone}</p>
            <p>{COMPANY.emailSecondary}</p>
          </div>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-xs font-semibold uppercase tracking-wide text-gold"
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Services</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Guarding & Patrols</li>
            <li>CCTV Surveillance</li>
            <li>Intruder Alarms</li>
            <li>Event Security</li>
            <li>Smart Integration</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Newsletter</h4>
          <p className="mt-4 text-sm text-white/70">
            Stay updated on security insights and local safety news.
          </p>
          <form className="mt-4 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
            />
            <Button type="button" variant="secondary" className="text-xs">
              Subscribe
            </Button>
          </form>
          <a
            href="/security-assessment-checklist.pdf"
            className="mt-4 block text-xs font-semibold uppercase tracking-wide text-gold"
            download
          >
            Security Assessment Checklist
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60">
        ? {new Date().getFullYear()} FW82 Security Solution Ltd. Privacy Policy ? Terms
      </div>
    </footer>
  );
};
