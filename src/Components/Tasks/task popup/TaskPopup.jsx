import ActionBtn from "../../buttons/ActionBtn";
import Input from "../../Input";
import "../../../util/fontAwesome.js";
// index.js or main.jsx

// Hooks
import { use } from "react";

// Ctx

// External data
import { taskPopup } from "@/util/data";
import TaskPopupHeader from "./TaskPopupHeader";
import TaskContext from "../../contexts/TasksContext";
import { createPortal } from "react-dom";

export default function TaskPopup({ title }) {
  // Contexts
  const {
    handleAddNewTask,
    handleEditTask,
    popupInfo,
    handleInputChange,
    taskToEdit,
  } = use(TaskContext);
  // End of contexts

  // Component structure
  return createPortal(
    <div className="overlay">
      <div className="w-140 bg-white p-8 rounded-lg dark:bg-black shadow-2xl">
        {/* Header */}
        <TaskPopupHeader title={title} />

        {/* Form */}
        <form
          onSubmit={
            popupInfo.type === "add" ? handleAddNewTask : handleEditTask
          }
          action=""
        >
          {taskPopup.map((task) => (
            <Input
              key={task.id}
              title={task.title}
              type={task.type}
              name={task.name}
              placeholder={task.placeholder}
              inputClass="font-semibold text-sm"
              required={task.required}
              dataToEdit={taskToEdit}
              handleInputChange={handleInputChange}
            />
          ))}

          {/* Add task button */}
          <ActionBtn>{title}</ActionBtn>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}
