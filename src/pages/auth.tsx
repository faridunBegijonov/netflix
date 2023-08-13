import React, { FC, useEffect } from "react";
import { AuthComponent } from "../widgets";
import { useLogin } from "../shared";
import { Profile } from "./profile";

export const Auth: FC = () => {
  const isLogin = useLogin();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isLogin.error && <AuthComponent />}
      {isLogin ? <AuthComponent /> : <Profile />}
    </>
  );
};
