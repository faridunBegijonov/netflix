import React, { FC, useEffect } from "react";
import { Layout } from "../app";
import {
  Button,
  Container,
  copyArray,
  filtersArray,
  IMovieType,
  useGetAllMovies,
} from "../shared";
import { SliderMovies } from "../features";

export const Movies: FC = () => {
  const [data, isLoading, error] = useGetAllMovies();
  const newRelize: IMovieType[] = copyArray(data, 0, 30);
  const forСhildren: IMovieType[] = filtersArray(data, "Для детей");
  const comedy: IMovieType[] = filtersArray(data, "Комедии");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Container>
        <div className="my-8 my:mt-16">
          <h1>Фильмы</h1>
          <p className="text-md md:text-lg md:w-[550px]">
            Фильмы — страшные, смешные, драматические, романические — заставляют
            нас переживать целый спектр эмоций. Множество фильмов — множество
            впечатлений!
          </p>
        </div>
      </Container>
      <div className="mb-8">
        <SliderMovies title="Новые релизы" movies={newRelize} />
      </div>
      <div className="mb-8">
        <SliderMovies title="Для детей" movies={forСhildren} />
      </div>
      <div className="mb-8">
        <SliderMovies title="Комедии" movies={comedy} />
      </div>
      <div className="mx-auto w-[50%]">
        <h1 className="text-center">Вы можете посмотреть еще очень многое.</h1>
        <p className="text-sm text-center my-2 font-bold">
          Netflix предлагает огромную библиотеку полнометражных фильмов,
          документальных фильмов, сериалов, аниме, удостоенного наград
          оригинального контента Netflix и многое другое. Смотрите сколько
          угодно и когда угодно.
        </p>
        <Button variant="contained" size="text-md mx-auto mt-4">
          СМОТРЕТЬ
        </Button>
      </div>
    </Layout>
  );
};
