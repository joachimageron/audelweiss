"use client";

import React from "react";
import ReactQueryProvider from "@/src/components/providers/ReactQueryProvider";
import { AuthProvider } from "@/src/contexts/AuthContext";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </AuthProvider>
    </>
  );
};

export default Providers;
