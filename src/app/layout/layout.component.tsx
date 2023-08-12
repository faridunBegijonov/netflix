import React, { FC, ReactNode } from "react";
import { Footer, Navbar } from "../../widgets";

type LayoutType = { children: ReactNode };

export const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
