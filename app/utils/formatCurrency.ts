export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GEL",
    maximumFractionDigits: 0,
  }).format(amount);
};
