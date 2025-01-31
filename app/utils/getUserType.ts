import { prisma } from "./db";

export const getUserType = async (userId?: string) => {
  if (!userId) return null;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      userType: true,
    },
  });

  return user!.userType;
};
