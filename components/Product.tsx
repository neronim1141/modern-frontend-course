import Link from "next/link";
import { Rating } from "./Rating";

interface ProductDetails {
  id: number;
  title: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  description: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}
export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <h2 className="font-bold text-2xl">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <Rating rating={data.rating} />
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
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <Link href={`product/${data.id}`}>
        <a>
          <h2 className="font-bold text-2xl">{data.title}</h2>
        </a>
      </Link>
    </>
  );
};