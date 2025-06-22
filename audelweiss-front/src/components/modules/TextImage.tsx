'use client';

import Image from "next/image";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import CustomLink from "@/src/components/atoms/CustomLink";
import clsx from "clsx";

import { ComponentBlocksImageAndText } from "@/src/types/generated";
import { renderRichText } from "@/src/utils/renderRichtext";

type Props = {
  block: ComponentBlocksImageAndText;
  className?: string;
};

export default function TextImage({
  block,
  className = "",
}: Props) {
  return (
    <section className={clsx("text-image-block inner-wrap py-[5rem]", className)}>
      <div
        className={clsx(
          "flex flex-col lg:flex-row items-center gap-[4rem]",
          block?.isImageLeft && "lg:flex-row-reverse"
        )}
      >
        {/* Text Column */}
        <div className="w-full lg:w-2/3">
          {renderRichText(block?.textWithImage)}
        </div>

        {/* Image Column */}
        <div
          className={clsx(
            "w-full ms-5",
            block?.isImageTaller ? "lg:w-[60%]" : "lg:w-[35%]",
            "flex justify-center"
          )}
        >
          {block?.image?.url && (
            <Image
              src={`http://localhost:1337${block.image.url}`}
              alt={block.image.alternativeText || 'Illustration'}
              width={600}
              height={400}
              className="w-full h-auto object-contain max-w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}
