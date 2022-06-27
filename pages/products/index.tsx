import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Main } from "../../components/Main";
import { Pagination } from "../../components/Pagination";
import { ProductListItem } from "../../components/Product";

export type InferGetStaticPaths<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? { params?: R }
  : never;

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <>cos nie tak</>;
  }
  return (
    <Main>
      <ul className=" grid  sm:grid-cols-2 md:grid-cols-3 gap-2 w-full items-center">
        {data.map((product) => (
          <li key={product.id} className="shadow-xl ">
            <ProductListItem
              data={{
                id: product.id,
                thumbnailAlt: product.title,
                thumbnailUrl: product.image,
                title: product.title,
              }}
            />
          </li>
        ))}
      </ul>
      <Pagination current={"1"} />
    </Main>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const data: Product[] = await (
    await fetch(
      `https://naszsklep-api.vercel.app/api/products?take=25&offset=0`
    )
  ).json();

  return {
    props: {
      data,
    },
  };
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
}
