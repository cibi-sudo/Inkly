import { prisma } from "../client.js";

export const userDAL = {
  create: async (data: { email: string; password: string; name?: string }) => {
    return await prisma.user.create({ data });
  },

  getByEmail: async (email: string) => {
    return prisma.user.findUnique({ where: { email } });
  },

  getAll: async () => {
    return prisma.user.findMany();
  },
};
