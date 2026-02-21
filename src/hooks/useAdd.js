import { showSuccess } from "@/util/notifications";
import { useState } from "react";

export default function useAdd(
  handleHidePopup,
  notificationText,
  formData,
  resetForm,
  setData,
) {
  // States

  // End of states

  // Functions

  // Add data function
  function handleAdd(e, extraFields) {
    e.preventDefault(); // stop default submit

    const randomNumber = Date.now() * Math.random(); // Random number

    const newItem = {
      id: randomNumber,
      ...formData,
      ...extraFields,
    };

    // Notification
    showSuccess(notificationText);

    // Set add tasks state
    setData((prevData) => [...prevData, newItem]);

    // Hide the add task popup
    handleHidePopup();

    resetForm();
  }

  // End of functions

  return {
    handleAdd,
  };
}
