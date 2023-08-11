import React, { FC } from "react";
import { Container } from "../../shared";

export const WatchOnTv: FC = () => {
  return (
    <section className="py-[92px] bg-[#000000FF] my-2">
      <Container>
        <div className="lg:flex items-center justify-between">
          <div className="w-full lg:w-[50%]">
            <h1 className="xl:text-[50px] text-[30px] lg:text-[40px]">
              Смотрите на телевизоре
            </h1>
            <p>
              Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV,
              плеерах Blu-ray и других устройствах.
            </p>
          </div>
          <img
            className="lg:w-[50%] w-full md:h-[399px] h-[299px]"
            src="/assets/watchOnTv/Снимок%20экрана%202023-08-11%20150415.png"
            alt="Img"
          />
        </div>
      </Container>
    </section>
  );
};
