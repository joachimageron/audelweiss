"use client";
import SingleProduct from "@/src/components/templates/SingleProduct";
import { use } from "react";

export default function ProductSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    return <SingleProduct></SingleProduct>
}