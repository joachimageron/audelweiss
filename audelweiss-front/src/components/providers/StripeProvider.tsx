"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
console.log("Stripe publishable key:", stripeKey);
if (!stripeKey) {
  throw new Error("Stripe publishable key is not defined in environment variables");
}
const stripePromise = loadStripe(stripeKey);

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL:", API_URL);

export default function StripeProvider({ children }: { children: React.ReactNode }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(`${API_URL}/api/create-payment-intent`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data.clientSecret && typeof data.clientSecret === 'string') {
          setClientSecret(data.clientSecret);
        } else {
          console.error("Invalid client secret format:", data.clientSecret);
        }
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    fetchClientSecret();
  }, []);

  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  // Don't render Elements until we have a valid clientSecret
  if (!clientSecret) {
    return <div>Loading payment...</div>; // Or your loading component
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret, loader }}>
      {children}
    </Elements>
  );
}