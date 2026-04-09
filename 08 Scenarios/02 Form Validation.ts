/*
Scenario: Form Validation

Real-world problem:
You receive raw form data (strings from inputs) and must validate it
before using it in the application. Without types, errors sneak through.

Goal: Define typed form data, validate it, and collect errors in a
structured way  the pattern used in React Hook Form, Formik, etc.
*/

//  FORM DATA TYPES 
interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
}

// Generic validation error map  keys match form field names
type FormErrors<T> = Partial<Record<keyof T, string>>;

// Validation result
interface ValidationResult<T> {
  isValid: boolean;
  errors: FormErrors<T>;
  data: T | null;
}

//  VALIDATORS 
const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isStrongPassword = (password: string): boolean =>
  password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);

//  VALIDATION FUNCTION 
function validateRegisterForm(raw: RegisterFormData): ValidationResult<RegisterFormData> {
  const errors: FormErrors<RegisterFormData> = {};

  if (!raw.username || raw.username.trim().length < 3) {
    errors.username = "Username must be at least 3 characters";
  }

  if (!isValidEmail(raw.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!isStrongPassword(raw.password)) {
    errors.password = "Password must be 8+ chars with a capital letter and a number";
  }

  if (raw.password !== raw.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (raw.age < 18) {
    errors.age = "You must be at least 18 years old";
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors, data: isValid ? raw : null };
}

//  USAGE 
const formInput: RegisterFormData = {
  username: "alice",
  email: "alice@example.com",
  password: "Secret123",
  confirmPassword: "Secret123",
  age: 25,
};

const result = validateRegisterForm(formInput);

if (result.isValid && result.data) {
  console.log("Form is valid! Proceeding with:", result.data.username);
} else {
  console.log("Validation errors:");
  for (const [field, message] of Object.entries(result.errors)) {
    console.log(`  ${field}: ${message}`);
  }
}

// Try invalid data
const badInput: RegisterFormData = {
  username: "ab",
  email: "not-an-email",
  password: "weak",
  confirmPassword: "different",
  age: 15,
};

const badResult = validateRegisterForm(badInput);
console.log("\nBad form errors:", badResult.errors);
