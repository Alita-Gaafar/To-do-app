import Input from "@/components/Input";
import { inputProps } from "@/util/data";
import ForgetSecBtn from "./ForgetSecBtn";
import BackBtn from "./BackBtn";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authAction } from "@/store/auth";

export default function EmailVerify() {
  const navigate = useNavigate(); 
  const verifyRef = useRef();
  const dispatch = useDispatch();

  // Submit send verification code
  function handleSubmit() {    
    dispatch(authAction.setEmail(verifyRef.current.value));

    navigate("/verify-email");
  }
  return (
    <form action={handleSubmit}>
      <Input ref={verifyRef} {...inputProps} />

      <div>
        {/* Send verification */}
        <ForgetSecBtn title="Send Verification Code" />

        {/* Back to login */}
        <BackBtn title="Back to Login" path=".." />
      </div>
    </form>
  );
}
