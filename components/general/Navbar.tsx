import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Logo job finder" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Finder</span>
        </h1>
      </Link>
      <div className="flex gap-2 items-center ">
        <ThemeToggle />
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
