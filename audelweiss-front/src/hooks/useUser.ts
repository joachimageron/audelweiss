"use client";

import { useContext } from "react";
import { AuthContext } from "@/src/components/providers/AuthProvider";
import { AuthContextType } from "@/src/types/auth";

/**
 * Hook to easily access the authentication context
 * @returns {AuthContextType} The user authentication context
 */
export const useUser = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useUser must be used within an AuthProvider");
  }

  return context;
};
