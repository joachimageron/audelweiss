"use client";

import { tv } from "tailwind-variants";
import { useProduct } from "@/src/hooks/useProduct";
import Breadcrumb from "../../baseElements/Breadcrumb";
import Gallery from "./Gallery";
import { UploadFile } from "@/src/types/generated";
import SingleRichtext from "@/src/components/modules/SingleRichtext";
import Aside from "./Aside";

const styles = tv({
  slots: {
    base: "inner-wrap mb-[5rem]",
    overview: "flex flex-col lg:flex-row gap-[5rem] my-[1rem]",
    details: "inner-wrap max-w-[105rem]! text-[1.7rem] mt-[6rem] mb-[4rem]",
  },
});

const { base, overview, details } = styles();

type Props = {
  slug: string;
};

export default function ProductDetails({ slug }: Props) {
  const { data: product } = useProduct({ filters: { slug }, queryKey: [slug] });

  if (!product) return;

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Boutique", href: "/boutique" },
    { label: product.name, href: `/${slug}` },
  ];

  console.log("product : ", product);

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <article className={base()}>
        <section className={overview()}>
          <Gallery images={product.photos as UploadFile[]} />
          <Aside product={product} />
        </section>
        <section className={details()}>
          <SingleRichtext block={{ richtextContent: product.content }} />
        </section>
      </article>
    </>
  );
}
