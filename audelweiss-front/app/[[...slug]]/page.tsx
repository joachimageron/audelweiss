import Page from "@/src/components/pages/Page";

export default async function App({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  return <Page params={slug} />;
}
