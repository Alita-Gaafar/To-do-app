import { signupInputs } from "@/util/data";
import Input from "../Input";
import ActionBtn from "../buttons/ActionBtn";

// React router
import { useNavigate } from "react-router";

export default function Signup() {
  // React hooks
  const navigate = useNavigate();
  // End of react hooks

  // Functions
  // Handle sign in click
  function handleSignUp(e) {
    e.preventDefault(); // stop default submit

    const fd = new FormData(e.target);

    const fullName = fd.get("full-name");
    const signupEmail = fd.get("signup-email");
    const signupPassword = fd.get("signup-password");

    navigate("/");
  }
  // End of functions
  return (
    <>
      {/* Signup Form */}
      <form action="" onSubmit={handleSignUp}>
        {signupInputs.map((input) => {
          return (
            <Input key={input.uniqueId} {...input} labelClass="font-bold" />
          );
        })}

        {/* Signup button */}
        <ActionBtn>Signup</ActionBtn>
      </form>
    </>
  );
}
