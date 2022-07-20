import { useCartState } from "../components/Cart/CartContext";

const CardContent = () => {
  const { items, removeItemfromCart } = useCartState();

  return (
    <div className="col-span-2  p-2  shadow-lg border h-fit">
      {items.length > 0 ? (
        <ul className=" divide-gray-200 divide-y-2 ">
          {items.map((item, index) => (
            <li key={index} className="py-2 flex justify-between group">
              <div>
                {item.count}:{item.title}
              </div>
              <div className="flex gap-2">
                {item.price}
                <button
                  onClick={() => removeItemfromCart(item.id)}
                  className="text-red-500 group-hover:text-red-700  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className=" text-center">brak przedmiotow w koszyku</div>
      )}
    </div>
  );
};

const CardSummary = () => {
  const { items } = useCartState();

  return (
    <div>
      podsumowanie koszyka
      <div>
        Liczba Elementów{" "}
        {items.reduce((prev, curr) => {
          return prev + curr.count;
        }, 0)}
      </div>
      <div>
        łaczny koszt{" "}
        {items.reduce((prev, curr) => {
          return prev + curr.price * curr.count;
        }, 0)}
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="grid grid-cols-3 gap-8">
        <CardContent />
        <CardSummary />
      </div>
    </div>
  );
};

export default Cart;
