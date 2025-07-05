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

type Props = {
  variant: ProductVariant;
};

const Variant = ({ variant }: Props) => {
  const error = false;

  return (
    <div>
      {error && <span className={errorMessage()}>Message d&apos;erreur</span>}
      <p className={title()}>
        {variant.name} :{/* {selectedSize && <span className={criteriaRadioLabel()}>{selectedSize}</span>} */}
      </p>
      {variant.helper_text && <p className={helper()}>{variant.helper_text}</p>}

      {variant.format === "radio" && <RadioVariant variant={variant} />}
      {variant.format === "input" && <InputVariant variant={variant} />}
      {variant.format === "checkbox" && <CheckboxVariant variant={variant} />}
    </div>
  );
};

export default Variant;
