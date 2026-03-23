import CreateNewPass from "./CreateNewPass";
import Header from "./Header";
import Icon from "./Icon";

export default function ChangePassword() {
  const headerText = "Enter a strong password to secure your account";

  // Comp strut
  return (
    <>
      {/* Icon */}
      <Icon icon="fa-solid fa-lock" />

      {/* Header */}
      <Header title="Create New Password" text={headerText} />

      {/* Create new password email */}
      <CreateNewPass />
    </>
  );
}
