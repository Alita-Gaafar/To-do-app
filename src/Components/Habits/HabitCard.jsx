// Comps
import CardStyle from "../styling-components/CardStyle";

import { deleteData, tryAndCatch } from "@/util/http";
import HabitTitle from "./HabitTitle";
import HabitStreaks from "./HabitStreaks";
import HabitIncreaseStreakBtn from "./HabitIncreaseStreakBtn";

export default function HabitCard(props) {
  // Component structure
  return (
    <CardStyle>
      {/* Title and remove button */}
      <HabitTitle title={props.title} id={props.id} />

      {/* Streaks */}
      <HabitStreaks streaks={props.streaks} />

      {/* Increase streaks */}
      <HabitIncreaseStreakBtn completed={props.completed} />
    </CardStyle>
  );
}

export async function deleteHabit({ params }) {
  const id = params.habitId;
  const url = ``;

  // return await tryAndCatch(() => deleteData(url));
}
