import { prisma } from "../client.js";

export const collaboratorDAL = {
  create: async (
    boardId: string,
    userId: string,
    role: "viewer" | "editor" | "owner",
  ) => {
    return prisma.collaborator.create({
      data: { boardId, userId, role },
    });
  },

  update: async (id: string, role: "viewer" | "editor" | "owner") => {
    return prisma.collaborator.update({
      where: { id },
      data: { role },
    });
  },

  delete: async (id: string) => {
    return prisma.collaborator.delete({ where: { id } });
  },

  getByBoardId: async (boardId: string) => {
    return prisma.collaborator.findMany({
      where: { boardId },
      include: { user: true }, // include user info
    });
  },
};
