import { Product } from "@/src/types/generated";
import React from "react";
import CustomLink from "../../atoms/CustomLink";
import { tv } from "tailwind-variants";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";

const styles = tv({
  slots: {
    productLink: "group flex flex-col",
    productImageWrapper: "relative w-full aspect-[4/3] rounded-[1rem] overflow-hidden",
    productImage: "object-cover w-full h-full",
    productCategoriesTags: "absolute top-[1rem] left-[1rem] flex items-center gap-[1rem] flex-wrap z-1",
    productTag: "relative px-[1rem]! py-[.8rem]! w-fit text-[1.3rem] pointer-events-none",
    productCardHoverSection: "absolute bottom-0 left-0 w-full flex justify-center z-10",
    productHoverButton:
      "translate-y-0 bg-dark-primary! text-[1.4rem] opacity-0 group-hover:translate-y-[-1.8rem] group-hover:opacity-100 transition-all duration-500",
    productName: "mt-[1.2rem] text-center text-dark-primary font-medium text-[1.6rem]",
    productCaracteristics: "mt-[.8rem] text-center text-[1.5rem]",
    productOldPrice: "text-gray-400 line-through mr-[1rem]",
    productCurrentPrice: "text-primary font-bold",
  },
});

const {
  productLink,
  productImageWrapper,
  productImage,
  productCategoriesTags,
  productTag,
  productCardHoverSection,
  productHoverButton,
  productName,
  productCaracteristics,
  productOldPrice,
  productCurrentPrice,
} = styles();

type Props = {
  product: Product;
  className?: string;
};

const ProductCard = ({ product, className }: Props) => {
  return (
    <CustomLink href={`/boutique/${product.productSlug}`} key={product.documentId} className={productLink()}>
      <div className={productImageWrapper()}>
        <Image src={product.photos[0]?.url} alt={product.name} width={100} height={100} className={productImage()} />
        <ul className={productCategoriesTags()}>
          {product.subcategories.map((tag, index) => (
            <li key={index}>
              <Button isSpanButton className={productTag()}>
                {tag.name}
              </Button>
            </li>
          ))}
        </ul>
        <div className={productCardHoverSection()}>
          <Button isSpanButton className={productHoverButton()}>
            Commander ce produit
          </Button>
        </div>
      </div>
      <div className={productName()}>{product.name}</div>
      <div className={productCaracteristics()}>
        {product.discount > 0 && product.discount < product.price ? (
          <>
            <span className={productOldPrice()}>{product.price.toFixed(2)} €</span>
            <span className={productCurrentPrice()}>
              {(product.price - product.discount).toFixed(2)} €
            </span>
          </>
        ) : (
          <span className={productCurrentPrice()}>{product.price.toFixed(2)} €</span>
        )}
      </div>

    </CustomLink>
  );
};

export default ProductCard;
