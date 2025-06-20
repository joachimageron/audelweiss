"use client";

import React, { AnchorHTMLAttributes } from "react";

import Link from "next/link";
import { ArrowRight } from "@/src/components/icons";

import { tv } from "tailwind-variants";
import clsx from "clsx";

/**
 * Props for the CustomLink component
 */
type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
   * href ---> link's target
   */
  href: string;

  /**
   * children ---> child content
   */
  children: React.ReactNode;

  /**
   * className ---> elements' additionnal classes
   */
  className?: string;

  /**
   * title ---> potential link's title
   */
  title?: string;

  /**
   * target ---> define the links' destination context
   */
  target?: "_blank" | "_self";

  /**
   * withIcon ---> if true : adding a left arrow icon which appears on hover
   */
  withIcon?: boolean;

  /**
   * isButtonLink ---> if true : adding a button style to the link
   */
  isButtonLink?: boolean;
};

const styles = tv({
  slots: {
    baseLink: "transition duration-200",
    iconArrowRight: "w-1.5 h-1.5 a-icon",
  },
  variants: {
    isButtonLink: {
      true: {
        baseLink:
          "inline-block px-[2rem] py-[1.2rem] text-center leading-none bg-primary hover:bg-dark-primary text-white rounded-[4px]",
      },
    },
    withIcon: {
      true: {
        baseLink: "as--icon",
      },
    },
  },
});

const { baseLink, iconArrowRight } = styles();

const CustomLink = ({
  href,
  children,
  className = "",
  title = "",
  target = "_self",
  withIcon = false,
  isButtonLink = false,
  ...rest
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      title={title}
      {...rest}
      className={clsx(baseLink({ isButtonLink, withIcon }), className)}
    >
      {children}
      {withIcon && <ArrowRight className={iconArrowRight()} />}
    </Link>
  );
};

export default CustomLink;
