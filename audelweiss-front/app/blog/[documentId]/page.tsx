import SingleArticle from "@/src/components/templates/SingleArticle";

export default function ArticlePage({ params }: { params: { documentId: string } }) {
    return <SingleArticle documentId={params.documentId} />
}
