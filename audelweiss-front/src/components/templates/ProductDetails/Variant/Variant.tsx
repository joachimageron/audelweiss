import { ProductVariant } from "@/src/types/generated";
import { tv } from "tailwind-variants";
import RadioVariant from "./RadioVariant";
import InputVariant from "./InputVariant";
import CheckboxVariant from "./CheckboxVariant";

const styles = tv({
  slots: {
    title: "mb-[1rem] text-[1.6rem] font-semibold text-text",
    helper: "text-[1.4rem] italic mb-[.4rem]",
    selectedValue: "ml-[.5rem] text-primary",
    errorMessage: "text-[1.4rem] text-red-500 font-medium",
  },
});
const { title, helper, errorMessage } = styles();

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
  variant: ProductVariant;
  onVariantChange: (variantName: string, optionValue: VariantValue) => void;
  values: Record<string, VariantSelection | undefined>;
};

const Variant = ({ variant, onVariantChange, values }: Props) => {
  const error = false;
  const currentSelection = values[variant.name];
  const currentValue = currentSelection?.option;

  return (
    <div className={variant.format === "input" ? "w-full" : undefined}>
      {error && <span className={errorMessage()}>Message d&apos;erreur</span>}
      <p className={title()}>
        {variant.name}
        {variant.format === "radio" && currentValue?.label && (
          <>
            : <span className="text-primary">{currentValue.label}</span>
          </>
        )}
      </p>
      {variant.helper_text && <p className={helper()}>{variant.helper_text}</p>}

      {variant.format === "radio" && (
        <RadioVariant variant={variant} onChange={value => onVariantChange(variant.name, value)} value={currentValue} />
      )}
      {variant.format === "input" && (
        <InputVariant variant={variant} onChange={value => onVariantChange(variant.name, value)} />
      )}
      {variant.format === "checkbox" && (
        <CheckboxVariant variant={variant} onChange={value => onVariantChange(variant.name, value)} />
      )}
    </div>
  );
};

export default Variant;
