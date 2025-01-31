"use server";
import React from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { requireUser } from "@/app/utils/requireUser";
import { getUserType } from "@/app/utils/getUserType";

const PostJobButton = async () => {
  const user = await requireUser();
  const userType = await getUserType(user?.id as string);
  if (user && userType === "COMPANY") {
    return (
      <Link className={buttonVariants({ size: "lg" })} href="/post-job">
        დაამატე ვაკანსია
      </Link>
    );
  } else {
    return "";
  }
};

export default PostJobButton;
