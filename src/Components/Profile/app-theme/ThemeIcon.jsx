import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThemeIcon({ theme }) {
  return (
    <div className="flex-1 me-3">
      {
        <FontAwesomeIcon
          className={theme === "light" ? "text-amber-500" : "text-blue-500"}
          icon={theme === "light" ? "fa-solid fa-sun" : "fa-regular fa-moon"}
        />
      }
    </div>
  );
}
