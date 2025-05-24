"use client";

import { useSingleArticle } from "@/src/hooks/useSingleArticle";
import { useArticles } from "@/src/hooks/useArticles";

import SingleRichtext from "@/src/components/modules/SingleRichtext";
import FeaturedArticles from "@/src/components/modules/FeaturedArticles";

import CustomTitle from "@/src/components/atoms/CustomTitle";
import CustomLink from "@/src/components/atoms/CustomLink";
import Image from "next/image";

import { tv } from "tailwind-variants";

const styles = tv({
    slots: {
        mainWrapper: "inner-wrap",
        articleHeader: "flex flex-col lg:flex-row gap-x-[5rem] gap-y-[2.5rem] mt-[3rem] mb-[2rem]",
        articleThumbnailWrapper: "w-full max-w-[60rem] lg:w-[40%]",
        articleThumbnailImage: "rounded-[1rem] w-full h-auto",
        articleIntroductionWrapper: "w-full lg:w-[60%] lg:mt-[2rem]",
        articleTitle: "mb-[1rem] text-[3.6rem] lg:text-[5rem] font-dm-sans text-primary",
        articlePublishedDate: "text-dark-primary font-bold",
        articleDescription: "mt-[3rem] text-[1.8rem]",
        articleCategoriesList: "mt-[3rem]",
        categoryLink: "ml-[2rem] text-primary as--underline-hover",
        pageSeparator: "text-primary",
        richtextWrapper: "mt-[3rem] mb-[6rem]",
    },
});

const { mainWrapper, articleHeader, articleThumbnailWrapper, articleThumbnailImage, articleIntroductionWrapper, articleTitle, articlePublishedDate, articleDescription, articleCategoriesList, categoryLink, pageSeparator, richtextWrapper } = styles();

type Props = {
    documentId: string;
};

export default function SingleArticle({ documentId }: Props) {
    const { data: article, isLoading, isError } = useSingleArticle(documentId);
    const { data: allArticles } = useArticles();

    if (isLoading) return <p className="inner-wrap">Chargement de l'article...</p>;
    if (isError || !article) return <p className="inner-wrap">Article introuvable !</p>;

    const relatedArticles = (allArticles ?? [])
        .filter((a: any) => a.documentId !== article.documentId)
        .sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 3);

    return (
        <>
            <article className={mainWrapper()}>
                <div className={articleHeader()}>
                    {article.articleThumbnail.url && (
                        <div className={articleThumbnailWrapper()}>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_API_URL}${article.articleThumbnail.url}`}
                                alt={article.articleTitle}
                                width={500}
                                height={360}
                                className={articleThumbnailImage()}
                            />
                        </div>
                    )}
                    <div className={articleIntroductionWrapper()}>
                        <CustomTitle level={1} className={articleTitle()}>{article.articleTitle}</CustomTitle>

                        {article.publishedAt && (
                            <p className={articlePublishedDate()}>Publié le {new Date(article.publishedAt).toLocaleDateString()}</p>
                        )}

                        {article.articleDescription && (
                            <p className={articleDescription()}>{article.articleDescription}</p>
                        )}

                        {article.articleCategories.length > 0 && (
                            <p className={articleCategoriesList()}>
                                Catégorie(s) :
                                {article.articleCategories.map((cat: any) => (
                                    <CustomLink href={`/blog/categorie/${cat.name.toLowerCase().replace(/\s+/g, "-")}`} key={cat.name} className={categoryLink()}>
                                        {cat.name}
                                    </CustomLink>
                                ))}
                            </p>
                        )}
                    </div>
                </div>

                <hr className={pageSeparator()}></hr>


                {article.articleContent.richtextContent && (
                    <SingleRichtext block={{ id: "0", richtextContent: article.articleContent.richtextContent }} className={richtextWrapper()} />
                )}
            </article>

            {relatedArticles.length > 0 && (
                <FeaturedArticles
                    block={{
                        id: "0",
                        title: "Cela pourrait aussi t'intérésser ! 🔎",
                        articles: relatedArticles,
                        link: { url: "/blog", label: "Retourner à la liste des articles" }
                    }}
                />
            )}
        </>
    );
}
