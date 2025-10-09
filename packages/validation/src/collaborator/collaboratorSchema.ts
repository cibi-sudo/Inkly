import { z } from "zod";

export const collaboratorCreateSchema = z.object({
  boardId: z.uuid("Invalid board ID"),
  userId: z.uuid("Invalid user ID"),
  role: z.enum(["owner", "editor", "viewer"]).default("editor"),
});

export const collaboratorUpdateSchema = z.object({
  id: z.uuid("Collaborator ID required"),
  role: z.enum(["owner", "editor", "viewer"]).optional(),
});

export const collaboratorDeleteSchema = z.object({
  id: z.uuid("Collaborator ID required"),
});

export type CollaboratorCreateInput = z.infer<typeof collaboratorCreateSchema>;
export type CollaboratorUpdateInput = z.infer<typeof collaboratorUpdateSchema>;
export type CollaboratorDeleteInput = z.infer<typeof collaboratorDeleteSchema>;
