import { benefits } from "@/app/utils/listOfBenefits";
import React from "react";
import { Badge } from "../ui/badge";
import { ControllerRenderProps } from "react-hook-form";

type Props = {
  field: ControllerRenderProps;
};

const BenefitsSelector = ({ field }: Props) => {
  const toggleBenefit = (benefitId: string) => {
    const currentBenefits = field.value || [];

    const newBenefits = currentBenefits.includes(benefitId)
      ? currentBenefits.filter((id: string) => id !== benefitId)
      : [...currentBenefits, benefitId];

    field.onChange(newBenefits);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 mt-6">
        {benefits.map((benefit) => {
          const isSelected = (field.value || []).includes(benefit.id);

          return (
            <Badge
              className="cursor-pointer hover:scale-105 transition-all active:space-95 text-sm px-4 py-1.5 rounded-full"
              key={benefit.id}
              variant={isSelected ? "default" : "outline"}
              onClick={() => toggleBenefit(benefit.id)}
            >
              <span className="p-1 flex items-center gap-2">
                {benefit.icon}
                {benefit.label}
              </span>
            </Badge>
          );
        })}
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        არჩეული ბენეფიტები:{" "}
        <span className="text-primary">{(field.value || []).length}</span>
      </div>
    </div>
  );
};

export default BenefitsSelector;
