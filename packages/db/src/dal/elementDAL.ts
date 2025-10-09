import { prisma } from "../client.js";

export const elementDAL = {
  create: async (boardId: string, type: string, data: any) => {
    return prisma.element.create({ data: { boardId, type, data } });
  },

  update: async (id: string, data: any) => {
    return prisma.element.update({ where: { id }, data });
  },

  delete: async (id: string) => {
    return prisma.element.delete({ where: { id } });
  },

  getByBoardId: async (boardId: string) => {
    return prisma.element.findMany({ where: { boardId } });
  },
};
