import { createElement, useEffect } from "react";
import { ArrowDown, ArrowRight, Camera, Check, MapPin, ShieldCheck, Siren, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/Sections/ContactForm";
import { LicenceSection } from "../components/Sections/LicenceSection";
import { ClientLogos } from "../components/Sections/ClientLogos";
import { StatsBand } from "../components/Sections/StatsBand";
import { HomeAbout } from "../components/Sections/HomeAbout";
import { Testimonials } from "../components/Sections/Testimonials";
import { FaqSection } from "../components/Sections/FaqSection";
import { Seo } from "../components/SEO/Seo";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { newsItems } from "../data/news";
import { COMPANY, SOCIALS } from "../utils/constants";
import { BrandText } from "../components/UI/CompanyName";
import "./home.css";

const serviceIcons = { Shield: ShieldCheck, Cpu: Camera, Users, Smartphone: Siren };
const servicePhotos = {
  "guarding-patrols": {
    src: "/images/services/guarding-patrols/cover.jpg",
    alt: "FW82 security officers standing outside a site"
  },
  "technical-security": {
    src: "/images/services/technical-security/cctv-installation.jpg",
    alt: "Electronic access-control turnstiles at a building entrance"
  },
  "event-security": {
    src: "/images/services/event-security/crowd-management.jpg",
    alt: "FW82 security officers assembled indoors"
  },
  "smart-security-integration": {
    src: "/images/services/smart-security-integration/installations-1.jpg",
    alt: "Outdoor CCTV cameras mounted on a property"
  }
};
const serviceCards = services.map((service) => ({
  title: service.title,
  description: service.description,
  href: `/services/${service.slug}`,
  image: servicePhotos[service.slug] || { src: service.image.src, alt: service.title },
  Icon: serviceIcons[service.icon] || ShieldCheck
}));
const projectPhotos = [
  {
    src: "/images/projects/project-2.jpg",
    alt: "Security officers outside a shopping centre"
  },
  {
    src: "/images/projects/project-3.jpg",
    alt: "CCTV monitoring screens in a control room"
  },
  {
    src: "/images/projects/project-1.jpg",
    alt: "CCTV cameras and recording equipment"
  }
];

const galleryPhotos = [
  {
    title: "Canine security units",
    image: "/images/services/smart-security-integration/installations-4.jpg",
    alt: "Security dog wearing a working harness",
    href: "/services/specialized/canine-security-units"
  },
  {
    title: "Automatic barrier gates",
    image: "/images/services/technical-security/cover-1200.webp",
    alt: "Automatic vehicle barrier gate at a property entrance",
    href: "/services/specialized/automatic-barrier-gates"
  },
  {
    title: "CCTV & perimeter monitoring",
    image: "/images/specialized/automatic-barrier-gates-400.webp",
    alt: "Surveillance cameras covering a secured property perimeter",
    href: "/services/technical-security"
  },
  {
    title: "Retractable bollards",
    image: "/images/specialized/canine-security-units-800.webp",
    alt: "Retractable security bollards set into paved ground",
    href: "/services/specialized/retractable-bollards"
  },
  {
    title: "Fire safety systems",
    image: "/images/specialized/fire-safety-systems-1200.webp",
    alt: "Fire extinguishers and safety equipment",
    href: "/services/specialized/fire-safety-systems"
  },
  {
    title: "Security fencing",
    image: "/images/specialized/retractable-bollards-800.webp",
    alt: "Steel security fencing around a green property",
    href: "/services/specialized/security-fencing"
  },
  {
    title: "FW82 security teams",
    image: "/images/specialized/security-fencing-1200.webp",
    alt: "FW82 security officers in uniform",
    href: "/services/guarding-patrols"
  },
  {
    title: "Professional guarding",
    image: "/images/services/guarding-patrols/cover.jpg",
    alt: "FW82 security officers in uniform",
    href: "/services/guarding-patrols"
  }
];

const portfolioItems = [
  ...services[1].longSections
    .filter((item) => ["CCTV Installation", "Intruder Alarms", "Electric Fencing", "Biometric Systems"].includes(item.title))
    .map((item) => ({
      title: item.title,
      description: item.body,
      href: `/services/${services[1].slug}`,
      image: `/images/services/technical-security/${{
        "CCTV Installation": "cctv-installation",
        "Intruder Alarms": "intruder-alarms",
        "Electric Fencing": "electric-fencing",
        "Biometric Systems": "biometric-systems"
      }[item.title]}.jpg`
    })),
  ...services[2].longSections
    .filter((item) => ["Crowd Management", "VIP Protection"].includes(item.title))
    .map((item) => ({
      title: item.title,
      description: item.body,
      href: `/services/${services[2].slug}`,
      image: `/images/services/event-security/${item.title === "Crowd Management" ? "crowd-management" : "vip-protection"}.jpg`
    }))
];

const reasons = [
  {
    title: "Licensed, professional officers",
    description: "Our frontline teams are licensed by Kenya's Private Security Regulatory Authority and trained for professional service."
  },
  {
    title: "Protection tailored to your site",
    description: "We work with clients to shape practical security plans around their environment, risk profile, and requirements."
  },
  {
    title: "People and technology, connected",
    description: "Combine guarding with surveillance, alarms, access control, and response coordination for joined-up protection."
  }
];

export const Home = () => {
  useEffect(() => {
    document.documentElement.classList.add("home-reveal-ready");
    const revealItems = document.querySelectorAll(".home-reveal");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("home-reveal-ready");
    };
  }, []);

  const siteUrl = import.meta.env.VITE_SITE_URL || "https://www.fw82securitysolutions.com";
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    url: siteUrl,
    telephone: COMPANY.phone,
    email: COMPANY.emailPrimary,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.hq,
      addressCountry: "KE"
    },
    areaServed: COMPANY.branches,
    sameAs: SOCIALS.map((item) => item.href)
  };

  const handleServiceMove = (event) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    card.style.setProperty("--tilt-x", `${(0.5 - y) * 12}deg`);
    card.style.setProperty("--tilt-y", `${(x - 0.5) * 12}deg`);
    card.style.setProperty("--spot-x", `${x * 100}%`);
    card.style.setProperty("--spot-y", `${y * 100}%`);
  };

  const resetServiceCard = (event) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  const handleGalleryMove = (event) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    card.style.setProperty("--gallery-tilt-x", `${(0.5 - y) * 6}deg`);
    card.style.setProperty("--gallery-tilt-y", `${(x - 0.5) * 6}deg`);
    card.style.setProperty("--gallery-shine-x", `${x * 100}%`);
  };

  const resetGalleryCard = (event) => {
    event.currentTarget.style.setProperty("--gallery-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--gallery-tilt-y", "0deg");
  };

  const handleMagneticMove = (event) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--magnet-x", `${(event.clientX - bounds.left - bounds.width / 2) * 0.12}px`);
    event.currentTarget.style.setProperty("--magnet-y", `${(event.clientY - bounds.top - bounds.height / 2) * 0.12}px`);
  };

  const resetMagnetic = (event) => {
    event.currentTarget.style.setProperty("--magnet-x", "0px");
    event.currentTarget.style.setProperty("--magnet-y", "0px");
  };

  return (
    <>
      <Seo
        title="FW82 Security Solutions Ltd | Trusted Security Services Across Kenya"
        description="Discover professional guarding, CCTV, alarm systems, and event security from PSRA-licensed FW82 Security Solutions Ltd. Serving Nairobi, Mombasa, Kisumu, and Eldoret."
        pathname="/"
        jsonLd={organizationJsonLd}
      />
      <main className="home-page">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="home-shell home-hero-grid">
            <div className="home-hero-copy">
              <p className="home-eyebrow"><span className="home-eyebrow-dot" /> PSRA Licensed · Kenya</p>
              <h1 id="hero-title">Security you can see.<br /><span>Protection you can trust.</span></h1>
              <p className="home-hero-intro">
                Professional security for businesses, communities, and events — delivered with discipline, care, and modern technology.
              </p>
              <div className="home-hero-actions">
                <a
                  className="home-button home-button-primary home-hero-quote home-ripple"
                  href="#contact"
                  onPointerMove={handleMagneticMove}
                  onPointerLeave={resetMagnetic}
                >
                  Get a free quote <ArrowRight aria-hidden="true" />
                </a>
                <a className="home-button home-button-secondary home-ripple" href="#services">
                  Explore services <ArrowDown aria-hidden="true" />
                </a>
              </div>
              <div className="home-hero-proof" aria-label="Service assurances">
                <span><Check aria-hidden="true" /> PSRA Licensed</span>
                <span><Check aria-hidden="true" /> Local teams</span>
                <span><Check aria-hidden="true" /> Integrated solutions</span>
              </div>
            </div>

            <div className="home-hero-art" aria-label="Security personnel, CCTV equipment, and access-control photographs">
              <figure className="home-hero-photo-main">
                <img
                  src="/images/hero/hero-guard-feature.png"
                  alt="Security officer holding a handheld metal detector"
                  width="1536"
                  height="1024"
                  fetchPriority="high"
                />
                <figcaption>
                  <span>People-first protection</span>
                  <strong>Professional security, built around you.</strong>
                </figcaption>
              </figure>
              <figure className="home-hero-photo-inset home-hero-photo-cctv">
                <img
                  src="/images/projects/project-1.jpg"
                  alt="CCTV cameras and video recording equipment"
                  width="1080"
                  height="1440"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption><Camera aria-hidden="true" /> Technical security</figcaption>
              </figure>
              <figure className="home-hero-photo-inset home-hero-photo-team">
                <img
                  src="/images/news-thumbnails/team-briefing.jpg"
                  alt="Security officers lined up outdoors during a briefing"
                  width="1600"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption><Users aria-hidden="true" /> Trained teams</figcaption>
              </figure>
              <div className="home-hero-licence-pill"><ShieldCheck aria-hidden="true" /> PSRA Licensed</div>
            </div>
          </div>
          <a className="home-scroll-cue" href="#trust" aria-label="Scroll to learn more"><span /> Scroll to discover</a>
        </section>

        <section className="home-trust" id="trust" aria-label="FW82 credentials and locations">
          <div className="home-shell home-trust-row">
            <span className="home-trust-label">Security across Kenya</span>
            <span className="home-trust-license"><ShieldCheck aria-hidden="true" /> PSRA Licensed</span>
            {COMPANY.branches.map((city) => (
              <span className="home-trust-city" key={city}><MapPin aria-hidden="true" /> {city}</span>
            ))}
          </div>
        </section>

        <section className="home-section home-services" id="services" aria-labelledby="services-title">
          <div className="home-shell">
            <div className="home-section-heading home-reveal">
              <p className="home-kicker">What we do</p>
              <h2 id="services-title">Complete protection, <span>from the gate to the grid.</span></h2>
              <p>Practical, people-led security supported by technology that helps you stay one step ahead.</p>
            </div>
            <div className="home-service-grid">
              {serviceCards.map((service, index) => (
                <Link
                  className="home-service-card home-glass-card home-reveal"
                  style={{ "--reveal-index": index }}
                  key={service.title}
                  to={service.href}
                  onPointerMove={handleServiceMove}
                  onPointerLeave={resetServiceCard}
                >
                  <span className="home-service-image">
                    <img
                      src={service.image.src}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      alt={service.image.alt}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="540"
                    />
                  </span>
                  <span className="home-card-icon">{createElement(service.Icon, { "aria-hidden": true })}</span>
                  <h3><BrandText text={service.title} /></h3>
                  <p><BrandText text={service.description} /></p>
                  <span className="home-card-link">Discover service <ArrowRight aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
            <div className="home-services-more home-reveal"><Link to="/services">Explore all services <ArrowRight aria-hidden="true" /></Link></div>
          </div>
        </section>

        <section className="home-section home-gallery-section" id="gallery" aria-labelledby="gallery-title">
          <div className="home-shell">
            <div className="home-section-heading home-reveal">
              <p className="home-kicker">Security solutions gallery</p>
              <h2 id="gallery-title">See the protection <span>we can put in place.</span></h2>
              <p>Explore the people, equipment, and integrated solutions behind a stronger security plan.</p>
            </div>
            <div className="home-gallery-grid">
              {galleryPhotos.map((photo, index) => (
                <Link
                  key={photo.title}
                  to={photo.href}
                  className="home-gallery-card home-reveal"
                  style={{ "--reveal-index": index }}
                  onPointerMove={handleGalleryMove}
                  onPointerLeave={resetGalleryCard}
                >
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="home-gallery-shine" aria-hidden="true" />
                  <span className="home-gallery-caption">
                    <span>{photo.title}</span>
                    <ArrowRight aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ClientLogos />
        <HomeAbout />

        <section className="home-section home-why" id="about" aria-labelledby="why-title">
          <div className="home-shell home-why-grid">
            <div className="home-why-copy">
              <p className="home-kicker home-reveal">The FW82 difference</p>
              <h2 className="home-reveal" id="why-title">Security built on trust, <span>discipline, and clear accountability.</span></h2>
              <div className="home-reasons">
                {reasons.map((reason, index) => (
                  <article className="home-reason home-reveal" key={reason.title} style={{ "--reveal-index": index }}>
                    <span className="home-reason-check"><Check aria-hidden="true" /></span>
                    <div><h3>{reason.title}</h3><p>{reason.description}</p></div>
                  </article>
                ))}
              </div>
            </div>
            <div className="home-why-art home-reveal" aria-label="Photographs of FW82 security services and installations">
              <div className="home-why-gallery">
                <figure className="home-why-photo home-why-photo-access">
                  <img
                    src="/images/services/technical-security/cctv-installation.jpg"
                    alt="Access-control turnstiles installed at a building entrance"
                    width="600"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Access control</figcaption>
                </figure>
                <figure className="home-why-photo home-why-photo-perimeter">
                  <img
                    src="/images/services/technical-security/electric-fencing.jpg"
                    alt="Electric security fencing installed along a perimeter wall"
                    width="1080"
                    height="810"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Perimeter protection</figcaption>
                </figure>
                <figure className="home-why-photo home-why-photo-cctv">
                  <img
                    src="/images/projects/project-1.jpg"
                    alt="CCTV cameras and recording equipment"
                    width="600"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>CCTV systems</figcaption>
                </figure>
                <figure className="home-why-photo home-why-photo-monitoring">
                  <img
                    src="/images/services/smart-security-integration/installations-1.jpg"
                    alt="Outdoor surveillance cameras installed at a property"
                    width="1080"
                    height="1080"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Smart monitoring</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <StatsBand />

        <section className="home-section home-coverage" id="coverage" aria-labelledby="coverage-title">
          <div className="home-shell">
            <div className="home-section-heading home-reveal">
              <p className="home-kicker">Where we work</p>
              <h2 id="coverage-title">Serving key cities <span>across Kenya.</span></h2>
              <p>Nairobi headquarters, with service coverage in Mombasa, Kisumu, and Eldoret.</p>
            </div>
            <div className="home-city-grid">
              {COMPANY.branches.map((city, index) => (
                <article className="home-city-card home-glass-card home-reveal" style={{ "--reveal-index": index }} key={city}>
                  <MapPin aria-hidden="true" />
                  <h3>{city}</h3>
                  <p>{city === "Nairobi" ? "Headquarters" : "Kenya"}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-portfolio" id="portfolio" aria-labelledby="portfolio-title">
          <div className="home-shell">
            <div className="home-section-heading home-reveal">
              <p className="home-kicker">Security portfolio</p>
              <h2 id="portfolio-title">The right capability <span>for every layer of risk.</span></h2>
              <p>Explore specialist solutions that can work alone or alongside guarding and response.</p>
            </div>
            <div className="home-portfolio-grid">
              {portfolioItems.map((item, index) => (
                <article className="home-portfolio-card home-glass-card home-reveal" style={{ "--reveal-index": index }} key={item.title}>
                  <span className="home-portfolio-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="home-portfolio-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="800"
                      height="540"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description.split(". ")[0].replace(/\.$/, "")}.</p>
                  <Link to={item.href} className="home-card-link">Explore solution <ArrowRight aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-projects" id="projects" aria-labelledby="projects-title">
          <div className="home-shell">
            <div className="home-section-heading home-reveal">
              <p className="home-kicker">Selected work</p>
              <h2 id="projects-title">Security in action, <span>across real environments.</span></h2>
              <p>See examples of the settings and security needs our teams support.</p>
            </div>
            <div className="home-discovery-grid home-grid-three">
              {projects.slice(0, 3).map((project, index) => (
                <Link
                  className="home-discovery-card home-reveal"
                  style={{ "--reveal-index": index }}
                  to={`/projects/${project.slug}`}
                  key={project.slug}
                >
                  <div className="home-discovery-image">
                    <img
                      src={projectPhotos[index].src}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      alt={projectPhotos[index].alt}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="540"
                    />
                    <span className="home-discovery-label">{project.category}</span>
                  </div>
                  <div className="home-discovery-copy">
                    <h3><BrandText text={project.title} /></h3>
                    <p><BrandText text={project.summary} /></p>
                    <span className="home-card-link">View project <ArrowRight aria-hidden="true" /></span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="home-services-more home-reveal"><Link to="/projects">View all projects <ArrowRight aria-hidden="true" /></Link></div>
          </div>
        </section>

        <div className="home-licence-section" id="licence">
          <LicenceSection />
        </div>

        <Testimonials />

        <section className="home-section home-news" id="news" aria-labelledby="news-title">
          <div className="home-shell">
            <div className="home-section-heading home-reveal">
              <p className="home-kicker">News &amp; updates</p>
              <h2 id="news-title">What’s happening <span>at FW82.</span></h2>
              <p>Updates and stories about our work, technology, and community safety.</p>
            </div>
            <div className="home-discovery-grid home-grid-three">
              {newsItems.slice(0, 3).map((item, index) => (
                <Link
                  className="home-discovery-card home-reveal"
                  style={{ "--reveal-index": index }}
                  to={`/news/${item.slug}`}
                  key={item.slug}
                >
                  <div className="home-discovery-image">
                    <img
                      src={item.image.src.replace(/-\d+\.webp$/, ".jpg")}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      alt={item.image.prompt}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="540"
                    />
                    <span className="home-discovery-label">{item.category} · {item.date}</span>
                  </div>
                  <div className="home-discovery-copy">
                    <h3><BrandText text={item.title} /></h3>
                    <p><BrandText text={item.excerpt} /></p>
                    <span className="home-card-link">Read update <ArrowRight aria-hidden="true" /></span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="home-services-more home-reveal"><Link to="/news">View all updates <ArrowRight aria-hidden="true" /></Link></div>
          </div>
        </section>

        <FaqSection className="home-faq" />

        <section className="home-cta" aria-labelledby="cta-title">
          <div className="home-shell home-cta-content home-reveal">
            <div>
              <p className="home-kicker">Your next step</p>
              <h2 id="cta-title">Ready to secure your premises?</h2>
              <p>Tell us what you need. We’ll help you find the right protection for your site.</p>
            </div>
            <a className="home-button home-button-light home-ripple" href="#contact">Get a free quote <ArrowRight aria-hidden="true" /></a>
          </div>
        </section>

        <div className="home-contact">
          <ContactForm />
        </div>

      </main>
    </>
  );
};
