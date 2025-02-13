import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ControllerRenderProps } from "react-hook-form";
import { jobListingDurationPricing } from "@/app/utils/jobListingDurationPricing";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

type Props = {
  field: ControllerRenderProps;
};

const JobListingDurationSelector = ({ field }: Props) => {
  return (
    <RadioGroup
      value={field.value.toString()}
      onValueChange={(value) => field.onChange(parseInt(value))}
    >
      <div className="flex flex-col gap-4">
        {jobListingDurationPricing.map((duration) => (
          <div key={duration.days} className="relative">
            <RadioGroupItem
              value={duration.days.toString()}
              id={duration.days.toString()}
              className="sr-only"
            />
            <Label
              htmlFor={duration.days.toString()}
              className="flex-flex-col cursor-pointer"
            >
              <Card
                className={cn(
                  field.value === duration.days
                    ? "border-primary bg-primary/10"
                    : "hover:bg-secondary/50",
                  "p-4 border-2 transition-all"
                )}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg">{duration.days} დღე</p>
                    <p className="text-sm text-muted-foreground">
                      {duration.description}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-bold text-xl">{duration.price} ლარი</p>
                    <p className="text-xs text-muted-foreground">
                      {(duration.price / duration.days).toFixed(2)} ლარი დღეში
                    </p>
                  </div>
                </div>
              </Card>
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
};

export default JobListingDurationSelector;
