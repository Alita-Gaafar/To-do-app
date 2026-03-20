import CardStyle from "../styling components/CardStyle";
import { useState } from "react";
import ProgressBtn from "./ProgressBtn";
import { goalsAction } from "@/store/goals";
import GoalTitle from "./GoalTitle";
import GoalDescription from "./GoalDescription";
import GoalDate from "./GoalDate";
import GoalProgress from "./GoalProgress";

const DIVIDED_BY = 4;

export default function GoalCard(props) {
  // States
  const [progress, setProgress] = useState(0);
  // End of states

  // Functions
  function handleIncreaseProgress() {
    if (progress < 100) {
      setProgress((prev) => prev + 100 / DIVIDED_BY);
    }
  }

  function handleDecreaseProgress() {
    if (progress > 0) {
      setProgress((prev) => prev - 100 / DIVIDED_BY);
    }
  }

  // End of functions

  return (
    <CardStyle>
      {/* Title, description and date of the goal */}
      <div>
        {/* Title and buttons */}
        <GoalTitle title={props.title} id={props.id} />

        {/* Description */}
        <GoalDescription description={props.description} />

        {/* Date */}
        <GoalDate date={props.date} />
      </div>

      {/* Progress */}
      <GoalProgress progress={progress} />

      {/* Progress buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center">
        {/* Decrease progress button */}
        <ProgressBtn
          title="Decrease Progress"
          handleClick={() => handleDecreaseProgress(props.id)}
        />

        {/* Increase progress button */}
        <ProgressBtn
          title="Increase Progress"
          handleClick={() => handleIncreaseProgress(props.id)}
        />
      </div>
    </CardStyle>
  );
}

export async function deleteGoal({ params }) {
  const id = params.taskId;

  const url = ``;

  // return await tryAndCatch(() => deleteData(url));
}
