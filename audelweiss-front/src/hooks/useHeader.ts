import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { headerQuery } from "../gql/header.gql";

export type Link = {
  label: string;
  url: string;
};

export type Header = {
  logo: {
    url: string;
  };
  navigation: {
    heading: Link;
    entries: Link[];
  }[];
};

type Params = {
  queryKey: string[];
};

export const useHeader = ({ queryKey }: Params) => {
  const queryFn = async () => {
    const response = await request<{ header: Header }>("http://localhost:1337/graphql", headerQuery);

    return response.header;
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};
