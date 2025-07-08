"use client";

import { useUser } from "@/src/hooks/useUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/components/providers/CartProvider";
import Image from "next/image";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import CustomInputField from "@/src/components/atoms/CustomInputField";
import Button from "@/src/components/atoms/Button";

import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://51.83.97.44:1337";

export default function CommandePage() {
  const router = useRouter();
  const { isAuthenticated, loading, user } = useUser();
  const { cartItems, total } = useCart();

  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    addressDetail: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // Pre-fill form with user data
  useEffect(() => {
    if (user) {
      setShippingData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        address: user.address || "",
        addressDetail: user.addressDetail || "",
        city: user.city || "",
        postalCode: user.postalCode || "",
        country: user.country || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  console.log("cartItems", cartItems);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/auth/login");
    }
  }, [loading, isAuthenticated, router]);

  if (loading || !isAuthenticated) {
    return null;
  }

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;
    // TODO: Process order with shipping data
    console.log("Order data:", { cartItems, total, shippingData });

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/commande/success",
      },
    });

    setIsLoading(false);

    if (error) {
      // This point will only be reached if there is an immediate error when confirming the payment
      // For example, if the card details are incomplete or invalid
      setMessage(error.message || "An unexpected error occurred.");
    } else {
      // The payment has been processed!
      setMessage("Payment successful! Thank you for your order.");
      // Optionally redirect to a success page or clear the cart
      router.push("/success");
    }
    console.log("Payment result:", error);


  };

  return (
    <div className="inner-wrap py-[3rem]">
      <CustomTitle level={1} className="text-[2.8rem] text-center mb-6">
        Commande
      </CustomTitle>

      {cartItems.length > 0 ? (
        <form onSubmit={handleSubmit} className="max-w-[80rem] mx-auto space-y-[4rem]">
          {/* Order Summary Section */}
          <div>
            <CustomTitle level={2} className="text-[2.2rem] mb-[2rem] text-dark-primary">
              Résumé de votre commande
            </CustomTitle>

            <div className="space-y-[2rem] mb-[3rem]">
              {cartItems.map(item => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-[2rem] bg-white">
                  <div className="flex items-start gap-[2rem]">
                    {item.image && (
                      <div className="w-[8rem] aspect-square rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      <h3 className="text-[1.6rem] font-semibold text-dark-primary mb-[1rem]">{item.name}</h3>

                      {item.variants && (
                        <ul className="text-[1.3rem] text-gray-600 space-y-[.2rem] mb-[1rem]">
                          {Object.entries(item.variants).map(([variantsName, variantsValue]) => (
                            <li className="" key={variantsName}>
                              {variantsValue ? (
                                <>
                                  {variantsName} : {variantsValue}
                                </>
                              ) : (
                                <>{variantsName}</>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex justify-between items-center">
                        <div className="text-[1.4rem] text-gray-600">
                          Quantité : <span className="font-semibold">{item.quantity}</span>
                        </div>
                        <div className="text-[1.4rem] text-gray-600">
                          Prix unitaire : <span className="font-semibold">{item.price.toFixed(2)}€</span>
                        </div>
                        <div className="text-[1.6rem] font-bold text-dark-primary">
                          {(item.price * item.quantity).toFixed(2)}€
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <div className="text-right">
                <p className="text-[2rem] font-bold text-dark-primary">Total de la commande : {total.toFixed(2)}€</p>
              </div>
            </div>
          </div>

          {/* Shipping Address Section */}
          <div className="border-t border-gray-300">
            <CustomTitle level={2} className="text-[2.2rem] my-[2rem] text-dark-primary">
              Adresse de livraison / facturation
            </CustomTitle>

            <div className="bg-gray-50 p-[3rem] rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mb-[2rem]">
                <CustomInputField
                  label="Prénom"
                  name="firstName"
                  value={shippingData.firstName}
                  onChange={handleShippingChange}
                  required
                />
                <CustomInputField
                  label="Nom"
                  name="lastName"
                  value={shippingData.lastName}
                  onChange={handleShippingChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mb-[2rem]">
                <CustomInputField
                  label="Adresse"
                  name="address"
                  value={shippingData.address}
                  onChange={handleShippingChange}
                  required
                />
                <CustomInputField
                  label="Complément d'adresse"
                  name="addressDetail"
                  value={shippingData.addressDetail}
                  onChange={handleShippingChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mb-[2rem]">
                <CustomInputField
                  label="Ville"
                  name="city"
                  value={shippingData.city}
                  onChange={handleShippingChange}
                  required
                />
                <CustomInputField
                  label="Code postal"
                  name="postalCode"
                  value={shippingData.postalCode}
                  onChange={handleShippingChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
                <CustomInputField
                  label="Pays"
                  name="country"
                  value={shippingData.country}
                  onChange={handleShippingChange}
                  required
                />
                <CustomInputField
                  label="Téléphone"
                  name="phone"
                  type="tel"
                  value={shippingData.phone}
                  onChange={handleShippingChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}

          <div className="flex flex-col my-4">
            <CustomTitle level={2} className="text-[2.2rem] my-[2rem] text-dark-primary">
              Paiement
            </CustomTitle>
            <PaymentElement id="payment-element" options={{ layout: "accordion" }} />

            <Button type="submit" withIcon className="mt-[2rem]">
              {isLoading ? "Chargement..." : `Valider la commande - ${total.toFixed(2)}€`}
            </Button>
                  {message && <div id="payment-message">{message}</div>}
          </div>
        </form>
      ) : (
        <div className="text-center py-[5rem]">
          <p className="text-[1.6rem] text-gray-500">Votre panier est vide.</p>
        </div>
      )}
    </div>
  );
}
