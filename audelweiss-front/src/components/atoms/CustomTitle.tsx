"use client";

import { JSX } from "react";
import { tv } from "tailwind-variants";
import clsx from "clsx";

/**
 * Props for the CustomTitle component
 */
type TitleProps = {
  /**
   * level ---> heading's tag level (between 1 & 6)
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * children ---> child content
   */
  children: React.ReactNode;

  /**
   * className ---> elements' additionnal classes
   */
  className?: string;
};

const styles = tv({
  base: "font-aboreto font-bold leading-[1.1]",
});

export default function CustomTitle({
  level = 2,
  children,
  className = "text-[4rem]",
}: TitleProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={clsx(styles(), className)}>{children}</Tag>;
}
