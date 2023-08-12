import React, { FC, useEffect } from "react";
import { DetailMovie } from "../../widgets";

export const MovieDetail: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <DetailMovie />;
};
