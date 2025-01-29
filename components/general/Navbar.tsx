import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";
import { auth, signOut } from "@/app/utils/auth";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await auth();
  return (
    <nav className="flex items-center justify-between py-5">
      <Logo />
      <div className="flex gap-2 items-center ">
        <ThemeToggle />
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            {" "}
            <Button variant={"outline"}>გასვლა</Button>
          </form>
        ) : (
          <Link className={buttonVariants({ variant: "outline" })} href="login">
            შესვლა
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
