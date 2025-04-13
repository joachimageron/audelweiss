"use client";

import Link from "next/link";
import { ArrowRight } from "../icons";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  target?: "_blank" | "_self";
  withIcon?: boolean;
  isButtonLink?: boolean;
};

const CustomLink = ({
  href,
  children,
  className = "",
  title = "",
  target = "_self",
  withIcon = false,
  isButtonLink = false,
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      title={title}
      className={`${className} ${
        isButtonLink
          ? "inline-block px-[2rem] py-[1.2rem] text-center leading-none bg-primary hover:bg-dark-primary text-white rounded-[4px] transition duration-200"
          : ""
      } ${withIcon ? "as--icon" : ""}`}
    >
      {children}
      {withIcon && <ArrowRight className="w-1.5 h-1.5 a-icon" />}
    </Link>
  );
};

export default CustomLink;
