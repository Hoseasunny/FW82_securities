import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "../Animation/FadeIn";
import { SectionHeader } from "../UI/SectionHeader";
import { Card } from "../UI/Card";

export const faqItems = [
  {
    question: "What security services do you provide?",
    answer:
      "We deliver guarding services, mobile response coordination, CCTV and alarm monitoring, access control, and event security. Each engagement is built around a tailored risk assessment so that coverage matches the client's site profile and operational requirements."
  },
  {
    question: "How quickly can you deploy guards or response teams?",
    answer:
      "Deployment timelines depend on site complexity and staffing requirements. For urgent needs, we can mobilize trained personnel within short lead times while finalizing post orders, reporting protocols, and escalation procedures."
  },
  {
    question: "How do you ensure professionalism on site?",
    answer:
      "Every officer is vetted, trained, and supervised under clear standards of conduct. We run continuous training on customer service, incident response, and compliance, supported by field supervisors and transparent reporting."
  },
  {
    question: "Do you integrate technology with physical security?",
    answer:
      "Yes. We combine on-site protection with surveillance technology, access control systems, and incident reporting tools to provide real-time visibility and faster decision-making for clients."
  },
  {
    question: "Can services be customized for different industries?",
    answer:
      "Absolutely. We design security plans for commercial sites, schools, hospitals, residential estates, construction projects, and events. Each plan is tailored to operational hours, traffic patterns, and unique risk factors."
  },
  {
    question: "How do you work with local authorities and communities?",
    answer:
      "We maintain professional relationships with local authorities and community partners to support rapid coordination during incidents and to strengthen public safety awareness across our operational areas."
  }
];

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
