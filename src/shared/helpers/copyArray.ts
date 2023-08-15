import { IMovieType } from "../types";

export const copyArray = (arr: IMovieType[], start: number, count: number) => {
  return arr?.slice(start, count);
};
