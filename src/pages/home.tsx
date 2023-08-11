import React, { FC } from "react";
import { Layout } from "../app";
import {
  Banner,
  CreateProfiles,
  DownloadSeries,
  SeeAnywhere,
  WatchOnTv,
} from "../widgets";

export const HomePage: FC = () => {
  return (
    <Layout>
      <Banner />
      <WatchOnTv />
      <DownloadSeries />
      <SeeAnywhere />
      <CreateProfiles />
    </Layout>
  );
};
