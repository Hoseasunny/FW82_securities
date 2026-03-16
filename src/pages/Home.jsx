import { Hero } from "../components/Sections/Hero";
import { QuickServices } from "../components/Sections/QuickServices";
import { ClientLogos } from "../components/Sections/ClientLogos";
import { WhyChooseUs } from "../components/Sections/WhyChooseUs";
import { ProjectsShowcase } from "../components/Sections/ProjectsShowcase";
import { CTASection } from "../components/Sections/CTASection";
import { Testimonials } from "../components/Sections/Testimonials";
import { ContactForm } from "../components/Sections/ContactForm";

export const Home = () => {
  return (
    <main>
      <Hero />
      <QuickServices />
      <ClientLogos />
      <WhyChooseUs />
      <ProjectsShowcase />
      <CTASection />
      <Testimonials />
      <ContactForm />
    </main>
  );
};
