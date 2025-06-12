"use client";

import Image from "next/image";
import { useState } from "react";
import { Trash2 } from "lucide-react";

import { tv } from "tailwind-variants";
import CustomTitle from "../atoms/CustomTitle";
import Button from "../atoms/Button";

export const styles = tv({
    slots: {
        wrapper: "inner-wrap py-[3rem]",
        table: "w-full border-separate border-spacing-y-[3rem]",
        header: "text-left text-[1.5rem] font-bold text-dark-primary border-b border-gray-300 pb-[.6rem]",
        row: "border-b border-gray-200 pb-[2rem] flex flex-col sm:table-row",
        cell: "align-middle text-[1.5rem] text-primary",
        imageWrapper: "w-[8rem] aspect-square rounded overflow-hidden mr-[2rem]",
        productInfo: "flex items-center",
        quantityInput: "w-[6rem] text-center border border-gray-300 p-[.4rem] text-[1.5rem]",
        promoForm: "flex flex-wrap items-center gap-[1.5rem] h-[4.5rem]",
        promoInput: "h-full border px-[1rem] py-[.8rem] text-[1.4rem] rounded text-dark-primary",
    },
});

export const {
    wrapper, table, header, row, cell, imageWrapper, productInfo, quantityInput,
    promoForm, promoInput
} = styles();

const MOCK_CART = [
    {
        id: 1,
        name: "SCRUNCHY | Tricotine• - RM1 - Mauve",
        image: "https://picsum.photos/140/140",
        price: 4.0,
        quantity: 2,
        stock: 4,
        details: {
            color: "Mauve",
            size: "Femme",
            motif: "Rayé",
            pompon: "Oui",
            options: ["Protection résine"],
            giftWrap: "Papier kraft",
            personalization: "Je t'aime ❤️",
        },
    },
    {
        id: 2,
        name: "Porte-clé montagne personnalisé",
        image: "https://picsum.photos/200/300",
        price: 8.0,
        quantity: 5,
        stock: 10,
        details: {
            color: "Vert foncé",
            size: "Homme",
            personalization: "Pas moi hahaha",
        },
    },
];

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState(MOCK_CART);
    const [promo, setPromo] = useState("");
    const [productToDelete, setProductToDelete] = useState<number | null>(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [quantityErrors, setQuantityErrors] = useState<Record<number, string>>({});

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


    const handleQuantityChange = (id: number, value: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.min(item.stock, Math.max(1, value)) }
                    : item
            )
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

    return (
        <div className={wrapper()}>
            <section className="text-center">
                <CustomTitle level={2} className="text-[2.8rem]">Contenu de votre panier</CustomTitle>
            </section>

            <table className={table()}>
                <thead>
                    <tr className="hidden sm:table-row">
                        <th className={header()}>Produit</th>
                        <th className={header()}>Prix unitaire</th>
                        <th className={header()}>Quantité</th>
                        <th className={header()}>Total du produit</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id} className={row()}>
                            <td className={cell()}>
                                <div className={productInfo()}>
                                    <div className={imageWrapper()}>
                                        <Image src={item.image} alt={item.name} width={80} height={80} />
                                    </div>
                                    <div>
                                        <p>{item.name}</p>
                                        {item.details && (
                                            <ul className="mt-[.6rem] text-[1.3rem] text-gray-500 space-y-[.2rem] list-disc list-inside">
                                                {item.details.color && <li>Couleur : {item.details.color}</li>}
                                                {item.details.size && <li>Taille : {item.details.size}</li>}
                                                {item.details.motif && <li>Motif : {item.details.motif}</li>}
                                                {item.details.pompon && <li>Avec pompon : {item.details.pompon}</li>}
                                                {Array.isArray(item.details.options) && item.details.options.length > 0 && (
                                                    <li>Options : {item.details.options.join(", ")}</li>
                                                )}
                                                {item.details.giftWrap && <li>Emballage : {item.details.giftWrap}</li>}
                                                {item.details.personalization && <li>Message personnalisé : {item.details.personalization}</li>}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </td>
                            <td className={cell()}>{item.price.toFixed(2)}€</td>
                            <td className={cell()}>
                                <input
                                    type="number"
                                    min={1}
                                    max={item.stock}
                                    value={item.quantity}
                                    onChange={e => handleQuantityChange(item.id, +e.target.value)}
                                    className={quantityInput()}
                                />
                                {quantityErrors[item.id] && (
                                    <p className="text-[1.3rem] text-red-500 mt-[.5rem]">{quantityErrors[item.id]}</p>
                                )}
                            </td>
                            <td className={cell()}>{(item.price * item.quantity).toFixed(2)}€</td>
                            <td className="text-end align-middle text-[1.5rem] text-primary">
                                <button
                                    onClick={() => {
                                        setProductToDelete(item.id);
                                        setShowConfirm(true);
                                    }}
                                    className="p-[1rem] border rounded-[.6rem] text-primary hover:text-dark-primary cursor-pointer"
                                    aria-label="Supprimer ce produit"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between">
                <div className="mt-[3rem] text-right text-[1.6rem] font-bold text-dark-primary">
                    Total à payer : {totalAmount.toFixed(2)}€
                </div>
                <form className={promoForm()}>
                    <label htmlFor="promo" className="sr-only">Saisissez un code promo</label>
                    <input
                        id="promo"
                        type="text"
                        value={promo}
                        onChange={e => setPromo(e.target.value)}
                        placeholder="Code promo"
                        className={promoInput()}
                    />
                    <Button type="submit" className="h-full">Valider le code promo</Button>
                </form>
            </div>

            {showConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-[2rem] rounded shadow-md w-[90%] max-w-[40rem] text-center">
                        <p className="text-[1.6rem] mb-[2rem]">
                            Voulez-vous vraiment supprimer ce produit du panier ?
                        </p>
                        <div className="flex justify-center gap-[2rem]">
                            <Button
                                onClick={() => {
                                    setCartItems(prev => prev.filter(item => item.id !== productToDelete));
                                    setShowConfirm(false);
                                    setProductToDelete(null);
                                }}>
                                Supprimer
                            </Button>
                            <Button
                                onClick={() => setShowConfirm(false)}
                                className="bg-gray-200! text-text! rounded hover:bg-gray-300!">
                                Annuler
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}