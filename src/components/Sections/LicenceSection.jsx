import { useEffect, useRef, useState } from "react";
import { ExternalLink, FileCheck2, ShieldCheck, X } from "lucide-react";
import { Button } from "../UI/Button";

const licenceUrl = "/documents/fw82-psra-licence-2026.pdf";

export const LicenceSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen]);

  return (
    <section className="bg-white py-20" aria-labelledby="licence-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Licensing &amp; compliance</p>
            <h2 id="licence-heading" className="mt-3 text-3xl font-heading font-semibold text-ink md:text-4xl">
              Licensed &amp; certified
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate">
              FW82 Security Solutions Ltd is a licensed private security service provider regulated by the Private Security Regulatory Authority (PSRA).
            </p>
            <a
              href="https://www.psra.go.ke/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-alert underline underline-offset-2"
            >
              Verify licence through PSRA
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-soft sm:grid-cols-[180px_1fr] sm:p-8">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-cloud">
              <iframe
                title="FW82 PSRA Annual Licence Renewal Certificate 2026 preview"
                src={`${licenceUrl}#page=1&view=FitH`}
                className="h-56 w-full sm:h-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">PSRA licence - 2026</p>
                  <h3 className="mt-2 text-xl font-heading font-semibold text-ink">Annual Licence Renewal</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate">Licensed Private Security Service Provider</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button type="button" onClick={() => setIsOpen(true)} className="text-xs">
                  <FileCheck2 className="h-4 w-4" aria-hidden="true" />
                  View certificate
                </Button>
                <a
                  href={licenceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border-2 border-navy px-4 py-3 text-xs font-heading font-semibold uppercase tracking-wide text-navy"
                >
                  Open original
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div className="relative flex h-[min(90vh,60rem)] max-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-lift" role="dialog" aria-modal="true" aria-labelledby="licence-modal-title">
            <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-5 py-4">
              <h2 id="licence-modal-title" className="font-heading text-lg font-semibold text-ink">PSRA Licence - 2026</h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-navy hover:bg-navy-50"
                aria-label="Close certificate viewer"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <iframe
              title="FW82 Security Solutions Limited PSRA Annual Licence Renewal Certificate 2026"
              src={`${licenceUrl}#page=1&view=FitH`}
              className="min-h-0 w-full flex-1"
            />
            <div className="flex justify-end border-t border-gray-200 px-5 py-4">
              <a href={licenceUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-alert underline underline-offset-2">
                Open original document
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};