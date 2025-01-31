import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";
import { auth, signOut } from "@/app/utils/auth";
import UserDropdown from "./UserDropdown";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await auth();
  return (
    <nav className="flex items-center justify-between py-5">
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5">
        <ThemeToggle />
        <Link className={buttonVariants({ size: "lg" })} href="/post-job">
          დაამატე ვაკანსია
        </Link>
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
