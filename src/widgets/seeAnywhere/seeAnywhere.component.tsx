import React, { FC } from "react";
import { Container } from "../../shared";

export const SeeAnywhere: FC = () => {
  return (
    <section className="py-[92px] bg-[#000000FF] my-2">
      <Container>
        <div className="lg:flex items-center justify-between">
          <div className="w-full lg:w-[50%]">
            <h1 className="xl:text-[50px] text-[30px] lg:text-[40px]">
              Смотрите где угодно
            </h1>
            <p>
              Смотрите фильмы и сериалы на телефоне, планшете, ноутбуке и
              телевизоре.
            </p>
          </div>
          <img
            className="lg:w-[50%] xl:w-auto"
            src="/assets/seeAnyWere/Снимок%20экрана%202023-08-11%20152558.png"
            alt="Img"
          />
        </div>
      </Container>
    </section>
  );
};
