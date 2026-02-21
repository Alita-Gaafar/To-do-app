import { showSuccess } from "@/util/notifications";
import { useState } from "react";

export default function useEdit(
  handleHidePopup,
  notificationText,
  formData,
  setData,
  
) {
  // States
  const [itemToEdit, setItemToEdit] = useState();
  // End of states

  // Functions

  // Add data function
  function handleEdit(e) {
    e.preventDefault(); // stop default submit

    // Notification
    showSuccess(notificationText);

    if (!itemToEdit) return;

    // Set add tasks state
    setData((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        return task.id === itemToEdit.id
          ? {
              ...task,
              ...formData,
            }
          : task;
      });

      return updatedTasks;
    });

    // Hide the add task popup
    handleHidePopup();
  }

  // End of functions

  return {
    itemToEdit,
    handleEdit,
    setItemToEdit,
  };
}
