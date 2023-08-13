import React, { FC, useEffect, useState } from "react";
import { Layout } from "../app";
import {
  Container,
  IMovieType,
  MovieCard,
  Select,
  useFilterByCategory,
  useFilterMovies,
  useGetAllMovies,
} from "../shared";

export const Search: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [filtersMovies, setFiltersMovies] = useState<IMovieType[]>();
  const category: string[] = [];
  const [data] = useGetAllMovies();

  const filtersSearch: IMovieType[] = useFilterMovies(
    data as IMovieType[],
    search,
  );

  data?.forEach((movie: IMovieType) => {
    category.push(movie.category);
  });

  const filterByCategory = (category: string) => {
    const categoryArr: IMovieType[] = useFilterByCategory(data, category);
    setFiltersMovies(categoryArr);
  };
  useEffect(() => {
    setFiltersMovies(data);
  }, [data]);

  useEffect(() => {
    setFiltersMovies(filtersSearch);
  }, [search]);
  return (
    <Layout>
      <div className="my-10">
        <Container>
          <h2>Ваш любимой фильм</h2>
          <div className="flex flex-col md:flex-row items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="md:w-[350px] w-full bg-[#333333FF] rounded-[4px] my-2 md:my-4 p-4 outline-none"
              type="search"
              placeholder="Поиск"
            />
            <div className="md:ml-4 md:w-[250px] w-full">
              <Select category={category} filterByCategory={filterByCategory} />
            </div>
          </div>
          <div className="flex flex-wrap mt-8">
            {filtersMovies?.length !== 0 ? (
              filtersMovies?.map((movie: IMovieType) => {
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
