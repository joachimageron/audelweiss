import { useState } from "react";
import { tv } from "tailwind-variants";
import { UploadFile } from "@/src/types/generated";
import Image from "@/src/components/atoms/Image";
import { Prev } from "@/src/components/icons";
import { Next } from "@/src/components/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const styles = tv({
  slots: {
    base: "relative w-full lg:w-[50%] lg:max-w-[60rem]",
    slider: "rounded-[1rem] overflow-hidden",
    slide: "w-full h-auto",
    previousButton:
      "swiper-custom-prev group absolute top-1/2 left-[1rem] z-10 flex justify-center items-center bg-white w-[4rem] h-[4rem] rounded-full opacity-[.75] -translate-y-1/2 cursor-pointer",
    nextButton:
      "swiper-custom-next group absolute top-1/2 right-[1rem] z-10 flex justify-center items-center  bg-white w-[4rem] h-[4rem] rounded-full opacity-[.75] -translate-y-1/2 cursor-pointer",
    buttonIcon: "w-[2.4rem] h-[2.4rem] transition group-hover:fill-primary",
    thumbnails: "mt-[1rem] max-w-[60rem]",
    thumb: "!w-[8rem]",
    thumbImage: "rounded-[.4rem] cursor-pointer",
  },
});

const { base, slider, slide, previousButton, nextButton, buttonIcon, thumbnails, thumb, thumbImage } = styles();

type Props = {
  images: UploadFile[];
};

const Gallery = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={base()}>
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation={{
          nextEl: ".swiper-custom-next",
          prevEl: ".swiper-custom-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        loop
        autoHeight
        spaceBetween={10}
        className={slider()}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.url} alt={`Aperçu ${index}`} width={600} height={455} className={slide()} />
          </SwiperSlide>
        ))}

        <button className={previousButton()}>
          <Prev className={buttonIcon()} aria-label="See previous image" />
        </button>

        <button className={nextButton()}>
          <Next className={buttonIcon()} aria-label="See next image" />
        </button>
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={25}
        slidesPerView="auto"
        watchSlidesProgress
        freeMode
        className={thumbnails()}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={thumb()}>
            <Image src={image.url} alt={`Miniature ${index}`} width={80} height={80} className={thumbImage()} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
