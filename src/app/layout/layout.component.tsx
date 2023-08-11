import React, { FC, ReactNode } from "react";
import { Navbar } from "../../widgets";

type LayoutType = { children: ReactNode };

export const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>footer</footer>
    </>
  );
};
