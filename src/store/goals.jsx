import { createSlice } from "@reduxjs/toolkit";

const initialGoalsState = {
  popup: { type: "", isShow: false },
  itemToEdit: {
    id: null,
    item: {},
  },
  goals: [],
};

const goalsSlice = createSlice({
  name: "goals",
  initialState: initialGoalsState,
  reducers: {
    showPopup(state, action) {
      state.popup.type = action.payload.type;
      state.popup.isShow = true;

      if (action.payload.id) {
        state.itemToEdit.id = action.payload.id;
        state.itemToEdit.item = state.goals.filter(
          (goal) => goal.id === action.payload.id,
        )[0];
      }
    },

    hidePopup(state) {
      state.popup = initialGoalsState.popup;
    },

    addGoals(state, action) {
      state.popup = initialGoalsState.popup;

      state.goals.push({
        ...action.payload,
      });
    },

    editGoal(state, action) {
      state.popup = initialGoalsState.popup;

      state.goals = state.goals.map((goal) => {
        return goal.id === action.payload.id
          ? { ...goal, ...action.payload }
          : goal;
      });
    },

    removeGoal(state, action) {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
    },

    updateGoalState(state, action) {
      state.goals = state.goals.map((goal) => {
        return goal.id === action.payload.id
          ? {
              ...goal,
              completed: action.payload.progress === 100,
              progress: action.payload.progress,
            }
          : goal;
      });
    },
  },
});

export const goalsReducer = goalsSlice.reducer;
export const goalsAction = goalsSlice.actions;
