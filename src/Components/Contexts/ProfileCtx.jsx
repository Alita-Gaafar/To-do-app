import { showSuccess } from "@/util/notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useRef, useState } from "react";
import { toast } from "sonner";

export const ProfileCtx = createContext({
  profile: null,
  handleShowEdit: null,
  handleSaveProfile: null,
  handleShowInfo: null,
  handleSwitchTheme: null,
});

export default function ProfileWrapper({ children }) {
  const userName = useRef();
  const userEmail = useRef();
  const [profile, setProfile] = useState("info");
  // End of states

  // -------------------- Functions --------------------

  // Notification on changing theme
  function handleSwitchTheme(theme) {
    showSuccess(`Switched to ${theme === "light" ? "dark" : "light"} mode`);
  }

  // Go to edit profile
  function handleShowEdit() {
    setProfile("edit");
  }

  // Cancel edit profile info
  function handleShowInfo() {
    setProfile("info");
  }

  // Save new profile info
  function handleSaveProfile() {
    setProfile("info");

    // Notification updated successfully
    showSuccess("Profile updated successfully! 🎉");
  }
  // End of functions

  // -------------------- Contexts --------------------
  const ProfileCtxValue = {
    userNameRef: userName,
    userEmailRef: userEmail,
    profile: profile,
    handleShowEdit: handleShowEdit,
    handleSaveProfile: handleSaveProfile,
    handleShowInfo: handleShowInfo,
    handleSwitchTheme: handleSwitchTheme,
  };
  // End of contexts

  // -------------------- COMPONENT STRUCTURE --------------------
  return <ProfileCtx value={ProfileCtxValue}>{children}</ProfileCtx>;
}
