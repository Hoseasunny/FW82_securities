import { motion } from "framer-motion";
import { TrustBadge } from "../UI/TrustBadge";
import { Button } from "../UI/Button";
import { MagneticButton } from "../UI/MagneticButton";
import { TRUST_BADGES } from "../../utils/constants";
import { Link } from "react-router-dom";

export const Hero = () => {
  const highlights = [
    { label: "Response", value: "24/7" },
    { label: "Counties Served", value: "4+" },
    { label: "Service Coverage", value: "End-to-End" }
  ];
  const words = "Security without compromise.".split(" ");
  const stagger = {
    hidden: {},
    visible: { transition: { delayChildren: 0.16, staggerChildren: 0.09 } }
  };
  const wordReveal = {
    hidden: { opacity: 0, y: "110%", filter: "blur(8px)" },
    visible: { opacity: 1, y: "0%", filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 18 } }
  };

  return (
    <section className="hero-section relative min-h-screen overflow-hidden bg-transparent text-ink">
      <div className="hero-aurora" aria-hidden="true" />
      <span className="sr-only">Professional security guard in Nairobi business district</span>
      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-20 pt-32 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="inline-flex rounded-full border border-red-100 bg-white/75 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-800 shadow-soft backdrop-blur-xl"
          >
            Professional security - Kenya
          </motion.p>
          <motion.h1
            variants={stagger}
            initial="hidden"
            animate="visible"
            aria-label="Security without compromise."
            className="mt-5 max-w-4xl text-4xl font-heading font-bold leading-tight md:text-6xl"
          >
            {words.map((word, index) => (
              <span key={`${word}-${index}`} className="mr-[0.22em] inline-block overflow-hidden align-bottom pb-[0.08em]">
                <motion.span variants={wordReveal} className="inline-block" aria-hidden="true">{word}</motion.span>
              </span>
            ))}
          </motion.h1>
          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-navy to-red-700" aria-hidden="true" />
          <motion.p
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.45 }}
            className="mt-6 max-w-2xl text-lg text-slate"
          >
            Professional protection for businesses, homes, and events across Kenya.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.62 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Button as="a" href="#contact" className="text-sm">
                Request a Quote
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button as={Link} to="/services" variant="secondary" className="text-sm">
                View Service Lines
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.78 }}
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
          initial={{ opacity: 0, y: 22, scale: 0.98, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.4 }}
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
