import React, { FC, useEffect, useState } from "react";
import {
  Container,
  IMovieType,
  MovieCard,
  Pagination,
  Select,
  useFilterByCategory,
  useFilterMovies,
  useGetAllMovies,
} from "../../shared";
import { Layout } from "../../app";
import {
  getMoviesByPage,
  usePagination,
} from "../../shared/hooks/hookPagination";

export const SearchComponent: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [filtersMovies, setFiltersMovies] = useState<IMovieType[]>();
  const [page, setPage] = useState<number>(1);
  const category: string[] = [];
  const [data] = useGetAllMovies();
  const [dataPagination] = usePagination(page);

  const filtersSearch: IMovieType[] = useFilterMovies(
    (search.length ? data : dataPagination) as IMovieType[],
    search,
  );

  data?.forEach((movie: IMovieType) => {
    category.push(movie.category);
  });

  const filterByCategory = (category: string) => {
    const categoryArr: IMovieType[] = useFilterByCategory(data, category);
    setFiltersMovies(categoryArr);
  };
  const paginationFn = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setFiltersMovies(dataPagination);
  }, [dataPagination]);

  useEffect(() => {
    setFiltersMovies(filtersSearch);
  }, [search]);

  const getDataPagination = async (page: number) => {
    const dataPagination = await getMoviesByPage(page);
    setFiltersMovies(dataPagination);
  };

  useEffect(() => {
    getDataPagination(page);
    window.scrollTo(0, 0);
  }, [page]);
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
          <div
            className={`${
              Array.isArray(filtersMovies) && filtersMovies?.length >= 4
                ? "grid-container"
                : "flex flex-wrap"
            } mt-8`}
          >
            {filtersMovies?.length !== 0 ? (
              filtersMovies?.map((movie: IMovieType) => {
                return (
                  <div
                    className={`${
                      Array.isArray(filtersMovies) && filtersMovies?.length >= 4
                        ? "w-full"
                        : "lg:w-[350px] md:w-[45%] w-full last:mr-0 md:mr-4 mb-[35px]"
                    }  xl:h-[200px] h-[180px] mb-2`}
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
          <div className="mt-16">
            <Pagination paginationFn={paginationFn} />
          </div>
        </Container>
      </div>
    </Layout>
  );
};
