import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HabitIncreaseStreakBtn({ completed }) {
  return (
    <button className="w-full bg-black text-white text-center hover:bg-[#000000e0] py-3 rounded-sm cursor-pointer duration-300 dark:text-black dark:bg-white">
      <span className="me-1">
        <FontAwesomeIcon
          style={{ color: "#fff" }}
          icon="fa-regular fa-circle-check"
        />
      </span>
      {completed ? "Mark as Uncompleted Today" : "Mark as Completed Today"}
    </button>
  );
}
