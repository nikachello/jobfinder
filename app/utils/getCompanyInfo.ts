import { redirect } from "next/navigation";
import { prisma } from "./db";

export const getCompanyInfo = async (userId: string) => {
  if (!userId) {
    console.log("No userId provided");
    return null;
  }

  try {
    const company = await prisma.company.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!company) {
      console.log(`No company found for userId: ${userId}`);
      return redirect("/");
    }

    return company;
  } catch (error) {
    console.error("Error fetching company:", error);
    return null;
  }
};
