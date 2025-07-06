"use client";

import { useState } from "react";
import { useCart } from "@/src/components/providers/CartProvider";

import { tv } from "tailwind-variants";
import Button from "@/src/components/atoms/Button";
import InputField from "@/src/components/atoms/CustomInputField";
import CustomLink from "../atoms/CustomLink";

export const styles = tv({
    slots: {
        mainWrapper: "inner-wrap py-[3rem]",
        returnButtonArea: "flex justify-end",
        sectionTitle: "text-[2.8rem] text-center",
        formSection: "mb-[4rem]",
        formWrapper: "flex flex-col gap-[5rem]",
        formPartTitle: "text-[2rem] font-bold mb-[2rem]",
        formInputsGrid: "grid grid-cols-1 md:grid-cols-2 gap-[2rem]",
        formCheckboxWrapper: "my-[2rem] flex items-center gap-[.2rem]",
        formCheckboxInput: "accent-primary mr-[1rem] w-[2rem] h-[2rem] cursor-pointer",
        formBottomPart: "flex flex-col gap-[2rem]",
        formTexteareaWrapper: "flex flex-col gap-[.5rem]",
        formTexteareaInput: "border px-[1.6rem] py-[1.2rem] rounded-[.4rem] text-dark-primary placeholder:text-dark-primary focus:ring-1 focus:ring-primary outline-none resize-none",
        formSubmitButton: "mt-[2rem] text-[1.6rem] self-center"
    },
});

export const {
    mainWrapper, returnButtonArea, sectionTitle, formSection, formWrapper,
    formPartTitle, formInputsGrid, formCheckboxWrapper, formCheckboxInput, formBottomPart,
    formTexteareaWrapper, formTexteareaInput, formSubmitButton
} = styles();

export default function ShoppingForm() {
    const [createAccount, setCreateAccount] = useState(false);
    const [shippingDiffers, setShippingDiffers] = useState(false);

    const { total } = useCart();

    return (
        <div className={mainWrapper()}>
            <div className={returnButtonArea()}>
                <CustomLink href="/panier" isButtonLink>
                    Revenir au panier
                </CustomLink>
            </div>

            <section className={formSection()}>
                {/* TODO BACK: Gérer l'autoremplissage des champs avec les données de l'utilisateur s'il est connecté */}
                <form className={formWrapper()}>
                    <div>
                        <h3 className={formPartTitle()}>Détails de facturation</h3>
                        <div className={formInputsGrid()}>
                            <InputField id="billing-lastname" label="Nom" required />
                            <InputField id="billing-firstname" label="Prénom" required />
                            <InputField id="billing-email" label="Adresse mail" type="email" required />
                            <InputField id="billing-phone" label="Téléphone" type="tel" required />
                            <InputField id="billing-address" label="Adresse" required />
                            <InputField id="billing-address2" label="Complément d'adresse" />
                            <InputField id="billing-postal" label="Code postal" required />
                            <InputField id="billing-city" label="Ville" required />
                            <InputField id="billing-country" label="Pays" required />
                        </div>

                        <div className={formCheckboxWrapper()}>
                            <input
                                id="create-account"
                                type="checkbox"
                                checked={createAccount}
                                onChange={() => setCreateAccount(!createAccount)}
                                className={formCheckboxInput()}
                            />
                            <label htmlFor="create-account">Je souhaite me créer un compte</label>
                        </div>
                    </div>

                    <div>
                        <h3 className={formPartTitle()}>Détails de livraison</h3>

                        <div className={formCheckboxWrapper()}>
                            <input
                                id="shipping-differs"
                                type="checkbox"
                                checked={shippingDiffers}
                                onChange={() => setShippingDiffers(!shippingDiffers)}
                                className={formCheckboxInput()}
                            />
                            <label htmlFor="shipping-differs">L'adresse de livraison est différente de celle de facturation</label>
                        </div>

                        {shippingDiffers && (
                            <div className={formInputsGrid()}>
                                <InputField id="shipping-lastname" label="Nom" required />
                                <InputField id="shipping-firstname" label="Prénom" required />
                                <InputField id="shipping-address" label="Adresse" required />
                                <InputField id="shipping-address2" label="Complément d'adresse" />
                                <InputField id="shipping-postal" label="Code postal" required />
                                <InputField id="shipping-city" label="Ville" required />
                                <InputField id="shipping-country" label="Pays" required />
                            </div>
                        )}
                    </div>

                    <div className={formBottomPart()}>
                        <div className={formTexteareaWrapper()}>
                            <label htmlFor="instructions">Instructions de livraison</label>
                            <textarea
                                id="instructions"
                                rows={4}
                                className={formTexteareaInput()}
                                placeholder="Laissez un message ou une instruction spéciale pour la livraison"
                            />
                        </div>

                        <Button type="submit" className={formSubmitButton()}>
                            Payer {total.toFixed(2)}€
                        </Button>
                    </div>
                </form>
            </section>
        </div>
    );
}