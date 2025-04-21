"use client";

import React from "react";
import { usePage } from "@/src/hooks/usePage";
import PageBlocks from "@/src/components/PageBlocks";
import CustomTitle from "@/src/components//atoms/CustomTitle";
import { PageContentDynamicZone } from "@/src/types/generated";

const Page = () => {
  const { data } = usePage({ filters: { slug: "home" }, queryKey: ["home"] });

  return (
    <>
      {/* TODO : Ce titre h1 avec les données issues de la page d'accueil */}
      <CustomTitle level={1} className="sr-only">
        Des créations artisanales et originales sur mesure
      </CustomTitle>

      {data?.content && <PageBlocks blocks={data.content as PageContentDynamicZone[]} />}
    </>
  );
};

export default Page;
