"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  User,
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  AuthContextType,
} from "@/src/types/auth";

export const AuthContext = createContext<AuthContextType | null>(null);

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://51.83.97.44:1337";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  // Restore user from localStorage
  useEffect(() => {
    const loadUserFromLocalStorage = () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("jwt");
        const userData = localStorage.getItem("user");

        if (token && userData) {
          const parsedUser = JSON.parse(userData);
          if (!parsedUser.jwt) parsedUser.jwt = token;

          setUser(parsedUser);
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

  // --- Utilitaires ---

  const handleAuthSuccess = (userWithToken: User) => {
    localStorage.setItem("user", JSON.stringify(userWithToken));
    localStorage.setItem("jwt", userWithToken.jwt);
    setUser(userWithToken);
    queryClient.setQueryData(["user"], userWithToken);
    setError(null);
  };

  const handleAuthError = async (error: any, fallbackMessage: string) => {
    let errorMessage = fallbackMessage;


    if (error && typeof error === "object" && "status" in error && "json" in error) {
      try {
        const data = await (error as Response).json();
        console.log("Réponse d’erreur Strapi :", data);

        const message = data?.error?.message;

        if (message === "Email or Username are already taken") {
          errorMessage = "Cette adresse e-mail ou ce nom d'utilisateur est déjà utilisé.";
        } else if (message === "Invalid identifier or password") {
          errorMessage = "Les informations renseignées ne correspondent à aucun utilisateur connu.";
        } else if (typeof message === "string") {
          errorMessage = message;
        }
      } catch (err) {
        console.error("Erreur lors du parsing JSON :", err);
      }
    }

    setError(errorMessage);
    console.error("Auth error:", errorMessage);
    throw new Error(errorMessage);
  };

  // --- Mutations ---

  const registerMutation = useMutation({
    mutationFn: async (credentials: RegisterCredentials): Promise<User> => {
      const response = await fetch(`${API_URL}/api/auth/local/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw response;
      }

      const data = await response.json();

      if (!data || !data.user || !data.jwt) {
        throw new Error("L'inscription a échoué");
      }

      return { ...data.user, jwt: data.jwt };
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginCredentials): Promise<User> => {
      const response = await fetch(`${API_URL}/api/auth/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw response;
      }

      const data: AuthResponse = await response.json();

      if (!data || !data.user || !data.jwt) {
        throw new Error("L'inscription a échoué");
      }

      return { ...data.user, jwt: data.jwt };
    },
  });

  // --- Actions ---

  const register = (credentials: RegisterCredentials): Promise<void> => {
    setLoading(true);
    setError(null);

    return new Promise((resolve, reject) => {
      registerMutation.mutate(credentials, {
        onSuccess: (user) => {
          handleAuthSuccess(user);
          resolve();
        },
        onError: (error) => {
          handleAuthError(error, "Une erreur est survenue lors de l'inscription.").catch(reject);
        },
        onSettled: () => setLoading(false),
      });
    });
  };

  const login = (credentials: LoginCredentials): Promise<void> => {
    setLoading(true);
    setError(null);

    return new Promise((resolve, reject) => {
      loginMutation.mutate(credentials, {
        onSuccess: (user) => {
          handleAuthSuccess(user);
          resolve();
        },
        onError: (error) => {
          handleAuthError(error, "Une erreur est survenue lors de la connexion.").catch(reject);
        },
        onSettled: () => setLoading(false),
      });
    });
  };

  const logout = (): void => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    setUser(null);
    queryClient.removeQueries({ queryKey: ["user"] });
    queryClient.invalidateQueries();
  };

  const isAuthenticated = !!user;

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
