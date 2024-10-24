import { z } from "zod";

export const LogInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password should be 8 carachters" }),
});

export type LogInFormType = z.infer<typeof LogInFormSchema>;
