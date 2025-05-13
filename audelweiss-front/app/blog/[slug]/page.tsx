"use client";
import { use } from "react";
import { useArticles } from "@/src/hooks/useArticles";
import SingleArticle from "@/src/components/templates/SingleArticle";

export default function ArticleSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { data: articles, isLoading } = useArticles();

    if (isLoading || !articles) return <p>Chargement...</p>;

    const article = articles.find((a: any) => a.articleSlug === slug);

    if (!article) return <p>Article introuvable.</p>;

    return <SingleArticle documentId={article.documentId} />;
}