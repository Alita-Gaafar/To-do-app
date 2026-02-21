// Comps
import CardStyle from "../styling components/CardStyle";
import DeleteBtn from "../buttons/DeleteBtn";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HabitsCtx } from "../contexts/HabitsCtx";

// Hooks
import { use } from "react";

export default function HabitCard({
  habitId,
  title,
  streaks,
  frequency,
  completed,
}) {
  console.log(completed);

  // -------------------- Contexts --------------------
  const { handleRemoveHabit, handleStreak } = use(HabitsCtx);
  // End of contexts

  // -------------------- Component structure --------------------
  return (
    <CardStyle>
      {/* Title and remove button */}
      <div className="mb-2 flex justify-between items-center">
        {/* Title */}
        <div className="capitalize">{title}</div>

        {/* Remove Button */}
        <div>
          <DeleteBtn handleClick={() => handleRemoveHabit(habitId)}></DeleteBtn>
        </div>
      </div>

      {/* Streaks */}
      <div className="bg-orange-50 px-3 py-4 mb-5 rounded-lg flex justify-between">
        <div>
          <span className="me-2">
            <FontAwesomeIcon
              style={{ color: "#ff6900" }}
              icon="fa-solid fa-fire"
            />
          </span>
          <span>Streak</span>
        </div>

        <div className="text-orange-500">{streaks} days</div>
      </div>

      {/* Increase streaks */}
      <button
        className="w-full bg-black text-white text-center hover:bg-[#000000e0] py-3 rounded-sm cursor-pointer duration-300 dark:text-black dark:bg-white"
        onClick={() => handleStreak(habitId)}
      >
        <span className="me-1">
          <FontAwesomeIcon
            style={{ color: "#fff" }}
            icon="fa-regular fa-circle-check"
          />
        </span>
        {completed ? "Mark as Uncompleted Today" : "Mark as Completed Today"}
      </button>
    </CardStyle>
  );
}
