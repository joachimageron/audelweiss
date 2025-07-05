import { Product, ProductVariant } from "@/src/types/generated";
import Variant from "./Variant/Variant";
import { tv } from "tailwind-variants";

const styles = tv({
  base: "flex flex-wrap gap-x-[4.5rem] gap-y-[3rem] ",
});

type Props = {
  product: Product;
  className?: string;
};

const Form = ({ product, className }: Props) => {
  return (
    <form className={styles() + " " + className}>
      {product.variants.map(variant => (
        <Variant key={`variant-${variant?.documentId}`} variant={variant as ProductVariant} />
      ))}

      {/* TODO: BOUTON D'AJOUT AU PANIER EN SUBMIT */}
    </form>
  );
};

export default Form;
