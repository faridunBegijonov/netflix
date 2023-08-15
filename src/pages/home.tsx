import React, { FC, useEffect } from "react";
import { Layout } from "../app";
import { Accordion, Banner, CreateProfiles, DownloadSeries } from "../widgets";

export const HomePage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(process.env.URL_MOVIES);
  return (
    <Layout>
      <Banner />
      <DownloadSeries />
      <CreateProfiles />
      <Accordion />
    </Layout>
  );
};
