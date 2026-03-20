import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HabitStreaks({ streaks }) {
  return (
    <div className="bg-orange-50 dark:bg-orange-950 px-3 py-4 mb-5 rounded-lg flex justify-between">
      <div>
        <span className="me-2">
          <FontAwesomeIcon
            style={{ color: "#ff6900" }}
            icon="fa-solid fa-fire"
          />
        </span>
        <span>Streak</span>
      </div>

      <div className="text-orange-500 dark:text-orange-400">{streaks} days</div>
    </div>
  );
}
