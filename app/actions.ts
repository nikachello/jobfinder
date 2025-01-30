"use server";

import { z } from "zod";
import { companySchema } from "./utils/zodSchemas";
import { prisma } from "./utils/db";
import { requireUser } from "./utils/requireUser";
import { redirect } from "next/navigation";

export const createCompany = async (data: z.infer<typeof companySchema>) => {
  const session = await requireUser();
  console.log("daechira createCompany");

  const validateData = companySchema.parse(data);

  await prisma.user.update({
    where: {
      id: session!.id,
    },
    data: {
      onBoardingCompleted: true,
      userType: "COMPANY",
      Company: {
        create: {
          ...validateData,
        },
      },
    },
  });

  return redirect("/");
};
