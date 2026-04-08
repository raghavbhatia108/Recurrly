export type ValidationErrors = Record<string, string>;

export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }

  return undefined;
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }

  // Check for at least one uppercase, one lowercase, and one number
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  if (!hasUpperCase || !hasLowerCase || !hasNumber) {
    return "Password must contain uppercase, lowercase, and numbers";
  }

  return undefined;
};

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string,
): string | undefined => {
  if (!confirmPassword) {
    return "Please confirm your password";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  return undefined;
};

export const validateName = (
  name: string,
  fieldName: string,
): string | undefined => {
  if (!name.trim()) {
    return `${fieldName} is required`;
  }

  if (name.trim().length < 2) {
    return `${fieldName} must be at least 2 characters`;
  }

  return undefined;
};

export const validateSignInForm = (
  email: string,
  password: string,
): ValidationErrors => {
  const errors: ValidationErrors = {};

  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  if (!password) {
    errors.password = "Password is required";
  }

  return errors;
};

export const validateSignUpForm = (
  email: string,
  password: string,
  confirmPassword: string,
  firstName: string,
  lastName: string,
): ValidationErrors => {
  const errors: ValidationErrors = {};

  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  const passwordError = validatePassword(password);
  if (passwordError) errors.password = passwordError;

  const matchError = validatePasswordMatch(password, confirmPassword);
  if (matchError) errors.confirmPassword = matchError;

  const firstNameError = validateName(firstName, "First name");
  if (firstNameError) errors.firstName = firstNameError;

  const lastNameError = validateName(lastName, "Last name");
  if (lastNameError) errors.lastName = lastNameError;

  return errors;
};
