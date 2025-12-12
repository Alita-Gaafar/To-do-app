import { use } from "react";
import CardStyle from "../CardStyle";
import { ProfileCtx } from "../Contexts/ProfileCtx";
import EditProfile from "./EditProfile";
import UserData from "./UserData";
import SettingOptions from "./SettingOptions";
import { useTheme } from "../ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskContext from "../Contexts/TasksContext";
import { HabitsCtx } from "../Contexts/HabitsCtx";
import AuthButtonsContext from "../Contexts/AuthButtonsContext";

export default function ProfileInfo() {
  // -------------------- States --------------------
  const { theme, toggleTheme } = useTheme({});
  // End of states

  // -------------------- Contexts --------------------
  const { shortcutName, profile } = use(ProfileCtx);

  const { numberOfCompletedTasks } = use(TaskContext);

  const { totalStreaks } = use(HabitsCtx);

  const { memberHistory } = use(AuthButtonsContext);
  console.log(totalStreaks);
  
  // End of contexts

  // -------------------- Component structure --------------------
  return (
    <>
      <CardStyle>
        {/* User info */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center mb-5 text-white bg-emerald-500 rounded-full w-25 h-25 text-lg">
            {shortcutName}
          </div>

          {/* Show user data or edit user data */}
          {profile === "info" ? <UserData></UserData> : <EditProfile />}
        </div>
      </CardStyle>

      {/* Settings */}
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

        {/* Notifications */}
        <SettingOptions
          title="Notifications"
          description="Receive task and habit reminders"
          icon={
            <FontAwesomeIcon
              className="text-emerald-500"
              icon="fa-regular fa-bell"
            />
          }
        />
      </CardStyle>

      {/* Account stats */}
      <CardStyle>
        {/* Header */}
        <h3 className="mb-10 font-semibold text-lg">Account Stats</h3>

        {/* Stats */}
        <div className="flex justify-around">
          {/* Member entry date */}
          <div className="text-center">
            <p className="mb-2">Member Since</p>
            <p className="text-neutral-700">November 2024</p>
          </div>

          {/* Total Tasks */}
          <div className="text-center">
            <p className="mb-2">Total Tasks</p>
            <p className="text-neutral-700">
              {numberOfCompletedTasks} Completed
            </p>
          </div>

          {/* Streak */}
          <div className="text-center">
            <p className="mb-2">Current Streak</p>
            <p className="text-neutral-700">{totalStreaks} days</p>
          </div>
        </div>
      </CardStyle>
    </>
  );
}
