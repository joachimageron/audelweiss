import { CartItem, useCart } from "@/src/components/providers/CartProvider";
import { useCallback } from "react";

export function useAddToCart() {
  const { setCartItems } = useCart();

  const addToCart = useCallback(
    (item: CartItem) => {
      setCartItems((prevCart = []) => {
        const existing = prevCart.find(i => i.id === item.id);

        if (existing) {
          // update quantity (considering max stock)
          return prevCart.map(i =>
            i.id === item.id
              ? {
                ...i,
                quantity: i.stock ? Math.min(i.quantity + item.quantity, i.stock) : i.quantity + item.quantity,
              }
              : i,
          );
        }

        return [...prevCart, item];
      });
    },
    [setCartItems],
  );

  return addToCart;
}
