import { GraphQLClient } from "graphql-request";

// TODO: move to .env GRAPHQL_API_URL
const baseURL = "http://localhost:1337/graphql";
const api = new GraphQLClient(baseURL);

// made it a hook as we'll later need to add auth
export const useApi = () => api;
