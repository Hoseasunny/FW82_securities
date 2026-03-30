import { useRef, useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { isRequired, isValidEmail } from "../../utils/validators";
import { sendInquiryForm } from "../../utils/emailjs";
import { SERVICE_INTERESTS, SOCIALS } from "../../utils/constants";
import { Button } from "../UI/Button";
import { SectionHeader } from "../UI/SectionHeader";
import { FormTrustBadges } from "../UI/FormTrustBadges";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const validators = {
  name: (value) => (isRequired(value) ? "" : "Name is required"),
  email: (value) => (isValidEmail(value) ? "" : "Enter a valid email"),
  phone: (value) => (isRequired(value) ? "" : "Phone is required")
};

export const ContactForm = () => {
  const socialIcons = {
    LinkedIn: Linkedin,
    Facebook,
    X: Twitter
  };

  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [inquiries, setInquiries] = useLocalStorage("fw82-inquiries", []);
  const { values, errors, handleChange, handleBlur, validateAll, setValues } = useFormValidation(
    {
      name: "",
      email: "",
      phone: "",
      service: "Guarding",
      message: ""
    },
    validators
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errs = validateAll();
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    setError("");
    const payload = { ...values, submittedAt: new Date().toISOString() };
    try {
      await sendInquiryForm(formRef.current);
      setInquiries([payload, ...inquiries]);
      setSuccess(true);
      setValues({ name: "", email: "", phone: "", service: "Guarding", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("We could not send your inquiry right now. Please try again shortly.");
      console.error("EmailJS inquiry error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-cloud py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
        <div>
          <SectionHeader title="Request a Quote" subtitle="Contact" />
          <p className="mt-4 text-sm text-slate">
            Share your security requirements and a consultant will respond within 24 hours.
          </p>
          <div className="mt-6 rounded-2xl border border-gold/20 bg-white p-6 text-sm">
            <p className="font-semibold text-ink">24/7 Emergency Line</p>
            <p className="mt-2 text-lg font-heading font-bold text-alert">+254 799 491929</p>
          </div>
          <div className="mt-6 rounded-2xl border border-slate/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Connect With Us</p>
            <p className="mt-3 text-sm text-slate">
              Stay updated with our latest deployments, community initiatives, and security insights.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {SOCIALS.map((social) => {
                const Icon = socialIcons[social.label] || Linkedin;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center gap-2 rounded-2xl border border-slate/10 bg-cloud px-4 py-3 text-xs font-semibold uppercase tracking-wide text-ink transition hover:-translate-y-0.5 hover:border-gold hover:bg-white"
                  >
                    <Icon className="h-4 w-4 text-gold" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-soft">
          <input type="hidden" name="submitted_at" value={new Date().toISOString()} readOnly />
          <input type="hidden" name="services" value={values.service} readOnly />
          <div className="grid gap-4">
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
            <label className="text-sm">
              <span className="mb-2 block font-semibold text-ink">Service Interest</span>
              <select
                name="service"
                value={values.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate/20 px-4 py-3 text-sm focus-ring"
              >
                {SERVICE_INTERESTS.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
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
          </div>
          <Button type="submit" className="mt-6 w-full" disabled={submitting}>
            {submitting ? "Sending..." : "Send Inquiry"}
          </Button>
          {success && (
            <p className="mt-4 text-xs font-semibold text-trust">
              Thank you for your inquiry. Our security consultant will contact you within 24 hours.
            </p>
          )}
          {error && <p className="mt-4 text-xs font-semibold text-alert">{error}</p>}
          <FormTrustBadges />
        </form>
      </div>
    </section>
  );
};
