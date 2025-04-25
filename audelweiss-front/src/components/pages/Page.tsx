"use client";

import React from "react";
import { usePage } from "@/src/hooks/usePage";
import PageBlocks from "@/src/components/PageBlocks";
import CustomTitle from "@/src/components//atoms/CustomTitle";
import { PageContentDynamicZone } from "@/src/types/generated";
import TextImage from "../modules/TextImage";
import FeaturedProducts from "../modules/FeaturedProducts";

type Props = {
  params: string[];
};

const textImage = [
  {
    id: 1,
    title: "Mon parcours professionnel",
    content: "Après des études en informatique et en création de sites internet, je me suis installé à Lyon pour développer mes compétences dans le digital. Le web, en constante évolution m'a permis d'explorer la création sous diverses formes, alliant technique et esthétique. Cette immersion dans la conception digitale a posé les bases de ma démarche artistique. Aujourd'hui freelance spécialisé en développement web et design UI/UX, je transmets également mon savoir en tant que formatrice. Cette avente créative s'est enrichi avec ma découverte du crochet, une nouvelle forme d'expression artistique qui me permet d'allier matières, couleur et énergie.",
    image: {
      src: '/images/audrey.jpg',
      alt: 'Audrey',
    },
    link: {
      label: 'Découvrir mon site freelance',
      href: '/',
    },
    imageLeft: false,
    largeImage: false,
  },
];

const products = [
  {
    id: 1,
    name: "Boucles d’oreilles artisanales",
    price: "35€",
    image: {
      src: "/images/boucle.webp",
      alt: "Boucles d’oreilles",
    },
    link: {
      label: '',
      href: '/',
    },
    promo: true,
  },
  {
    id: 2,
    name: "Collier fait main",
    price: "42€",
    image: {
      src: "/images/collier.jpeg",
      alt: "Collier",
    },
    link: {
      label: '',
      href: '/',
    },
    promo: false,
  },
  {
    id: 3,
    name: "Bracelet perlé",
    price: "29€",
    image: {
      src: "/images/bracelet.webp",
    },
    link: {
      label: '',
      href: '/',
    },
    promo: true,
  },
  {
    id: 4,
    name: "Bague perlé",
    price: "29€",
    image: {
      src: "/images/bague.webp",
    },
    link: {
      label: '',
      href: '/',
    },
    promo: true,
  },
];

const Page = ({ params }: Props) => {
  const { data } = usePage({ filters: { slug: params ? params[0] : "home" }, queryKey: ["page"] });
  console.log(data)
  return (
    <>
      {/* TODO : Ce titre h1 avec les données issues de la page d'accueil */}
      <CustomTitle level={1} className="sr-only">
        Des créations artisanales et originales sur mesure
      </CustomTitle>

      {data?.content && <PageBlocks blocks={data.content as PageContentDynamicZone[]} />}

      <TextImage
        title={textImage[0].title}
        content={textImage[0].content}
        image={textImage[0].image}
        link={textImage[0].link}
        imageLeft={textImage[0].imageLeft}
        largeImage={textImage[0].largeImage}
      />      <FeaturedProducts
        description={<h2>Des créations <b>artisanales</b> uniques ✨<br></br>Fait main avec <b>passion</b>, pour toi et ceux que tu aimes</h2>}
        products={products}
        linkHref="/boutique"
      />
    </>
  );
};

export default Page;
