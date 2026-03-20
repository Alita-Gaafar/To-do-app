// External data
import { loginInputs } from "@/util/data";

// Comps
import Input from "../Input";
import LoginFooter from "./LoginFooter";
import ActionBtn from "../buttons/ActionBtn";

// React router
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";


export default function Login() {
  // React hooks
  const navigate = useNavigate();
  // End of react hooks

  // Redux
  const rememberMe = useSelector((state) => state.main.rememberMe);
  // End of redux

  // Functions

  // Handle sign in click
  function handleSignIn(e) {
    e.preventDefault(); // stop default submit

    localStorage.setItem("token", "po");
    localStorage.setItem("remember", rememberMe);

    navigate("/tasks", { replace: true });
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
