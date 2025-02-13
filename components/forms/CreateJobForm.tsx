"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { companySchema, jobSchema } from "@/app/utils/zodSchemas";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
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
import SalaryRangeSelector from "../general/SalaryRangeSelector";
import JobDescriptionEditor from "../rich-text-editor/JobDescriptionEditor";
import BenefitsSelector from "../general/BenefitsSelector";
import JobListingDurationSelector from "../general/JobListingDurationSelector";
import { Button } from "../ui/button";
import { createJob } from "@/app/actions";

type Props = {
  company: z.infer<typeof companySchema>;
};

const CreateJobForm = ({ company }: Props) => {
  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      benefits: [],
      employmentType: "",
      jobDescription: "",
      jobTitle: "",
      listingDuration: 30,
      location: "",
      salaryFrom: 0,
      salaryTo: 0,
    },
  });

  const [pending, setPending] = useState(false);

  const onSubmit = async (values: z.infer<typeof jobSchema>) => {
    console.log("should work");
    try {
      setPending(true);
      await createJob(values);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.log(error);
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="col-span-1 lg:col-span-2 flex flex-col gap-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>პოზიციის აღწერა</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>პოზიციის დასახელება</FormLabel>
                    <FormControl>
                      <Input placeholder="პოზიციის დასახელება" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employmentType"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>დასაქმების ტიპი</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="აირჩიეთ დასაქმების ტიპი" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>დასაქმების ტიპი</SelectLabel>
                          <SelectItem value="full-time">
                            სრული განაკვეთი
                          </SelectItem>
                          <SelectItem value="part-time">
                            ნახევარი განაკვეთი
                          </SelectItem>
                          <SelectItem value="contract">კონტრაქტი</SelectItem>
                          <SelectItem value="intership">სტაჟირება</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>მდებარეობა</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="აირჩიეთ მდებარეობა" />
                        </SelectTrigger>
                      </FormControl>
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* WIP: Fix salary range (it submits 0-0 to db) */}
              <FormItem>
                <FormLabel>სახელფასო დიაპაზონი</FormLabel>
                <FormControl>
                  <SalaryRangeSelector
                    control={form.control}
                    minSalary={10000}
                    maxSalary={1000000}
                    currency="GEL"
                    step={2000}
                  />
                </FormControl>
              </FormItem>
            </div>
            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>სამუშაოს აღწერა</FormLabel>
                  <FormControl>
                    <JobDescriptionEditor field={field as any} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="benefits"
              render={({ field }) => (
                <FormItem className="mt-6 mb-6">
                  <FormLabel>ბენეფიტები</FormLabel>
                  <FormControl>
                    <BenefitsSelector field={field as any} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>კომპანიის ინფორმაცია</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="companyName"
                disabled
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>კომპანია</FormLabel>
                    <FormControl>
                      <Input defaultValue={company.name} disabled {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyLocation"
                disabled
                render={() => (
                  <FormItem className="mt-6">
                    <FormLabel>მდებარეობა</FormLabel>
                    <Input value={company.location} disabled />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ვაკანსიის ვადა</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="listingDuration"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <JobListingDurationSelector field={field as any} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </CardContent>
        </Card>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "დაელოდეთ..." : "დაამატე ვაკანსია"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateJobForm;
