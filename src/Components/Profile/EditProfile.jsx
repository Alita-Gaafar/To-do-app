import { use } from "react";
import ActionBtn from "../buttons/ActionBtn";
import { ProfileCtx } from "../contexts/ProfileCtx";
import Input from "../Input";
import { editProfileInputs } from "@/util/data";

export default function EditProfile() {
  // -------------------- Contexts --------------------
  const { handleSaveProfile, handleShowInfo } = use(ProfileCtx);
  // End of contexts
  return (
    <>
      <div className="w-full p-5 mb-3 shadow-sm hover:shadow-md duration-300 rounded-sm dark:bg-neutral-800">
        {editProfileInputs.map((input) => {
          return <Input {...input} />;
        })}
      </div>

      <div className="w-full grid grid-cols-2 gap-3">
        <ActionBtn handleClick={handleSaveProfile}>Save Changes</ActionBtn>

        {/* Cancel edit button */}
        <ActionBtn
          style="bg-white text-lack hover:bg-[#e9ebef] border border-neutral-300"
          handleClick={handleShowInfo}
        >
          Cancel
        </ActionBtn>
      </div>
    </>
  );
}
