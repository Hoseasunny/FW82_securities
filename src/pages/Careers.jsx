import { useEffect, useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { isRequired, isValidPhoneKenya } from "../utils/validators";
import { Button } from "../components/UI/Button";
import { SectionHeader } from "../components/UI/SectionHeader";
import { FormTrustBadges } from "../components/UI/FormTrustBadges";
import { Seo } from "../components/SEO/Seo";

const validators = {
  fullName: (value) => (isRequired(value) ? "" : "Full name is required"),
  phone: (value) => (isValidPhoneKenya(value) ? "" : "Use Kenyan format e.g. 0712345678"),
  idNumber: (value) => (isRequired(value) ? "" : "ID number is required"),
  position: (value) => (isRequired(value) ? "" : "Select a position"),
  consent: (value) => (value ? "" : "You must confirm the information is accurate")
};

const positions = [
  "Security Guard",
  "CCTV Technician",
  "Control Room Operator",
  "Security Supervisor"
];

export const Careers = () => {
  const [applications, setApplications] = useLocalStorage("fw82-applications", []);
  const [draft, setDraft] = useLocalStorage("fw82-application-draft", null);
  const [success, setSuccess] = useState(false);

  const { values, errors, handleChange, handleBlur, validateAll, setValues } = useFormValidation(
    draft || {
      fullName: "",
      phone: "",
      idNumber: "",
      position: "",
      experience: "",
      branch: "Nairobi",
      coverLetter: "",
      consent: false
    },
    validators
  );

  useEffect(() => {
    setDraft(values);
  }, [values, setDraft]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errs = validateAll();
    if (Object.keys(errs).length > 0) return;
    const payload = { ...values, submittedAt: new Date().toISOString() };
    setApplications([payload, ...applications]);
    setSuccess(true);
    setDraft(null);
    setValues({
      fullName: "",
      phone: "",
      idNumber: "",
      position: "",
      experience: "",
      branch: "Nairobi",
      coverLetter: "",
      consent: false
    });
  };

  return (
    <>
      <Seo
        title="Careers | FW82 Security"
        description="Join our team of security professionals serving Nairobi, Mombasa, Kisumu, and Eldoret."
        pathname="/careers"
      />
      <main>
        <section className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-heading font-bold">Careers at FW82</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Join our team of security professionals serving Nairobi, Mombasa, Kisumu, and Eldoret.
            </p>
          </div>
        </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader title="Current Openings" subtitle="We're Hiring" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate/10 p-4">
              <p className="font-semibold text-ink">Security Guards (20 positions)</p>
              <p className="text-sm text-slate">Nairobi, Mombasa, Kisumu</p>
            </div>
            <div className="rounded-2xl border border-slate/10 p-4">
              <p className="font-semibold text-ink">CCTV Technicians (5 positions)</p>
              <p className="text-sm text-slate">Nairobi</p>
            </div>
            <div className="rounded-2xl border border-slate/10 p-4">
              <p className="font-semibold text-ink">Control Room Operators (3 positions)</p>
              <p className="text-sm text-slate">Nairobi HQ</p>
            </div>
            <div className="rounded-2xl border border-slate/10 p-4">
              <p className="font-semibold text-ink">Security Supervisors (4 positions)</p>
              <p className="text-sm text-slate">All branches</p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-cloud p-8">
            <SectionHeader title="Application Form" subtitle="Apply" />
            <form onSubmit={handleSubmit} className="mt-6 grid gap-6">
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.fullName}
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus-ring ${
                    errors.fullName ? "border-alert" : "border-slate/20"
                  }`}
                />
                {errors.fullName && <span className="mt-1 block text-xs text-alert">{errors.fullName}</span>}
              </label>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="text-sm">
                  <span className="mb-2 block font-semibold text-ink">Phone Number</span>
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
                  <span className="mb-2 block font-semibold text-ink">ID Number</span>
                  <input
                    type="text"
                    name="idNumber"
                    value={values.idNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.idNumber}
                    className={`w-full rounded-xl border px-4 py-3 text-sm focus-ring ${
                      errors.idNumber ? "border-alert" : "border-slate/20"
                    }`}
                  />
                  {errors.idNumber && <span className="mt-1 block text-xs text-alert">{errors.idNumber}</span>}
                </label>
              </div>
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Position</span>
                <select
                  name="position"
                  value={values.position}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.position}
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus-ring ${
                    errors.position ? "border-alert" : "border-slate/20"
                  }`}
                >
                  <option value="">Select position</option>
                  {positions.map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
                {errors.position && <span className="mt-1 block text-xs text-alert">{errors.position}</span>}
              </label>
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Years of Experience</span>
                <input
                  type="number"
                  name="experience"
                  value={values.experience}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate/20 px-4 py-3 text-sm focus-ring"
                />
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="text-sm">
                  <span className="mb-2 block font-semibold text-ink">Branch Preference</span>
                  <div className="flex flex-wrap gap-3 text-xs">
                    {[
                      "Nairobi",
                      "Mombasa",
                      "Kisumu",
                      "Eldoret"
                    ].map((branch) => (
                      <label key={branch} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="branch"
                          value={branch}
                          checked={values.branch === branch}
                          onChange={handleChange}
                        />
                        {branch}
                      </label>
                    ))}
                  </div>
                </div>
                <label className="text-sm">
                  <span className="mb-2 block font-semibold text-ink">Upload CV</span>
                  <input
                    type="file"
                    onChange={(event) => console.log("Uploaded CV", event.target.files?.[0])}
                    className="w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-sm focus-ring"
                  />
                </label>
              </div>
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Cover Letter</span>
                <textarea
                  name="coverLetter"
                  rows="4"
                  value={values.coverLetter}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate/20 px-4 py-3 text-sm focus-ring"
                />
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="consent"
                  checked={values.consent}
                  onChange={handleChange}
                  aria-invalid={!!errors.consent}
                />
                <span>I confirm the information provided is accurate</span>
              </label>
              {errors.consent && <span className="text-xs text-alert">{errors.consent}</span>}
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
              <FormTrustBadges />
            </form>
          </div>
        </div>
      </section>

      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="rounded-3xl bg-white p-8 text-center shadow-lift">
            <p className="text-lg font-heading font-semibold text-ink">Application received!</p>
            <p className="mt-3 text-sm text-slate">
              Our HR team will contact you within 5 business days.
            </p>
            <Button className="mt-6" onClick={() => setSuccess(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
      </main>
    </>
  );
};
