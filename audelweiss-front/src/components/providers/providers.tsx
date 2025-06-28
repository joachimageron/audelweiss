"use client";

import React from "react";
import ReactQueryProvider from "@/src/components/providers/ReactQueryProvider";
import { AuthProvider } from "@/src/components/providers/AuthProvider";
import { CartProvider } from "@/src/components/providers/CartProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ReactQueryProvider>
        <CartProvider>
          <AuthProvider>{children}</AuthProvider>
        </CartProvider>
      </ReactQueryProvider>
    </>
  );
};

export default Providers;
