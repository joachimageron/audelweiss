"use client";
import { use } from "react";
import { useCreations } from "@/src/hooks/useCreations";
import SingleCreation from "@/src/components/templates/SingleCreation";

export default function CreationSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { data: creations, isLoading } = useCreations();

    if (isLoading || !creations) return <p>Chargement...</p>;

    const creation = creations.find((c: any) => c.creationSlug === slug);

    if (!creation) return <p>Création introuvable.</p>;

    return <SingleCreation documentId={creation.documentId} />;
}
