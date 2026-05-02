import { FadeIn } from "../Animation/FadeIn";
import { SectionHeader } from "../UI/SectionHeader";
import { InlineLink } from "../UI/InlineLink";
import { ShieldCheck } from "lucide-react";

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
              ].map((item, index) => {
                const isDark = index % 2 === 1;
                const iconLeft = index % 2 === 1;
                return (
                <div
                  key={item}
                  className={`relative border-2 px-4 py-3 text-xs font-semibold ${
                    isDark ? "border-white/25 bg-[#050505] text-white" : "border-gold/80 bg-gold text-white"
                  }`}
                  style={{ borderRadius: isDark ? "0 30px 0 30px" : "30px 0 30px 0" }}
                >
                  <div
                    className={`absolute -top-2 border-2 p-2 ${iconLeft ? "-left-2 rounded-br-2xl" : "-right-2 rounded-bl-2xl"} ${
                      isDark ? "border-white/25 bg-gold text-white" : "border-gold/80 bg-black text-white"
                    }`}
                  >
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span className={iconLeft ? "pl-6" : "pr-6"}>{item}</span>
                </div>
              );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
