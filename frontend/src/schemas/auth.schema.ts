import * as yup from "yup";

import { BaseSchema } from "./base.schema";

const usernameSchema = BaseSchema.usernameSchema;
const passwordSchema = BaseSchema.passwordSchema;
const emailSchema = BaseSchema.emailSchema;

// Login schema
const loginSchema = yup.object({
  username: usernameSchema,
  password: passwordSchema,
});

// Register schema (with repeat_password)
const registerSchema = yup.object({
  username: usernameSchema,
  password: passwordSchema,
  email: emailSchema,
  repeat_password: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const AuthSchema = { loginSchema, registerSchema };
