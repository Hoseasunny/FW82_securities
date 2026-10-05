import { motion } from "framer-motion";
import { TrustBadge } from "../UI/TrustBadge";
import { Button } from "../UI/Button";
import { TRUST_BADGES } from "../../utils/constants";
import { Link } from "react-router-dom";

export const Hero = () => {
  const highlights = [
    { label: "Response", value: "24/7" },
    { label: "Counties Served", value: "4+" },
    { label: "Service Coverage", value: "End-to-End" }
  ];

  return (
    <section className="hero-section relative min-h-screen overflow-hidden bg-transparent text-ink">
      <div className="hero-aurora" aria-hidden="true" />
      <span className="sr-only">Professional security guard in Nairobi business district</span>
      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-20 pt-32 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Professional security - Kenya</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-4xl text-4xl font-heading font-bold leading-tight md:text-6xl"
          >
            Security without compromise.
          </motion.h1>
          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" aria-hidden="true" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-slate"
          >
            Professional protection for businesses, homes, and events across Kenya.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button as="a" href="#contact" className="text-sm">
              Request a Quote
            </Button>
            <Button as={Link} to="/services" variant="secondary" className="text-sm">
              View Service Lines
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10 grid gap-3 sm:grid-cols-3"
          >
            {highlights.map((item) => (
              <div key={item.label} className="glass-card rounded-2xl px-4 py-3">
                <p className="text-2xl font-heading font-bold text-ink">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate">{item.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {TRUST_BADGES.map((badge) => (
              <TrustBadge key={badge} label={badge} />
            ))}
          </div>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="hero-split-media mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="hero-shape-layer hero-shape-layer-a" aria-hidden="true" />
          <div className="hero-shape-layer hero-shape-layer-b" aria-hidden="true" />
          <img
            src="/images/hero/hero-guard-feature.png"
            alt="Security officer welcoming clients"
            className="hero-split-image h-115 w-full object-cover sm:h-140 lg:h-160"
            loading="eager"
            decoding="async"
          />
          <div className="hero-split-border" aria-hidden="true" />
        </motion.figure>
      </div>
    </section>
  );
};
