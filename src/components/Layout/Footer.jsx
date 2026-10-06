import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS, SOCIALS } from "../../utils/constants";
import { Button } from "../UI/Button";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-navy text-white shadow-[0_-8px_32px_rgba(10,22,40,0.16)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-heading font-semibold">{COMPANY.name}</h3>
          <p className="mt-3 text-sm text-white/75">
            Trusted protection for businesses, communities, and homes across Kenya.
          </p>
          <div className="mt-4 space-y-2 text-sm text-white/75">
            <p>{COMPANY.hq}</p>
            <a className="block hover:text-red-300" href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
            <a className="block hover:text-red-300" href={`mailto:${COMPANY.emailSecondary}`}>{COMPANY.emailSecondary}</a>
            <a className="block hover:text-red-300" href="mailto:info@fw82securitysolutions.com">info@fw82securitysolutions.com</a>
          </div>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-xs font-semibold uppercase tracking-wide text-red-300"
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-red-300">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition hover:text-red-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-red-300">Services</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>Guarding & Patrols</li>
            <li>CCTV Surveillance</li>
            <li>Intruder Alarms</li>
            <li>Event Security</li>
            <li>Smart Integration</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-red-300">Newsletter</h4>
          <p className="mt-4 text-sm text-white/75">
            Stay updated on security insights and local safety news.
          </p>
          <form className="mt-4 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="rounded-xl border border-indigo-100 bg-white/75 px-4 py-3 text-sm text-ink placeholder:text-slate"
            />
            <Button type="button" variant="secondary" className="text-xs">
              Subscribe
            </Button>
          </form>
          <a
            href="/security-assessment-checklist.pdf"
            className="mt-4 block text-xs font-semibold uppercase tracking-wide text-red-300"
            download
          >
            Security Assessment Checklist
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/70">
        © 2026 FW82 Security Solutions Ltd. Privacy Policy · Terms
      </div>
    </footer>
  );
};
