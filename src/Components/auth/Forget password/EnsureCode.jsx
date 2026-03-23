import Input from "@/components/Input";
import { codeInputProps } from "@/util/data";
import ForgetSecBtn from "./ForgetSecBtn";
import BackBtn from "./BackBtn";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

export default function EnsureCode() {
  const codeRef = useRef();
  const navigate = useNavigate();
  const [isCodeCorrect, setCodeState] = useState(false);
  function handleSubmit() {
    if (codeRef.current.value === "123456") {
      setCodeState(false);

      navigate("/change-password")
      return;
    }
    setCodeState(true);
  }

  //   Comp struct
  return (
    <form action={handleSubmit}>
      <Input ref={codeRef} {...codeInputProps} />

      {isCodeCorrect && (
        <p className="text-red-500 my-3">
          Invalid verification code. Try: 123456
        </p>
      )}
      <div>
        {/* Send verification */}
        <ForgetSecBtn title="Verify Code" />

        {/* Back to login */}
        <BackBtn title="Change Email" path="/confirm-email" />
      </div>
    </form>
  );
}
