import { configureStore, createSlice } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks";
import { goalsReducer } from "./goals";
import { habitsReducer } from "./habits";

const mainInitialState = { rememberMe: false };

const mainSlice = createSlice({
  name: "main",
  initialState: mainInitialState,
  reducers: {
    toggleRememberMe(state) {
      state.rememberMe = !state.rememberMe;
    },
  },
});

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    tasks: tasksReducer,
    goals: goalsReducer,
    habits: habitsReducer,
  },
});

export const mainAction = mainSlice.actions;
