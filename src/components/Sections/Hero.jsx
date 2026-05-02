import { motion } from "framer-motion";
import { TrustBadge } from "../UI/TrustBadge";
import { Button } from "../UI/Button";
import { TRUST_BADGES } from "../../utils/constants";
import { buildImageSet } from "../../utils/imageGenerator";
import { Link } from "react-router-dom";

const heroImage = buildImageSet(
  "FW82 Hero",
  "Professional African security guard in formal navy blue uniform with gold accents, standing in modern Nairobi business district at dusk, city lights bokeh background, cinematic lighting, corporate photography style",
  "hero/hero-1"
);

export const Hero = () => {
  const highlights = [
    { label: "Response", value: "24/7" },
    { label: "Counties Served", value: "4+" },
    { label: "Service Coverage", value: "End-to-End" }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          srcSet={heroImage.srcSet}
          alt="Professional security guard in Nairobi business district"
          className="h-full w-full object-cover"
          decoding="async"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-20 pt-32 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="inline-flex w-fit rounded-full border border-gold/50 bg-gold/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            PSRA-Licensed Protection Partner
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-text-shadow mt-5 max-w-4xl text-4xl font-heading font-bold leading-tight md:text-6xl"
          >
            Trusted Security. Rapid Response.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-white/80"
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
              <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-2xl font-heading font-bold text-white">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">{item.label}</p>
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
            className="hero-split-image h-[460px] w-full object-cover sm:h-[560px] lg:h-[640px]"
            loading="eager"
            decoding="async"
          />
          <div className="hero-split-border" aria-hidden="true" />
        </motion.figure>
      </div>
    </section>
  );
};
