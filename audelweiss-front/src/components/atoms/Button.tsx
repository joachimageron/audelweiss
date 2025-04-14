"use client";

import { ArrowRight } from "../icons";

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
   * tabIndex ---> allows to managed to accessibility with tab navigation
   */
  tabIndex?: number;
};

const Button = ({ children, onClick, type = "button", className = "", withIcon = false, tabIndex }: ButtonProps) => {
  const baseClass = `inline-block px-[2rem] py-[1.2rem] text-center leading-none bg-primary hover:bg-dark-primary text-white rounded-[4px] transition duration-200 ${className} ${
    withIcon ? "as--icon" : ""
  }`;

  return (
    <button type={type} onClick={onClick} className={`${baseClass} cursor-pointer`} tabIndex={tabIndex}>
      {children}
      {withIcon && <ArrowRight className="w-1.5 h-1.5 a-icon" />}
    </button>
  );
};

export default Button;
