import { Link } from "react-router-dom";
import { Seo } from "../components/SEO/Seo";
import { Button } from "../components/UI/Button";

export const NotFound = () => {
  return (
    <>
      <Seo
        title="Page Not Found | FW82 Security Solution Ltd"
        description="The page you are looking for does not exist. Return to FW82 Security Solution homepage."
        pathname="/404"
      />
      <main className="bg-cloud py-24">
        <section className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Error 404</p>
          <h1 className="mt-4 text-4xl font-heading font-bold text-navy md:text-5xl">Page Not Found</h1>
          <p className="mt-5 text-base leading-7 text-slate">
            The page may have been moved or the URL might be incorrect.
          </p>
          <div className="mt-10">
            <Button as={Link} to="/">
              Back to Home
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};
