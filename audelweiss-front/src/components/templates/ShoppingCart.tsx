"use client";

import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

import { useCart } from "@/src/components/providers/CartProvider";

import { tv } from "tailwind-variants";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import Button from "@/src/components/atoms/Button";
import CustomLink from "@/src/components/atoms/CustomLink";
import Image from "../atoms/Image";
import { useOrders } from "@/src/hooks/useOrders";

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

export default function ShoppingCart() {
  const { cartItems, setCartItems, total } = useCart();
  const [promo, setPromo] = useState("");
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [quantityErrors, setQuantityErrors] = useState<Record<number, string>>({});

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, value: number) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: Math.min(item.stock, Math.max(1, value)) } : item)),
    );

    const item = cartItems.find(i => i.id === id);
    if (item && value > item.stock) {
      setQuantityErrors(prev => ({ ...prev, [id]: `Il en reste seulement ${item.stock} en stock` }));
    } else {
      setQuantityErrors(prev => {
        const { [id]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const { data: orders } = useOrders({ queryKey: ["orders"], filters: { id: "g49z2ehk09t7gtvq0l6hmp00" } });

  console.log("orders : ", orders);

  return (
    <div className={mainWrapper()}>
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
                    <tr key={item.id} className={cartTableRow()}>
                      <td className={cartTableCell()}>
                        <div className={cartProductInfos()}>
                          <div className={cartProductImage()}>
                            <Image src={item.image} alt={item.name} width={80} height={80} />
                          </div>
                          <div>
                            {/* <CustomLink className={cartProductLink()} href={item.slug}>
                              {item.name}
                            </CustomLink> */}
                            {item.details && (
                              <ul className={cartProductCaracteristicsList()}>
                                {item.details.color && <li>Couleur : {item.details.color}</li>}
                                {item.details.size && <li>Taille : {item.details.size}</li>}
                                {item.details.motif && <li>Motif : {item.details.motif}</li>}
                                {item.details.pompon && <li>Avec pompon : {item.details.pompon}</li>}
                                {Array.isArray(item.details.options) && item.details.options.length > 0 && (
                                  <li>Options : {item.details.options.join(", ")}</li>
                                )}
                                {item.details.giftWrap && <li>Emballage : {item.details.giftWrap}</li>}
                                {item.details.personalization && (
                                  <li>Message personnalisé : {item.details.personalization}</li>
                                )}
                              </ul>
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

      {cartItems.length > 0 && <div className={paymentButtonArea()}>
        <CustomLink href="/commande" isButtonLink withIcon>
          Valider la commande
        </CustomLink>
      </div>}
    </div>
  );
}
