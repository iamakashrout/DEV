import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    userData: userReducer,
    todoData: todoReducer
  } // Add your reducers here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;