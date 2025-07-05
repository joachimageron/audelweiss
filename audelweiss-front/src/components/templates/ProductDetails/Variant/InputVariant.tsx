import { ProductVariant } from "@/src/types/generated";
import { tv } from "tailwind-variants";

const radio = tv({
  slots: {
    base: "w-full bg-gray-100 p-[.8rem] rounded text-[1.5rem]",
  },
});
const { base } = radio();

type Props = {
  variant: ProductVariant;
};

const InputVariant = ({}: Props) => {
  return <input type="text" className={base()} />;
};

export default InputVariant;
