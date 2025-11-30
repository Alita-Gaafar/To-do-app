import { createContext } from "react";

const TaskContext = createContext({
  taskTextRef: null,
  taskDescriptionRef: null,
  taskDateRef: null,
  taskCategoryRef: null,
  handleAddNewTaskClick: null,
  taskState: null,
  handleRemoveTask: null,
  handleAddTaskClick: null,
  handleEditTask: null,
  handleEdit: null,
});
export default TaskContext;
