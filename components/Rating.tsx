interface RatingProps {
  rating: number;
}
export const Rating = ({ rating }: RatingProps) => {
  return <div className="text-amber-500 font-bold">{rating}</div>;
};
