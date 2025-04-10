'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import CustomButton from '../atoms/CustomButton';
import Image from "next/image";
import arrowIcon from '@/app/assets/images/icons/icon-arrow-right.svg';

type Slide = {
  id: number;
  image: string;
  subtitle?: string;
  title: string;
  content: string;
  link: {
    label: string;
    href: string;
  };
};

type SingleSliderProps = {
  slides: Slide[];
  className?: string;
};

export default function SingleSlider({ slides, className = '' }: SingleSliderProps) {
  const prevArrow = useRef<HTMLButtonElement>(null);
  const nextArrow = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current;

    if (swiper && prevArrow.current && nextArrow.current && typeof swiper.params.navigation !== 'boolean') {
      swiper.params.navigation.prevEl = prevArrow.current;
      swiper.params.navigation.nextEl = nextArrow.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [prevArrow.current, nextArrow.current]);

  return (
    <section className={`single-slider relative ${className}`}>
      <button ref={prevArrow} className="absolute top-0 left-0 z-2 lg:flex hidden justify-center items-center h-full w-[12.5rem] opacity-0 cursor-pointer transition duration-500 hover:opacity-100 focus:opacity-100" title='Revenir à la slide précédente'>
        <Image src={arrowIcon.src} alt="Revenir à la slide précédente" width={40} height={40} className="a-icon rotate-180 translate-y-[1rem] as--filter-text" />
      </button>
      <Swiper modules={[Navigation, Autoplay, EffectFade, Keyboard]} onSwiper={(swiper) => (swiperRef.current = swiper)} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} slidesPerView={1} loop effect="fade" fadeEffect={{ crossFade: false }} autoHeight autoplay={{ delay: 4000, disableOnInteraction: false }} keyboard={{ enabled: true }} navigation={{ prevEl: prevArrow.current, nextEl: nextArrow.current }}>
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={slide.id} className="relative flex justify-end items-center 2xl:px-[14rem] lg:px-[7rem] px-[4rem] lg:py-[5rem] py-[9rem] lg:min-h-[calc(100svh-11rem)]">
              <div className='single-slide-image absolute top-0 left-0 w-full h-full'>
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
              </div>
              <a href={slide.link.href} className="relative 2xl:pr-[10rem] lg:pr-[2rem] max-w-[68rem]" tabIndex={isActive ? 0 : -1} aria-hidden={!isActive}>
                <p className="single-slide-subtitle relative mb-[2rem] pl-[5rem] text-[2rem] font-medium">{slide.subtitle}</p>
                <h2 className="mb-[2.5rem] lg:text-[7.6rem] text-[5.5rem] leading-[.95]">{slide.title}</h2>
                <p className="mb-[3rem]">{slide.content}</p>
                <CustomButton withIcon isSpanTag>{slide.link.label}</CustomButton>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button ref={nextArrow} className="absolute top-0 right-0 z-2 lg:flex hidden justify-center items-center h-full w-[12.5rem] opacity-0 cursor-pointer transition duration-500 hover:opacity-100 focus:opacity-100" title='Aller à la slide suivante'>
        <Image src={arrowIcon.src} alt="Aller à la slide suivante" width={40} height={40} className="a-icon" />
      </button>
    </section>
  );
}