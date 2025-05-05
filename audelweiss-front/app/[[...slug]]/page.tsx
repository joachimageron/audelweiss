import Page from "@/src/components/pages/Page";

const App = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;

  return <Page params={slug} />;
};

export default App;
