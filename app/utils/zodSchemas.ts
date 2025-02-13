import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(2, "მინიმუმ 2 სიმბოლო"),
  location: z.string().min(3, "მინიმუმ 3 სიმბოლო"),
  about: z.string().min(10, "შეიყვანეთ კომპანიის ინფორმაცია"),
  logo: z.string().min(1, "გთხოვთ ატვირთოთ ლოგო"),
  website: z.string().url("შეიყვანეთ სწორი მისამართი"),
});

export const jobSeekerSchema = z.object({
  name: z.string().min(2, "მინიმუმ 2 სიმბოლო"),
  about: z.string().min(10, "გთხოვთ გვითხარით მეტი თქვენს შესახებ"),
  resume: z.string().min(1, "გთხოვთ ატვირთეთ CV"),
});

export const jobSchema = z.object({
  jobTitle: z.string().min(2, "შეიყვანეთ დასახელება სრულად"),
  employmentType: z.string().min(2, "გთხოვთ აირჩიეთ დასაქმების ტიპი"),
  location: z.string().min(2, "გთხოვთ აირჩიეთ მდებარეობა"),
  salaryFrom: z.number(),
  salaryTo: z.number(),
  jobDescription: z.string().min(1, "შეიყვანეთ პოზიციის აღწერა"),
  listingDuration: z.number().min(1, "აირჩიეთ განცხადების ხანგრძლივობა"),

  benefits: z.array(z.string()).min(1, "აირჩიეთ მინიმუმ 1 ბენეფიტი"),
  companyName: z.string().optional(),
  companyLocation: z.string().optional(),
});
