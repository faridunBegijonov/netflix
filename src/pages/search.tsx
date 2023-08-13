import React, { FC, useEffect, useState } from "react";
import { Layout } from "../app";
import {
  Container,
  IMovieType,
  MovieCard,
  useFilterMovies,
  useGetAllMovies,
} from "../shared";

export const Search: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [filtersMovies, setFiltersMovies] = useState<IMovieType[]>();

  const [data] = useGetAllMovies();

  const filterMovie = useFilterMovies(data as IMovieType[], search);

  useEffect(() => {
    setFiltersMovies(data);
  }, []);
  return (
    <Layout>
      <div className="my-10">
        <Container>
          <h2>Ваш любимой фильм</h2>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="md:w-[350px] w-full bg-[#333333FF] rounded-[4px] my-4 p-4 outline-none"
            type="search"
            placeholder="Поиск"
          />
          <div className="flex flex-wrap mt-8">
            {filterMovie?.length !== 0 ? (
              filterMovie?.map((movie: IMovieType) => {
                return (
                  <div
                    className="md:w-[280px] w-full md:mr-4 mb-2"
                    key={movie.id}
                  >
                    <MovieCard {...movie} />
                  </div>
                );
              })
            ) : (
              <span className="text-white/50 font-bold text-center">
                Нечего не найдено....
              </span>
            )}
          </div>
        </Container>
      </div>
    </Layout>
  );
};
