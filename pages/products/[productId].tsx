import { InferGetStaticPropsType } from "next";
import { Main } from "../../components/Main";
import { ProductDetails } from "../../components/Product";
import { apolloClient } from "../../graphql/apolloClient";
import { gql } from "@apollo/client";
import { serialize } from "next-mdx-remote/serialize";
import {
  GetProductQuery,
  GetProductQueryVariables,
  GetProductsSlugsQuery,
} from "../../generated/graphql";

export type InferGetStaticPaths<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? { params?: R }
  : never;

const ProductsDetailsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <>cos nie tak</>;
  }
  return (
    <Main>
      <ProductDetails
        data={{
          id: data.slug,
          thumbnailAlt: data.name,
          thumbnailUrl: data.images[0].url,
          title: data.name,
          description: data.description,
          longDescription: data.longDescription,
          rating: data.price,
        }}
      />
    </Main>
  );
};

export default ProductsDetailsPage;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: gql`
      query GetProductsSlugs {
        products {
          slug
        }
      }
    `,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId)
    return {
      props: {},
      notFound: true,
    };

  const { error, data } = await apolloClient.query<
    GetProductQuery,
    GetProductQueryVariables
  >({
    query: gql`
      query GetProduct($slug: String) {
        product(where: { slug: $slug }) {
          slug
          name
          description
          price
          images(first: 1) {
            url
          }
        }
      }
    `,
    variables: {
      slug: params.productId,
    },
  });
  if (error)
    return {
      props: {},
      notFound: true,
    };

  if (!data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description),
      },
    },
  };
};
