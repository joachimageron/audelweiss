"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCart } from "@/src/components/providers/CartProvider";
import CustomTitle from "@/src/components/atoms/CustomTitle";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!stripeKey) {
  throw new Error("Stripe publishable key is not defined in environment variables");
}
const stripePromise = loadStripe(stripeKey);

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function StripeProvider({ children }: { children: React.ReactNode }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const { total } = useCart();

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(`${API_URL}/api/create-payment-intent`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: total * 100, // Convert to cents
            currency: "eur", // Default to EUR
          }),
        });
        const data = await response.json();
        if (data.clientSecret && typeof data.clientSecret === "string") {
          setClientSecret(data.clientSecret);
        } else {
          console.error("Invalid client secret format:", data.clientSecret);
        }
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    console.log("Total amount:", total);

    if (total && total >= 0) fetchClientSecret();
  }, [total]);

  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  // Don't render Elements until we have a valid clientSecret
  if (!clientSecret) {
    return (
      <CustomTitle level={2} className="text-center text-[2.2rem] m-20 text-dark-primary">
        Chargement ...
      </CustomTitle>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret, loader }}>
      {children}
    </Elements>
  );
}
