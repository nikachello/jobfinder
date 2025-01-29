"use client";
import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

type Props = {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  classname?: string;
  icon?: React.ReactNode;
};

const GeneralSubmitButton = ({ text, variant, classname, icon }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button variant={variant} className={classname} disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>დაელოდეთ</span>
        </>
      ) : (
        <>
          {icon && <div>{icon}</div>}
          <span>{text}</span>
        </>
      )}
    </Button>
  );
};

export default GeneralSubmitButton;
