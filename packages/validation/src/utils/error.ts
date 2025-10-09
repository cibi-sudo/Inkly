import { z } from "zod";

export const apiErrorSchema = z.object({
  status: z.enum(["error", "fail"]),
  message: z.string(),
  code: z.number().optional(),
});

export type ApiErrorResponse = z.infer<typeof apiErrorSchema>;
