import { ProductVariant } from "@/src/types/generated";
import { tv } from "tailwind-variants";

const radio = tv({
  slots: {
    base: "flex flex-col gap-y-[1.5rem] mt-[.6rem]",
    item: "min-w-[40%]",
    label: "flex items-center text-dark-primary cursor-pointer",
    input: "accent-primary mr-[1rem] w-[2rem] h-[2rem]",
    price: "ml-[.6rem] text-[1.4rem] text-gray-500 font-bold",
  },
});
const { base, item, label, input, price } = radio();

type Props = {
  variant: ProductVariant;
  onChange?: (value: string) => void;
};

const CheckboxVariant = ({ variant, onChange }: Props) => {
  return (
    <ul className={base()}>
      {variant.variant_options.map(option => (
        <li key={`${variant.name}-${option?.label}`} className={item()}>
          <label className={label()}>
            <input
              type="checkbox"
              // value={option.value}
              onChange={e => {
                onChange?.(e.target.value);
              }}
              className={input()}
            />
            {option?.label}
            {option && option.price && option.price !== 0 && (
              <span className={price()}>
                ({option.price > 0 ? "+" : ""}
                {option.price.toFixed(2)}€)
              </span>
            )}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxVariant;
