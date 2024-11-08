import { z } from "zod";

// export const registerSchema = z.object({
//   name: z
//     .string()
//     .min(1, { message: "Name can't be empty" })
//     .max(20, { message: "Name can be maximum 20 characters long" }),
//   email: z.string().email({ message: "Invalid email address" }),
//   mobileNumber: z
//     .string()
//     .min(11, { message: "Number can be minimum 11 characters long" })
//     .max(11, { message: "Number can be maximum 11 characters long" }),
//   password: z
//     .string()
//     .min(6, { message: "Password must be at least 6 characters long" }),
// });

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name can't be empty" })
    .max(20, { message: "Name can be maximum 20 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  mobileNumber: z
    .string()
    .length(11, { message: "Number must be exactly 11 characters long" })
    .regex(/^\d+$/, { message: "Number must contain only digits" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
