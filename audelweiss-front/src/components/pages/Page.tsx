"use client";

import React from "react";
import { usePage } from "@/src/hooks/usePage";
import PageBlocks from "@/src/components/PageBlocks";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import { PageContentDynamicZone } from "@/src/types/generated";
import Hero from "@/src/components/modules/Hero";
import Breadcrumb from "@/src/components/baseElements/Breadcrumb";
import ListingArticles from "@/src/components/templates/ListingArticles";
import ListingCreations from "@/src/components/templates/ListingCreations";
import ShoppingCart from "@/src/components/templates/ShoppingCart";
import ShoppingForm from "../templates/ShoppingForm";

type Props = {
  params: string[];
};

const Page = ({ params }: Props) => {
  const { data, isLoading, isError } = usePage({ filters: { slug: params ? params[0] : "home" }, queryKey: ["page"] });

  if (isLoading) {
    return <p className="inner-wrap">Chargement...</p>;
  }

  if (isError || !data) {
    return <p className="inner-wrap">Une erreur est survenue ou la page est introuvable.</p>;
  }

  console.log("params : ", params);

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    ...(params
      ? params.slice(0, -1).map((segment, index) => ({
          label: segment.charAt(0).toUpperCase() + segment.slice(1),
          href: "/" + params.slice(0, index + 1).join("/"),
        }))
      : []),
    { label: data.title },
  ];

  return (
    <>
      {data.type === "home" && (
        <CustomTitle level={1} className="sr-only">
          {data.title}
        </CustomTitle>
      )}

      {data.type !== "home" && (
        <>
          <Hero title={data.title} imageUrl={process.env.NEXT_PUBLIC_API_URL + data.illustrationImage.url} />
        </>
      )}

      {!["home", "listing_articles", "listing_creations"].includes(data.type) && <Breadcrumb items={breadcrumbItems} />}

      {data.type === "listing_articles" && (
        <>
          <ListingArticles />
        </>
      )}

      {data.type === "listing_creations" && (
        <>
          <ListingCreations />
        </>
      )}

      {data.type === "shopping_cart" && (
        <>
          <ShoppingCart />
        </>
      )}

      {data.type === "shopping_form" && (
        <>
          <ShoppingForm />
        </>
      )}

      {data?.content && <PageBlocks blocks={data.content as PageContentDynamicZone[]} />}
    </>
  );
};

export default Page;
