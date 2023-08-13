import { IUserType } from "../types";
import { useGetStorage } from "./hookLocalStorage";

export const useLogin = () => {
  try {
    const loginData: IUserType = useGetStorage("userNetflix");
    const isLogin = Boolean(
      loginData.email && loginData.firstName && loginData.password,
    );
    return { loginData, isLogin };
  } catch (e) {
    return { error: true };
  }
};
