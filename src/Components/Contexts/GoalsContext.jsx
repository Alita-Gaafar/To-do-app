import useAdd from "@/hooks/useAdd";
import useDelete from "@/hooks/useDelete";
import useEdit from "@/hooks/useEdit";
import useForm from "@/hooks/useForm";
import { showSuccess } from "@/util/notifications";
import { createContext, useEffect, useState } from "react";

export const GoalsCtx = createContext({
  goals: null,
  popupInfo: null,
  handleShowAddPopup: null,
  handleHidePopup: null,
  handleShowEditPopup: null,
  handleAddNewGoal: null,
  handleEditGoal: null,
  handleRemoveGoal: null,
  handleUpdateGoalState: null,
  goalState: null,
  goalToEdit: null,
  handleInputChange: null,
});

export default function GoalsWrapper({ children }) {
  // States
  const [popup, setPopup] = useState({
    show: false,
    type: "",
  });

  const [goals, setGoals] = useState([]); // Goal state
  // End of states

  // Custom hooks
  // Use form hook
  const initialFormState = {
    title: "",
    description: "",
    date: undefined,
  }; // Initial form data

  const { formData, handleInputChange, setFormData, resetForm } =
    useForm(initialFormState);
  // End of use form hook

  // Use add custom hook
  const { handleAdd: handleAddNewGoal } = useAdd(
    handleHidePopup,
    "Goal added successfully! 🎉",
    formData,
    resetForm,
    setGoals,
  );

  // Edit hook
  const {
    setItemToEdit: setGoalToEdit,
    itemToEdit: goalToEdit,
    handleEdit: handleEditGoal,
  } = useEdit(
    handleHidePopup,
    "Goal edited successfully! 🎉",
    formData,
    setGoals,
  );
  // End of edit hook

  // Delete hook
  const { handleRemoveData: handleRemoveGoal } = useDelete(
    "Goal deleted ❌",
    setGoals,
  );
  // End of custom hooks

  // -------------------- UseEffect --------------------

  // Add overflow hidden class when the popup is opened
  useEffect(() => {
    if (popup.show) {
      document.body.classList.add("overflow-hidden");
    } else document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [popup.show]);
  // End of useEffect

  // -------------------- Functions --------------------

  // Show add goal popup
  function handleShowAddPopup() {
    // Show add task popup
    setPopup(() => ({
      show: true,
      type: "add",
    }));
  }

  // Show edit goal popup and get the goal to be edited
  function handleShowEditPopup(id) {
    const goal = goals.find((goal) => goal.id === id);

    setGoalToEdit(goal);

    if (!goal) return;

    setFormData({
      title: goal.title,
      description: goal.description,
      date: goal.date,
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

    setGoalToEdit(null);
  }

  // Update goal completes status
  function updateGoalState(id, prog) {
    setGoals((prevGoals) => {
      // Return a new array based on matched id (if progress = 100 set completed to true)
      const updatedGoals = prevGoals.map((goal) => {
        return goal.id === id
          ? { ...goal, progress: prog, completed: prog == 100 ? true : false }
          : { ...goal };
      });

      return [...updatedGoals];
    });
  }

  // End of functions

  // -------------------- Contexts --------------------
  const goalsCtxValue = {
    goals: goals,
    popupInfo: popup,
    goalToEdit: goalToEdit,
    handleShowAddPopup: handleShowAddPopup,
    handleHidePopup: handleHidePopup,
    handleShowEditPopup: handleShowEditPopup,
    handleAddNewGoal: (e) =>
      handleAddNewGoal(e, { completed: false, progress: 0 }),
    handleEditGoal: handleEditGoal,
    handleRemoveGoal: handleRemoveGoal,
    handleUpdateGoalState: updateGoalState,
    handleInputChange: handleInputChange,
  };
  return <GoalsCtx value={goalsCtxValue}>{children}</GoalsCtx>;
}
