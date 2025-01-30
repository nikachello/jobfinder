import { UserSelectionType } from "@/app/utils/types";
import { Button } from "@/components/ui/button";
import { Building2, UserRound } from "lucide-react";
import React from "react";

type Props = { onSelect: (type: UserSelectionType) => void };

const UserTypeSelection = ({ onSelect }: Props) => {
  return (
    <div className="space-y-3">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">მოგესალმებით!</h2>
        <p className="text-muted-foreground text-sm">
          როგორ აპირებთ ჩვენი სერვისის გამოყენებას?
        </p>
      </div>

      <div className="grid gap-4 align ">
        <Button
          variant="outline"
          className="w-full max-w- h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/50"
          onClick={() => onSelect("company")}
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Building2 className="size-6 text-primary" />
          </div>
          <div className="text-left flex flex-col gap-1 w-full">
            <h3 className="font-semibold">კომპანია/ორგანიზაცია</h3>
            <p className="hidden sm:block text-muted-foreground text-xs">
              გამოაქვეყნეთ ვაკანსიები და იპოვეთ სასურველი კადრი
            </p>
          </div>
        </Button>

        <Button
          variant="outline"
          className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/50 min-w-max"
          onClick={() => onSelect("jobSeeker")}
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <UserRound className="size-6 text-primary " />
          </div>
          <div className="text-left flex flex-col gap-1 w-full">
            <h3 className="font-semibold">მაძიებელი</h3>
            <p className="hidden sm:block text-muted-foreground text-xs">
              მოძებნეთ სასურველი სამსახური და გააგზავნეთ CV
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default UserTypeSelection;
