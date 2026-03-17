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
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-20 pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl text-4xl font-heading font-bold leading-tight md:text-6xl"
        >
          Where Security Meets Trust
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          Modern Security Solutions for Businesses & Homes Across Kenya
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
            Explore Services
          </Button>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-3">
          {TRUST_BADGES.map((badge) => (
            <TrustBadge key={badge} label={`? ${badge}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
