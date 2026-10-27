import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS, SOCIALS } from "../../utils/constants";

export const Footer = () => {
  return (
    <footer className="site-footer relative border-t border-white/10 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="site-footer-brand" aria-label="FW82 Security Solutions home">
            <img className="site-logo-art" src="/favicon-96.webp" alt="" width="48" height="48" />
            <span className="font-serif tracking-tight">{COMPANY.name}</span>
          </Link>
          <p className="mt-4 text-sm">
            Professional protection for businesses, communities, and events across Kenya.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p>{COMPANY.hq}</p>
            <a className="block" href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
            <a className="block" href={`mailto:${COMPANY.emailPrimary}`}>{COMPANY.emailPrimary}</a>
            <a className="block" href={`mailto:${COMPANY.emailSecondary}`}>{COMPANY.emailSecondary}</a>
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="site-social-link"
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="site-footer-heading">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="site-footer-heading">Services</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/services/guarding-patrols">Guarding &amp; Patrols</Link></li>
            <li><Link to="/services/technical-security">CCTV &amp; Alarms</Link></li>
            <li><Link to="/services/event-security">Event Security</Link></li>
            <li><Link to="/services/technical-security">Smart Security Integration</Link></li>
          </ul>
        </div>

        <div className="site-footer-downloads">
          <h4 className="site-footer-heading">Security Resources</h4>
          <a
            href="/security-assessment-checklist.pdf"
            className="mt-4 block text-sm"
            download
          >
            Security Assessment Checklist
          </a>
          <Link to="/contact" className="site-footer-quote mt-5 inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-sm font-semibold">
            Get a quote
          </Link>
        </div>
      </div>

      <div className="site-footer-bottom border-t border-white/10 px-6 py-5 text-center text-xs">
        © {new Date().getFullYear()} {COMPANY.name}
      </div>
    </footer>
  );
};
