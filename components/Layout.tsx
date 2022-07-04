import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col bg-gray-50  min-h-screen">
      <Header />
      <div className="flex-grow"> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
