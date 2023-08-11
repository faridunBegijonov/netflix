import React, { FC } from "react";
import { Container } from "../../shared";

export const CreateProfiles: FC = () => {
  return (
    <section className="py-[92px] bg-[#000000FF] my-2">
      <Container>
        <div className="lg:flex flex-row-reverse  items-center justify-between">
          <div className="w-full lg:w-[50%]">
            <h1 className="xl:text-[50px] text-[30px] lg:text-[40px]">
              Создавайте профили для детей
            </h1>
            <p>
              Подарите детям мир приключений с их любимыми героями. Он создан
              специально для них и уже доступен с вашей подпиской. .
            </p>
          </div>
          <img
            className="mx-auto lg:mx-0 lg:w-[50%] w-full"
            src="/assets/seeAnyWere/Снимок%20экрана%202023-08-11%20153316.png"
            alt="Img"
          />
        </div>
      </Container>
    </section>
  );
};
