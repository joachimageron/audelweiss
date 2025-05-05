import { GraphQLClient } from "graphql-request";

const baseURL = process.env.NEXT_PUBLIC_GRAPHQL_API_URL || "http://localhost:1337/graphql";
const api = new GraphQLClient(baseURL);

// made it a hook as we'll later need to add auth
export const useApi = () => api;
