"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User, AuthResponse, LoginCredentials, RegisterCredentials, AuthContextType } from "@/src/types/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Create the auth context
export const AuthContext = createContext<AuthContextType | null>(null);

// API base URL
const API_URL = process.env.API_URL || "http://51.83.97.44:1337";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  console.log("AuthProvider user", user);
  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const loadUserFromLocalStorage = () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("jwt");
        const userData = localStorage.getItem("user");

        if (token && userData) {
          const parsedUser = JSON.parse(userData);
          // If the user doesn't have jwt property, add it
          if (!parsedUser.jwt) {
            parsedUser.jwt = token;
          }
          setUser(parsedUser);

          // Store user in query cache
          queryClient.setQueryData(["user"], parsedUser);
        }
      } catch (error) {
        console.error("Failed to restore authentication state:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserFromLocalStorage();
  }, [queryClient]);

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: async (credentials: RegisterCredentials): Promise<User> => {
      const response = await fetch(`${API_URL}/api/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data: AuthResponse = await response.json();

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // Merge jwt into the user object
      return {
        ...data.user,
        jwt: data.jwt,
      };
    },
    onSuccess: userWithToken => {
      // Store auth data
      localStorage.setItem("user", JSON.stringify(userWithToken));
      localStorage.setItem("jwt", userWithToken.jwt);

      // Update state and cache
      setUser(userWithToken);
      queryClient.setQueryData(["user"], userWithToken);
      setError(null);
    },
    onError: (error: Error) => {
      setError(error.message || "An error occurred during registration");
      console.error("Registration error:", error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginCredentials): Promise<User> => {
      const response = await fetch(`${API_URL}/api/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data: AuthResponse = await response.json();

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      // Merge jwt into the user object
      return {
        ...data.user,
        jwt: data.jwt,
      };
    },
    onSuccess: userWithToken => {
      // Store auth data
      localStorage.setItem("user", JSON.stringify(userWithToken));
      localStorage.setItem("jwt", userWithToken.jwt);

      // Update state and cache
      setUser(userWithToken);
      queryClient.setQueryData(["user"], userWithToken);
      setError(null);
    },
    onError: (error: Error) => {
      setError(error.message || "An error occurred during login");
      console.error("Login error:", error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  /**
   * Register a new user
   */
  const register = async (credentials: RegisterCredentials): Promise<void> => {
    setLoading(true);
    setError(null);
    registerMutation.mutate(credentials);
  };

  /**
   * Login an existing user
   */
  const login = async (credentials: LoginCredentials): Promise<void> => {
    setLoading(true);
    setError(null);
    loginMutation.mutate(credentials);
  };

  /**
   * Logout the current user
   */
  const logout = (): void => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    setUser(null);

    // Invalidate and remove user data from query cache
    queryClient.removeQueries({ queryKey: ["user"] });

    // Invalidate any user-specific queries
    queryClient.invalidateQueries();
  };

  // Computed property to check if user is authenticated
  const isAuthenticated = !!user;

  // Create the context value object
  const contextValue: AuthContextType = {
    user,
    loading: loading || registerMutation.isPending || loginMutation.isPending,
    error,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
