import Icon from "./Icon";
import EmailVerify from "./EmailVerify";
import Header from "./Header";

export default function RequestPasswordReset() {
  const headerText =
    "Enter your email address and we'll send you a verification code to reset your password.";

  // Comp strut
  return (
    <>
      {/* Icon */}
      <Icon icon="fa-regular fa-envelope" />

      {/* Header */}
      <Header title="Forgot Password?" text={headerText} />

      {/* Verify email */}
      <EmailVerify />
    </>
  );
}
