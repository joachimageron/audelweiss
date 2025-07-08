"use client";

import { useSingleCreation } from "@/src/hooks/useSingleCreation";

import Breadcrumb from "@/src/components/baseElements/Breadcrumb";
import SingleRichtext from "@/src/components/modules/SingleRichtext";

import CustomTitle from "@/src/components/atoms/CustomTitle";
import CustomLink from "@/src/components/atoms/CustomLink";
import Image from "next/image";

import { tv } from "tailwind-variants";

const styles = tv({
    slots: {
        mainWrapper: "inner-wrap",
        header: "flex flex-col lg:flex-row gap-x-[5rem] gap-y-[2.5rem] mt-[3rem] mb-[2rem]",
        thumbnailWrapper: "w-full max-w-[60rem] lg:w-[30%]",
        thumbnailImage: "rounded-[1rem] w-full h-auto",
        contentWrapper: "w-full lg:w-[70%] lg:mt-[3rem]",
        title: "mb-[1rem] text-[3.6rem] lg:text-[5rem] font-dm-sans text-primary",
        time: "text-dark-primary font-bold",
        description: "mt-[3rem] text-[1.8rem]",
        categoryList: "mt-[3rem]",
        categoryLink: "ml-[2rem] text-primary as--underline-hover",
        separator: "text-primary",
        richtextWrapper: "mt-[3rem] mb-[6rem]",
        galleryTitle: "text-[2.4rem] text-center",
        galleryWrapper: "mt-[3rem] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-[1.5rem] [column-fill:_balance]  [&>img]:mb-[1.5rem] max-w-[105rem]",
        returnButton: "flex justify-center my-[5rem]"
    },
});

const {
    mainWrapper,
    header,
    thumbnailWrapper,
    thumbnailImage,
    contentWrapper,
    title,
    time,
    description,
    categoryList,
    categoryLink,
    separator,
    richtextWrapper,
    galleryTitle,
    galleryWrapper,
    returnButton
} = styles();

type Props = {
    documentId: string;
};

export default function SingleCreation({ documentId }: Props) {
    const { data: creation, isLoading, isError } = useSingleCreation(documentId);

    if (isLoading) return <p className="inner-wrap">Chargement de la création...</p>;
    if (isError || !creation) return <p className="inner-wrap">Création introuvable.</p>;

    const breadcrumbItems = [
        { label: "Accueil", href: "/" },
        { label: "Créations", href: "/creations" },
        { label: creation.creationName }
    ];

    return (
        <>
            <article className={mainWrapper()}>
                <Breadcrumb items={breadcrumbItems} />

                <div className={header()}>
                    {creation.creationThumbnail?.url && (
                        <div className={thumbnailWrapper()}>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_API_URL}${creation.creationThumbnail.url}`}
                                alt={creation.creationName}
                                width={500}
                                height={360}
                                className={thumbnailImage()}
                            />
                        </div>
                    )}
                    <div className={contentWrapper()}>
                        <CustomTitle level={1} className={title()}>{creation.creationName}</CustomTitle>

                        {creation.creationTime && (
                            <p className={time()}>Temps de réalisation : {creation.creationTime}</p>
                        )}

                        {creation.creationDescription && (
                            <p className={description()}>{creation.creationDescription}</p>
                        )}

                        {creation.creationCategories?.length > 0 && (
                            <p className={categoryList()}>
                                Catégorie(s) :
                                {creation.creationCategories.map((cat: any) => (
                                    <CustomLink
                                        href={`/creations/categorie/${cat.slug}`}
                                        key={cat.slug}
                                        className={categoryLink()}
                                    >
                                        {cat.name}
                                    </CustomLink>
                                ))}
                            </p>
                        )}
                    </div>
                </div>

                <hr className={separator()} />

                {creation.creationContent.richtextContent && (
                    <SingleRichtext block={{ id: "0", richtextContent: creation.creationContent.richtextContent }} className={richtextWrapper()} />
                )}


                <CustomTitle level={2} className={galleryTitle()}>Galerie de photos de la création</CustomTitle>
                {creation.creationGallery?.length > 0 && (
                    <div className={galleryWrapper()}>
                        {creation.creationGallery.map((img: any, index: number) => (
                            <Image
                                key={index}
                                src={`${process.env.NEXT_PUBLIC_API_URL}${img.url}`}
                                alt={img.alternativeText ?? creation.creationName}
                                width={300}
                                height={300}
                                className={thumbnailImage()}
                            />
                        ))}
                    </div>
                )}


                <div className={returnButton()}>
                    <CustomLink
                        href="/creations"
                        isButtonLink
                        withIcon
                    >
                        Retourner à la liste de mes créations
                    </CustomLink>
                </div>
            </article>
        </>
    );
}
