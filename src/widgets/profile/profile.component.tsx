import React, { FC } from "react";
import { Layout } from "../../app";
import {
  Button,
  Container,
  IMovieType,
  MovieCard,
  useAppDispatch,
  useLogin,
} from "../../shared";
import { goOut } from "../../app/store/slices";
import { Link, useNavigate } from "react-router-dom";

export const ProfileComponent: FC = () => {
  const { loginData } = useLogin();

  const dispatch = useAppDispatch();

  const movies = JSON.parse(localStorage.getItem("savesNetflix") as string);

  const navigate = useNavigate();

  const logout = () => {
    dispatch(
      goOut({
        email: "",
        password: null,
        firstName: "",
      }),
    );
    navigate("/");
  };
  return (
    <Layout>
      <div className="w-full">
        <div className="bg-banner-profile w-full py-10">
          <Container>
            <div>
              <div className="flex items-center">
                <span className="font-bold mr-2 border-r-2 border-white/50 pr-2 text-xl uppercase">
                  Личный кабинет
                </span>
                <button onClick={logout}>
                  <Button variant="outlined" size="text-md">
                    Выход
                  </Button>
                </button>
              </div>
              <div className="mt-10">
                <div className="flex items-center">
                  <div className="mr-4 flex items-center justify-center bg-[#181818FF] w-[80px] h-[80px] rounded-[50%]">
                    <img src="/favicon.ico" className="w-[50px] h-[50px]" />
                  </div>

                  <p className="font-bold mr-4 text-white/50">
                    Имя:{loginData?.firstName}
                  </p>

                  <p className="font-bold  text-white/50">
                    Email:{loginData?.email}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-white/50 my-4" />
              </div>
            </div>
            <div className="md:mt-8 mt-4 ">
              <h2>Сохронненое</h2>
              {movies.length === 0 && (
                <span className="font-bold text-white/50">
                  Вы нечего не сохранили{" "}
                  <Link to="/movies" className="text-white">
                    сохранить
                  </Link>
                </span>
              )}
              <div className="flex mt-2 flex-wrap">
                {Array.isArray(movies) &&
                  movies?.map((movie: IMovieType) => {
                    return (
                      <div
                        key={movie.id}
                        className="md:mr-5 w-full mb-2 last:mb-0 md:w-[250px]"
                      >
                        <MovieCard {...movie} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  );
};
