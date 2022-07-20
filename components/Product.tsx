import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { useCartState } from "./Cart/CartContext";
import { MarkdownResult, NextMarkdown } from "./NextMarkdown";
import { Rating } from "./Rating";

interface ProductDetails {
  id: string;
  title: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  description: string;
  longDescription?: MarkdownResult;
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

      {data.longDescription && (
        <NextMarkdown>{data.longDescription}</NextMarkdown>
      )}
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
  const { addItemToCart } = useCartState();
  return (
    <div className="flex flex-col h-full">
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
      <div className="flex-grow" />
      <button
        onClick={() =>
          addItemToCart({ id: data.id, title: data.title, price: 10, count: 1 })
        }
        className="self-center border border-black hover:bg-neutral-200 rounded px-2 py-1"
      >
        dodaj do koszyka
      </button>
    </div>
  );
};
