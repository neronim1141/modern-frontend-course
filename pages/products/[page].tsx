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
  page,
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
      <Pagination current={page} />
    </Main>
  );
};

export default ProductsPage;

export const getStaticPaths = async () => {
  return {
    paths: new Array(10).fill(0).map((_, i) => {
      return {
        params: {
          page: (i + 1).toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.page)
    return {
      props: {},
      notFound: true,
    };

  const data: Product[] = await (
    await fetch(
      `https://naszsklep-api.vercel.app/api/products?take=25&offset=${
        (Number(params.page) - 1) * 25
      }`
    )
  ).json();

  return {
    props: {
      data,
      page: params.page,
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
