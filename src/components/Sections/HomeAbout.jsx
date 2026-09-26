import { FadeIn } from "../Animation/FadeIn";
import { InlineLink } from "../UI/InlineLink";
import { ShieldCheck } from "lucide-react";
import { AlternatingCard } from "../UI/AlternatingCard";

export const HomeAbout = () => {
  return (
    <section className="bg-black py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black p-4 shadow-soft sm:p-6">
            <div
              className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full border border-white/20 sm:h-52 sm:w-52"
              style={{
                animation: "about-icon-float 5.5s ease-in-out infinite",
                backgroundImage: "url('/images/floating-copilot-icon.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div className="relative z-10 p-6 pt-16 sm:p-8 sm:pt-20">
              <h2 className="pl-12 text-3xl font-heading font-bold text-white sm:pl-16 sm:text-4xl">
                Security Built on Trust
              </h2>
              <p className="mt-6 text-sm leading-7 text-slate-100">
                FW82 Security Solutions Ltd was established to answer a clear need in Kenya&apos;s
                security landscape: dependable protection delivered with professionalism, discipline,
                and modern technology. From our early operations, we have grown into a trusted
                partner for businesses, institutions, and residential communities that expect
                consistency, accountability, and operational excellence.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-100">
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
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-white/40 bg-white/85 p-6 shadow-soft backdrop-blur sm:p-8">
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
                return (
                <AlternatingCard
                  key={item}
                  index={index}
                  tone="red-black"
                  icon={ShieldCheck}
                  iconSize="h-4 w-4"
                  className="px-4 py-3 text-xs font-semibold"
                >
                  <span>{item}</span>
                </AlternatingCard>
              );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
