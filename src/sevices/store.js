import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reduxStorage";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
