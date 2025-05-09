"use client";

import Image from "next/image";
import { tv } from "tailwind-variants";
import CustomTitle from "@/src/components/atoms/CustomTitle";

type Props = {
    title: string;
    imageUrl: string;
    className?: string;
};

const styles = tv({
    slots: {
        heroWrapper: "relative w-full min-h-[25rem] lg:min-h-[35rem] flex items-center justify-center overflow-hidden",
        backgroundImageWrapper: "absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-primary before:opacity-20",
        backgroundImage: "absolute inset-0 w-full h-full object-cover object-center z-[-1]",
        heroTitle: "relative px-[4rem] z-10 text-white text-center text-[3.6rem] md:text-[4.8rem]",
    },
});

const { heroWrapper, backgroundImage, backgroundImageWrapper, heroTitle } = styles();

export default function Hero({ title: bannerTitle, imageUrl, className = "" }: Props) {
    return (
        <section className={heroWrapper({ className })}>
            <div className={backgroundImageWrapper()}>
                <Image
                    src={imageUrl}
                    alt={bannerTitle}
                    fill
                    className={backgroundImage()}
                    priority
                />
            </div>
            <CustomTitle level={1} className={heroTitle()}>
                {bannerTitle}
            </CustomTitle>
        </section>
    );
}
