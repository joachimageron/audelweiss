"use client";

import React from "react";
import ReactQueryProvider from "@/src/components/providers/ReactQueryProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </>
  );
};

export default Providers;
