import { z } from "zod";

export const userSignupSchema = z.object({
  email: z.email(),
  name: z.string().min(4).optional(),
  password: z.string().min(8),
});

export const userLoginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type userSignupInput = z.infer<typeof userSignupSchema>;
export type userLoginInput = z.infer<typeof userLoginSchema>;
