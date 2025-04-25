"use client";

import { ArrowRight } from "@/src/components/icons";

import { tv } from "tailwind-variants";
import clsx from "clsx";

type ButtonProps = {
  /**
   * children ---> child content
   */
  children: React.ReactNode;
  /**
   * onClick ---> function to call on click inside
   */
  onClick?: () => void;
  /**
   * type ---> button's type, can be 'button', 'submit' or 'reset'
   */
  type?: "button" | "submit" | "reset";
  /**
   * className ---> elements' additionnal classes
   */
  className?: string;
  /**
   * withIcon ---> if true : adding a left arrow icon which appears on hover
   */
  withIcon?: boolean;
  /**
   * isSpanButton ---> allows to use <span> tags instead of <button> tags
   */
  isSpanButton?: boolean;
  /**
   * tabIndex ---> allows to managed to accessibility with tab navigation
   */
  tabIndex?: number;
};

const styles = tv({
  slots: {
    customButtonBase: "inline-block px-[2rem] py-[1.2rem] text-center leading-none bg-primary hover:bg-dark-primary text-white rounded-[4px] transition duration-200 cursor-pointer",
    iconArrowRight: "w-1.5 h-1.5 a-icon",
  },
  variants: {
    withIcon: {
      true: {
        customButtonBase: "as--icon",
      }
    },
  },
});
const { customButtonBase, iconArrowRight } = styles();

const Button = ({ children, onClick, type = "button", className = "", withIcon = false, isSpanButton = false, tabIndex }: ButtonProps) => {
  const commonProps = {
    onClick,
    className: clsx(customButtonBase({ withIcon }), className),
    tabIndex,
  };

  if (isSpanButton) {
    return (
      <span {...commonProps}>
        {children}
        {withIcon && <ArrowRight className={iconArrowRight()} />}
      </span>
    );
  }

  return (
    <button type={type} {...commonProps}>
      {children}
      {withIcon && <ArrowRight className={iconArrowRight()} />}
    </button>
  );
};

export default Button;
