import { useState } from "react";
import { sanitizeInput } from "../utils/validators";

export const useFormValidation = (initialValues, validators = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const validator = validators[name];
    if (!validator) return "";
    return validator(value) || "";
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const sanitized = type === "checkbox" ? checked : sanitizeInput(value);
    setValues((prev) => ({ ...prev, [name]: sanitized }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, sanitized) }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const sanitized = sanitizeInput(value);
    setErrors((prev) => ({ ...prev, [name]: validateField(name, sanitized) }));
  };

  const validateAll = () => {
    const nextErrors = Object.keys(validators).reduce((acc, key) => {
      const error = validateField(key, values[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});
    setErrors(nextErrors);
    return nextErrors;
  };

  return {
    values,
    setValues,
    errors,
    handleChange,
    handleBlur,
    validateAll
  };
};
