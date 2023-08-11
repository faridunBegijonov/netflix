import React, { FC } from "react";
import { Container } from "../shared";
import { Layout } from "../app";
import { Banner } from "../widgets";

export const HomePage: FC = () => {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
};
