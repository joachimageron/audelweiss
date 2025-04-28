"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User, AuthResponse, LoginCredentials, RegisterCredentials, AuthContextType } from "@/src/types/auth";

// Create the auth context
export const AuthContext = createContext<AuthContextType | null>(null);

// API base URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://51.83.97.44:1337";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const loadUserFromLocalStorage = () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("jwt");
        const userData = localStorage.getItem("user");

        if (token && userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Failed to restore authentication state:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserFromLocalStorage();
  }, []);

  /**
   * Register a new user
   */
  const register = async (credentials: RegisterCredentials): Promise<void> => {
    setLoading(true);
    setError(null);

    console.log(credentials);

    try {
      const response = await fetch(`${API_URL}/api/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data: AuthResponse = await response.json();

      if (!response.ok) {
        throw new Error(data?.jwt ? "Registration failed" : "Invalid credentials");
      }

      // Store auth data
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred during registration");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Login an existing user
   */
  const login = async (credentials: LoginCredentials): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data: AuthResponse = await response.json();

      if (!response.ok) {
        throw new Error(data?.jwt ? "Login failed" : "Invalid credentials");
      }

      // Store auth data
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred during login");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Logout the current user
   */
  const logout = (): void => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    setUser(null);
  };

  // Computed property to check if user is authenticated
  const isAuthenticated = !!user;

  // Create the context value object
  const contextValue: AuthContextType = {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
