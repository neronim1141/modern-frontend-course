import Link from "next/link";
import React from "react";
import { CartBar } from "./Cart/CartBar";

export const Header = () => {
  return (
    <header className="bg-neutral-700 text-white items-center px-4 py-2 flex justify-between">
      <nav className="flex gap-1">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <CartBar />
    </header>
  );
};
