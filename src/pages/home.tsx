import React, { FC, useEffect } from "react";
import { Layout } from "../app";
import { Accordion, Banner, CreateProfiles, DownloadSeries } from "../widgets";
import { useAuth } from "../shared";

export const HomePage: FC = () => {
  const auth = useAuth();
  useEffect(() => {
    auth();
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Banner />
      <DownloadSeries />
      <CreateProfiles />
      <Accordion />
    </Layout>
  );
};
