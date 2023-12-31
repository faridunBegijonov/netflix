import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  Auth,
  Error,
  HomePage,
  MovieDetail,
  Movies,
  Profile,
  Search,
} from "../../pages";

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
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);
