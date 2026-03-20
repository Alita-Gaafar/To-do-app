// Comps
import EditProfile from "./EditProfile";
import UserData from "./UserData";

// Styling
import CardStyle from "../styling components/CardStyle";
import { useSearchParams } from "react-router";
import UserNameShortcut from "./UserNameShortCut";

export default function UserInfo() {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");

  // Comps structure
  return (
    <CardStyle>
      <div className="flex flex-col items-center justify-center">
        <UserNameShortcut />

        {/* Show user data or edit user data */}
        {type === "info" ? <UserData></UserData> : <EditProfile />}
      </div>
    </CardStyle>
  );
}
