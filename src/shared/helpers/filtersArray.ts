import { IMovieType } from "../types";

export const filtersArray = (arr: IMovieType[], value: string) => {
  return arr?.filter((movie: IMovieType) => {
    return movie.category === value;
  });
};
