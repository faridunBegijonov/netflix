import React, { FC } from "react";

type InformationMoviesType = {
  release: string;
};

export const InformationMovies: FC<InformationMoviesType> = ({
  release,
}: InformationMoviesType) => {
  return (
    <div className="my-20">
      <div className="flex flex-wrap">
        <div>
          <h2>Подробнее</h2>
          <span className="mt-1 mb-2 block text-white/50 font-bold">
            Смотреть офлайн
          </span>
          <p>Доступно для загрузки</p>
        </div>
        <div className="w-[320px] md:mx-10">
          <span className="mt-1 mb-2 block text-white/50 font-bold">Жанры</span>
          <span>
            Британские,Романтические комедийные фильмы,Комедийные
            фильмы,Романтические фильмы,Фильмы на основе книг
          </span>
        </div>

        <div className="w-[360px] md:mx-10">
          <span className="mt-1 mb-2 block text-white/50 font-bold">
            О фильме:
          </span>
          <span>Сентиментальный,Вселяющий надежду</span>
        </div>

        <div className="w-[300px]">
          <span className="mt-1 mb-2 block text-white/50 font-bold">Аудио</span>
          <span>English - Audio Description,English [Original],Russian</span>
        </div>

        <div className="w-[300px]">
          <span className="mt-1 mb-2 block text-white/50 font-bold">
            Субтитры
          </span>
          <span>Arabic,English,Russian</span>
        </div>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="w-[200px]">
          <span className="mt-1 mb-2 block text-white/50 font-bold">
            В ролях
          </span>
          <span>{release}</span>
        </div>

        <div className="w-[450px] md:mx-16 mt-8">
          <span>
            Колин Фёрт Хью Грант Джемма Джонс Селия Имри Джеймс Фолкнер Джим
            Бродбент Чармиан Мей Лиза Барбуша Онор Блэкман
          </span>
        </div>

        <div className="w-[450px] mt-8">
          <span>
            Колин Фёрт Хью Грант Джемма Джонс Селия Имри Джеймс Фолкнер Джим
            Бродбент Чармиан Мей Лиза Барбуша Онор Блэкман
          </span>
        </div>
      </div>
    </div>
  );
};
