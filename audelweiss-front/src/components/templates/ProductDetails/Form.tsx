import { Product, ProductVariant } from "@/src/types/generated";
import Variant from "./Variant/Variant";
import { tv } from "tailwind-variants";
import { useState } from "react";
import Button from "../../atoms/Button";
import { useAddToCart } from "@/src/hooks/useAddToCart";
import { CartItem } from "../../providers/CartProvider";

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

type Props = {
  product: Product;
  className?: string;
};

const Form = ({ product, className }: Props) => {
  const [variantValues, setVariantValues] = useState<Record<string, unknown>>({});
  const [quantity, setQuantity] = useState(0);
  const addToCart = useAddToCart();

  console.log(product);

  const stock = product.stock ??
    product.variants?.reduce((acc, variant) => acc + (variant?.stock ?? 0), 0) ?? 0;

  const onVariantChange = (name: string, value: string) => {
    setVariantValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    // if (!validateForm()) return;

    const item: CartItem = {
      id: product.id,
      name: product.name,
      image: product.photos[0]?.url,
      variants: variantValues,
      quantity,
      price: product.price, // TODO: add variants price
    };

    addToCart(item);

    // TODO: envoyer au backend ou ajouter au panier
  };

  return (
    <form className={base() + " " + className} onSubmit={onSubmit}>
      {product.variants.map(variant => (
        <Variant
          key={`variant-${variant?.documentId}`}
          variant={variant as ProductVariant}
          onVariantChange={onVariantChange}
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
  );
};

export default Form;
