"use client";

import React, { useEffect, useState } from "react";
import ReactQueryProvider from "@/src/components/providers/ReactQueryProvider";
import { AuthProvider } from "@/src/components/providers/AuthProvider";
import { CartProvider } from "@/src/components/providers/CartProvider";
import { StorageProvider } from "./StorageProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [storage, setStorage] = useState<Storage | undefined>(undefined);

  useEffect(() => {
    setStorage(window.localStorage);
  }, []);

  if (!storage) return null;

  return (
    <>
      <ReactQueryProvider>
        <StorageProvider storage={storage}>
          <CartProvider>
            <AuthProvider>{children}</AuthProvider>
          </CartProvider>
        </StorageProvider>
      </ReactQueryProvider>
    </>
  );
};

export default Providers;
