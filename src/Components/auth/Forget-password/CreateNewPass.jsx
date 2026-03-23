import Input from "@/components/Input";
import { confirmNewPassword, newPassword } from "@/util/data";
import ForgetSecBtn from "./ForgetSecBtn";
import BackBtn from "./BackBtn";
import { useNavigate } from "react-router";
import { useRef, useState } from "react";

export default function CreateNewPass() {
  const navigate = useNavigate();

  const newPass = useRef();
  const confirmNewPass = useRef();

  const [isReset, setIsReset] = useState(null);

  function handleSubmit() {
    const newValue = newPass.current.value;
    const confirmValue = confirmNewPass.current.value;

    // Check password length
    if (newValue.length < 6) {
      setIsReset("Password must be at least 6 characters");
      return;
    }

    // Check password matching
    if (newValue !== confirmValue) {
      setIsReset("Passwords do not match");
      return;
    }

    // Navigate to login if every thing is right
    navigate("..");
  }
  return (
    <form action={handleSubmit}>
      <div>
        <Input ref={newPass} {...newPassword} />
        <Input ref={confirmNewPass} {...confirmNewPassword} />
      </div>

      {isReset && <div className="text-red-500 my-3">{isReset}</div>}

      <div>
        {/* Send verification */}
        <ForgetSecBtn title="Reset Password" />

        {/* Back to login */}
        <BackBtn title="Back to Login" path=".." />
      </div>
    </form>
  );
}
