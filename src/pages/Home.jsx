import { Hero } from "../components/Sections/Hero";
import { QuickServices } from "../components/Sections/QuickServices";
import { ClientLogos } from "../components/Sections/ClientLogos";
import { WhyChooseUs } from "../components/Sections/WhyChooseUs";
import { HomeServices } from "../components/Sections/HomeServices";
import { ProjectsShowcase } from "../components/Sections/ProjectsShowcase";
import { CTASection } from "../components/Sections/CTASection";
import { Testimonials } from "../components/Sections/Testimonials";
import { ContactForm } from "../components/Sections/ContactForm";
import { Seo } from "../components/SEO/Seo";
import { COMPANY, SOCIALS } from "../utils/constants";

export const Home = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://factory2ksecurity.co.ke";
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

  return (
    <>
      <Seo
        title="FW82 Security Solution Ltd | Professional Security Services Kenya"
        description="Leading security company in Kenya offering guarding, CCTV, alarms, and event security. PSRA licensed. Serving Nairobi, Mombasa, Kisumu & Eldoret."
        pathname="/"
        jsonLd={organizationJsonLd}
      />
      <main>
        <Hero />
        <QuickServices />
        <ClientLogos />
        <WhyChooseUs />
        <HomeServices />
        <ProjectsShowcase />
        <CTASection />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
};
