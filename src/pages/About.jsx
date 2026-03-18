import { buildImageSet } from "../utils/imageGenerator";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Card } from "../components/UI/Card";
import { Seo } from "../components/SEO/Seo";

const aboutHero = buildImageSet(
  "Leadership",
  "African business executive in formal suit standing confidently in modern office with Nairobi skyline visible through window",
  "team-briefing"
);

const leader = buildImageSet(
  "Fred Wandera",
  "Professional headshot of African male business executive, Fred Wandera, warm smile, navy blue suit, neutral background",
  "executive-portrait"
);

const timeline = [
  { year: 2008, event: "Fred Wandera begins security career at SGA Security" },
  { year: 2015, event: "Founded Factory 2K Security Ltd" },
  { year: 2020, event: "Rebranded to FW82 Security Solution Ltd" },
  { year: 2024, event: "Expanded to 4 branches nationwide" }
];

export const About = () => {
  return (
    <>
      <Seo
        title="About FW82 Security | Leadership & Company Story"
        description="Learn about FW82 Security Solution Ltd, our leadership, history, and mission to deliver trusted protection across Kenya."
        pathname="/about"
        image={aboutHero.src}
      />
      <main>
        <section className="relative h-[60vh] bg-navy text-white">
          <img
            src={aboutHero.src}
            srcSet={aboutHero.srcSet}
            alt="Executive leadership in Nairobi"
            className="h-full w-full object-cover"
            decoding="async"
          />
          <div className="absolute inset-0 gradient-overlay" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="text-4xl font-heading font-bold md:text-5xl">About FW82</h1>
              <p className="mt-4 max-w-xl text-white/80">
                A Kenyan security partner delivering trusted protection through innovation and disciplined operations.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
            <div>
              <SectionHeader title="Company Story" subtitle="Timeline" />
              <div className="mt-8 space-y-6 border-l border-gold/40 pl-6">
                {timeline.map((item) => (
                  <div key={item.year}>
                    <p className="text-sm font-semibold text-gold">{item.year}</p>
                    <p className="mt-2 text-sm text-slate">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <Card className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={leader.src}
                    srcSet={leader.srcSet}
                    alt="Fred Wandera"
                    className="h-20 w-20 rounded-full object-cover"
                    decoding="async"
                  />
                  <div>
                    <p className="text-lg font-heading font-semibold text-ink">Fred Wandera</p>
                    <p className="text-sm text-slate">Executive Director</p>
                  </div>
                </div>
                <p className="text-sm text-slate">BBA, MPA ? Technical University of Mombasa</p>
                <p className="text-sm text-slate">
                  Former Senior Technical Sales Representative at SGA Security with extensive experience in security solutions and client relations.
                </p>
              </Card>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="text-lg font-heading font-semibold text-ink">Mission</h3>
                  <p className="mt-3 text-sm text-slate">
                    To provide world-class security solutions that protect what matters most to our clients.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-lg font-heading font-semibold text-ink">Vision</h3>
                  <p className="mt-3 text-sm text-slate">
                    To be Kenya's most trusted security partner through innovation and excellence.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
