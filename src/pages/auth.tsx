import React, { FC, useEffect } from "react";
import { AuthComponent } from "../widgets";

export const Auth: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <AuthComponent />;
};
