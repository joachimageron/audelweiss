"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

const LOCAL_STORAGE_KEY = "audelweiss-cart";

type CartItem = {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    stock: number;
    details?: Record<string, any>;
};

type CartContextType = {
    cartItems: CartItem[];
    setCartItems: (items: CartItem[] | ((prev: CartItem[]) => CartItem[])) => void;
    total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItemsState] = useState<CartItem[]>([]);

    // Permet d'accepter aussi les fonctions de type setCartItems(prev => ...)
    const setCartItems = (items: CartItem[] | ((prev: CartItem[]) => CartItem[])) => {
        setCartItemsState(prev => {
            const updated = typeof items === "function" ? items(prev) : items;
            return updated;
        });
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Charge depuis localStorage une seule fois au démarrage
    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setCartItemsState(parsed);
            } catch (err) {
                console.error("Erreur parsing panier localStorage :", err);
            }
        }
    }, []);

    // Synchronise localStorage à chaque changement du panier
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
