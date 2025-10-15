export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // ✅ Removed unnecessary escape for '+'
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength;
};

export const validateMaxLength = (value, maxLength) => {
  return value && value.length <= maxLength;
};

export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const value = formData[field];
    const fieldRules = rules[field];

    if (fieldRules.required && !validateRequired(value)) {
      errors[field] = `${field} is required`;
    }

    if (fieldRules.email && !validateEmail(value)) {
      errors[field] = 'Invalid email format';
    }

    if (fieldRules.phone && !validatePhone(value)) {
      errors[field] = 'Invalid phone number format';
    }

    if (fieldRules.minLength && !validateMinLength(value, fieldRules.minLength)) {
      errors[field] = `Minimum ${fieldRules.minLength} characters required`;
    }

    if (fieldRules.maxLength && !validateMaxLength(value, fieldRules.maxLength)) {
      errors[field] = `Maximum ${fieldRules.maxLength} characters allowed`;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
