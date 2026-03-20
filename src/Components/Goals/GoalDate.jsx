import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GoalDate({ date }) {
  return (
    date && (
      <p className="text-neutral-600 dark:text-neutral-400">
        <FontAwesomeIcon className="me-1" icon="fa-regular fa-calendar" />
        <span>Target: {date}</span>
      </p>
    )
  );
}
