// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styling
import CardStyle from "../styling components/CardStyle";

// Comps
import SettingOptions from "./SettingOptions";

// Hooks
import { useTheme } from "../ThemeProvider";

export default function Settings() {
  //   Comp structure
  return (
    <CardStyle>
      <h3 className="mb-10">Settings</h3>

      {/* Theme */}
      <SettingOptions />
    </CardStyle>
  );
}
