import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { MarkdownResult, NextMarkdown } from "./NextMarkdown";
import { Rating } from "./Rating";

interface ProductDetails {
  id: number;
  title: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  description: string;
  longDescription: MarkdownResult;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}
export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://naszsklep.vercel.app/products/${data.id}`}
        openGraph={{
          url: `https://naszsklep.vercel.app/products/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.thumbnailUrl,
              alt: data.thumbnailAlt,
              type: "image/jpeg",
            },
          ],
          site_name: "Nasz Sklep",
        }}
      />
      <Image
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
        layout="responsive"
        width={16}
        height={9}
        objectFit="contain"
      />
      <h2 className="font-bold text-2xl">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <Rating rating={data.rating} />

      <NextMarkdown>{data.longDescription}</NextMarkdown>
    </>
  );
};

type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt"
>;

interface ProductListItemProps {
  data: ProductListItem;
}
export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <Image
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
        layout="responsive"
        width={16}
        height={9}
        objectFit="contain"
      />
      <Link href={`products/${data.id}`}>
        <a>
          <h2 className="font-bold text-2xl">{data.title}</h2>
        </a>
      </Link>
    </>
  );
};
