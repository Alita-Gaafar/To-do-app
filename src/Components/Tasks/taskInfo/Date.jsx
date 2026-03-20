import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Date({ date }) {
  return (
    date && (
      <div className="sm:px-2 px-1 text-center py-2 rounded-sm bg-amber-100 text-amber-700 flex items-center gap-1 dark:bg-amber-900 dark:text-amber-300">
        <FontAwesomeIcon icon="fa-regular fa-calendar" />
        <span>{date}</span>
      </div>
    )
  );
}
