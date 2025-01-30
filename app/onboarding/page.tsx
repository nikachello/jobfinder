import OnboardingForm from "@/components/forms/onboarding/OnboardingForm";
import React from "react";
import { requireUser } from "../utils/requireUser";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";

type Props = {};

const checkIfUserHasFinishedOnboarding = async (userId: string) => {
  "use server";
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      onBoardingCompleted: true,
    },
  });

  // if (user?.onBoardingCompleted === true) {
  //   return redirect("/");
  // }

  return user;
};

const Page = async (props: Props) => {
  const session = await requireUser();
  await checkIfUserHasFinishedOnboarding(session?.id as string);

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center gap-4 py-10 px-10">
      <OnboardingForm />
    </div>
  );
};

export default Page;
