import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const DATE = new Date();
export const HabitsCtx = createContext({
  habitTextRef: null,
  habits: null,
  setFrequency: null,
  numberOfAllHabits: null,
  totalStreaks: null,
  avgSuccessRate: null,
  showPopup: null,
  handleAddHabitClick: null,
  handleCancelBtnClick: null,
  handleAddNewHabitClick: null,
  handleRemoveHabit: null,
  handleTaskCompletedClick: null,
});

export default function HabitsWrapper({ children }) {
  // -------------------- States --------------------
  const [showPopup, setShowPopup] = useState(false);

  const [frequency, setFrequency] = useState();

  // const [habits, setHabits] = useState(
  //   JSON.parse(localStorage.getItem("habits")) || []
  // );
  const [habits, setHabits] = useState([]);

  // End of states

  // -------------------- Refs --------------------
  const habitText = useRef(); // End of refs

  // -------------------- Variables --------------------
  const numberOfAllHabits = habits.length;

  const totalStreaks = habits.reduce((accu, curr) => accu + curr.streaks, 0); // Total streaks

  const avgSuccessRate =
    habits.length !== 0
      ? habits.reduce((accu, curr) => accu + curr.successRate, 0) /
        habits.length
      : 0; // Avg Success Rate

  const randomNumber = Date.now() * Math.random(); // Random number

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
  function handleAddHabitClick() {
    // set showPopup to true to display it
    setShowPopup(true);
  }

  // Hide Popup onClicking x
  function handleCancelBtnClick() {
    setShowPopup(false);
  }

  // Set habit as completed today
  function handleTaskCompletedClick(id) {
    // If date changed (day is gone) open the ability to set habit as completed

    // setHabits((prevHabits) => {
    //   return prevHabits.map((habit) => {
    //     if (habit.day !== DATE.getDate()) {
    //       return { ...habit, completedAbility: true, };
    //     }
    //     return habit;
    //   });
    // });

    // Increase the streak and the success progress
    setHabits((prevHabits) => {
      return prevHabits.map((habit) => {
        if (habit.id === id) {
          if (habit.day !== DATE.getDate()) {
            return {
              ...habit,
              streaks: habit.streaks + 1,
              successRate: habit.successRate + 5,
              day: DATE.getDate(),
            };
          }
        }
        return habit;
      });
    });
  }

  // Add a new habit
  function handleAddNewHabitClick(e) {
    e.preventDefault(); // stop default submit

    // get the closest form element
    const form = e.target.closest("form");

    // run HTML5 validation FIRST
    if (!form.checkValidity()) {
      form.reportValidity();
    }

    // Check if title is empty
    if (!habitText.current.value) {
      toast.info("Please enter a habit title first", {
        duration: 5000,
        position: "bottom-right",
        closeButton: true,
      });
      return;
    }

    // Check if frequency is empty
    if (!frequency) {
      toast.info("Please enter the frequency of the habit", {
        duration: 5000,
        position: "bottom-right",
        closeButton: true,
      });
      return;
    }

    // Add notification with text added successfully
    toast.success("Habit added successfully! 🎉", {
      icon: (
        <FontAwesomeIcon
          icon="fa-solid fa-circle-check"
          style={{ color: "#000000" }}
        />
      ),
      duration: 5000,
      position: "bottom-right",
      closeButton: true,
    });

    // Hide the popup after 0.5 second
    setShowPopup(false);

    setTimeout(() => {
      setFrequency("");
      // localStorage.setItem("habits", JSON.stringify(habits));
    }, 1);

    // Set add habits state
    setHabits((prevHabits) => {
      return [
        ...prevHabits,
        {
          id: randomNumber,
          title: habitText.current.value,
          streaks: 0,
          frequency: frequency.slice(0, 1).toUpperCase() + frequency.slice(1),
          successRate: 0,
          day: DATE.getDate() - 1,
        },
      ];
    });
  }

  // Delete habits
  function handleRemoveHabit(id) {
    // Add notification with text removed
    toast.success("Habit deleted ❌", {
      icon: (
        <FontAwesomeIcon
          icon="fa-solid fa-circle-check"
          style={{ color: "#000000" }}
        />
      ),
      duration: 5000,
      position: "bottom-right",
      closeButton: true,
    });

    setHabits((prevHabits) => {
      return prevHabits.filter((habit) => habit.id !== id);
    });
  }
  // End of functions

  // -------------------- Contexts --------------------
  const goalsCtxValue = {
    habitTextRef: habitText,
    habits: habits,
    setFrequency: setFrequency,
    numberOfAllHabits: numberOfAllHabits,
    totalStreaks: totalStreaks,
    avgSuccessRate: avgSuccessRate,
    showPopup: showPopup,
    handleAddHabitClick: handleAddHabitClick,
    handleCancelBtnClick: handleCancelBtnClick,
    handleAddNewHabitClick: handleAddNewHabitClick,
    handleRemoveHabit: handleRemoveHabit,
    handleTaskCompletedClick: handleTaskCompletedClick,
  };
  // End of contexts

  // -------------------- COMPONENT STRUCTURE --------------------
  return <HabitsCtx value={goalsCtxValue}>{children}</HabitsCtx>;
}
