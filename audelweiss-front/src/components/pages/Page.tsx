"use client";

import React from "react";
import { usePage } from "@/src/hooks/usePage";
import PageBlocks from "../PageBlocks";
import SingleSlider from "../modules/SingleSlider";
import CustomTitle from "../atoms/CustomTitle";
import { PageContentDynamicZone } from "@/src/types/generated";

// TODO : Dynamiser ces données avec celles issues de Strapi pour le composant "Slider simple"
const MOCK_SLIDES = [
  {
    id: 1,
    subtitle: "Basé dans les Hautes-Alpes & fait avec amour",
    title: "Des créations uniques au crochet",
    content:
      "Chaque pièce est soigneusement confectionnée à la main dans les Hautes-Alpes. Offrez-vous ou à vos proches un savoir-faire authentique, alliant douceur et originalité.",
    image: "https://picsum.photos/2000/500",
    link: {
      label: "Découvrir mes créations au crochet",
      href: "/boutique/crochet",
    },
  },
  {
    id: 2,
    subtitle: "Savoir-faire local & matériaux naturels",
    title: "Des créations en bois gravé sur-mesure",
    content:
      "Chaque pièce en bois est gravée avec précision et passion. Apportez une touche naturelle et chaleureuse à votre intérieur.",
    image: "https://picsum.photos/2000/801",
    link: { label: "Découvrir mes créations en bois", href: "/boutique/bois" },
  },
  {
    id: 3,
    subtitle: "Textiles personnalisés & impressions durables",
    title: "Du flocage sur tissu à votre image",
    content:
      "T-shirts, tote bags, sweats... Donnez vie à vos idées avec un flocage textile de qualité, réalisé avec soin dans mon atelier. Créations uniques, messages personnalisés et petits tirages à la demande.",
    image: "https://picsum.photos/1400/801",
    link: {
      label: "Découvrir mes flocages textiles",
      href: "/boutique/flocage",
    },
  },
];

const Page = () => {
  const { data } = usePage({ filters: { slug: "home" }, queryKey: ["home"] });

  return (
    <>
      {/* TODO : Ce titre h1 avec les données issues de la page d'accueil */}
      <CustomTitle level={1} className="sr-only">
        Des créations artisanales et originales sur mesure
      </CustomTitle>
      <SingleSlider slides={MOCK_SLIDES} />

      {data?.content && <PageBlocks blocks={data.content as PageContentDynamicZone[]} />}
    </>
  );
};

export default Page;
