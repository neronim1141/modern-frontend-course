import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="bg-gray-700 text-white px-4 py-2">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};
