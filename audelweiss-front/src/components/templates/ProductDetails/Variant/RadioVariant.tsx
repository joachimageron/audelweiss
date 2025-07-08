import { ProductVariant } from "@/src/types/generated";
import { tv } from "tailwind-variants";
import Image from "@/src/components/atoms/Image";

const radio = tv({
  slots: {
    base: "flex flex-wrap gap-[1rem]",
    item: "relative block cursor-pointer rounded-[.4rem] border-2 hover:border-primary transition",
    tooltip:
      "absolute bottom-full left-1/2 -translate-x-1/2 mb-[.8rem] bg-dark-primary text-white text-[1.4rem] px-[.8rem] py-[.4rem] rounded opacity-0 pointer-events-none whitespace-nowrap peer-hover:opacity-100 peer-focus:opacity-100 transition",
    input: "peer absolute inset-0 opacity-0 cursor-pointer",
  },
  variants: {
    selected: {
      true: {
        item: "border-primary font-semibold",
      },
      false: {
        item: "border-black",
      },
    },
    image: {
      true: {
        item: "w-[4rem] h-[4rem]",
        input: "",
      },
      false: {
        item: "text-[1.5rem]",
        input: "sr-only",
      },
    },
  },
});
const { base, item, input, tooltip } = radio();

type Props = {
  variant: ProductVariant;
  onChange?: (value: string) => void;
  value?: unknown;
};

const RadioVariant = ({ variant, onChange, value }: Props) => {
  return (
    <ul className={base()}>
      {variant.variant_options.map(option => (
        <li
          key={`variant-option-${option?.documentId}`}
          className={item({ selected: value === option?.label, image: Boolean(option?.image) })}
        >
          <label className="block px-[1.6rem] py-[.8rem] cursor-pointer">
            <input
              type="radio"
              name={variant.name}
              value={option?.label}
              onChange={e => {
                onChange?.(e.target.value);
              }}
              className={input({ image: Boolean(option?.image) })}
            />
            {option?.image ? (
              <Image src={option.image.url} alt={option.image.alternativeText || option.label} width={40} height={40} />
            ) : (
              <>{option?.label}</>
            )}
            {option?.image && <div className={tooltip()}>{option.label}</div>}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default RadioVariant;
