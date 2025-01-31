"use client";
import { createJobSeeker } from "@/app/actions";
import { jobSeekerSchema } from "@/app/utils/zodSchemas";
import { UploadDropzone } from "@/components/general/UploadThingReexported";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import PDFImage from "@/public/pdf.png";

const JobSeekerForm = () => {
  const form = useForm<z.infer<typeof jobSeekerSchema>>({
    resolver: zodResolver(jobSeekerSchema),
    defaultValues: {
      name: "",
      about: "",
      resume: "",
    },
  });

  const [pending, setPending] = useState<boolean>(false);

  const onSubmit = async (data: z.infer<typeof jobSeekerSchema>) => {
    try {
      console.log("daechira onsubmit");
      setPending(true);
      await createJobSeeker(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.log("Something went wrong");
      }
    } finally {
      setPending(false);
    }
  };
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-muted-foreground">
                თქვენი სახელი
              </FormLabel>
              <FormControl>
                <Input
                  className="text-xs"
                  placeholder="სრული სახელი"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-muted-foreground">
                თქვენს შესახებ
              </FormLabel>
              <FormControl>
                <Textarea
                  className="text-xs"
                  placeholder="მოგვიყევით მეტი თქვენს შესახებ"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-muted-foreground">
                თქვენი CV (PDF)
              </FormLabel>
              <FormControl>
                <div>
                  {field.value ? (
                    <div className="relative w-fit">
                      <Image
                        src={PDFImage}
                        alt="PDF thumbnail"
                        width={100}
                        height={100}
                        className="rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2 "
                        onClick={() => field.onChange("")}
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <UploadDropzone
                      endpoint="resumeUploader"
                      onClientUploadComplete={(res) => {
                        field.onChange(res[0].url);
                        toast.success("Logo uploaded successfully!");
                      }}
                      onUploadError={() => {
                        toast.error("Something went wrong. Please try again.");
                      }}
                      className="ut-button:bg-primary ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-allowed-content:text-muted-foreground border-primary"
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "დაელოდეთ" : "გაგრძელება"}
        </Button>
      </form>
    </Form>
  );
};

export default JobSeekerForm;
