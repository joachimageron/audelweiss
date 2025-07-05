import CustomTitle from "@/src/components/atoms/CustomTitle";
import { Product } from "@/src/types/generated";
import { tv } from "tailwind-variants";
import Form from "./Form";

const styles = tv({
  slots: {
    base: "flex flex-col gap-[1.5rem] grow-2",
    heading: "text-[3.2rem]",
    // productCategoriesWrapper: "my-[1rem] py-[1.5rem] text-[1.6rem] border-t border-b border-primary",
    // productCategoriesTitle: "mr-[1.5rem]",
    // productCategoriesList: "inline-flex gap-x-[2.5rem] gap-y-[1rem] flex-wrap",
    // productCategoryItem: "text-primary as--underline-hover",
    description: "leading-[1.6]",
    prices: "my-[.8rem] text-[2rem]",
    originalPrice: "text-gray-400 line-through mr-[1.5rem]",
    salePrice: "text-primary font-bold",
    variantsHeading: "text-[2.2rem]",
    form: "mt-[2rem]",
  },
});

const { base, heading, description, prices, salePrice, variantsHeading, form } = styles();

type Props = {
  product: Product;
};

const Aside = ({ product }: Props) => {
  // TODO: HANDLE DISCOUNTS AND VARIANTS
  //   const originalPrice = product.price + pomponExtra + optionsExtra + giftWrapExtra;
  //   const discountedPrice = discount + pomponExtra + optionsExtra + giftWrapExtra;

  //   TODO: HANDLE CATEGORIES

  return (
    <div className={base()}>
      <CustomTitle level={1} className={heading()}>
        {product.name}
      </CustomTitle>

      {/* <div className={productCategoriesWrapper()}>
        <span className={productCategoriesTitle()}>Catégorie(s) :</span>
        <ul className={productCategoriesList()}>
          {categories.map((cat, index) => (
            <li key={index}>
              <CustomLink href={`/boutique/categorie/${cat.toLowerCase()}`} className={productCategoryItem()}>
                {cat}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div> */}

      <p className={description()}>{product.description}</p>

      <div className={prices()}>
        {/* <span className={originalPrice()}>{originalPrice.toFixed(2)} €</span> */}
        {/* <span className={salePrice()}>{discountedPrice.toFixed(2)} €</span> */}
        <span className={salePrice()}>{product.price.toFixed(2)} €</span>
      </div>

      {product.variants && (
        <>
          <CustomTitle level={2} className={variantsHeading()}>
            Sélection de vos besoins
          </CustomTitle>
          <Form product={product} className={form()} />
        </>
      )}
    </div>
  );
};

export default Aside;
