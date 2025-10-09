import { prisma } from "../client.js";

export const boardDAL = {
  create: async (ownerId: string, title: string) => {
    return prisma.board.create({ data: { ownerId, title } });
  },

  getById: async (id: string) => {
    return prisma.board.findUnique({
      where: { id },
      include: { elements: true },
    });
  },

  getUserBoards: async (userId: string) => {
    return prisma.board.findMany({ where: { ownerId: userId } });
  },
};
