'use client';
import { useCart } from '@/src/components/providers/CartProvider';
import { useUser } from '@/src/hooks/useUser';
import { useEffect } from 'react';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function SuccessPage() {

  const {user} = useUser();
  const {cartItems, setCartItems} = useCart();

  useEffect(() => {
    const createOrder = async () => {
      if (!user) return;

      if (cartItems.length === 0) return;

      // const response = await fetch(`${API_URL}/api/create-order`,{
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     userId: user.id,
      //     items: cartItems,
      //   }),
      // })

      // if (!response.ok) {
      //   console.error('Failed to create order');
      //   return;
      // }

      setCartItems([]); // Clear the cart after successful order creation

    };

    createOrder();
  }, [user, cartItems, setCartItems]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">Commande réussie !</h1>
      <p className="text-xl mb-6">Merci pour votre achat.</p>
    </div>
  );
}
