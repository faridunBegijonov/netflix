import { useQuery } from "react-query";
import axios from "axios";
import { IMovieType } from "../types";

export const usePagination = (page: number, limit = 32) => {
  const { isLoading, error, data } = useQuery("moviesPagination", async () => {
    const res = await axios(
      `http://localhost:4200/movies?_page=${page}&_limit=${limit}`,
    );
    return res.data;
  });
  return [data, isLoading, error];
};

export const getMoviesByPage = async (page: number, limit = 32) => {
  const res = await axios.get<IMovieType[]>(
    `http://localhost:4200/movies?_page=${page}&_limit=${limit}`,
  );
  return res.data;
};
