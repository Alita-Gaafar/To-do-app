import { useSubmit } from "react-router";
import EditProfileInputs from "./EditProfileInputs";
import ProfileBtn from "./ProfileBtn";

export default function EditProfile() {
  const submit = useSubmit();

  function handleSubmit() {
    submit(null, { method: "post", action: "" });
  }
  // Comp structure
  return (
    <>
      {/* Edit profile inputs */}
      <EditProfileInputs />

      <div className="w-full grid grid-cols-2 gap-3">
        <ProfileBtn path="?type=info" handleSubmit={handleSubmit}>
          Save Changes
        </ProfileBtn>

        {/* Cancel edit button */}
        <ProfileBtn
          path="?type=info"
          style="bg-white text-black hover:bg-[#e9ebef] border border-neutral-300"
        >
          Cancel
        </ProfileBtn>
      </div>
    </>
  );
}

export async function updateUserInfo() {
  const utl = ``;
  
}
