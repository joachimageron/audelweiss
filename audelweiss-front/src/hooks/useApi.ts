import { GraphQLClient } from "graphql-request";

const baseURL = process.env.NEXT_PUBLIC_API_URL + "/graphql" || "http://51.83.97.44:1337/graphql";
const api = new GraphQLClient(baseURL);

// made it a hook as we'll later need to add auth
export const useApi = () => api;
