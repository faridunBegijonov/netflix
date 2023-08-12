import React, { FC, useEffect } from "react";
import { Layout } from "../app";
import { Container, useGetAllMovies } from "../shared";
import { SliderMovies } from "../features";

export const Movies: FC = () => {
  const [data, isLoading, error] = useGetAllMovies();
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
      <SliderMovies title="Новые релизы" movies={data} />
    </Layout>
  );
};
