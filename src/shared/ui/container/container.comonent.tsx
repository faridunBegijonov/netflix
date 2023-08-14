import React, { FC, ReactNode } from "react";

type ContainerType = { children: ReactNode };
export const Container: FC<ContainerType> = ({ children }) => {
  return <div className="mx-auto max-w-[1480px] px-5 md:px-10">{children}</div>;
};
