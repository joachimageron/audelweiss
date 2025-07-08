import ProductDetails from "@/src/components/templates/ProductDetails/ProductDetails";

const ProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return <ProductDetails slug={slug} />;
};

export default ProductPage;
