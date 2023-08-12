import React, { FC, useEffect } from "react";
import { Layout } from "../app";

export const Error: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <h1 className="text-center">Нечего не найдено....</h1>
    </Layout>
  );
};
