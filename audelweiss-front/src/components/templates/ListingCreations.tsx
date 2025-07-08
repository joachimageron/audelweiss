"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { useCreations } from "@/src/hooks/useCreations";

import CustomLink from "@/src/components/atoms/CustomLink";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import Button from "@/src/components/atoms/Button";
import Image from "next/image";

import Breadcrumb from "@/src/components/baseElements/Breadcrumb";

import { tv } from "tailwind-variants";


const styles = tv({
    slots: {
        mainWrapper: "inner-wrap",
        filtersWrapper: "flex flex-wrap justify-center items-center gap-[1.5rem] mt-[3rem] mb-[5rem]",
        gridWrapper: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2.5rem] gap-y-[4rem] my-[5rem]",
        creationLink: "group relative flex flex-col justify-between p-[1.5rem] min-h-[30rem]",
        creationImageWrapper: "absolute inset-0 rounded-[1rem] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-dark-primary after:opacity-[0.35]",
        creationImage: "w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
        creationCategoriesList: "flex items-center gap-[1rem] flex-wrap",
        creationCategory: "relative px-[1rem]! py-[.8rem]! w-fit text-[1.3rem] pointer-events-none",
        creationTitle: "relative text-white text-[2.2rem]",
        creationDuration: "relative text-[1.5rem] text-white font-medium",
        paginationWrapper: "flex justify-center flex-wrap gap-[1rem] mb-[3rem]",
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
const paginationButton = tv({
    base: "w-[3.5rem] h-[3.5rem] rounded-[.6rem] border cursor-pointer",
    variants: {
        active: {
            true: "bg-primary text-white",
            false: "border-gray-300 text-dark-primary hover:bg-gray-100",
        },
    },
});

const { mainWrapper, filtersWrapper, gridWrapper, creationLink, creationImageWrapper, creationImage, creationCategoriesList, creationCategory, creationTitle, creationDuration, paginationWrapper } = styles();

export default function ListingCreations({ basePath = "/creations" }: { basePath?: string }) {
    const { data, isLoading, isError } = useCreations();
    const pathname = usePathname();
    const currentPath = decodeURIComponent(pathname);

    const searchParams = useSearchParams();
    const router = useRouter();

    const currentPage = Number(searchParams.get("page") || 1);
    const ITEMS_PER_PAGE = 9;

    if (isLoading) return <p className="inner-wrap">Chargement des créations...</p>;
    if (isError || !data) return <p className="inner-wrap">Erreur lors du chargement des créations</p>;

    const rawCategories = data.flatMap((creation: any) =>
        creation.creationCategories?.map((cat: any) => ({
            name: cat.name,
            slug: cat.slug
        })) ?? []
    );

    const uniqueCategories = Array.from(
        new Map(rawCategories.map(cat => [cat.slug, cat])).values()
    ).sort((a, b) => a.name.localeCompare(b.name));

    const match = pathname.match(/\/categorie\/([^\/]+)$/);
    const activeCategory = match ? decodeURIComponent(match[1]) : null;

    const matchedCreations = activeCategory
        ? data.filter((creation: any) =>
            creation.creationCategories?.some((cat: any) => cat.slug === activeCategory)
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
    const breadcrumbItems = [{ label: "Accueil", href: "/" }, { label: "Créations", href: "/creations" }];
    if (segments.includes("categorie")) {
        const categorySlug = segments[segments.indexOf("categorie") + 1];
        breadcrumbItems.push({
            label: formatSlugToLabel(categorySlug),
            href: `/creations/categorie/${categorySlug}`,
        });
    }

    const sortedCreations = [...matchedCreations].sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

    const totalPages = Math.ceil(sortedCreations.length / ITEMS_PER_PAGE);

    const paginatedCreations = sortedCreations.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

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
                    {paginatedCreations.map((creation: any) => (
                        <CustomLink href={`${basePath}/${creation.creationSlug}`} key={creation.documentId} className={creationLink()}>
                            <div className={creationImageWrapper()}>
                                {creation.creationThumbnail?.url && (
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}${creation.creationThumbnail.url}`}
                                        alt={creation.creationName}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className={creationImage()}
                                    />
                                )}
                            </div>

                            <ul className={creationCategoriesList()} >
                                {creation.creationCategories?.length ? (
                                    creation.creationCategories.map((cat: any) => (
                                        <li key={cat.slug}>
                                            <Button isSpanButton className={creationCategory()}>
                                                {cat.name}
                                            </Button>
                                        </li>
                                    ))
                                ) : (
                                    <li>
                                        <Button isSpanButton className={creationCategory()}>Sans catégorie</Button>
                                    </li>
                                )}
                            </ul>

                            <CustomTitle level={3} className={creationTitle()}>
                                {creation.creationName}
                            </CustomTitle>

                            <p className={creationDuration()}>
                                Temps de réalisation : {creation.creationTime}
                            </p>
                        </CustomLink>
                    ))}
                </div>

                <div className={paginationWrapper()}>
                    {Array.from({ length: totalPages }).map((_, i) => {
                        const pageNum = i + 1;
                        const isActive = pageNum === currentPage;
                        return (
                            <button
                                key={pageNum}
                                onClick={() => router.push(`?page=${pageNum}`)}
                                className={paginationButton({ active: isActive })}
                            >
                                {pageNum}
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
