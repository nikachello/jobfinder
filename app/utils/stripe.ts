import Stripe from "stripe";

export const stripe = new Stripe(process.env.SECRET_KEY_STRIPE!, {
  apiVersion: "2025-01-27.acacia",
  typescript: true,
});
