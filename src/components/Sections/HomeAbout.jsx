import { FadeIn } from "../Animation/FadeIn";
import { SectionHeader } from "../UI/SectionHeader";
import { InlineLink } from "../UI/InlineLink";

export const HomeAbout = () => {
  return (
    <section className="bg-cloud py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <SectionHeader title="Security Built on Trust" subtitle="About FW82" />
          <p className="mt-6 text-sm leading-7 text-slate">
            FW82 Security Solutions Ltd was established to answer a clear need in Kenya's
            security landscape: dependable protection delivered with professionalism, discipline,
            and modern technology. From our early operations, we have grown into a trusted
            partner for businesses, institutions, and residential communities that expect
            consistency, accountability, and operational excellence.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate">
            We approach every assignment with a mission-driven mindset. Our teams are trained
            to safeguard lives, property, and reputations while working closely with clients to
            design solutions that match risk profiles, budgets, and regulatory requirements. The
            result is a security partner that is proactive, visible, and committed to long-term
            relationships.
          </p>
          <div className="mt-8">
            <InlineLink to="/about">
              Learn more about us
            </InlineLink>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-soft backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What We Stand For</p>
            <h3 className="mt-4 text-2xl font-heading font-semibold text-ink">
              Integrity, Reliability, and Innovation
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate">
              Our guards, supervisors, and response teams operate under clear standards of
              conduct and accountability. We integrate modern surveillance and reporting tools
              with proven, on-the-ground security practices to keep clients informed and
              protected at all times.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "24/7 operational coverage",
                "Experienced leadership team",
                "Tailored client security plans",
                "Ethical, transparent reporting"
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-cloud px-4 py-3 text-xs font-semibold text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
