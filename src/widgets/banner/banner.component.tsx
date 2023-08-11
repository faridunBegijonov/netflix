import React, { FC } from "react";
import { Button, Container } from "../../shared";

export const Banner: FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="/assets/banner/bannerHome.jpg"
        alt="Img"
        className="absolute h-screen w-full left-0 top-0 bottom-0 right-0 scale-[2.5] md:scale-100	 "
      />
      <div className="bg-banner scale-105 md:scale-1 h-screen w-full z-100 absolute left-0 top-0 bottom-0 flex items-center justify-center right-0">
        <div className="xl:w-[70%] w-full">
          <Container>
            <h1 className="xl:text-[60px] md:text-[45px] text-[30px] tracking-tighter-[0px] xl:leading-[75px] leading-[45px] md:text-center">
              Фильмы, сериалы и многое другое без ограничений
            </h1>
            <p className="md:text-center md:text-[24px] text-md md:my-2 my-1">
              Смотрите где угодно. Отменить подписку можно в любое время.
            </p>
            <p className="md:text-center md:text-[24px] text-md">
              Готовы смотреть? Введите адрес электронной почты, чтобы оформить
              или возобновить подписку.
            </p>
            <Button
              arrow={true}
              variant="contained"
              size="md:text-[28px] text-[20px] mx-auto mt-2 "
              link="/movies"
            >
              Смотреть
            </Button>
          </Container>
        </div>
      </div>
    </div>
  );
};
