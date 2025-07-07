"use client";

import { useUser } from "@/src/hooks/useUser";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/components/providers/CartProvider";

export default function CommandePage() {
  const router = useRouter();
  const { isAuthenticated, loading, user } = useUser();
  const { cartItems, setCartItems, total } = useCart();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/auth/login");
    }
  }, [loading, isAuthenticated, router]);

  if (loading || !isAuthenticated) {
    return null;
  }

  return (
    <div>
      <h1>Page de Commande</h1>
      <p>Cette page est réservée aux utilisateurs authentifiés.</p>
      {/* Ajoutez ici le contenu spécifique à la page de commande */}
      {cartItems.length > 0 && (
        <div>
          <h2>Votre panier</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name}
                </li>
            ))}
          </ul>
          <p>Total: {total.toFixed(2)} €</p>
          </div>
      )}
      </div>
  );
}
