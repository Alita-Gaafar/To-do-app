// Custom hooks
import useAdd from "@/hooks/useAdd";
import useForm from "@/hooks/useForm";
import useDelete from "@/hooks/useDelete";

// External data
import { formattedDate } from "@/util/formatted-date";

// Hooks
import { createContext, useEffect, useState } from "react";

export const HabitsCtx = createContext({
  habits: null,
  today: null,
  setFrequency: null,
  showPopup: null,
  handleShowPopup: null,
  handleHidePopup: null,
  handleAddNewHabit: null,
  handleRemoveHabit: null,
  handleStreak: null,
  handleInputChange: null,
});

export default function HabitsWrapper({ children }) {
  // States
  const [showPopup, setShowPopup] = useState(false); // Popup visibility

  const [habits, setHabits] = useState([]); // Habits
  // End of states

  // Custom hooks
  // Use form hook
  const initialFormState = {
    title: "",
  }; // Initial form data

  const { formData, handleInputChange, resetForm } = useForm(initialFormState);
  // End of use form hook

  // Use add custom hook
  const { handleAdd: handleAddNewHabit } = useAdd(
    handleHidePopup,
    "Habit added successfully! 🎉",
    formData,
    resetForm,
    setHabits,
  );

  // Delete hook
  const { handleRemoveData: handleRemoveHabit } = useDelete(
    "Habit deleted ❌",
    setHabits,
  );

  // Variables
  const today = formattedDate();
  // End of variables

  // -------------------- UseEffect --------------------

  // Add overflow hidden class when the popup is opened
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("overflow-hidden");
    } else document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [showPopup]);
  // End of useEffect

  // -------------------- Functions --------------------

  // Open popup onClicking add habit
  function handleShowPopup() {
    // set showPopup to true to display it
    setShowPopup(true);
  }

  // Hide Popup onClicking x
  function handleHidePopup() {
    setShowPopup(false);
  }

  function handleStreak(id) {
    // Update the streaks (Completed and + 1 or uncompleted and -1)
    setHabits((prevHabits) => {
      const updatedHabits = prevHabits.map((habit) => {
        return habit.id === id && today === habit.date
          ? {
              ...habit,
              streaks: habit.streaks - 1,
              completed: false,
              date: null,
            }
          : habit.id === id
            ? {
                ...habit,
                streaks: habit.streaks + 1,
                completed: true,
                date: today,
              }
            : { ...habit };
      });

      return updatedHabits;
    });
  }

  // End of functions

  // -------------------- Contexts --------------------
  const goalsCtxValue = {
    habitText: habits.title,
    habits: habits,
    showPopup: showPopup,
    today: today,
    handleShowPopup: handleShowPopup,
    handleHidePopup: handleHidePopup,
    handleAddNewHabit: (e) =>
      handleAddNewHabit(e, { streaks: 0, date: null, completed: false }),
    handleRemoveHabit: handleRemoveHabit,
    handleStreak: handleStreak,
    handleInputChange: handleInputChange,
  };
  // End of contexts

  // -------------------- COMPONENT STRUCTURE --------------------
  return <HabitsCtx value={goalsCtxValue}>{children}</HabitsCtx>;
}
