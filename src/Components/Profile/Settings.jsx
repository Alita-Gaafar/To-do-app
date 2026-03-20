// Styling
import CardStyle from "../styling components/CardStyle";

// Comps
import SettingOptions from "./SettingOptions";

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
