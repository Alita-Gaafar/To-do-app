import { showSuccess } from "@/util/notifications";

export default function useDelete(notificationText, setData) {
  // Remove task
  function handleRemoveData(id) {
    // Add notification with text removed
    showSuccess(notificationText);

    // Remove the task
    setData((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  }

  return { handleRemoveData };
}
