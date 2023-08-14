import { Link, useParams } from "react-router-dom";
import {
  Alert,
  Button,
  Container,
  IMovieType,
  MovieCard,
  useAppDispatch,
  useGetAllMovies,
  useGetMovieBayId,
  useGetStorage,
  useLogin,
} from "../../shared";
import React, { useEffect, useState } from "react";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { Layout } from "../../app";
import { addToSaves } from "../../app/store/slices";
import { InformationMovies } from "./informationMovies.component";

export const DetailMovie = () => {
  const { id } = useParams();
  const { isLogin } = useLogin();
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
  const [data, isLoading, error] = useGetMovieBayId(Number(id));
  const [allMovies] = useGetAllMovies();
  const dispatch = useAppDispatch();

  const movie = data as IMovieType;

  const similar = allMovies
    ?.filter((item: IMovieType) => {
      return item.category === movie?.category;
    })
    .filter((movie: IMovieType) => {
      return movie.id !== Number(id);
    })
    .slice(0, 8);

  const saves = () => {
    setIsOpenAlert(true);
    dispatch(addToSaves(movie));
    setTimeout(() => {
      setIsOpenAlert(false);
    }, 2000);
  };

  const savesMovies: IMovieType[] = useGetStorage("savesNetflix");
  const isSave = savesMovies.some(
    (movie: IMovieType) => movie.id === Number(id),
  );

  useEffect(() => {
    if (movie) document.title = movie?.title;
    window.scrollTo(0, 0);
    return () => {
      document.title = "Netflix Таджикистан — Смотрите сериалы и фильмы онлайн";
    };
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
                <p className="md:mt-8 mt-4 text-[16px] mb-4">
                  {movie?.description}
                </p>
                <span className="block">
                  <span className="text-white/50 mr-1">В ролях:</span>
                  {movie?.release}
                </span>
                <button
                  disabled={!isLogin}
                  onClick={saves}
                  className="bg-transparent mt-4 border-[1px] border-solid border-[#fff] px-4 py-2 w-full md:w-auto justify-center font-bold rounded-[2px] flex items-center"
                >
                  {isLogin ? "Сохранить" : "Войдите чтобы сохранить"}
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
          <Button variant="contained" size="text-sm">
            {isLogin ? "СМОТРЕТЬ" : "Войдите чтобы смотреть"}
          </Button>
        </div>
        <div className="border-y border-white/50 py-4 mt-10 flex items-center justify-center">
          <span className="text-center text-sm w-full md:w-[50%]">
            {movie?.description}
          </span>
        </div>
        <InformationMovies release={movie ? movie?.release : ""} />
        {similar?.length !== 0 && (
          <div className="md:mt-8 mt-4 ">
            <h2>Похожие</h2>
            <div
              className={`${
                similar?.length >= 4 ? "grid-container" : "flex flex-wrap"
              } mt-2`}
            >
              {similar?.map((movie: IMovieType) => {
                return (
                  <div
                    key={movie.id}
                    className={`${
                      similar?.length >= 4
                        ? "w-full"
                        : "lg:w-[350px] md:w-[45%] w-full last:mr-0 md:mr-4 mb-[35px]"
                    }  xl:h-[200px] h-[180px] mb-2`}
                  >
                    <MovieCard isSimilar={true} {...movie} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Container>
      {isOpenAlert && (
        <Alert
          title={`${isSave ? "Этот фильм уже сохранен" : "Успешно добавлено"}`}
        />
      )}
    </Layout>
  );
};
