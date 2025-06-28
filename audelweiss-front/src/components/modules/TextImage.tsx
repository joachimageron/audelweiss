"use client";

import Image from "next/image";
import clsx from "clsx";

import { ComponentBlocksImageAndText } from "@/src/types/generated";
import { renderRichText } from "@/src/utils/renderRichtext";
import { tv } from "tailwind-variants";

type Props = {
  block: ComponentBlocksImageAndText;
  className?: string;
};

const styles = tv({
  slots: {
    section: "text-image-block inner-wrap py-[5rem]",
    container: "flex flex-col lg:flex-row items-center gap-x-[4rem] gap-y-[1rem]",
    textCol: "w-full lg:w-2/3",
    imageCol: "flex justify-center w-full",
    image: "w-full h-auto object-contain max-w-full rounded-[1rem]",
  },
  variants: {
    isImageLeft: {
      true: {
        container: "lg:flex-row-reverse",
      },
    },
    isImageTaller: {
      true: {
        imageCol: "lg:w-[60%]",
      },
      false: {
        imageCol: "lg:w-[35%]",
      },
    },
  },
});

const { section, container, textCol, imageCol, image } = styles();

export default function TextImage({ block, className = "" }: Props) {
  return (
    <section className={clsx(section(), className)}>
      <div className={container({ isImageLeft: block?.isImageLeft })}>
        <div className={textCol()}>{renderRichText(block?.textWithImage)}</div>

        <div className={imageCol({ isImageTaller: !!block?.isImageTaller })}>
          {block?.image?.url && (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${block.image.url}`}
              alt={block.image.alternativeText || "Illustration"}
              width={600}
              height={400}
              className={image()}
            />
          )}
        </div>
      </div>
    </section>
  );
}
