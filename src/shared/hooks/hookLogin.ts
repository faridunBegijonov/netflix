import { IUserType } from "../types";
import { useGetStorage } from "./hookLocalStorage";

export const useLogin = () => {
  const loginData: IUserType = useGetStorage("userNetflix");
  const isLogin = Boolean(
    loginData.email && loginData.firstName && loginData.password,
  );
  console.log(loginData.email);
  return { loginData, isLogin };
};
