import { formattedDate } from "@/util/formatted-date";
import { createSlice } from "@reduxjs/toolkit";

const initialHabitsState = {
  popup: false,
  habits: [],
};

const habitsSlice = createSlice({
  name: "habits",
  initialState: initialHabitsState,
  reducers: {
    showPopup(state) {
      state.popup = true;
    },

    hidePopup(state) {
      state.popup = initialHabitsState.popup;
    },

    addHabits(state, action) {
      state.popup = initialHabitsState.popup;

      state.habits.push({
        ...action.payload,
      });
    },

    removeHabit(state, action) {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload,
      );
    },

    updateStreak(state, action) {
      const today = formattedDate();

      state.habits = state.habits.map((habit) => {
        return habit.id === action.payload && today === habit.date
          ? {
              ...habit,
              streaks: habit.streaks - 1,
              completed: false,
              date: null,
            }
          : habit.id === action.payload
            ? {
                ...habit,
                streaks: habit.streaks + 1,
                completed: true,
                date: today,
              }
            : habit;
      });
    },

    initializeStreaks(state) {
      const today = new Date();

      state.habits = state.habits.map((habit) => {
        const habitDate = new Date(habit.date); // Convert habit date to Date object

        const timeDiff = today.getTime() - habitDate.getTime(); // Calculate time difference in milliseconds

        const dayDiff = timeDiff / (1000 * 3600 * 24); // Convert time difference to days

        return dayDiff >= 2
          ? {
              ...habit,
              streaks: 0,
              completed: false,
              date: null,
            }
          : habit;
      });
    },
  },
});

export const habitsReducer = habitsSlice.reducer;
export const habitsAction = habitsSlice.actions;
