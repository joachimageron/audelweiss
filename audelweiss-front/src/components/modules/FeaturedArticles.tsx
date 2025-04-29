'use client';

import Image from "next/image";

import CustomLink from "@/src/components/atoms/CustomLink";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import Button from "@/src/components/atoms/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ComponentBlocksFeaturedArticles } from "@/src/types/generated";

import { tv } from "tailwind-variants";

type Props = {
    block: ComponentBlocksFeaturedArticles;
    className?: string;
};

const styles = tv({
    slots: {
        sectionWrapper: "featured-articles inner-wrap flex flex-col items-center my-[5rem]",
        sectionTitle: "mb-[4rem] text-[3.2rem]",
        swiperSlider: "swiper-custom-dots w-full mb-[5rem]",
        articleLink: "group flex flex-col justify-between p-[1.5rem] min-h-[30rem]",
        articleImageWrapper: "absolute inset-0 rounded-[1rem] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-dark-primary after:opacity-[0.35]",
        articleImage: "w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
        articleCategory: "relative px-[1rem]! py-[.8rem]! w-fit text-[1.3rem] pointer-events-none",
        articleTitle: "relative text-white text-[2.2rem]",
        articleDate: "relative text-[1.3rem] text-white",
    },
});

const { sectionWrapper, sectionTitle, swiperSlider, articleLink, articleImageWrapper, articleImage, articleCategory, articleTitle, articleDate } = styles();

export default function FeaturedArticles({ block, className = "" }: Props) {
    const articlesFormatted = block.articles
        ?.filter((article): article is NonNullable<typeof article> => !!article)
        .map((article) => ({
            id: article.documentId,
            title: article.articleTitle,
            slug: article.documentId,
            thumbnailUrl: article.articleThumbnail?.url
                ? process.env.NEXT_PUBLIC_GRAPHQL_API_URL + article.articleThumbnail.url
                : "",
            category: article.articleCategories?.[0]?.name || "",
            publishedAt: article.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString("fr-FR")
                : "",
        })) || [];

    return (
        <section className={sectionWrapper({ className })}>
            <CustomTitle level={2} className={sectionTitle()}>
                {block.title}
            </CustomTitle>

            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1, centeredSlides: true },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className={swiperSlider()}
            >
                {articlesFormatted.map((article) => (
                    <SwiperSlide key={article.id}>
                        <CustomLink href={`/articles/${article.slug}`} className={articleLink()}>
                            <div className={articleImageWrapper()}>
                                <Image
                                    src={article.thumbnailUrl}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={articleImage()}
                                />
                            </div>

                            <Button isSpanButton className={articleCategory()}>
                                {article.category}
                            </Button>

                            <CustomTitle level={3} className={articleTitle()}>
                                {article.title}
                            </CustomTitle>

                            <p className={articleDate()}>
                                {article.publishedAt}
                            </p>
                        </CustomLink>
                    </SwiperSlide>
                ))}
            </Swiper>

            {block.link?.url && block.link.label && (
                <div className="text-center">
                    <CustomLink href={block.link.url} isButtonLink withIcon>
                        {block.link.label}
                    </CustomLink>
                </div>
            )}
        </section>
    );
}