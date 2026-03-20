import { showSuccess } from "@/util/notifications";
import { useDispatch, useSelector } from "react-redux";

export default function useEdit(
  handleHidePopup,
  notificationText,
  editAction,
  itemToEdit,
) {
  // Redux
  const dispatch = useDispatch();

  // End of redux

  // Functions

  // Add data function
  function handleEdit(e) {
    e.preventDefault(); // stop default submit

    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    // Notification
    showSuccess(notificationText);

    dispatch(editAction({ ...formDataObj, id: itemToEdit.id }));

    // Hide the add task popup
    handleHidePopup();
  }

  // End of functions

  return {
    handleEdit,
  };
}
