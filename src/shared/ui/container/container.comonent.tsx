import React, { FC, ReactNode } from "react";

type ContainerType = { children: ReactNode };
export const Container: FC<ContainerType> = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1280px] lg:px-5 px-4 md:px-8">
      {children}
    </div>
  );
};
