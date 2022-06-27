import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Main } from "../../components/Main";
import { Pagination } from "../../components/Pagination";
import { ProductListItem } from "../../components/Product";

const getProducts = async (page: number) => {
  console.log(page);
  const data: Product[] = await (
    await fetch(
      `https://naszsklep-api.vercel.app/api/products?take=25&offset=${
        page * 25
      }`
    )
  ).json();
  return data;
};

const ProductsPage = () => {
  const router = useRouter();
  const { data, isLoading, error } = useQuery(
    "products",
    () => getProducts(Number(router.query.page as string) - 1),
    { enabled: Boolean(router.query.page) }
  );
  if (isLoading) return <>is loading</>;
  if (!data || error) return <> is error</>;
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
      <Pagination current={router.query.page as string} />
    </Main>
  );
};

export default ProductsPage;

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
