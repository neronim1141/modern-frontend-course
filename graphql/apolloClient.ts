import { ApolloClient, InMemoryCache } from "@apollo/client";
export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/cl5u0s8rg33kf01um1u2fazfk/master",
  cache: new InMemoryCache(),
});
