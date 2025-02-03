import React, { useState } from "react";
import { Slider } from "../ui/slider";
import { Control, useController } from "react-hook-form";
import { formatCurrency } from "@/app/utils/formatCurrency";

type Props = {
  control: Control<any>;
  minSalary: number;
  maxSalary: number;
  step: number;
  currency?: string;
};

const SalaryRangeSelector = ({
  control,
  minSalary,
  maxSalary,
  step,
}: Props) => {
  const { field: fromField } = useController({
    name: "salaryFrom",
    control,
  });

  const { field: toField } = useController({
    name: "salaryTo",
    control,
  });

  const [range, setRange] = useState<[number, number]>([
    fromField.value || minSalary,
    toField.value || maxSalary / 2,
  ]);

  const handleChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setRange(newRange);
    fromField.onChange(newRange[0]);
    toField.onChange(newRange[1]);
  };

  return (
    <div className="w-full space-y-6">
      <Slider
        onValueChange={handleChange}
        min={minSalary}
        max={maxSalary}
        step={step}
        value={range}
      />
      <div className="flex justify-between">
        <span>{formatCurrency(range[0])}</span>
        <span>{formatCurrency(range[1])}</span>
      </div>
    </div>
  );
};

export default SalaryRangeSelector;
