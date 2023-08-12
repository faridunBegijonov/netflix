import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Error, HomePage, MovieDetail, Movies } from "../../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetail />,
  },
  {
    path: "/movies/similar/:id",
    element: <MovieDetail />,
  },
]);
