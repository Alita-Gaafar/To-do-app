// Comps
import EditProfile from "./EditProfile";
import UserData from "./UserData";

// Styling
import CardStyle from "../styling components/CardStyle";

// Ctx
import { ProfileCtx } from "../contexts/ProfileCtx";

// Hooks
import { use } from "react";

export default function UserInfo() {
  // Contexts
  const { profile } = use(ProfileCtx);
  // End of contexts

  // Comps structure
  return (
    <CardStyle>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center mb-5 text-white bg-emerald-500 rounded-full w-25 h-25 text-lg">
          AB
        </div>

        {/* Show user data or edit user data */}
        {profile === "info" ? <UserData></UserData> : <EditProfile />}
      </div>
    </CardStyle>
  );
}
