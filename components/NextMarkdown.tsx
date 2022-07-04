import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type MarkdownResult = MDXRemoteSerializeResult<Record<string, unknown>>;

interface NextMarkdownProps {
  children: MarkdownResult;
}
export const NextMarkdown = ({ children }: NextMarkdownProps) => {
  return (
    <article className="p-4 prose lg:prose-xl">
      <MDXRemote
        {...children}
        components={{
          a: ({ href, ...props }) => {
            if (!href) {
              return <a {...props} />;
            }
            return (
              <Link href={href}>
                <a {...props}></a>
              </Link>
            );
          },
        }}
      />
    </article>
  );
};
