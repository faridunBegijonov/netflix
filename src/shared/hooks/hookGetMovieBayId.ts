import { useQuery } from "react-query";
import axios from "axios";
import { IMovieType } from "../types";

export const useGetMovieBayId = (id: number) => {
  const { isLoading, error, data } = useQuery<IMovieType>(
    "movieById",
    async () => {
      const res = await axios(`http://localhost:4200/movies/${id}`);
      return res.data;
    },
  );
  return [data, isLoading, error];
};
