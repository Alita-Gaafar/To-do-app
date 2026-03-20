// Hooks
import { use } from "react";
import { useTheme } from "./ThemeProvider";

// Shadcn
import { Switch } from "@/components/ui/switch";

// Ctx
import { showSuccess } from "@/util/notifications";

export default function ThemeToggle() {
  // States
  const { theme, toggleTheme } = useTheme();
  // End of states

  // Functions
  function handleSwitchTheme() {
    showSuccess(`Switched to ${theme} mode`);
  }

  // Comp struct
  return (
    <div className="flex items-center space-x-2">
      <Switch
        className="cursor-pointer dark:bg-white"
        id="dark-mode"
        onCheckedChange={toggleTheme}
        checked={theme === "dark" ? true : false}
        onClick={handleSwitchTheme}
      />
    </div>
  );
}
