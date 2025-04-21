"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { ComponentBlocksSingleSlider } from "@/src/types/generated";

import Button from "@/src/components/atoms/Button";
import { ArrowRight } from "@/src/components/icons";

import { tv } from "tailwind-variants";


type Props = {
  block: ComponentBlocksSingleSlider;
  className?: string;
};

const styles = tv({
  slots: {
    section: "single-slider relative",
    navButton: "absolute top-0 z-2 lg:flex hidden justify-center items-center h-full w-[12.5rem] opacity-0 cursor-pointer transition duration-500 hover:opacity-100 focus:opacity-100",
    prevButton: "left-0",
    nextButton: "right-0",
    slideWrapper: "relative flex justify-end items-center 2xl:px-[14rem] lg:px-[7rem] px-[4rem] lg:py-[5rem] py-[9rem] lg:min-h-[calc(100svh-11rem)]",
    slideImageContainer: "single-slide-image absolute top-0 left-0 w-full h-full",
    slideImage: "w-full h-full object-cover object-center",
    slideContentWrapper: "relative 2xl:pr-[10rem] lg:pr-[2rem] max-w-[68rem]",
    slideSubtitle: "single-slide-subtitle relative mb-[2rem] pl-[5rem] text-[2rem] font-medium",
    slideTitle: "mb-[2.5rem] lg:text-[7.6rem] text-[5.5rem] leading-[.95]",
    slideDescription: "mb-[3rem]",
    arrowIcon: "w-4 h-4 a-icon",
    arrowIconPrev: "rotate-180 translate-y-[1rem] as--filter-text",
  },
});

const { section, navButton, prevButton, nextButton, slideWrapper, slideImageContainer, slideImage, slideContentWrapper, slideSubtitle, slideTitle, slideDescription, arrowIcon, arrowIconPrev } = styles();


const SingleSlider = ({ block, className = "" }: Props) => {
  const prevArrow = useRef<HTMLButtonElement>(null);
  const nextArrow = useRef<HTMLButtonElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={section({ className })}>
      <button
        ref={prevArrow}
        className={`${navButton()} ${prevButton()}`}
        title="Revenir à la slide précédente"
      >
        <ArrowRight aria-label="Revenir à la slide précédente" className={`${arrowIcon()} ${arrowIconPrev()}`} />
      </button>

      {block?.listSlides?.length > 0 && (
        <Swiper
          modules={[Navigation, Autoplay, EffectFade, Keyboard]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          slidesPerView={1}
          loop
          effect="fade"
          fadeEffect={{ crossFade: false }}
          autoHeight
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          navigation={{ prevEl: prevArrow.current, nextEl: nextArrow.current }}
        >
          {block.listSlides.map((slide, index) => {
            const isActive = index === activeIndex;

            if (!slide) return null;

            return (
              <SwiperSlide key={slide.id} className={slideWrapper()}>
                <div className={slideImageContainer()}>
                  <img src={process.env.NEXT_PUBLIC_GRAPHQL_API_URL + slide.backgroundImage?.url || ""} alt={slide.slideTitle || ""} className={slideImage()} />
                </div>
                <a
                  href={slide.slideLink?.url}
                  className={slideContentWrapper()}
                  tabIndex={isActive ? 0 : -1}
                  aria-hidden={!isActive}
                >
                  <p className={slideSubtitle()}>{slide.slideOvertitle}</p>
                  <h2 className={slideTitle()}>{slide.slideTitle}</h2>
                  <p className={slideDescription()}>{slide.slideContent}</p>
                  <Button withIcon isSpanButton>{slide.slideLink?.label}</Button>
                </a>
              </SwiperSlide>

            );
          })}
        </Swiper>
      )}

      <button
        ref={nextArrow}
        className={`${navButton()} ${nextButton()}`}
        aria-label="Aller à la slide suivante"
      >
        <ArrowRight className={arrowIcon()} aria-hidden="true" />
      </button>
    </section>
  );
};

export default SingleSlider;
