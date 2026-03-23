import { useSelector } from "react-redux";
import Icon from "./Icon";
import Header from "./Header";
import EnsureCode from "./EnsureCode";

export default function ConfirmResetCode() {
  const email = useSelector((state) => state.auth.email);

  const headerText = (
    <div>
      <div>
        We've sent a verification code to{" "}
        <strong className="text-black">{email}</strong>
      </div>

      <div className="text-sm mt-3">demo code: 123456</div>
    </div>
  );

  // Comp strut
  return (
    <>
      {/* Icon */}
      <Icon icon="fa-solid fa-shield" />

      {/* Header */}
      <Header title="Check Your Email" text={headerText} />

      {/* Ensure email */}
      <EnsureCode />
    </>
  );
}
