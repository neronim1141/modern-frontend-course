import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col bg-gray-50  min-h-screen">
      <Header />
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Footer />
    </div>
  );
}

export default MyApp;
