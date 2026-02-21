import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardStyle from "../styling components/CardStyle";
import { Progress } from "@/components/ui/progress";
import { use, useState } from "react";
import { GoalsCtx } from "../contexts/GoalsContext";
import EditBtn from "../buttons/EditBtn";
import DeleteBtn from "../buttons/DeleteBtn";
import ProgressBtn from "./ProgressBtn";

const DIVIDED_BY = 4;

export default function GoalCard({ goalId, title, description, date }) {
  // -------------------- Contexts --------------------
  const { handleRemoveGoal, handleShowEditPopup, handleUpdateGoalState } =
    use(GoalsCtx);
  // End of contexts

  // States
  const [progress, setProgress] = useState(0);
  // End of states

  // Variables

  const today = new Date().toLocaleDateString("en-CA"); // Formatted todays date

  const goalDate = date && new Date(date).toLocaleDateString("en-CA"); // Formatted goal date

  const dateRange = date && goalDate >= today; // goal is in range or not

  const progressState = progress == 100; // Progress is 100 or not

  // Card style
  const cardStyle = progressState
    ? "bg-green-100"
    : dateRange == false
      ? "bg-red-100"
      : "bg-white";

  // End of variables

  function handleIncreaseProgress(id) {
    if (progress < 100) {
      setProgress((prev) => prev + 100 / DIVIDED_BY);

      const updatedProgress = progress + 100 / DIVIDED_BY;
      handleUpdateGoalState(id, updatedProgress);
    }
  }

  function handleDecreaseProgress(id) {
    if (progress > 0) {
      setProgress((prev) => prev - 100 / DIVIDED_BY);

      const updatedProgress = progress - 100 / DIVIDED_BY;
      handleUpdateGoalState(id, updatedProgress);
    }
  }

  return (
    <CardStyle classes={cardStyle}>
      {/* Title, description and date of the goal */}
      <div className="">
        {/* Title and buttons */}
        <div className="mb-3 flex justify-between">
          {/* Title */}
          <p>{title}</p>

          {/* Edit and delete goal buttons */}
          <div className="flex gap-3">
            {/* Edit button */}
            <EditBtn
              id={goalId}
              handleClick={() => handleShowEditPopup(goalId)}
            />

            {/* Delete button */}
            <DeleteBtn handleClick={() => handleRemoveGoal(goalId)}></DeleteBtn>
          </div>
        </div>

        {/* Description */}
        {description && <p className="text-neutral-600 mb-3">{description}</p>}

        {/* Date */}
        {date && (
          <p className="text-neutral-600">
            <FontAwesomeIcon className="me-1" icon="fa-regular fa-calendar" />
            <span>Target: {date}</span>
          </p>
        )}
      </div>

      {/* Progress */}
      <div className="my-12">
        <div className="flex justify-between mb-3 text-neutral-600">
          <span>Progress</span>
          <span></span>
          {progress > 0 ? progress : 0}%
        </div>
        <Progress value={progress} className="w-[100%] z-1" />
      </div>

      {/* Progress buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center">
        {/* Decrease progress button */}
        <ProgressBtn
          title="Decrease Progress"
          handleClick={() => handleDecreaseProgress(goalId)}
        />

        {/* Increase progress button */}
        <ProgressBtn
          title="Increase Progress"
          handleClick={() => handleIncreaseProgress(goalId)}
        />
      </div>
      {dateRange == false && <div className="mt-5">The time is up !</div>}
    </CardStyle>
  );
}
