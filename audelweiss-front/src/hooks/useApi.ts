import { GraphQLClient } from "graphql-request";
import { useUser } from "@/src/hooks/useUser";

// TODO: move to .env GRAPHQL_API_URL
const baseURL = process.env.API_URL || "http://51.83.97.44:1337" + "/graphql";

export const useApi = () => {
  const { user, isAuthenticated } = useUser();

  const api = new GraphQLClient(baseURL, {
    headers:
      isAuthenticated && user?.jwt
        ? {
          Authorization: `Bearer ${user.jwt}`,
        }
        : {},
  });

  return api;
};
