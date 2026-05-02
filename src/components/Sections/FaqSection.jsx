import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "../Animation/FadeIn";
import { SectionHeader } from "../UI/SectionHeader";
import { Card } from "../UI/Card";
import { faqItems } from "../../data/faqItems";

export const FaqSection = ({ items = faqItems, className = "", title = "Frequently Asked Questions", subtitle = "FAQs" }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`bg-white py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader title={title} subtitle={subtitle} align="center" />
        </FadeIn>
        <div className="mt-10 grid gap-4">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <FadeIn key={item.question} delay={0.05 * index}>
                <Card className="border border-slate/10 bg-white shadow-soft">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-ink">{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-cloud text-ink"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm leading-7 text-slate">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
