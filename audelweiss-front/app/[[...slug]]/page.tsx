import Page from "@/src/components/pages/Page";

export default function App({ params }: { params: { slug?: string[] } }) {
  return <Page params={params.slug ?? []} />;
}
