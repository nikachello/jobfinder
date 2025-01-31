import LoginForm from "@/components/forms/LoginForm";
import Logo from "@/components/general/Logo";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Logo classname="self-center" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
