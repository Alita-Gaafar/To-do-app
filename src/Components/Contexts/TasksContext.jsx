import useAdd from "@/hooks/useAdd";
import useDelete from "@/hooks/useDelete";
import useEdit from "@/hooks/useEdit";
import useForm from "@/hooks/useForm";
import { monthFormat } from "@/util/month-format";
import { showInfo, showSuccess } from "@/util/notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const TaskContext = createContext({
  tasks: null,
  popupInfo: null,
  taskToEdit: null,
  handleInputChange: null,
  handleShowAddPopup: null,
  handleShowEditPopup: null,
  handleHidePopup: null,
  handleUpdateTaskState: null,
  handleAddNewTask: null,
  handleEditTask: null,
  taskToEdit: null,
  completedTasks: null,
  pendingTasks: null,
});

export function TaskWrapper({ children }) {
  // States
  const [popup, setPopup] = useState({
    show: false,
    type: "",
  });

  const [tasks, setTasks] = useState([]);

  // End of states

  // Custom hooks
  // Use form hook
  const initialFormState = {
    title: "",
    description: "",
    date: "",
    category: "",
  }; // Initial form data

  const { formData, handleInputChange, setFormData, resetForm } =
    useForm(initialFormState);
  // End of use form hook

  // Use add custom hook
  const { handleAdd: handleAddNewTask } = useAdd(
    handleHidePopup,
    "Task added successfully! 🎉",
    formData,
    resetForm,
    setTasks,
  );

  // Edit hook
  const {
    setItemToEdit: setTaskToEdit,
    itemToEdit: taskToEdit,
    handleEdit: handleEditTask,
  } = useEdit(
    handleHidePopup,
    "Task edited successfully! 🎉",
    formData,
    setTasks,
  );
  // End of edit hook

  // Delete hook
  const { handleRemoveData: handleRemoveTask } = useDelete(
    "Task deleted ❌",
    setTasks,
  );

  // Variables

  // Completed tasks
  const completed = tasks.filter((task) => task.completed === true);

  // Pending tasks
  const pending = tasks.filter((task) => task.completed === false);

  // End of variables

  // -------------------- UseEffect --------------------

  // Add overflow hidden class when the popup is opened
  useEffect(() => {
    if (popup.show) {
      document.body.classList.add("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [popup.show]);
  // End of useEffect

  // Functions

  // Show add task popup
  function handleShowAddPopup() {
    // Show add task popup
    setPopup(() => ({
      show: true,
      type: "add",
    }));
  }

  // Show edit task popup and get the task to be edited
  function handleShowEditPopup(id) {
    const task = tasks.find((task) => task.id === id); // Task to be edited

    setTaskToEdit(task);

    if (!task) return;

    setFormData({
      title: task.title,
      description: task.description,
      category: task.category,
      date: task.date,
    });

    // Show edit popup
    setPopup(() => ({
      show: true,
      type: "edit",
    }));
  }

  // Hide Popup
  function handleHidePopup() {
    // Hide popup
    setPopup(() => ({
      show: false,
      type: "",
    }));

    setTaskToEdit(null);
  }

  // Update task completes status
  function updateTaskState(id) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        return task.id === id
          ? { ...task, completed: !task.completed }
          : { ...task };
      });

      return [...updatedTasks];
    });
  }

  // End of functions

  // -------------------- Context values --------------------
  const TaskContextVal = {
    popupInfo: popup,
    taskToEdit: taskToEdit,
    tasks: tasks,
    completedTasks: completed,
    pendingTasks: pending,
    handleUpdateTaskState: updateTaskState,
    handleShowAddPopup: handleShowAddPopup,
    handleAddNewTask: (e) => handleAddNewTask(e, { completed: false }),
    handleEditTask: handleEditTask,
    handleShowEditPopup: handleShowEditPopup,
    handleRemoveTask: handleRemoveTask,
    handleRemoveTask: handleRemoveTask,
    handleHidePopup: handleHidePopup,
    handleInputChange: handleInputChange,
  };
  // End of context values

  // -------------------- COMPONENT STRUCTURE --------------------
  return <TaskContext value={TaskContextVal}>{children}</TaskContext>;
}

export default TaskContext;
