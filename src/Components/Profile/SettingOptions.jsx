// Hooks
import { useTheme } from "../ThemeProvider";

// Comps
import ThemeToggle from "../ThemeToggle";

// Font awesome
import ThemeIcon from "./app theme/ThemeIcon";
import ThemeTitle from "./app theme/ThemeTitle";

export default function SettingOptions({}) {
  // States
  const { theme } = useTheme();
  // End of states

  // Comp struct
  return (
    <>
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-md p-5 flex justify-between items-center mb-5">
        {/* Theme icon */}
        <ThemeIcon theme={theme} />

        {/* Theme text */}
        <ThemeTitle theme={theme} />

        {/* Theme button */}
        <div className="flex-1">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
