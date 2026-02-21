// Hooks
import { use } from "react";
import { useTheme } from "./ThemeProvider";

// Shadcn
import { Switch } from "@/components/ui/switch";

// Ctx
import { ProfileCtx } from "./contexts/ProfileCtx";

export default function ThemeToggle({}) {
  // States
  const { theme, toggleTheme } = useTheme();
  // End of states

  // Contexts
  const { handleSwitchTheme } = use(ProfileCtx);
  // End of contexts

  // Comp struct
  return (
    <div className="flex items-center space-x-2">
      <Switch
        className="cursor-pointer dark:bg-white"
        id="dark-mode"
        onCheckedChange={toggleTheme}
        checked={theme === "dark" ? true : false}
        onClick={() => handleSwitchTheme(theme)}
      />
    </div>
  );
}
