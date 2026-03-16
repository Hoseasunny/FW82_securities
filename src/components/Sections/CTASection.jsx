import { Button } from "../UI/Button";

export const CTASection = () => {
  return (
    <section className="pattern-dark bg-navy py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-3xl font-heading font-semibold md:text-4xl">
            Need Professional Security Services?
          </h2>
          <p className="mt-3 text-white/70">
            Schedule a tailored security assessment for your property or event.
          </p>
        </div>
        <Button as="a" href="/contact" className="text-sm">
          Request Security Assessment
        </Button>
      </div>
    </section>
  );
};
