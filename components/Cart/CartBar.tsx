import Link from "next/link";
import React from "react";
import { useCartState } from "./CartContext";

export const CartBar = () => {
  const cartContext = useCartState();

  return (
    <Link href="/cart">
      <a className="flex gap-1 border rounded p-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        koszyk
        <div className="rounded-full flex align-center text-sm justify-center bg-neutral-500 w-5 h-5">
          {cartContext.items.reduce((prev, curr) => {
            return prev + curr.count;
          }, 0)}
        </div>
      </a>
    </Link>
  );
};
