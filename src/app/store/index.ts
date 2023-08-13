import { configureStore } from "@reduxjs/toolkit";
import { authSlice, savesSlice } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    saves: savesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
