"use client";

import { useUser } from "@/src/hooks/useUser";
import { useOrders } from "@/src/hooks/useOrders";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import { tv } from "tailwind-variants";
import { Order, ComponentOrderItemProductReference } from "@/src/types/generated";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://51.83.97.44:1337";

const styles = tv({
  slots: {
    mainWrapper: "inner-wrap py-[3rem]",
    backButton:
      "inline-flex items-center gap-[1rem] text-[1.4rem] text-dark-primary hover:text-primary transition-colors mb-[2rem]",
    pageTitle: "text-[2.8rem] text-center mb-[4rem]",
    noOrdersMessage: "text-center py-[5rem] text-[1.6rem] text-gray-500",
    ordersList: "space-y-[3rem]",
    orderCard: "border border-gray-200 rounded-lg p-[2rem] bg-white",
    orderHeader: "flex justify-between items-center mb-[2rem] pb-[1rem] border-b border-gray-200",
    orderInfo: "flex flex-col gap-[.5rem]",
    orderNumber: "text-[1.8rem] font-semibold text-dark-primary",
    orderDate: "text-[1.4rem] text-gray-600",
    orderStatus: "px-[1rem] py-[.5rem] rounded-full text-[1.2rem] font-semibold",
    orderStatusPublished: "bg-green-100 text-green-800",
    orderStatusDraft: "bg-yellow-100 text-yellow-800",
    orderItems: "space-y-[1.5rem]",
    orderItem: "flex items-start gap-[2rem] p-[1.5rem] bg-gray-50 rounded-lg",
    itemImage: "w-[6rem] aspect-square rounded overflow-hidden flex-shrink-0",
    itemDetails: "flex-1",
    itemName: "text-[1.6rem] font-semibold text-dark-primary mb-[.5rem]",
    itemVariants: "text-[1.3rem] text-gray-600 space-y-[.2rem] mb-[1rem]",
    itemQuantityPrice: "flex justify-between items-center text-[1.4rem]",
    itemQuantity: "text-gray-600",
    itemPrice: "font-semibold text-dark-primary",
    orderTotal: "text-right pt-[1rem] border-t border-gray-200 mt-[2rem]",
    orderTotalAmount: "text-[1.8rem] font-bold text-dark-primary",
    loadingMessage: "text-center py-[5rem] text-[1.6rem] text-gray-500",
    errorMessage: "text-center py-[5rem] text-[1.6rem] text-red-500",
  },
});

const {
  mainWrapper,
  backButton,
  pageTitle,
  noOrdersMessage,
  ordersList,
  orderCard,
  orderHeader,
  orderInfo,
  orderNumber,
  orderDate,
  orderStatus,
  orderStatusPublished,
  orderStatusDraft,
  orderItems,
  loadingMessage,
  errorMessage,
} = styles();

export default function HistoriquePage() {
  const router = useRouter();
  const { isAuthenticated, loading: userLoading, user } = useUser();

  const {
    data: orders,
    isLoading,
    error,
  } = useOrders({
    filters: user?.documentId ? { userId: user.documentId } : undefined,
    queryKey: ["orders"],
  });

  useEffect(() => {
    if (!userLoading && !isAuthenticated) {
      router.replace("/auth/login");
    }
  }, [userLoading, isAuthenticated, router]);

  if (userLoading || !isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return (
      <div className={mainWrapper()}>
        <CustomTitle level={1} className={pageTitle()}>
          Historique des commandes
        </CustomTitle>
        <div className={loadingMessage()}>Chargement de vos commandes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={mainWrapper()}>
        <CustomTitle level={1} className={pageTitle()}>
          Historique des commandes
        </CustomTitle>
        <div className={errorMessage()}>Erreur lors du chargement de vos commandes. Veuillez réessayer plus tard.</div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getOrderStatus = (order: Order) => {
    if (order.publishedAt) {
      return { label: "Confirmée", className: orderStatusPublished() };
    }
    return { label: "En attente", className: orderStatusDraft() };
  };

  return (
    <div className={mainWrapper()}>
      <button onClick={() => router.push("/compte")} className={backButton()}>
        ← Retour au compte
      </button>

      <CustomTitle level={1} className={pageTitle()}>
        Historique des commandes
      </CustomTitle>

      {!orders || orders.length === 0 ? (
        <div className={noOrdersMessage()}>Vous n&apos;avez encore passé aucune commande.</div>
      ) : (
        <div className={ordersList()}>
          {orders.map(order => {
                const status = getOrderStatus(order);

            return (
              <div key={order.documentId} className={orderCard()}>
                <div className={orderHeader()}>
                  <div className={orderInfo()}>
                    <div className={orderNumber()}>Commande #{order.documentId.slice(-8).toUpperCase()}</div>
                    <div className={orderDate()}>Passée le {formatDate(order.createdAt || "")}</div>
                  </div>
                  <div className={`${orderStatus()} ${status.className}`}>{status.label}</div>
                </div>

                <div className={orderItems()}>
                  {order.order_items?.map(item =>
                    item?.item.map(product => (
                      <div key={product?.product.name} className="border border-gray-200 rounded-lg p-[2rem] bg-white">
                        <div className="flex items-start gap-[2rem]">
                          {product.product.photos[0].url && (
                            <div className="w-[8rem] aspect-square rounded overflow-hidden flex-shrink-0">
                              <Image
                                src={API_URL + product.product.photos[0].url}
                                alt={product.product.name}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}

                          <div className="flex-1">
                            <h3 className="text-[1.6rem] font-semibold text-dark-primary mb-[1rem]">{product?.product.name}</h3>

                            {product.variants && (
                              <ul className="text-[1.3rem] text-gray-600 space-y-[.2rem] mb-[1rem]">
                                {Object.entries(product.variants).map(([varientName, variantValue]) => (
                                  <li className="" key={variantValue.variant.id}>
                                    {variantValue ? (
                                      <>
                                        {variantValue.variant.name} : {variantValue.option.label}
                                      </>
                                    ) : (
                                      <>{variantValue.variant.name}</>
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
                                {/* Prix unitaire : <span className="font-semibold">{item.price.toFixed(2)}€</span> */}
                              </div>
                              <div className="text-[1.6rem] font-bold text-dark-primary">
                                {/* {(item.price * item.quantity).toFixed(2)}€ */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )),
                  )}
                </div>

                {/* <div className={orderTotal()}>
                  <div className={orderTotalAmount()}>Total : {total.toFixed(2)}€</div>
                </div> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
