import { z } from "zod";

export const RegisterFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password should be 8 carachters" }),
  confirmPassword: z.string().min(8, { message: "Password should be 8 carachters" }),
  firstName: z.string().min(2, { message: "First name should be at least 2 carachters" }),
  lastName: z.string().min(2, { message: "Last name should be at least 2 carachters" }),
}).refine(data => data.password === data.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] });

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;
