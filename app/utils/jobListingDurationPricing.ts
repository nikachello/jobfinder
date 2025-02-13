type iAppProps = {
  days: number;
  price: number;
  description: string;
};

export const jobListingDurationPricing: iAppProps[] = [
  {
    days: 30,
    price: 99,
    description: "სტანდარტული განცხადება",
  },
  {
    days: 60,
    price: 179,
    description: "პრემიუმ განცხადება",
  },
  {
    days: 90,
    price: 249,
    description: "პრემიუმ+ განცხადება",
  },
];
