import DOMPurify from "dompurify";

export const sanitizeInput = (value) => DOMPurify.sanitize(value ?? "");

export const isRequired = (value) => value !== undefined && value !== null && String(value).trim() !== "";

export const isValidEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).toLowerCase());

export const isValidPhoneKenya = (value) =>
  /^(\+254|0)7\d{8}$/.test(String(value).trim());

export const isValidUrl = (value) =>
  /^(https?:\/\/)/.test(String(value).trim());
