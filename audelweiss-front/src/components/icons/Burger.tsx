import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement> & {
  className?: string;
};

const Burger = ({ ...props }: Props) => {
  return (
    <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="8" width="40" height="4" rx="2.5" ry="2.5" />
      <rect x="5" y="18" width="40" height="4" rx="2.5" ry="2.5" />
      <rect x="5" y="28" width="40" height="4" rx="2.5" ry="2.5" />
    </svg>
  );
};

export default Burger;
