"use client";

import Image from "next/image";

import { ComponentBlocksCardsList } from "@/src/types/generated";

import CustomLink from "@/src/components/atoms/CustomLink";
import CustomTitle from "@/src/components/atoms/CustomTitle";

import { tv } from "tailwind-variants";


type Props = {
  block: ComponentBlocksCardsList;
  className?: string;
};

const styles = tv({
  slots: {
    sectionContainer: "multiples-columns inner-wrap flex flex-col items-center gap-[5rem]",
    sectionTitle: "text-[3.2rem]",
    cardsList: "flex justify-center items-start gap-[4.5rem] xl:gap-[9rem] flex-wrap",
    cardItem: "relative lg:flex-1 w-full lg:max-w-[40%]",
    cardImage: "absolute right-0 lg:right-[-5rem] bottom-[-1rem] z-[-1] opacity-40 max-w-[15rem] xl:max-w-[initial]",
    cardNumber: "inline-block mb-[1.4rem] text-primary text-[3rem] font-bold font-aboreto opacity-70",
    cardTitle: "mb-[1.5rem] text-[2.4rem]",
    cardDescription: "mb-[1.5rem] leading-[1.9]",
    cardLink: "text-primary as--underline-hover",
  },
  variants: {
    topMargin: {
      true: {
        cardItem: "lg:mt-[5rem]",
      },
    },
  },
});
const { sectionContainer, sectionTitle, cardsList, cardItem, cardImage, cardNumber, cardTitle, cardDescription, cardLink } = styles();

const CardsList = ({ block }: Props) => {
  return (
    <section className={sectionContainer()}>
      {block.heading && (
        <CustomTitle level={2} className={sectionTitle()}>
          {block.heading}
        </CustomTitle>
      )}

      <div className={cardsList()}>
        {block.cards.map((card, index) => {
          const formattedNumber = String(index + 1).padStart(2, "0");

          return (
            <article key={`card-${card?.id}`} className={cardItem({ topMargin: index === 1 })}>
              {card?.backgroundImage && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${card.backgroundImage.url}`}
                  alt=""
                  width={250}
                  height={250}
                  className={cardImage()}
                />
              )}
              <span className={cardNumber()}>{formattedNumber}</span>
              <CustomTitle level={3} className={cardTitle()}>
                {card?.heading}
              </CustomTitle>
              <p className={cardDescription()}>{card?.description}</p>
              {card?.link?.url && (
                <CustomLink href={card?.link?.url} className={cardLink()}>
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
