import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "@/public/logo.png";

type Props = {
  classname?: string;
};

const Logo = ({ classname }: Props) => {
  return (
    <Link href="/" className={`flex items-center gap-2 ${classname}`}>
      <Image src={LogoImage} alt="Logo job finder" width={40} height={40} />
      <h1 className="text-2xl font-bold">
        Job<span className="text-primary">Finder</span>
      </h1>
    </Link>
  );
};

export default Logo;
