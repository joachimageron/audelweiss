import { CartItem, useCart } from "@/src/components/providers/CartProvider";
import { useCallback } from "react";

export function useAddToCart() {
  const { setCartItems } = useCart();

  const addToCart = useCallback(
    (item: CartItem) => {
      setCartItems((prevCart = []) => {
        console.log("previous cart : ", prevCart);
        const existing = prevCart.find(i => i.id === item.documentId);

        console.log("existing : ", existing);

        if (existing) {
          // update quantity (considering max stock)
          return prevCart.map(i =>
            i.id === item.documentId
              ? {
                  ...i,
                  quantity: Math.min(i.quantity + item.quantity, i.stock),
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
