import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(2, "მინიმუმ 2 სიმბოლო"),
  location: z.string().min(3, "მინიმუმ 3 სიმბოლო"),
  about: z.string().min(10, "შეიყვანეთ კომპანიის ინფორმაცია"),
  logo: z.string().min(1, "გთხოვთ ატვირთოთ ლოგო"),
  website: z.string().url("შეიყვანეთ სწორი მისამართი"),
});
