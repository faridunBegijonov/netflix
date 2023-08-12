import React, { FC } from "react";
import { Link } from "react-router-dom";

type MovieCardType = {
  id: number;
  img: string;
  title: string;
  isSimilar?: boolean;
};

export const MovieCard: FC<MovieCardType> = ({
  title,
  img,
  id,
  isSimilar = false,
}: MovieCardType) => {
  return (
    <Link
      className="w-full"
      to={isSimilar ? `/movies/similar/${id}` : `/movies/${id}`}
    >
      <img src={img} className="w-full" alt="Img" />
      <p className="text-center text-sm  mt-1">{title}</p>
    </Link>
  );
};
