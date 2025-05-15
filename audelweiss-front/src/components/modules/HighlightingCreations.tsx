"use client";

import CustomLink from "@/src/components/atoms/CustomLink";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import Image from "next/image";
import Link from "next/link";
import { renderRichText } from "@/src/utils/renderRichtext";

import { tv } from "tailwind-variants";

import { ComponentBlocksHighlightingCreations } from "@/src/types/generated";

type Props = {
    block: ComponentBlocksHighlightingCreations;
    className?: string;
};

const styles = tv({
    slots: {
        sectionContainer: "highlighting-creations inner-wrap flex flex-row lg:items-center gap-y-[3rem] lg:flex-nowrap flex-wrap mt-[7rem] mb-[5rem]",
        creationWrapper: "flex flex-col w-[50%] sm:w-[25%] px-[.6rem] lg:px-0",
        creationLink: "group w-full aspect-[1/2] border-[.3rem] border-solid border-white rounded-[14rem] overflow-hidden",
        creationLinkImage: "w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110",
        creationImage: "w-full h-full object-cover object-center",
        creationLegend: "mt-[1rem] mx-auto max-w-[80%] text-[1.4rem] text-dark-secondary italic text-center",
        contentColumn: "lg:order-3 order-[-1] lg:px-[3rem] w-full lg:w-[45%] lg:max-w-[40rem]",
        sectionTitle: "text-[3.2rem] lg:text-center mb-[3rem]",
        sectionDescription: "mb-[2rem]",
        sectionLink: "text-primary as--underline-hover",
    },
});


const { sectionContainer, creationWrapper, creationLink, creationLinkImage, creationImage, creationLegend, contentColumn, sectionTitle, sectionDescription, sectionLink } = styles();

const HighlightingCreations = ({ block, className = "" }: Props) => {
    const staticOrderClasses = ["lg:order-2", "lg:order-4", "lg:order-1", "lg:order-5"];

    return (
        <section className={sectionContainer({ className })}>
            {block.creations?.slice(0, 4).map((creation, index) => {
                if (!creation) return null;

                const orderClass = staticOrderClasses[index] || "";

                const imgSrc = creation.creationThumbnail?.url
                    ? process.env.NEXT_PUBLIC_API_URL + creation.creationThumbnail.url
                    : "";

                const creationsUrl = '/creations';

                return (
                    <div
                        key={creation.documentId}
                        className={`${creationWrapper()} ${orderClass} ${index === 0 ? "lg:ml-[-2.5rem] lg:mt-[-4rem] lg:z-1" : ""
                            } ${index === 1 ? "lg:mr-[-2.5rem] lg:mt-[-4rem] lg:z-1" : ""}`}
                    >
                        {creation.creationSlug ? (
                            <Link
                                href={`${creationsUrl}/${creation.creationSlug}`}
                                className={creationLink()}
                                title={creation.creationName || ""}
                            >
                                <Image
                                    src={imgSrc}
                                    alt={creation.creationThumbnail?.alternativeText || "Image de création personnalisée"}
                                    className={creationLinkImage()}
                                    width={250}
                                    height={400}
                                    unoptimized
                                />
                            </Link>
                        ) : (
                            <div className={creationLink()}>
                                <Image
                                    src={imgSrc}
                                    alt={creation.creationThumbnail?.alternativeText || "Image de création personnalisée"}
                                    className={creationImage()}
                                    width={250}
                                    height={400}
                                    unoptimized
                                />
                            </div>
                        )}


                        {creation.creationName && (
                            <p className={creationLegend()}>
                                {creation.creationName}
                            </p>
                        )}
                    </div>
                );
            })}

            <div className={contentColumn()}>
                <CustomTitle level={2} className={sectionTitle()}>
                    {block.title}
                </CustomTitle>
                {block.content && (
                    <div className={sectionDescription()}>
                        {renderRichText(block.content)}
                    </div>
                )}
                {block.link && (
                    <CustomLink href={block.link.url || "#"} className={sectionLink()}>
                        {block.link.label}
                    </CustomLink>
                )}
            </div>
        </section>
    );
};

export default HighlightingCreations;