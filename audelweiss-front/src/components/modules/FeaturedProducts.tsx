'use client';

import Image from 'next/image';
import CustomLink from '@/src/components/atoms/CustomLink';
import Button from '@/src/components/atoms/Button';
import clsx from 'clsx';

import { ComponentBlocksFeaturedProducts } from '@/src/types/generated';
import { renderRichText } from '@/src/utils/renderRichtext';

import { tv } from 'tailwind-variants';

// Réutilisation des styles de ShoppingList
const styles = tv({
  slots: {
    section: "featured-products inner-wrap py-[5rem] text-center",
    heading: "text-[2.8rem] mx-auto mb-[4rem] leading-relaxed",
    productsGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] mb-[4rem]",
    productLink: "group flex flex-col",
    productImageWrapper: "relative w-full aspect-[4/3] rounded-[1rem] overflow-hidden",
    productImage: "object-cover w-full h-full",
    productCategoriesTags: "absolute top-[1rem] left-[1rem] flex items-center gap-[1rem] flex-wrap z-1",
    productTag: "relative px-[1rem]! py-[.8rem]! w-fit text-[1.3rem] pointer-events-none",
    productCardHoverSection: "absolute bottom-0 left-0 w-full flex justify-center z-10",
    productHoverButton: "translate-y-0 bg-dark-primary! text-[1.4rem] opacity-0 group-hover:translate-y-[-1.8rem] group-hover:opacity-100 transition-all duration-500",
    productName: "mt-[1.2rem] text-center text-dark-primary font-medium text-[1.6rem]",
    productCaracteristics: "mt-[.8rem] text-center text-[1.5rem]",
    productOldPrice: "text-gray-400 line-through mr-[1rem]",
    productCurrentPrice: "text-primary font-bold",
  },
});

const {
  section, heading, productsGrid, productLink,
  productImageWrapper, productImage, productCategoriesTags, productTag,
  productCardHoverSection, productHoverButton,
  productName, productCaracteristics, productOldPrice, productCurrentPrice,
} = styles();

type Props = {
  block: ComponentBlocksFeaturedProducts;
  className?: string;
};

export default function FeaturedProducts({ block, className = "" }: Props) {
  return (
    <section className={clsx(section(), className)}>
      <div className={heading()}>
        {renderRichText(block.headingBlock)}
      </div>

      <div className={productsGrid()}>
        {block.products
          .filter((product): product is NonNullable<typeof product> => product != null)
          .map((product) => (
            <CustomLink
              key={product?.documentId}
              href={product.productSlug ?? "#_"}
              className={productLink()}
            >
              <div className={productImageWrapper()}>
                {product.photos?.[0] && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${product.photos[0].url}`}
                    alt={product.photos[0].alternativeText || "Produit"}
                    width={280}
                    height={210}
                    className={productImage()}
                  />
                )}

                {/* Tags catégories */}
                {product.subcategories?.length > 0 && (
                  <ul className={productCategoriesTags()}>
                    {product.subcategories.map((cat, index) => (
                      <li key={index}>
                        <Button isSpanButton className={productTag()}>
                          {cat.name}
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Bouton hover */}
                <div className={productCardHoverSection()}>
                  <Button isSpanButton className={productHoverButton()}>
                    Voir l'article
                  </Button>
                </div>
              </div>

              <div className={productName()}>{product.name}</div>
              <div className={productCaracteristics()}>
                {product.oldPrice && (
                  <span className={productOldPrice()}>
                    {product.oldPrice.toFixed(2)} €
                  </span>
                )}
                <span className={productCurrentPrice()}>
                  {product.price.toFixed(2)} €
                </span>
              </div>
            </CustomLink>
          ))}
      </div>

      {block.blockLink?.url && block.blockLink.label && (
        <CustomLink isButtonLink withIcon href={block.blockLink.url}>
          {block.blockLink.label}
        </CustomLink>
      )}
    </section>
  );
}
