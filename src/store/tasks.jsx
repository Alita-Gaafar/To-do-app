import { createSlice } from "@reduxjs/toolkit";

const initialTasksState = {
  popup: { type: "", isShow: false },
  tasks: [],
  itemToEdit: {
    id: null,
    item: {},
  },
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    showPopup(state, action) {
      state.popup.type = action.payload.type;
      state.popup.isShow = true;

      if (action.payload.id) {
        state.itemToEdit.id = action.payload.id;
        state.itemToEdit.item = state.tasks.filter(
          (task) => task.id === action.payload.id,
        )[0];
      }
    },

    hidePopup(state) {
      state.popup = initialTasksState.popup;
      state.itemToEdit = initialTasksState.itemToEdit;
    },

    addTasks(state, action) {
      state.popup = initialTasksState.popup;

      state.tasks.push({
        ...action.payload,
      });
    },

    editTask(state, action) {
      state.popup = initialTasksState.popup;
      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload.id
          ? { ...task, ...action.payload }
          : task;
      });
    },

    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    updateTaskState(state, action) {
      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task;
      });
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const tasksAction = tasksSlice.actions;
