import { showSuccess } from "@/util/notifications";
import { useDispatch } from "react-redux";

export default function useAdd(handleHidePopup, notificationText, addAction) {
  // Redux
  const dispatch = useDispatch();
  // End of redux

  // Functions

  // Add data function
  function handleAdd(e, extraFields) {
    e.preventDefault(); // stop default submit

    const fd = new FormData(e.target); // Get form data
    const formData = Object.fromEntries(fd.entries()); // Convert form data to object

    const randomNumber = Date.now() * Math.random(); // Random number

    const newItem = {
      id: randomNumber,
      ...formData,
      ...extraFields,
    };

    dispatch(addAction(newItem));

    // Notification
    showSuccess(notificationText);

    // Hide the add task popup
    dispatch(handleHidePopup());

    // Reset form
    e.target.reset();

    // End of functions
  }
  return {
    handleAdd,
  };
}
