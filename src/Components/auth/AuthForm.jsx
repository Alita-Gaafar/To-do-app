import {
  Form,
  redirect,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import Input from "../Input";
import { loginInputs, signupInputs } from "@/util/data";
import ActionBtn from "../buttons/ActionBtn";
import { useEffect } from "react";
import LoginFooter from "./LoginFooter";
import AuthNavBtns from "./AuthNavBtns";

export default function AuthForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const isLogin = mode === "login";
  const inputs = isLogin ? loginInputs : signupInputs;
  const navigating = useNavigation();
  const state = navigating.state === "submitting";

  //   UseEffect
  useEffect(() => {
    if (!mode) {
      setSearchParams({ mode: "login" });
    }
  }, []);

  return (
    <>
      {/* Buttons to navigate between sign in and sign up pages */}
      <AuthNavBtns />

      {/* Auth form */}
      <Form method="post">
        {inputs.map((input) => {
          return (
            <Input key={input.uniqueId} {...input} labelClass="font-bold" />
          );
        })}

        {/* Footer */}
        {isLogin && <LoginFooter />}

        {/* Signup button */}
        <ActionBtn fallback="Loading..." state={state}>
          {isLogin ? "Login" : "Signup"}
        </ActionBtn>
      </Form>
    </>
  );
}

export async function authAction({ params, request }) {
  // const fd = await request.formData();
  // const user = Object.fromEntries(fd);

  // const res = await fetch(
  //   "https://andf-2dc3c-default-rtdb.firebaseio.com/login.json",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   },
  // );

  // if (!res.ok) {
  //   throw new Response(JSON.stringify({ message: "Failed" }), {
  //     status: 401,
  //   });
  // }  

  localStorage.setItem("token", "123456");
  return redirect("/app/tasks");
}
