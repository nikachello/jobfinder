import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cities } from "@/app/utils/citiesList";

const jobTypes = [
  { id: "intership", name_ka: "სტაჟირება" },
  { id: "part-time", name_ka: "ნახევარი განაკვეთი" },
  { id: "full-time", name_ka: "სრული განაკვეთი" },
  { id: "contract", name_ka: "კონტრაქტი" },
];

const JobFilters = () => {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex space-y-4">
        <CardTitle className="text-lg md:text-2xl font-semibold">
          ფილტრები
        </CardTitle>
        <Button variant="destructive" size="sm" className="h-8">
          <span>გასუფთავება</span>
        </Button>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4 mb-4">
        <div className="space-y-2 mb-4">
          <Label className="text-lg font-semibold pt-4">სამსახურის ტიპი</Label>
          <div className="space-y-4 md:grid md:grid-cols-2 gap-4">
            {jobTypes.map((job) => (
              <div key={job.id} className="flex items-center space-x-2">
                <Checkbox id={job.id} />
                <Label className="text-sm font-medium" htmlFor={job.id}>
                  {job.name_ka}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-4" />

        <div className="space-y-4">
          <Label className="text-lg font-semibold">მდებარეობა</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="აირჩიეთ მდებარეობა" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>დისტანციური</SelectLabel>
                <SelectItem value="remote">დისტანციური</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>მდებარეობა</SelectLabel>
                {cities.map((city) => (
                  <SelectItem key={city.name_en} value={city.name_en}>
                    {city.name_ka}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobFilters;
