import { useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { isRequired, isValidEmail } from "../utils/validators";
import { BRANCH_CONTACTS, COMPANY, SERVICE_INTERESTS, SOCIALS } from "../utils/constants";
import { Button } from "../components/UI/Button";
import { SectionHeader } from "../components/UI/SectionHeader";
import { FormTrustBadges } from "../components/UI/FormTrustBadges";
import { Facebook, Mail, Phone, MessageCircle } from "lucide-react";
import { Seo } from "../components/SEO/Seo";

const validators = {
  name: (value) => (isRequired(value) ? "" : "Name is required"),
  email: (value) => (isValidEmail(value) ? "" : "Enter a valid email"),
  phone: (value) => (isRequired(value) ? "" : "Phone is required")
};

export const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [inquiries, setInquiries] = useLocalStorage("fw82-inquiries", []);
  const { values, errors, handleChange, handleBlur, validateAll, setValues } = useFormValidation(
    {
      name: "",
      email: "",
      phone: "",
      services: [],
      location: "",
      message: "",
      preferred: "Phone"
    },
    validators
  );

  const toggleService = (service) => {
    setValues((prev) => {
      const exists = prev.services.includes(service);
      const next = exists ? prev.services.filter((item) => item !== service) : [...prev.services, service];
      return { ...prev, services: next };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errs = validateAll();
    if (Object.keys(errs).length > 0) return;
    const payload = { ...values, submittedAt: new Date().toISOString() };
    setInquiries([payload, ...inquiries]);
    setSuccess(true);
    setValues({
      name: "",
      email: "",
      phone: "",
      services: [],
      location: "",
      message: "",
      preferred: "Phone"
    });
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <>
      <Seo
        title="Contact FW82 Security | Get in Touch"
        description="Reach our team in Nairobi or any branch across Kenya. Emergency line is available 24/7."
        pathname="/contact"
      />
      <main>
        <section className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-heading font-bold">Contact FW82</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Reach our team in Nairobi or any branch across Kenya. Emergency line is available 24/7.
            </p>
          </div>
        </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-alert/40 bg-alert/10 p-6 text-center">
            <p className="text-sm font-semibold text-alert">24/7 Emergency Line: +254 799 491929</p>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <SectionHeader title="Branch Contacts" subtitle="Locations" />
            <div className="grid gap-4">
              {BRANCH_CONTACTS.map((branch) => (
                <div key={branch.city} className="rounded-2xl bg-white p-5 shadow-soft">
                  <p className="text-sm font-semibold text-ink">{branch.city}</p>
                  <p className="text-xs text-slate">{branch.address}</p>
                  <p className="text-xs text-slate">{branch.phone}</p>
                  <p className="text-xs text-slate">{branch.email}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <SectionHeader title="Connect With Us" subtitle="Social" />
              <div className="mt-4 grid gap-3">
                <a
                  href={SOCIALS.find((item) => item.label === "Facebook")?.href || "https://www.facebook.com"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate/10 px-4 py-3 text-sm text-slate transition hover:border-gold hover:text-ink"
                >
                  <Facebook className="h-5 w-5 text-gold" />
                  Facebook
                </a>
                <a
                  href={`mailto:${COMPANY.emailSecondary}`}
                  className="flex items-center gap-3 rounded-2xl border border-slate/10 px-4 py-3 text-sm text-slate transition hover:border-gold hover:text-ink"
                >
                  <Mail className="h-5 w-5 text-gold" />
                  {COMPANY.emailSecondary}
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 rounded-2xl border border-slate/10 px-4 py-3 text-sm text-slate transition hover:border-gold hover:text-ink"
                >
                  <Phone className="h-5 w-5 text-gold" />
                  {COMPANY.phone}
                </a>
                <a
                  href={`https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate/10 px-4 py-3 text-sm text-slate transition hover:border-gold hover:text-ink"
                >
                  <MessageCircle className="h-5 w-5 text-gold" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate/10">
              <iframe
                title="Nairobi map"
                src="https://www.google.com/maps?q=-1.2921,36.8219&z=14&output=embed"
                className="h-72 w-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <SectionHeader title="Send an Inquiry" subtitle="Form" />
            <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Name</span>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.name}
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus-ring ${
                    errors.name ? "border-alert" : "border-slate/20"
                  }`}
                />
                {errors.name && <span className="mt-1 block text-xs text-alert">{errors.name}</span>}
              </label>
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Email</span>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.email}
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus-ring ${
                    errors.email ? "border-alert" : "border-slate/20"
                  }`}
                />
                {errors.email && <span className="mt-1 block text-xs text-alert">{errors.email}</span>}
              </label>
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.phone}
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus-ring ${
                    errors.phone ? "border-alert" : "border-slate/20"
                  }`}
                />
                {errors.phone && <span className="mt-1 block text-xs text-alert">{errors.phone}</span>}
              </label>
              <div>
                <span className="mb-2 block text-sm font-semibold text-ink">Service Interest</span>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_INTERESTS.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide ${
                        values.services.includes(service)
                          ? "bg-gold text-navy"
                          : "border border-slate/20 text-slate"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Property Location</span>
                <input
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate/20 px-4 py-3 text-sm focus-ring"
                />
              </label>
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Message</span>
                <textarea
                  name="message"
                  rows="4"
                  value={values.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate/20 px-4 py-3 text-sm focus-ring"
                />
              </label>
              <div className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Preferred Contact Method</span>
                <div className="flex gap-4 text-xs">
                  {["Phone", "Email", "WhatsApp"].map((method) => (
                    <label key={method} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferred"
                        value={method}
                        checked={values.preferred === method}
                        onChange={handleChange}
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>
              <Button type="submit" className="w-full">
                Submit Inquiry
              </Button>
              {success && (
                <p className="text-xs font-semibold text-trust">
                  Thank you for your inquiry. Our security consultant will contact you within 24 hours.
                </p>
              )}
              <FormTrustBadges />
            </form>
          </div>
        </div>
      </section>
      </main>
    </>
  );
};
