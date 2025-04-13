import request from "graphql-request";
import { pagesQuery } from "../gql/page.gql";
import { useQuery } from "@tanstack/react-query";

export type Block = {
  __typename: string;
  id: string;
};

type Page = {
  title: string;
  slug: string;
  content: Block[];
};

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
  const queryFn = async () => {
    const response = await request<{ pages: Page[] }>("http://localhost:1337/graphql", pagesQuery, {
      ...mapFilters(filters),
    });

    return response.pages[0];
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};
