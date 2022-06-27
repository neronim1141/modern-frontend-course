import React from "react";

interface PageLinkProps {
  current?: boolean;
  page: string;
}
const PageLink = ({ current = false, page }: PageLinkProps) => {
  return (
    <a
      href={`/products?page=${page}`}
      className={`border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium
    ${current ? "border-indigo-500 text-indigo-600" : ""}`}
    >
      {page}
    </a>
  );
};

interface PaginationProps {
  current?: string;
  total?: string;
}

export const Pagination = ({ current, total = "10" }: PaginationProps) => {
  console.log();
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 justify-self-center">
      <div className="hidden md:-mt-px md:flex">
        {new Array(Number(total)).fill(0).map((_, i) => (
          <PageLink
            key={i}
            page={i + 1 + ""}
            current={i + 1 === Number(current)}
          />
        ))}
      </div>
    </nav>
  );
};
