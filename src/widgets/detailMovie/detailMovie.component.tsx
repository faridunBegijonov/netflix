import { Link, useParams } from "react-router-dom";
import {
  Button,
  Container,
  IMovieType,
  MovieCard,
  useAppSelector,
  useGetAllMovies,
  useGetMovieBayId,
} from "../../shared";
import React from "react";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { Layout } from "../../app";

export const DetailMovie = () => {
  const { id } = useParams();

  const [data, isLoading, error] = useGetMovieBayId(Number(id));

  const [allMovies] = useGetAllMovies();

  const movie: IMovieType = data as IMovieType;

  const similar = allMovies?.filter((item: IMovieType) => {
    return item.category === movie?.category;
  });
  return (
    <Layout>
      <div className="relative h-screen">
        <img
          src={movie?.background}
          alt="img"
          className="absolute w-full h-screen top-0 left-0 bottom-0 right-0"
        />

        <div className="bg-movie z-101  w-full h-screen absolute top-0 left-0 bottom-0 right-0">
          <Container>
            <div className="flex lg:w-[50%] w-full items-center h-screen ">
              <div>
                <img
                  src={movie?.logo}
                  alt="Logo"
                  className="md:w-[500px] lg:w-[380px] xl:w-[500px] w-full h-[100px]"
                />
                <h2 className="md:mb-4 lg:mb-2 xl:mb-4 mb-2 mt-5 md:mt-10">
                  {movie?.title}
                </h2>
                <span className="text-white/50">{movie?.cast}</span>
                <p className="md:mt-8 mt-4 text-md lg:text-[18px] xl:text-[22px] md:text-[22px] mb-4">
                  {movie?.description}
                </p>
                <span className="block">
                  <span className="text-white/50 mr-1">В ролях:</span>
                  {movie?.release}
                </span>
                <button className="bg-transparent mt-4 border-[1px] border-solid border-[#fff] px-4 py-2 w-full md:w-auto justify-center font-bold rounded-[2px] flex items-center">
                  Сохранить
                  <i className="ml-2 ">
                    <BsFileEarmarkPostFill />
                  </i>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className="bg-detail-movie mt-4 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/favicon.ico" alt="Img" className="w-[50px] h-[50px]" />
            <span className="font-bold">Смотрите сколько хотите.</span>
          </div>
          <Link to="/login">
            <Button variant="contained" size="text-sm">
              СМОТРЕТЬ
            </Button>
          </Link>
        </div>
        <div className="border-y border-white/50 py-4 mt-10 flex items-center justify-center">
          <span className="text-center w-full md:w-[50%]">
            {movie?.description}
          </span>
        </div>
        <div className="md:mt-8 mt-4 ">
          <h2>Похожие</h2>
          <div className="flex mt-2 items-center flex-wrap">
            {similar?.map((movie: IMovieType) => {
              return (
                <div
                  key={movie.id}
                  className="md:mr-5 w-full mb-2 last:mb-0 md:w-[250px]"
                >
                  <MovieCard isSimilar={true} {...movie} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Layout>
  );
};
