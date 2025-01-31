"use server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ArcJetLogo from "@/public/arcjet.jpg";
import InngestLogo from "@/public/inngest-locale.png";
import Image from "next/image";
import CreateJobForm from "@/components/forms/CreateJobForm";
import { requireUser } from "@/app/utils/requireUser";
import { redirect } from "next/navigation";
import { UserType } from "@prisma/client";
import { getUserType } from "@/app/utils/getUserType";

const companies = [
  {
    id: 0,
    name: "ArcJet",
    logo: ArcJetLogo,
  },
  {
    id: 1,
    name: "Inngest",
    logo: InngestLogo,
  },
  {
    id: 2,
    name: "ArcJet",
    logo: ArcJetLogo,
  },
  {
    id: 3,
    name: "Inngest",
    logo: InngestLogo,
  },
  {
    id: 4,
    name: "ArcJet",
    logo: ArcJetLogo,
  },
  {
    id: 5,
    name: "Inngest",
    logo: InngestLogo,
  },
];

const testimonials = [
  {
    id: 0,
    quote:
      "JobFinder ეხმარება ჩვენს HR დეპარტამენტს მარტივად მართოს შემოსული რეზიუმეები და დაუკავშირდეს კანდიდატებს",
    author: "ქეთევან გამყრელიძე",
    company: "Nikora",
    role: "HR Head",
  },
  {
    id: 1,
    quote:
      "JobFinder ეხმარება ჩვენს HR დეპარტამენტს მარტივად მართოს შემოსული რეზიუმეები და დაუკავშირდეს კანდიდატებს",
    author: "ქეთევან გამყრელიძე",
    company: "Nikora",
    role: "HR Head",
  },
  {
    id: 2,
    quote:
      "JobFinder ეხმარება ჩვენს HR დეპარტამენტს მარტივად მართოს შემოსული რეზიუმეები და დაუკავშირდეს კანდიდატებს",
    author: "ქეთევან გამყრელიძე",
    company: "Nikora",
    role: "HR Head",
  },
];

const stats = [
  { id: 0, value: "10,000+", label: "სამსახურის მაძიებელი" },
  { id: 1, value: "48 საათი", label: "გამოხმაურების მიღებამდე" },
  { id: 2, value: "95%", label: "დამსაქმებლის კმაყოფილება" },
  { id: 3, value: "500+", label: "დარეგისტრირებული კომპანია" },
];

const Page = async () => {
  const session = await requireUser();
  const userType = await getUserType(session?.id as string);
  if (userType === UserType.JOB_SEEKER) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
      <CreateJobForm />
      <div className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>
              ჩვენ ვაკავშირებთ დამსაქმებლებს საჭირო კადრებთან
            </CardTitle>
            <CardDescription>
              შემოუერთდით ჩვენს დასაქმების ქსელს
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-10">
            {/* Company Logos */}
            <div className="grid grid-cols-3 gap-4">
              {companies.map((company) => (
                <div key={company.id}>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={80}
                    className="rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.id}
                  className="border-l-2 border-primary pl-4"
                >
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <footer className="mt-2 text-sm font-medium flex justify-between">
                    <span>
                      - {testimonial.author}, {testimonial.company}
                    </span>
                    <span className="text-xs text-right">
                      {testimonial.role}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* We will render stats here */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.id} className="rounded-lg bg-muted p-4">
                  <h4 className="text-2xl font-bold">{stat.value}</h4>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
