import { Product, ProductVariant } from "@/src/types/generated";
import Variant from "./Variant/Variant";
import { tv } from "tailwind-variants";
import { useState } from "react";
import Button from "../../atoms/Button";
import { useAddToCart } from "@/src/hooks/useAddToCart";
import { CartItem } from "../../providers/CartProvider";
import CustomLink from "../../atoms/CustomLink";

const styles = tv({
  slots: {
    base: "flex flex-wrap items-end gap-x-[5.5rem] gap-y-[3rem]",
    stockLeft: "text-[1.5rem] text-secondary font-semibold",
    chosenQuantity: "flex items-center gap-[1.5rem]",
    quantityInput:
      "w-[6rem] border border-gray-300 rounded-[.4rem] px-[.6rem] py-[.4rem] text-center text-[1.5rem] text-dark-primary",
  },
});

const { base, stockLeft, chosenQuantity, quantityInput } = styles();

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

type Props = {
  product: Product;
  className?: string;
};

const Form = ({ product, className }: Props) => {
  const [variantValues, setVariantValues] = useState<Record<string, VariantSelection | undefined>>({});
  const [quantity, setQuantity] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const addToCart = useAddToCart();

  console.log(product);

  const stock = product.stock ?? product.variants?.reduce((acc, variant) => acc + (variant?.stock ?? 0), 0) ?? 0;

  const onVariantChange = (variantName: string, variantId: string, optionValue: VariantValue) => {
    setVariantValues(prev => ({
      ...prev,
      [variantName]: {
        variant: {
          id: variantId,
          name: variantName,
        },
        option: optionValue,
      },
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (!validateForm()) return;

    const item: CartItem = {
      id: product.documentId,
      name: product.name,
      image: product.photos[0]?.url,
      variants: variantValues,
      quantity,
      price: product.price, // TODO: add variants price
      stock: product.stock,
    };

    addToCart(item);

    setShowConfirmation(true);
  };

  return (
    <>
      <form className={base() + " " + className} onSubmit={onSubmit}>
        {product.variants.map(variant => (
          <Variant
            key={`variant-${variant?.documentId}`}
            variant={variant as ProductVariant}
            onVariantChange={(variantName, optionValue) =>
              onVariantChange(variantName, variant?.documentId || "", optionValue)
            }
            values={variantValues}
          />
        ))}

        <div className="mt-[2rem] flex flex-col">
          {stock > 0 && (
            <p className={stockLeft()}>
              {stock} exemplaire{stock > 1 ? "s" : ""} disponible{stock > 1 ? "s" : ""}
            </p>
          )}

          <div className={chosenQuantity()}>
            <label htmlFor="quantity">Combien en désirez-vous ?</label>
            <input
              id="quantity"
              type="number"
              min={1}
              {...(stock > 0 ? { max: stock } : {})}
              value={quantity}
              onChange={e => {
                const value = Number(e.target.value);
                setQuantity(stock > 0 ? Math.min(stock, Math.max(1, value)) : Math.max(1, value));
              }}
              className={quantityInput()}
            />
          </div>
        </div>

        <Button type="submit" className="mt-[1.5rem] w-fit ">
          Ajouter au panier
        </Button>
      </form>
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-[2rem] rounded shadow-md w-[90%] max-w-[40rem] text-center">
            <p className="text-[1.6rem] mb-[2rem]">Le produit a bien été ajouté au panier !</p>
            <div className="flex justify-center gap-[2rem]">
              <Button onClick={() => setShowConfirmation(false)}>Continuer mes achats</Button>
              <CustomLink href="/panier" isButtonLink className="bg-gray-200 hover:bg-gray-300">
                Voir mon panier
              </CustomLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
