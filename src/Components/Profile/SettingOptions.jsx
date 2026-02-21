// Hooks
import { useTheme } from "../ThemeProvider";

// Comps
import ThemeToggle from "../ThemeToggle";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SettingOptions({}) {
  // States
  const { theme } = useTheme();
  // End of states

  // Comp struct
  return (
    <>
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-md p-5 flex justify-between items-center mb-5">
        {/* Theme icon */}
        <div className="flex-1 me-3">
          {
            <FontAwesomeIcon
              className={theme === "light" ? "text-amber-500" : "text-blue-500"}
              icon={
                theme === "light" ? "fa-solid fa-sun" : "fa-regular fa-moon"
              }
            />
          }
        </div>

        {/* Theme text */}
        <div className="flex-20">
          <p className="mb-1 dark:text-white">Theme</p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </p>
        </div>

        {/* Theme button */}
        <div className="flex-1">
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </>
  );
}
