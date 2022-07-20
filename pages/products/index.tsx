import { gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { ProductListItem } from "../../components/Product";
import { GetProductsListQuery } from "../../generated/graphql";
import { apolloClient } from "../../graphql/apolloClient";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main>
      <ul className=" grid  sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
        {data.map((product) => (
          <li
            key={product.slug}
            className="shadow-xl bg-white border border-gray-200 h-full p-4 rounded"
          >
            <ProductListItem
              data={{
                id: product.slug,
                title: product.name,
                thumbnailUrl: product.images[0].url,
                thumbnailAlt: product.name,
              }}
            />
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: gql`
      query GetProductsList {
        products {
          slug
          name
          price
          images(first: 1) {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.products,
    },
  };
};
