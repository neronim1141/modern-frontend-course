import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { CartProvider } from "../components/Cart/CartContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../graphql/apolloClient";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <DefaultSeo {...SEO} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default MyApp;
