import Settings from "./Settings";
import AccountStats from "./AccountStats";
import UserInfo from "./UserInfo";

export default function ProfileInfo() {
  // -------------------- Component structure --------------------
  return (
    <>
      {/* User info */}
      <UserInfo />

      {/* Settings */}
      <Settings />

      {/* Account stats */}
      <AccountStats />
    </>
  );
}
