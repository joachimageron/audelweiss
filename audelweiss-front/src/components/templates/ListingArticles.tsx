"use client";

import { usePathname } from "next/navigation";

import { useArticles } from "@/src/hooks/useArticles";

import CustomLink from "@/src/components/atoms/CustomLink";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import Button from "@/src/components/atoms/Button";
import Image from "next/image";

import { tv } from "tailwind-variants";
import Breadcrumb from "../baseElements/Breadcrumb";

const styles = tv({
    slots: {
        mainWrapper: "inner-wrap",
        filtersWrapper: "flex flex-wrap justify-center items-center gap-[1.5rem] mt-[3rem] mb-[5rem]",
        gridWrapper: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2.5rem] gap-y-[4rem] my-[5rem]",
        articleLink: "group relative flex flex-col justify-between p-[1.5rem] min-h-[30rem]",
        articleImageWrapper: "absolute inset-0 rounded-[1rem] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-dark-primary after:opacity-[0.35]",
        articleImage: "w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
        articleCategory: "relative px-[1rem]! py-[.8rem]! w-fit text-[1.3rem] pointer-events-none",
        articleTitle: "relative text-white text-[2.2rem]",
        articleDate: "relative text-[1.3rem] text-white",
    },
});
const filterButton = tv({
    base: "capitalize bg-primary hover:bg-dark-primary",
    variants: {
        isActive: {
            true: "bg-secondary! pointer-events-none"
        }
    }
});

const { mainWrapper, filtersWrapper, gridWrapper, articleLink, articleImageWrapper, articleImage, articleCategory, articleTitle, articleDate } = styles();

export default function ListingArticles({ basePath = "/blog" }: { basePath?: string }) {
    const { data, isLoading, isError } = useArticles();
    const pathname = usePathname();
    const currentPath = decodeURIComponent(pathname);

    if (isLoading) return <p className="inner-wrap">Chargement des articles...</p>;
    if (isError || !data) return <p className="inner-wrap">Erreur lors du chargement des articles</p>;

    const rawCategories = data.flatMap((article: any) =>
        article.articleCategories?.map((cat: any) => ({
            name: cat.name,
            slug: cat.name?.toLowerCase().replace(/\s+/g, "-")
        })) ?? []
    );

    const uniqueCategories = Array.from(
        new Map(rawCategories.map(cat => [cat.slug, cat])).values()
    ).sort((a, b) => a.name.localeCompare(b.name));

    const match = pathname.match(/\/categorie\/([^\/]+)$/);
    const activeCategory = match ? decodeURIComponent(match[1]) : null;

    const matchedArticles = activeCategory
        ? data.filter((article: any) =>
            article.articleCategories?.some((cat: any) =>
                cat.name?.toLowerCase().replace(/\s+/g, "-") === activeCategory
            )
        )
        : data;


    const formatSlugToLabel = (slug: string) =>
        slug
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/-/g, " ")
            .replace(/\b\w/g, l => l.toUpperCase());


    const segments = currentPath.split("/").filter(Boolean);
    const breadcrumbItems = [{ label: "Accueil", href: "/" }, { label: "Blog", href: "/blog" }];
    if (segments.includes("categorie")) {
        const categorySlug = segments[segments.indexOf("categorie") + 1];
        breadcrumbItems.push({
            label: formatSlugToLabel(categorySlug),
            href: `/blog/categorie/${categorySlug}`,
        });
    }

    return (
        <>
            <Breadcrumb items={breadcrumbItems} />
            <div className={mainWrapper()}>
                <div className={filtersWrapper()}>
                    <CustomLink href={basePath} isButtonLink className={filterButton({ isActive: currentPath === basePath })}>Toutes</CustomLink>
                    {uniqueCategories.map(({ name, slug }) => (
                        <CustomLink
                            key={slug}
                            href={`${basePath}/categorie/${slug}`}
                            isButtonLink
                            className={filterButton({ isActive: currentPath === `${basePath}/categorie/${slug}` })}
                        >
                            {name}
                        </CustomLink>
                    ))}
                </div>
                <div className={gridWrapper()}>
                    {matchedArticles.map((article: any) => {
                        return (
                            <CustomLink href={`${basePath}/${article.documentId}`} className={articleLink()} key={article.documentId}>
                                <div className={articleImageWrapper()}>
                                    {article.articleThumbnail?.url && (
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_API_URL}${article.articleThumbnail.url}`}
                                            alt={article.articleTitle}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className={articleImage()}
                                        />
                                    )}
                                </div>

                                <Button isSpanButton className={articleCategory()}>
                                    {article.articleCategories[0]?.name ?? "Sans catégorie"}
                                </Button>

                                <CustomTitle level={3} className={articleTitle()}>
                                    {article.articleTitle}
                                </CustomTitle>

                                <p className={articleDate()}>
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </p>
                            </CustomLink>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
