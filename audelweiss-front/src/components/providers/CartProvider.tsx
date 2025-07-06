"use client";

import { createContext, useContext, ReactNode } from "react";
import usePersistedState from "@/src/hooks/usePersistedState";

const LOCAL_STORAGE_KEY = "audelweiss-cart";

export type CartItem = {
  id: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  //   stock: number;
  variants?: Record<string, unknown>;
};

type CartContextType = {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[] | ((prev: CartItem[]) => CartItem[])) => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = usePersistedState<CartItem[]>(LOCAL_STORAGE_KEY, []);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return <CartContext.Provider value={{ cartItems, setCartItems, total }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
