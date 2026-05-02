import { buildImageSet } from "../utils/imageGenerator";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Seo } from "../components/SEO/Seo";
import { FadeIn } from "../components/Animation/FadeIn";
import { FaqSection } from "../components/Sections/FaqSection";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { Target, Eye, ShieldCheck, Users } from "lucide-react";

const aboutHero = buildImageSet(
  "Leadership",
  "African security leadership team in formal attire in modern boardroom, Nairobi skyline visible",
  "about/team-briefing"
);

const leadershipImage = buildImageSet(
  "Leadership Team",
  "Diplomatic event at Airport Mall with professional security presence",
  "news-thumbnails/news-1"
);

const values = [
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and a commitment to doing what is right in every engagement."
  },
  {
    title: "Professionalism",
    description: "Our officers are trained to deliver disciplined service, respectful conduct, and strong operational control."
  },
  {
    title: "Reliability",
    description: "We provide 24/7 coverage and clear reporting so clients can trust the continuity of protection."
  },
  {
    title: "Innovation",
    description: "We integrate modern surveillance technologies with proven security methods to stay ahead of risk."
  },
  {
    title: "Client-Centric Service",
    description: "Every deployment is tailored to unique client needs, risk levels, and operational environments."
  }
];

export const About = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://factory2ksecurity.co.ke";
  const missionVision = [
    {
      title: "Mission",
      description:
        "To deliver comprehensive security solutions that inspire confidence, protect assets, and ensure peace of mind for our clients.",
      Icon: Target
    },
    {
      title: "Vision",
      description:
        "To be recognized as Kenya's most trusted and innovative security provider, setting new standards in professionalism and reliability.",
      Icon: Eye
    }
  ];

  const closingCards = [
    {
      title: "Leadership & Team",
      description:
        "Behind FW82 Security Solutions Ltd is a team of experienced professionals with backgrounds in law enforcement, corporate security, and risk management. Our leadership emphasizes continuous training, ethical conduct, and operational excellence. Every guard is not just a protector but an ambassador of our brand values.",
      Icon: ShieldCheck
    },
    {
      title: "Community Commitment",
      description:
        "We believe security is a shared responsibility. Beyond our contracts, FW82 Security Solutions Ltd contributes to community safety initiatives, awareness campaigns, and partnerships with local authorities to strengthen public security. We aim to create a safer environment for the communities in which we operate.",
      Icon: Users
    }
  ];

  return (
    <>
      <Seo
        title="About FW82 Security | Leadership & Company Story"
        description="Learn about FW82 Security Solution Ltd, our leadership, history, and mission to deliver trusted protection across Kenya."
        pathname="/about"
        image={aboutHero.src}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${siteUrl}/`
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "About",
              item: `${siteUrl}/about`
            }
          ]
        }}
      />
      <main>
        <section
          className="relative h-[60vh] bg-navy text-white"
          style={{
            backgroundImage: `url(${aboutHero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-hero-gradient opacity-70" />
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-6xl px-6">
              <Breadcrumbs
                items={[
                  { label: "Home", to: "/" },
                  { label: "About" }
                ]}
                textClassName="text-white/60"
                linkClassName="hover:text-gold"
              />
              <h1 className="text-4xl font-heading font-bold md:text-5xl">About FW82</h1>
              <p className="mt-4 max-w-2xl text-white/80">
                FW82 Security Solutions Ltd is a Kenyan security partner committed to safeguarding lives, property, and
                reputations through disciplined operations, ethical conduct, and technology-enabled protection.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn>
              <SectionHeader title="Our Story" subtitle="Company Story" />
              <p className="mt-6 text-sm leading-7 text-slate">
                FW82 Security Solutions Ltd was established to meet the growing demand for reliable,
                professional, and technology-driven security services in Kenya. From humble beginnings,
                we have evolved into a trusted partner for businesses, institutions, and communities
                that require uncompromising protection.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate">
                Our journey has been guided by a simple but powerful mission: to safeguard lives,
                property, and reputations with integrity, vigilance, and professionalism. We approach
                security as a long-term partnership, working closely with each client to understand
                their operational realities, risk exposure, and performance expectations.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="group overflow-hidden rounded-3xl border border-slate/10 bg-cloud transition hover:-translate-y-1 hover:shadow-lift">
                <img
                  src={leadershipImage.src}
                  srcSet={leadershipImage.srcSet}
                  alt="FW82 security leadership team"
                  className="aspect-4/3 w-full object-cover"
                  decoding="async"
                />
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-ink">A Leadership-Driven Culture</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">
                    Our leadership team brings experience in law enforcement, corporate security, and risk
                    management. We maintain strict operational standards, continuous training, and ethical
                    conduct so every officer represents the values and reputation of our brand.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-cloud py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
            {missionVision.map((item, index) => {
              const isDark = index % 2 === 1;
              const Icon = item.Icon;
              return (
                <FadeIn key={item.title} delay={0.05 * index}>
                  <div
                    className={`group relative p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
                      isDark ? "border-2 border-white/25 bg-[#050505] text-white" : "border-2 border-navy/90 bg-white text-ink"
                    }`}
                    style={{ borderRadius: isDark ? "0 30px 0 30px" : "30px 0 30px 0" }}
                  >
                    <div
                      className={`absolute -right-2 -top-2 rounded-bl-2xl border-2 p-3 ${
                        isDark ? "border-white/25 bg-gold text-white" : "border-navy/85 bg-navy text-white"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className={`pr-10 text-lg font-heading font-semibold ${isDark ? "text-white" : "text-ink"}`}>{item.title}</h3>
                    <p className={`mt-4 text-sm leading-7 ${isDark ? "text-white/90" : "text-slate"}`}>{item.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <SectionHeader title="Core Values" subtitle="What We Stand For" align="center" />
            </FadeIn>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={0.05 * index}>
                  <div
                    className={`group relative h-full p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
                      index % 2 === 1 ? "border-2 border-white/25 bg-[#050505] text-white" : "border-2 border-navy/90 bg-white text-ink"
                    }`}
                    style={{ borderRadius: index % 2 === 1 ? "0 30px 0 30px" : "30px 0 30px 0" }}
                  >
                    <h3 className={`text-lg font-heading font-semibold ${index % 2 === 1 ? "text-white" : "text-ink"}`}>{value.title}</h3>
                    <p className={`mt-3 text-sm leading-7 ${index % 2 === 1 ? "text-white/90" : "text-slate"}`}>{value.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cloud py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            {closingCards.map((item, index) => {
              const isDark = index % 2 === 1;
              const Icon = item.Icon;
              return (
                <FadeIn key={item.title} delay={0.05 * index}>
                  <div
                    className={`group relative h-full p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
                      isDark ? "border-2 border-white/25 bg-[#050505] text-white" : "border-2 border-navy/90 bg-white text-ink"
                    }`}
                    style={{ borderRadius: isDark ? "0 30px 0 30px" : "30px 0 30px 0" }}
                  >
                    <div
                      className={`absolute -right-2 -top-2 rounded-bl-2xl border-2 p-3 ${
                        isDark ? "border-white/25 bg-gold text-white" : "border-navy/85 bg-navy text-white"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className={`pr-10 text-lg font-heading font-semibold ${isDark ? "text-white" : "text-ink"}`}>{item.title}</h3>
                    <p className={`mt-4 text-sm leading-7 ${isDark ? "text-white/90" : "text-slate"}`}>{item.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <FaqSection />
      </main>
    </>
  );
};
