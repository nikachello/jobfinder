import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";
import { auth } from "@/app/utils/auth";
import UserDropdown from "./UserDropdown";
import { getUserType } from "@/app/utils/getUserType";

const Navbar = async () => {
  const session = await auth();
  const userType = await getUserType(session?.user?.id as string);
  return (
    <nav className="flex items-center justify-between py-5">
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5">
        <ThemeToggle />
        {userType === "COMPANY" && session?.user && (
          <Link className={buttonVariants({ size: "lg" })} href="/post-job">
            დაამატე ვაკანსია
          </Link>
        )}

        {session?.user ? (
          <UserDropdown
            name={session.user.name as string}
            email={session.user.email as string}
            image={session.user.image as string}
          />
        ) : (
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            შესვლა
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
