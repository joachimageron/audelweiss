"use client";

import { ComponentBlocksCardsList } from "@/src/types/generated";
import CustomLink from "../atoms/CustomLink";
import CustomTitle from "../atoms/CustomTitle";
import Image from "next/image";
import { tv } from "tailwind-variants";

type Props = {
  block: ComponentBlocksCardsList;
  className?: string;
};

const styles = tv({
  slots: {
    base: "multiples-columns inner-wrap flex flex-col items-center gap-[5rem]",
    list: "flex justify-center items-start gap-[4.5rem] lg:gap-[3rem] xl:gap-[6rem] flex-wrap",
    item: "relative lg:flex-1 w-full lg:max-w-[40%]",
    image: "absolute right-0 lg:right-[-5rem] bottom-[-1rem] z-[-1] opacity-40",
    number: "inline-block mb-[1.4rem] text-primary text-[3rem] font-bold font-aboreto opacity-70",
    title: "mb-[1.5rem] text-[2.4rem]",
    body: "mb-[1.5rem] leading-[1.9]",
    link: "text-primary as--underline-hover",
  },
  variants: {
    topMargin: {
      true: {
        item: "lg:mt-[5rem]",
      },
    },
  },
});

const { base, list, item, image, number, title, body, link } = styles();

const CardsList = ({ block }: Props) => {
  return (
    <section className={base()}>
      {block.heading && (
        <CustomTitle level={2} className="text-[3.2rem]">
          {block.heading}
        </CustomTitle>
      )}

      <div className={list()}>
        {block.cards.map((card, index) => {
          const formattedNumber = String(index + 1).padStart(2, "0");

          return (
            <article key={`card-${card?.id}`} className={item({ topMargin: index === 1 })}>
              {card?.backgroundImage && (
                <Image
                  src={`http://localhost:1337${card.backgroundImage.url}`}
                  alt=""
                  width={250}
                  height={250}
                  className={image()}
                />
              )}
              <span className={number()}>{formattedNumber}</span>
              <CustomTitle level={3} className={title()}>
                {card?.heading}
              </CustomTitle>
              <p className={body()}>{card?.description}</p>
              {card?.link?.url && (
                <CustomLink href={card?.link?.url} className={link()}>
                  {card?.link?.label}
                </CustomLink>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CardsList;
