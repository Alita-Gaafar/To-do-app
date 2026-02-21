// External data
import { loginInputs } from "@/util/data";

// Comps
import Input from "../Input";
import LoginFooter from "./LoginFooter";
import ActionBtn from "../buttons/ActionBtn";

// React router
import { useNavigate } from "react-router";
import { use } from "react";
import { AppCtx } from "../contexts/AppCtx";

// Variables
const EMAIL = "abdohmahmoud28@gmail.com";
const PASSWORD = "123456789";

export default function Login() {
  // React hooks
  const navigate = useNavigate();
  // End of react hooks

  // Ctx
  const { rememberMe } = use(AppCtx);
  // End of ctx

  // Functions

  // Handle sign in click
  function handleSignIn(e) {
    e.preventDefault(); // stop default submit

    localStorage.setItem("token", "po");
    localStorage.setItem("remember", rememberMe);

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
