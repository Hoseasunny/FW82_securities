import { Button } from "../UI/Button";

export const CTASection = () => {
  return (
    <section className="pattern-dark bg-navy py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">Assessment First</p>
          <div className="mt-4 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
              <h2 className="text-3xl font-heading font-semibold md:text-4xl">
                Ready to secure your property?
          </h2>
              <p className="mt-3 max-w-2xl text-white/75">
                Get a free security assessment and a practical plan matched to your environment.
          </p>
        </div>
            <Button as="a" href="/contact" className="text-sm">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
