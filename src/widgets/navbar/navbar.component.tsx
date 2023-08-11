import React, { FC } from "react";
import { Button, Container } from "../../shared";
import { Link } from "react-router-dom";

export const Navbar: FC = () => {
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
            <Button
              variant="contained"
              link="/movies"
              size="text-sm mr-2 hidden md:block"
            >
              СМОТРЕТЬ
            </Button>
            <Button variant="outlined" link="/login" size="text-sm">
              ВОЙТИ
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};
