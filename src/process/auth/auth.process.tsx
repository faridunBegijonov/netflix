import React, { FC, useState } from "react";
import { IUserType, useAppDispatch } from "../../shared";
import { login } from "../../app/store/slices";
import { useNavigate } from "react-router-dom";

export const AuthProcess: FC = () => {
  const [isLogin, setIsLogin] = useState<IUserType>({
    firstName: "",
    email: "",
    password: null,
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const disablesBtn = Boolean(
    !isLogin.firstName && !isLogin.email && !isLogin.password,
  );

  const logging = () => {
    const user: IUserType = {
      firstName: isLogin.firstName,
      email: isLogin.email,
      password: isLogin.password,
    };
    dispatch(login(user));
    setIsLogin((prevState: IUserType) => ({
      ...prevState,
      email: "",
      password: null,
      firstName: "",
    }));
    navigate("/movies");
  };
  return (
    <>
      <input
        value={isLogin.firstName}
        onChange={(event) =>
          setIsLogin((prev: IUserType) => ({
            ...prev,
            firstName: event.target.value,
          }))
        }
        className="w-full bg-[#333333FF] rounded-[4px] mt-4 p-4 outline-none"
        type="email"
        placeholder="Имя"
      />

      <input
        value={isLogin.email}
        onChange={(event) =>
          setIsLogin((prev: IUserType) => ({
            ...prev,
            email: event.target.value,
          }))
        }
        className="w-full bg-[#333333FF] rounded-[4px] my-4 p-4 outline-none"
        type="email"
        placeholder="Адрес электронной почты или номер телефона"
      />
      <input
        value={isLogin.password || ""}
        onChange={(event) =>
          setIsLogin((prev: IUserType) => ({
            ...prev,
            password: +event.target.value,
          }))
        }
        className="w-full bg-[#333333FF] rounded-[4px] p-4 outline-none"
        type="password"
        placeholder="Пароль"
      />
      <button
        disabled={disablesBtn}
        onClick={logging}
        className="mt-4 w-full bg-[#DE0611FF] justify-center  font-bold rounded-[2px] flex items-center px-4 py-2 "
      >
        Войти
      </button>
    </>
  );
};
