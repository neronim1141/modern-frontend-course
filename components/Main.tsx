import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}
export const Main = ({ children }: MainProps) => {
  return <main className="  mx-auto  p-6   ">{children}</main>;
};
