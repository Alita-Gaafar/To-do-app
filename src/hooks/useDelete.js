import { showSuccess } from "@/util/notifications";
import { useDispatch } from "react-redux";

export default function useDelete(notificationText, removeAction) {
  // Redux
  const dispatch = useDispatch();
  // End of redux

  // Functions
  // Remove task
  function handleRemoveData(id) {
    // Add notification with text removed
    showSuccess(notificationText);

    // Remove the task
    dispatch(removeAction(id));
  }
  // End of functions

  return { handleRemoveData };
}
