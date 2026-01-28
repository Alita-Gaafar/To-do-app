// Import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../util/fontAwesome.js";

// Component structure
export default function StatsCard({
  children,
  icon,
  bgColor,
  iconColor,
  count,
}) {
  // Variables
  const faIcon = icon;
  // end of variables
  return (
    <div className="w-1/3 flex justify-between items-center px-5 py-8 bg-white border rounded-2xl border-neutral-200 dark:bg-[var(--dark-primary-bg)] dark:border-[var(--dark-border-primary-color)]">
      <div>
        <p className="text-neutral-600 dark:text-[var(--dark-text-primary-color)] mb-3 text-md">
          {children}
        </p>
        <p className="dark:text-white">{count}</p>
      </div>
      <div className={`${bgColor && bgColor} p-2 rounded-full ${iconColor}`}>
        <FontAwesomeIcon
          icon={`fa-solid ${faIcon}`}
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: bgColor && bgColor,
          }}
        />
      </div>
    </div>
  );
}
