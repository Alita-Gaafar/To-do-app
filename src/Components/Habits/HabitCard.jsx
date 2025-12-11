import { motion } from "motion/react";
import CardStyle from "../CardStyle";
import DeleteBtn from "../DeleteBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HabitsCtx } from "../Contexts/HabitsCtx";
import { use } from "react";
import ActionBtn from "../ActionBtn";

export default function HabitCard({
  children,
  habitId,
  title,
  streaks,
  successRate,
  frequency,
  ...props
}) {
  // -------------------- Contexts --------------------
  const { handleRemoveHabit, handleTaskCompletedClick } = use(HabitsCtx);
  // End of contexts

  // -------------------- Component structure --------------------
  return (
    <CardStyle {...props}>
      {/* Title and remove button */}
      <div className="mb-2 flex justify-between items-center">
        {/* Title */}
        <div>{title}</div>

        {/* Remove Button */}
        <div>
          <DeleteBtn id={habitId} handleClick={handleRemoveHabit}></DeleteBtn>
        </div>
      </div>

      {/* Frequency */}
      <div className="mb-10 ms-2 text-neutral-600">
        <span className="">
          <FontAwesomeIcon className="me-1" icon="fa-regular fa-calendar" />
        </span>
        <span>{frequency}</span>
      </div>

      {/* Streaks and success rate */}

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

      {/* Success rate */}
      <div className="bg-emerald-50 px-3 py-4 mb-5 rounded-lg flex justify-between">
        <div>
          <span className="me-2">
            <FontAwesomeIcon
              style={{ color: "#00bc7d" }}
              icon="fa-regular fa-circle-check"
            />
          </span>
          <span>Success Rate</span>
        </div>

        <div className="text-emerald-400">{successRate}%</div>
      </div>

      {/* Mark as completed */}
      <ActionBtn handleClick={() => handleTaskCompletedClick(habitId)}>
        <span className="me-1">
          <FontAwesomeIcon
            style={{ color: "#fff" }}
            icon="fa-regular fa-circle-check"
          />
        </span>
        Mark as Completed Today
      </ActionBtn>
    </CardStyle>
  );
}

export const MotionHabitCard = motion.create(HabitCard);
