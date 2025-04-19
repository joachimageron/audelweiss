'use client';

import Image from "next/image";
import CustomTitle from "../atoms/CustomTitle";
import CustomLink from "../atoms/CustomLink";
import clsx from "clsx";

type TextImageProps = {
  title: string;
  content: React.ReactNode;
  image: {
    src: string;
    alt?: string;
  };
  link: {
    label: string;
    href: string;
  };
  imageLeft?: boolean;
  largeImage?: boolean;
  className?: string;
};

export default function TextImage({
  title,
  content,
  image,
  link,
  imageLeft = false,
  largeImage = false,
  className = "",
}: TextImageProps) {
  return (
    <section className={clsx("text-image-block inner-wrap py-[5rem]", className)}>
      <div
        className={clsx(
          "flex flex-col lg:flex-row items-center gap-[4rem]",
          imageLeft && "lg:flex-row-reverse"
        )}
      >
        {/* Text Column */}
        <div className="w-full lg:w-2/3">
          <CustomTitle level={2} className="mb-[2rem] text-[2.8rem]">{title}</CustomTitle>
          <div className="richtext mb-[2rem] me-[5rem] leading-[3rem]">{content}</div>
          <CustomLink href={link.href} className="text-primary as--underline-hover">
            {link.label}
          </CustomLink>
        </div>

        {/* Image Column */}
        <div
          className={clsx(
            "w-full ms-5",
            largeImage ? "lg:w-[40%]" : "lg:w-1/3",
            "flex justify-center"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt || 'Illustration'}
            width={600}
            height={400}
            className="w-full h-auto object-contain max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
