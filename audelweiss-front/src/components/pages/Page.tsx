"use client";

import React from "react";
import { usePage } from "@/src/hooks/usePage";
import PageBlocks from "@/src/components/PageBlocks";
import SingleSlider from "@/src/components/modules/SingleSlider";
import CustomTitle from "@/src/components//atoms/CustomTitle";
import { PageContentDynamicZone } from "@/src/types/generated";
import HighlightingCreations from "@/components/modules/HighlightingCreations";

// TODO: Dynamiser ces données avec celles issues de Strapi pour le composant "Créations mises en avant"
const MOCK_HIGHLIGHT_IMAGES = [
  {
    imgSrc: "https://picsum.photos/350/500",
    imgAlt: "Créations en crochet",
    imgDescription: "Créations en crochet",
    linkHref: "/boutique/crochet",
  },
  {
    imgSrc: "https://picsum.photos/350/501",
    imgAlt: "Objets en bois gravé",
    imgDescription: "Objets en bois gravé",
    linkHref: "/boutique/bois",
  },
  {
    imgSrc: "https://picsum.photos/350/502",
    imgAlt: "Textiles floqués",
    linkHref: "/boutique/flocage",
  },
  {
    imgSrc: "https://picsum.photos/350/503",
    imgAlt: "Personnalisations",
    imgDescription: "Personnalisations",
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

      {data?.content && <PageBlocks blocks={data.content as PageContentDynamicZone[]} />}

      {/* TODO: make it a component and add it to PageBlocks switch case  */}
      <HighlightingCreations
        title="Créations sur-mesure"
        link={{
          label: "Découvrir toutes mes créations personnalisées",
          href: "/boutique",
        }}
        images={MOCK_HIGHLIGHT_IMAGES}
      >
        En plus des produits vendus dans la boutique, je suis ouverte à toute proposition de création personnalisée,
        afin de vous proposer des créations qui correspondent le plus à vos besoins.<br></br>
        N&rsquo;hésitez pas à jeter un coup d&rsquo;oeil à mon portfolio de réalisations, cela pourrait vous apporter de
        nouvelles inspirations ! ✨
      </HighlightingCreations>
    </>
  );
};

export default Page;
