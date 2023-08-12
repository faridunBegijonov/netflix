import React, { FC } from "react";
import { AccordionItem, Button, Container } from "../../shared";
import { accordionModel } from "./accordion.model";

export const Accordion: FC = () => {
  return (
    <div className="bg-[#0000009D] py-[42px] md:py-[82px]">
      <Container>
        <h1 className="text-center text-[30px] md:text-[45px]">
          Распространенные вопросы
        </h1>
        <div className="mt-4">
          {accordionModel.map((accordion) => {
            return (
              <div key={accordion.title} className="mb-2 last:mb-0">
                <AccordionItem {...accordion} />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-8 flex-col mx-auto">
          <p className="text-center text-sm md:text-md lg:text-xl md:w-[50%]">
            Готовы смотреть? Введите адрес электронной почты, чтобы оформить или
            возобновить подписку.
          </p>
          <Button
            variant="contained"
            arrow={true}
            size="text-[19px] md:text-[22px] mt-4"
            link="/movies"
          >
            Смотреть
          </Button>
        </div>
      </Container>
    </div>
  );
};
