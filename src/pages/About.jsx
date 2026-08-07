import { SectionHeader } from "../components/UI/SectionHeader";
import { Seo } from "../components/SEO/Seo";
import { FadeIn } from "../components/Animation/FadeIn";
import { FaqSection } from "../components/Sections/FaqSection";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { Target, Eye, ShieldCheck, Users } from "lucide-react";
import { AlternatingCard } from "../components/UI/AlternatingCard";

const aboutHero = {
  src: "/images/custom/about-top-20260502-174125.png"
};

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
  const journeyMilestones = [
    {
      title: "Frontline Foundation",
      detail: "Our roots were built in day-to-day guarding operations, discipline, and client trust."
    },
    {
      title: "Service Expansion",
      detail: "FW82 evolved into a multi-service security partner for corporate, residential, industrial, and event environments."
    },
    {
      title: "Technology Integration",
      detail: "We strengthened physical protection with CCTV, access control, alarms, and smart monitoring systems."
    },
    {
      title: "Trusted Delivery",
      detail: "Today, we combine trained people, clear operations, and modern systems to deliver dependable protection."
    }
  ];
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
        "Behind Factory 2K Solution Ltd is a team of experienced professionals with backgrounds in law enforcement, corporate security, and risk management. Our leadership emphasizes continuous training, ethical conduct, and operational excellence. Every guard is not just a protector but an ambassador of our brand values.",
      Icon: ShieldCheck
    },
    {
      title: "Community Commitment",
      description:
        "We believe security is a shared responsibility. Beyond our contracts, Factory 2K Solution Ltd contributes to community safety initiatives, awareness campaigns, and partnerships with local authorities to strengthen public security. We aim to create a safer environment for the communities in which we operate.",
      Icon: Users
    }
  ];

  return (
    <>
      <Seo
        title="About Factory 2K Solution | Leadership & Company Story"
        description="Learn about Factory 2K Solution Ltd, our leadership, history, and mission to deliver trusted protection across Kenya."
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
          className="group relative h-[60vh] overflow-hidden bg-navy text-white"
          style={{
            backgroundImage: `url(${aboutHero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-hero-gradient opacity-70" />
          <div className="pointer-events-none absolute -left-12 bottom-10 h-52 w-52 rounded-full border border-white/35 bg-white/10 blur-[1px]" />
          <div className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full border border-gold/40 bg-gold/15 blur-[1px]" />
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
              <h1 className="text-4xl font-heading font-bold md:text-5xl">About Factory 2K</h1>
              <p className="mt-4 max-w-2xl text-white/80">
                Trusted Kenyan security experts delivering disciplined guarding, rapid response, and technology-enabled
                protection for homes, businesses, and institutions.
              </p>
              <div className="mt-5 inline-flex rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5">
                Reliable. Vigilant. Professional.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn>
              <SectionHeader title="Our Journey" subtitle="Built from Experience, Grown Through Trust" />
              <div className="group mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-soft sm:mx-0 md:mx-0 -mx-6 sm:w-auto md:w-auto w-[calc(100%+3rem)]">
                <div className="flex flex-col gap-10 p-6">
                  <div className="hero-split-media relative overflow-hidden p-4">
                    <div className="hero-shape-layer hero-shape-layer-a" aria-hidden="true" />
                    <div className="hero-shape-layer hero-shape-layer-b" aria-hidden="true" />
                    <img
                      src="/images/custom/director-journey-20260507.png"
                      alt="FW82 Executive Director and Chief Commercial Officer"
                      className="hero-split-image h-[50vh] sm:h-[320px] md:h-[320px] w-[98vw] sm:w-full md:w-full max-w-[98vw] sm:max-w-xl md:max-w-xl rounded-[1.5rem] object-cover object-center transition-transform duration-500 scale-[1.1] group-hover:scale-[1.12]"
                      style={{ objectPosition: "center 35%" }}
                      decoding="async"
                    />
                    <div className="hero-split-border" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold text-white">Executive Director & Chief Commercial Officer</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      "A vision without a visionary is dead." This leadership journey from frontline guarding to executive
                      management reflects the values that shaped Factory 2K: resilience, discipline, and consistent service delivery.
                    </p>
                    <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      18+ Years Security Leadership
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-sm leading-7 text-slate">
                Factory 2K Solution Ltd provides dependable, technology-enabled security tailored to each client.
                We combine trained personnel, clear operations, and modern systems to protect people, property, and
                reputation across Kenya.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {journeyMilestones.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate/15 bg-cloud p-5 shadow-soft">
                    <h3 className="text-sm font-heading font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate/15 bg-white p-4 text-center shadow-soft">
                  <p className="text-2xl font-heading font-bold text-ink">18+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate">Years Experience</p>
                </div>
                <div className="rounded-2xl border border-slate/15 bg-white p-4 text-center shadow-soft">
                  <p className="text-2xl font-heading font-bold text-ink">500+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate">Clients Served</p>
                </div>
                <div className="rounded-2xl border border-slate/15 bg-white p-4 text-center shadow-soft">
                  <p className="text-2xl font-heading font-bold text-ink">99.8%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate">Retention</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-cloud py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
            {missionVision.map((item, index) => {
              const Icon = item.Icon;
              return (
                <FadeIn key={item.title} delay={0.05 * index}>
                  <AlternatingCard index={index} icon={Icon}>
                    <h3 className="text-lg font-heading font-bold">{item.title}</h3>
                    <p className="mt-4 text-sm font-medium leading-7 text-current/90">{item.description}</p>
                  </AlternatingCard>
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
                    <h3 className={`text-lg font-heading font-bold ${index % 2 === 1 ? "text-white" : "text-ink"}`}>{value.title}</h3>
                    <p className={`mt-3 text-sm font-medium leading-7 ${index % 2 === 1 ? "text-white/90" : "text-slate"}`}>{value.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cloud py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            {closingCards.map((item, index) => {
              const Icon = item.Icon;
              return (
                <FadeIn key={item.title} delay={0.05 * index}>
                  <AlternatingCard index={index} icon={Icon} className="h-full">
                    <h3 className="text-lg font-heading font-bold">{item.title}</h3>
                    <p className="mt-4 text-sm font-medium leading-7 text-current/90">{item.description}</p>
                  </AlternatingCard>
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


