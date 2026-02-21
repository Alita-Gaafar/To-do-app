// External data
import { loginInputs } from "@/util/data";

// Comps
import Input from "../Input";
import LoginFooter from "./LoginFooter";
import ActionBtn from "../buttons/ActionBtn";

// React router
import { useNavigate } from "react-router";

// Variables
const EMAIL = "abdohmahmoud28@gmail.com";
const PASSWORD = "123456789";

export default function Login() {
  // React hooks
  const navigate = useNavigate();
  // End of react hooks

  // Functions

  // Handle sign in click
  function handleSignIn(e) {
    e.preventDefault(); // stop default submit

    const fd = new FormData(e.target);

    const signinEmail = fd.get("email");
    const signinPassword = fd.get("password");

    navigate("/tasks?filter=all", { replace: true });
  }
  //   End of functions
  return (
    <form action="" onSubmit={handleSignIn}>
      <>
        {loginInputs.map((input) => (
          <Input key={input.uniqueId} {...input} labelClass="font-bold" />
        ))}
      </>

      {/* Footer */}
      <LoginFooter />

      {/* Login button */}
      <ActionBtn>Login</ActionBtn>
    </form>
  );
}
