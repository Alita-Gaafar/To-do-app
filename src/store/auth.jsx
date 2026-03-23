import { createSlice } from "@reduxjs/toolkit";

const initialGoalsState = {
  email: null,
};

const authSlice = createSlice({
  name: "goals",
  initialState: initialGoalsState,
  reducers: {
    setEmail(state, payload) {
      state.email = payload.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authAction = authSlice.actions;
