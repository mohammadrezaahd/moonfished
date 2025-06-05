import * as yup from "yup";

const usernameSchema = yup
  .string()
  .required("Username is required")
  .min(3, "Username must be at least 3 characters");

const passwordSchema = yup
  .string()
  .required("Password is required")
  .min(6, "Password must be at least 6 characters");

const emailSchema = yup
  .string()
  .required("Email is required")
  .email("Email must be a valid email");

export const BaseSchema = { usernameSchema, passwordSchema, emailSchema };
