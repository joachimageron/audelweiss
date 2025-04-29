"use client";

import React from "react";
import ReactQueryProvider from "@/src/components/providers/ReactQueryProvider";
import { AuthProvider } from "@/src/components/providers/AuthProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ReactQueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </ReactQueryProvider>
    </>
  );
};

export default Providers;
