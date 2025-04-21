import { pagesQuery } from "@/src/gql/page.gql";
import { useQuery } from "@tanstack/react-query";
import { PagesQuery } from "@/src/types/generated";
import { useApi } from "@/src/hooks/useApi";

type Params = {
  filters: {
    slug: string;
  };
  queryKey: string[];
};

const mapFilters = (filters: Params["filters"]) => {
  if (!filters) return undefined;

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

    return response.pages[0];
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};
