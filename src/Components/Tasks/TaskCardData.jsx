import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TaskCardData({
  title,
  description,
  category,
  date,
  completed,
}) {
    
  return (
    <div className="">
      {/* Task title */}
      <p
        className={`${
          completed && "line-through"
        } mb-2 text-lg capitalize leading-5 dark:text-white`}
      >
        {title}
      </p>

      {/* Task description */}
      {description && (
        <div className="text-neutral-600 capitalize text-lg mb-2 dark:text-[var(--dark-text-primary-color)]">
          {description}
        </div>
      )}

      {/* Task Category and date */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        {/* Category */}
        {category && (
          <div className="sm:px-2 px-1 py-2 text-center rounded-sm bg-emerald-100 text-emerald-700 dark:text-emerald-300 dark:bg-emerald-900">
            {category}
          </div>
        )}

        {/* Date */}
        {date && (
          <div className="sm:px-2 px-1 text-center py-2 rounded-sm bg-amber-100 text-amber-700 flex items-center gap-1 dark:bg-amber-900 dark:text-amber-300">
            <FontAwesomeIcon icon="fa-regular fa-calendar" />
            <span>{date}</span>
          </div>
        )}
      </div>
    </div>
  );
}
