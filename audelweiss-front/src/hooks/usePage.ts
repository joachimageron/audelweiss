import { useQuery } from "@tanstack/react-query";
import { PagesQuery } from "@/src/types/generated";
import { useApi } from "@/src/hooks/useApi";
import { pagesQuery } from "../gql/page.gql";

type Params = {
  filters: {
    slug: string;
  };
  queryKey: string[];
};

const mapFilters = (filters: Params["filters"]) => {
  if (!filters) return {};

  return {
    filters: {
      slug: { eq: filters.slug },
    },
  };
};

export const usePage = ({ filters, queryKey }: Params) => {
  const api = useApi();

  const queryFn = async () => {
    const response = await api.request<PagesQuery>(pagesQuery, {
      ...mapFilters(filters),
    });

    if (!response.pages[0]) {
      throw new Error("Page not found");
    }
    console.log(response.pages[0]);
    return response.pages[0];
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};
