// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styling
import CardStyle from "../styling components/CardStyle";

// Comps
import SettingOptions from "./SettingOptions";

// Hooks
import { useTheme } from "../ThemeProvider";

export default function Settings() {
  // States
  const { theme } = useTheme();
  // End of states

  //   Comp structure
  return (
    <CardStyle>
      <h3 className="mb-10">Settings</h3>

      {/* Theme */}
      <SettingOptions
        title="Theme"
        description={theme === "light" ? "Light Mode" : "Dark Mode"}
        icon={
          theme === "light" ? (
            <FontAwesomeIcon
              className="text-amber-500"
              icon="fa-solid fa-sun"
            />
          ) : (
            <FontAwesomeIcon
              className="text-blue-500"
              icon="fa-regular fa-moon"
            />
          )
        }
      />
    </CardStyle>
  );
}
