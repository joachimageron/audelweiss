import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    mainWrapper: "inner-wrap mb-[5rem]",
    productTopSection: "flex flex-col lg:flex-row gap-[5rem] my-[1rem]",
    productImagesPart: "relative w-full lg:w-[50%] lg:max-w-[60rem]",
    productImagesMainSlider: "rounded-[1rem] overflow-hidden",
    productImages: "w-full h-auto",
    productInformationsWrapper: "flex flex-col gap-[1.5rem] grow-2",
    productName: "text-[3.2rem]",
    productCategoriesWrapper: "my-[1rem] py-[1.5rem] text-[1.6rem] border-t border-b border-primary",
    productCategoriesTitle: "mr-[1.5rem]",
    productCategoriesList: "inline-flex gap-x-[2.5rem] gap-y-[1rem] flex-wrap",
    productCategoryItem: "text-primary as--underline-hover",

    productCriteriasTitle: "text-[2.2rem]",
    productCriteriasWrapper: "flex flex-wrap gap-x-[4.5rem] gap-y-[3rem] mt-[2rem]",
    criteriaRadioItem: "flex flex-col gap-[.5rem]",
    criteriaErrorMessage: "text-[1.4rem] text-red-500 font-medium",
    criteriaRadioLabelWrapper: "mb-[1rem] text-[1.6rem] font-semibold text-text",
    criteriaRadioLabel: "ml-[.5rem] text-primary",
    criteriaColorsChoiceWrapper: "flex flex-wrap gap-[1.2rem]",
    criteriaColorsChoiceItem:
      "relative block w-[3rem] h-[3rem] cursor-pointer rounded-[.3rem] border-2 hover:border-primary",
    criteriaColorsChoiceInput: "peer absolute inset-0 opacity-0 cursor-pointer",
    criteriaColorsChoiceTooltip:
      "absolute bottom-full left-1/2 -translate-x-1/2 mb-[.8rem] bg-dark-primary text-white text-[1.4rem] px-[.8rem] py-[.4rem] rounded opacity-0 pointer-events-none whitespace-nowrap peer-hover:opacity-100 peer-focus:opacity-100 transition",
    criteriaTextualRadiosList: "flex gap-[1rem]",
    srOnly: "sr-only",
    criteriaTextualRadiosPriceAdditional: "ml-[.6rem] text-[1.4rem] text-gray-500",
    criteriaCheckboxesLabel: "font-semibold text-[1.6rem] mb-[.8rem]",
    criteriaCheckboxesList: "flex flex-col gap-y-[1.5rem] mt-[.6rem]",
    criteriaCheckboxesListItem: "min-w-[40%]",
    criteriaCheckboxesItemLabel: "flex items-center text-dark-primary cursor-pointer",
    criteriaCheckboxesItemInput: "accent-primary mr-[1rem] w-[2rem] h-[2rem]",
    criteriaCheckboxesItemAdditionnalPrice: "ml-[.6rem] text-[1.4rem] text-gray-500 font-bold",
    criteriaCustomizationWrapper: "w-[50%]",
    criteriaCustomizationLabel: "text-[1.4rem] italic mb-[.4rem]",
    criteriaCustomizationInput: "w-full bg-gray-100 p-[.8rem] rounded text-[1.5rem]",
    addingProductSection: "mt-[2rem] flex flex-col",
    specialOfferText: "mb-[2rem] bg-light-primary px-[1rem] py-[.8rem] rounded-[.4rem]",
    quantityStockText: "text-[1.5rem] text-secondary font-semibold",
    choiceQuantityWrapper: "flex items-center gap-[1.5rem]",
    choiceQuantityInput:
      "w-[6rem] border border-gray-300 rounded-[.4rem] px-[.6rem] py-[.4rem] text-center text-[1.5rem] text-dark-primary",
    addingToCartButton: "mt-[1.5rem] w-fit bg-secondary hover:bg-dark-secondary",
    outOfStockMessage: "text-[1.5rem] text-red-600 font-semibold",
  },
});

export const colorSwatch = tv({
  base: "w-full h-full rounded-[.2rem] ring-3 transition",
  variants: {
    selected: {
      true: "ring-primary",
      false: "ring-transparent",
    },
  },
});
