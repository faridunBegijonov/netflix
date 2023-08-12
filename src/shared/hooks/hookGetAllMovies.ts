import { useQuery } from "react-query";
import axios from "axios";

export const useGetAllMovies = () => {
  const { isLoading, error, data } = useQuery("movies", async () => {
    const res = await axios("http://localhost:4200/movies");
    return res.data;
  });
  return [data, isLoading, error];
};
