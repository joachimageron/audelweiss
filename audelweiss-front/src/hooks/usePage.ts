import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { pagesQuery } from "@/src/gql/page.gql";

export const usePage = ({ slug }: { slug: string }) => {
  const api = useApi();

  return useQuery({
    queryKey: ["page", slug],
    queryFn: async () => {

      const response = await api.request(pagesQuery, {
        filters: { slug: { eq: slug } },
      });

      console.log(response);

      const page = response.pages?.[0];
      if (!page) throw new Error("Page not found");

      return {
        ...page,
      };
    },
  });
};
