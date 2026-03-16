import { useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { isRequired, isValidEmail } from "../../utils/validators";
import { SERVICE_INTERESTS } from "../../utils/constants";
import { Button } from "../UI/Button";
import { SectionHeader } from "../UI/SectionHeader";
import { FormTrustBadges } from "../UI/FormTrustBadges";

const validators = {
  name: (value) => (isRequired(value) ? "" : "Name is required"),
  email: (value) => (isValidEmail(value) ? "" : "Enter a valid email"),
  phone: (value) => (isRequired(value) ? "" : "Phone is required")
};

export const ContactForm = () => {
  const [success, setSuccess] = useState(false);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const errs = validateAll();
    if (Object.keys(errs).length > 0) return;
    const payload = { ...values, submittedAt: new Date().toISOString() };
    setInquiries([payload, ...inquiries]);
    setSuccess(true);
    setValues({ name: "", email: "", phone: "", service: "Guarding", message: "" });
    setTimeout(() => setSuccess(false), 3000);
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
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-soft">
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
          <Button type="submit" className="mt-6 w-full">
            Send Inquiry
          </Button>
          {success && (
            <p className="mt-4 text-xs font-semibold text-trust">
              Thank you for your inquiry. Our security consultant will contact you within 24 hours.
            </p>
          )}
          <FormTrustBadges />
        </form>
      </div>
    </section>
  );
};
