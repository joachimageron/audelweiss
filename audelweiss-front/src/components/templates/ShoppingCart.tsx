"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

import { useCart } from "@/src/components/providers/CartProvider";

import { tv } from "tailwind-variants";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import Button from "@/src/components/atoms/Button";
import CustomLink from "@/src/components/atoms/CustomLink";
import Image from "../atoms/Image";
import { useCreateOrder } from "@/src/hooks/useCreateOrder";
import { useCreateOrderItem } from "@/src/hooks/useCreateOrderItem";
import { useUser } from "@/src/hooks/useUser";

export const styles = tv({
  slots: {
    mainWrapper: "inner-wrap py-[3rem]",
    sectionTitle: "text-[2.8rem] text-center",
    noProductMessageWrapper: "text-center py-[5rem]",
    noProductMessage: "text-[1.6rem] text-gray-500 mb-[2rem]",
    noProductButton: "bg-primary hover:bg-dark-primary",
    cartTableWrapper: "w-full overflow-x-auto",
    cartTable: "w-full min-w-[700px] border-separate border-spacing-y-[3rem]",
    cartTableHeaderRow: "table-row",
    cartTableHeader: "text-left text-[1.5rem] font-bold text-dark-primary border-b border-gray-300 pb-[.6rem]",
    cartTableRow: "border-b border-gray-200 pb-[2rem]",
    cartTableCell: "text-start align-middle text-[1.5rem] text-primary",
    cartProductInfos: "flex items-center",
    cartProductImage: "w-[8rem] aspect-square rounded overflow-hidden mr-[2rem]",
    cartProductLink: "as--underline-hover",
    cartProductCaracteristicsList: "mt-[.6rem] text-[1.3rem] text-gray-500 space-y-[.2rem] list-disc list-inside",
    cartProductQuantityInput: "w-[6rem] text-center border border-gray-300 p-[.4rem] text-[1.5rem]",
    cartProductQuantityError: "text-[1.3rem] text-red-500 mt-[.5rem]",
    cartDeleteProductCell: "text-end align-middle text-[1.5rem] text-primary",
    cartDeleteProductButton: "p-[1rem] border rounded-[.6rem] text-primary hover:text-dark-primary cursor-pointer",
    cartTotalSection: "mt-[2rem] flex justify-between flex-wrap gap-[3rem]",
    cartTotalPriceWrapper: "text-right text-[1.6rem] font-bold text-dark-primary",
    promoCodeWrapper: "flex flex-wrap items-center gap-[1.5rem] h-[4.5rem]",
    promoCodeLabel: "sr-only",
    promoCodeInput: "h-full border px-[1rem] py-[.8rem] text-[1.4rem] rounded text-dark-primary",
    promoCodeButton: "h-full",
    deleteProductModalOverlay: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
    deleteProductModalWrapper: "bg-white p-[2rem] rounded shadow-md w-[90%] max-w-[40rem] text-center",
    deleteProductModalText: "text-[1.6rem] mb-[2rem]",
    deleteProductModalButtons: "flex justify-center gap-[2rem]",
    cancelProductDeletionButton: "bg-gray-200! text-text! hover:bg-gray-300!",
    paymentButtonArea: "flex justify-center mt-[12rem] mb-[5rem] lg:my-[8rem]",
  },
});

export const {
  mainWrapper,
  sectionTitle,
  noProductMessageWrapper,
  noProductMessage,
  noProductButton,
  cartTableWrapper,
  cartTable,
  cartTableHeaderRow,
  cartTableHeader,
  cartTableRow,
  cartTableCell,
  cartProductInfos,
  cartProductImage,
  cartProductLink,
  cartProductCaracteristicsList,
  cartProductQuantityInput,
  cartProductQuantityError,
  cartDeleteProductCell,
  cartDeleteProductButton,
  cartTotalSection,
  cartTotalPriceWrapper,
  promoCodeWrapper,
  promoCodeLabel,
  promoCodeInput,
  promoCodeButton,
  deleteProductModalOverlay,
  deleteProductModalWrapper,
  deleteProductModalText,
  deleteProductModalButtons,
  cancelProductDeletionButton,
  paymentButtonArea,
} = styles();

// Types pour les variants
type VariantValue = {
  label: string;
  id: string;
};

type VariantSelection = {
  variant: {
    id: string;
    name: string;
  };
  option: VariantValue;
};

export default function ShoppingCart() {
  const { cartItems, setCartItems, total } = useCart();
  const [promo, setPromo] = useState("");
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [quantityErrors, setQuantityErrors] = useState<Record<number, string>>({});
  const { user } = useUser();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, value: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.stock ? Math.min(value, item.stock) : value } : item,
      ),
    );

    const item = cartItems.find(i => i.id === id);
    if (item && item.stock && value > item.stock) {
      setQuantityErrors(prev => ({ ...prev, [id]: `Il en reste seulement ${item.stock} en stock` }));
    } else if (item && item.stock) {
      setQuantityErrors(prev => {
        const { [id]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  // Fonction pour convertir les variants du panier en format backend
  const convertVariantsToBackendFormat = (variants: Record<string, VariantSelection | undefined>) => {
    const variantOptions: string[] = [];

    Object.values(variants).forEach(selection => {
      if (selection) {
        // Ajouter l'ID de l'option sélectionnée
        variantOptions.push(selection.option.id);
      }
    });

    return variantOptions;
  };

  const createOrderItems = async (items: typeof cartItems) => {
    const ids = [];
    for (const item of items) {
      // Convertir les variants en format attendu par le backend
      const variantOptions = convertVariantsToBackendFormat(item.variants || {});

      const orderItem = {
        quantity: item.quantity,
        item: {
          __typename: "ComponentOrderItemProductReference",
          __component: "order.item-product-reference",
          product: item.id,
          product_variant_option: variantOptions,
          // product_variant_option: variantOptions,
        },
      };

      console.log("Creating order item:", orderItem);
      const res = await createOrderItemMutation(orderItem);
      console.log("res : ", res);
      ids.push(res.item[0].id - 1);
    }
    return ids;
  };

  const { mutateAsync: createOrderItemMutation } = useCreateOrderItem();
  const { mutateAsync: createOrderMutation } = useCreateOrder();

  const onOrderSubmit = async (items: typeof cartItems) => {
    try {
      console.log("Submitting order with items:", items);
      const itemsIds = await createOrderItems(items);

      if (itemsIds) {
        const orderId = await createOrderMutation({
          user: user?.documentId,
          order_items: itemsIds.map(id => Number(id)),
        });
        console.log("Order created with ID:", orderId);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  // Fonction pour afficher les variants dans le panier
  const renderVariantInfo = (variants: Record<string, VariantSelection | undefined>) => {
    const variantList: JSX.Element[] = [];

    Object.values(variants).forEach((selection, index) => {
      if (selection) {
        variantList.push(
          <li key={index}>
            {selection.variant.name} : {selection.option.label}
          </li>,
        );
      }
    });

    return variantList;
  };

  return (
    <div className={mainWrapper()}>
      <button onClick={() => onOrderSubmit(cartItems)}>Créer la commande</button>
      <section>
        <CustomTitle level={2} className={sectionTitle()}>
          Contenu du panier
        </CustomTitle>

        {cartItems.length === 0 ? (
          <div className={noProductMessageWrapper()}>
            <p className={noProductMessage()}>Votre panier est vide.</p>
            <CustomLink href="/boutique" isButtonLink className={noProductButton()} withIcon>
              Se balader dans la boutique
            </CustomLink>
          </div>
        ) : (
          <>
            <div className={cartTableWrapper()}>
              <table className={cartTable()}>
                <thead>
                  <tr className={cartTableHeaderRow()}>
                    <th className={cartTableHeader()}>Produit</th>
                    <th className={cartTableHeader()}>Prix unitaire</th>
                    <th className={cartTableHeader()}>Quantité</th>
                    <th className={cartTableHeader()}>Total du produit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.name} className={cartTableRow()}>
                      <td className={cartTableCell()}>
                        <div className={cartProductInfos()}>
                          <div className={cartProductImage()}>
                            <Image src={item.image} alt={item.name} width={80} height={80} />
                          </div>
                          <div>
                            <h3>{item.name}</h3>
                            {/* Affichage des variants */}
                            {item.variants && Object.keys(item.variants).length > 0 && (
                              <ul className={cartProductCaracteristicsList()}>{renderVariantInfo(item.variants)}</ul>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className={cartTableCell()}>{item.price.toFixed(2)}€</td>
                      <td className={cartTableCell()}>
                        <input
                          type="number"
                          min={1}
                          max={item.stock}
                          value={item.quantity}
                          onChange={e => handleQuantityChange(item.id, +e.target.value)}
                          className={cartProductQuantityInput()}
                        />
                        {quantityErrors[item.id] && (
                          <p className={cartProductQuantityError()}>{quantityErrors[item.id]}</p>
                        )}
                      </td>
                      <td className={cartTableCell()}>{(item.price * item.quantity).toFixed(2)}€</td>
                      <td className={cartDeleteProductCell()}>
                        <button
                          onClick={() => {
                            setProductToDelete(item.id);
                            setShowConfirm(true);
                          }}
                          className={cartDeleteProductButton()}
                          aria-label="Supprimer ce produit"
                        >
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={cartTotalSection()}>
              <div className={cartTotalPriceWrapper()}>Total à payer : {totalAmount.toFixed(2)}€</div>
              {/* TODO BACK: Gérer les codes promos */}
              <form className={promoCodeWrapper()}>
                <label htmlFor="promo" className={promoCodeLabel()}>
                  Saisissez un code promo
                </label>
                <input
                  id="promo"
                  type="text"
                  value={promo}
                  onChange={e => setPromo(e.target.value)}
                  placeholder="Code promo"
                  className={promoCodeInput()}
                />
                <Button type="submit" className={promoCodeButton()}>
                  Valider le code promo
                </Button>
              </form>
            </div>
          </>
        )}
      </section>

      {showConfirm && (
        <div className={deleteProductModalOverlay()}>
          <div className={deleteProductModalWrapper()}>
            <p className={deleteProductModalText()}>Voulez-vous vraiment supprimer ce produit du panier ?</p>
            <div className={deleteProductModalButtons()}>
              <Button
                onClick={() => {
                  setCartItems(prev => prev.filter(item => item.id !== productToDelete));
                  setShowConfirm(false);
                  setProductToDelete(null);
                }}
              >
                Supprimer
              </Button>
              <Button onClick={() => setShowConfirm(false)} className={cancelProductDeletionButton()}>
                Annuler
              </Button>
            </div>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className={paymentButtonArea()}>
          <CustomLink href="/commande" isButtonLink withIcon>
            Valider la commande
          </CustomLink>
        </div>
      )}
    </div>
  );
}
