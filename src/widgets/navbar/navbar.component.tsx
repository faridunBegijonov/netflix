import React, { FC } from "react";
import { Button, Container, useLogin } from "../../shared";
import { Link } from "react-router-dom";

export const Navbar: FC = () => {
  const { isLogin } = useLogin();
  return (
    <nav className="py-4 bg-[#000000FF] ">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="/assets/navbar/logo.svg"
              alt="Logo"
              className="w-[110px] h-[40px]"
            />
          </Link>
          <div className="flex items-center">
            <p className="text-sm mr-2 hidden md:block">
              ФИЛЬМЫ И СЕРИАЛЫ БЕЗ ОГРАНИЧЕНИЙ
            </p>
            <Link to="/movies">
              <Button variant="contained" size="text-sm mr-2 hidden md:block">
                СМОТРЕТЬ
              </Button>
            </Link>
            {isLogin ? (
              <Link to="/profile">
                <Button variant="outlined" size="text-sm">
                  ЛИЧНЫЙ КАБИНЕТ
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="outlined" size="text-sm">
                  ВОЙТИ
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};
