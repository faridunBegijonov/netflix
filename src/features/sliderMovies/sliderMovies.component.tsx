import React, { FC } from "react";
import { Container, IMovieType, MovieCard } from "../../shared";
import Slider from "react-slick";
import { settings } from "./slider.settings";
type SliderMoviesType = {
  title: string;
  movies: IMovieType[];
};

export const SliderMovies: FC<SliderMoviesType> = ({
  title,
  movies,
}: SliderMoviesType) => {
  return (
    <Container>
      <p className="text-md font-bold">{title}</p>
      <Slider className="mt-2" {...settings}>
        {Array.isArray(movies) &&
          movies?.map((movie) => {
            return (
              <div className="pr-1 md:pr-2" key={movie.id}>
                <MovieCard {...movie} />
              </div>
            );
          })}
      </Slider>
    </Container>
  );
};
