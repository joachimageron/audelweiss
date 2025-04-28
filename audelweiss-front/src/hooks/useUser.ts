"use client";

import { useContext } from "react";
import { AuthContext } from "@/src/contexts/AuthContext";

/**
 * Hook to easily access the authentication context
 * @returns Authentication context with user data and auth methods
 */
export const useUser = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useUser must be used within an AuthProvider");
  }

  return context;
};
