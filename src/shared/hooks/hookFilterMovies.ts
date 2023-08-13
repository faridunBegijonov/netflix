import { IMovieType } from "../types";

export const useFilterMovies = (movies: IMovieType[], value: string) => {
  return movies?.filter((movie: IMovieType) => {
    return movie.title.toLowerCase().includes(value.toLowerCase());
  });
};

export const useFilterByCategory = (movies: IMovieType[], category: string) => {
  return movies.filter((movie: IMovieType) => {
    return movie.category.toLowerCase() === category.toLowerCase();
  });
};
