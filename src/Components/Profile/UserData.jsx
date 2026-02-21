import { use } from "react";
import { ProfileCtx } from "../contexts/ProfileCtx";
import ActionBtn from "../buttons/ActionBtn";

export default function UserData() {
  // -------------------- Contexts --------------------
  const { handleShowEdit } = use(ProfileCtx);
  // End of contexts

  // -------------------- Component structure --------------------
  return (
    <>
      <div className="mb-2">Abdelrahman Mohammed</div>
      <div className="text-neutral-600 mb-15">abdoh@example.com</div>
      <ActionBtn handleClick={handleShowEdit}>Edit Profile</ActionBtn>
    </>
  );
}
