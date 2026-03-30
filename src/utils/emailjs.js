import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const INQUIRY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_INQUIRY;
const CAREERS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_CAREERS;

let initialized = false;

const ensureConfigured = () => {
  if (!SERVICE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS is not configured. Missing service ID or public key.");
  }
};

const initEmailJs = () => {
  ensureConfigured();
  if (!initialized) {
    emailjs.init({ publicKey: PUBLIC_KEY });
    initialized = true;
  }
};

export const sendInquiryForm = (formElement) => {
  initEmailJs();
  if (!INQUIRY_TEMPLATE_ID) {
    throw new Error("EmailJS inquiry template ID is missing.");
  }
  return emailjs.sendForm(SERVICE_ID, INQUIRY_TEMPLATE_ID, formElement);
};

export const sendCareersForm = (formElement) => {
  initEmailJs();
  if (!CAREERS_TEMPLATE_ID) {
    throw new Error("EmailJS careers template ID is missing.");
  }
  return emailjs.sendForm(SERVICE_ID, CAREERS_TEMPLATE_ID, formElement);
};
