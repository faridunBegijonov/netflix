import React, { FC } from "react";
import { Container } from "../../shared";

export const DownloadSeries: FC = () => {
  return (
    <section className="py-[92px] bg-[#000000FF] my-2">
      <Container>
        <div className="lg:flex flex-row-reverse  items-center justify-between">
          <div className="w-full lg:w-[50%]">
            <h1 className="xl:text-[50px] text-[30px] lg:text-[40px]">
              Загружайте сериалы для просмотра офлайн
            </h1>
            <p>
              Сохраняйте видео в избранном, и у вас всегда будет, что
              посмотреть.
            </p>
          </div>
          <img
            className="mx-auto lg:mx-0"
            src="/assets/dowloandSeries/img.png"
            alt="Img"
          />
        </div>
      </Container>
    </section>
  );
};
