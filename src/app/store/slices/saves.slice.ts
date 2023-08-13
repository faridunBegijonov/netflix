import { createSlice } from "@reduxjs/toolkit";
import { IMovieType, useGetStorage } from "../../../shared";

interface IInitialState {
  movies: IMovieType[];
}

const data = useGetStorage("savesNetflix");

const initialState: IInitialState = {
  movies: data,
};
console.log(initialState.movies);
export const savesSlice = createSlice({
  name: "saves",
  initialState,
  reducers: {
    addToSaves: (state, { payload }) => {
      state.movies.push(payload);
      localStorage.setItem("savesNetflix", JSON.stringify(state.movies));
    },
    deleteToSaves: (state, { payload }) => {
      state.movies = state.movies.filter((movie) => {
        return movie.id !== payload.id;
      });
      localStorage.setItem("savesNetflix", JSON.stringify(state.movies));
    },
  },
});

export const { addToSaves, deleteToSaves } = savesSlice.actions;
