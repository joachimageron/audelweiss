"use client";

import { JSX } from "react";

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

export default function CustomTitle({ level = 2, children, className = "text-[4rem]" }: TitleProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`font-aboreto font-bold ${className}`}>{children}</Tag>;
}
