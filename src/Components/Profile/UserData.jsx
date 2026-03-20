import { useLoaderData } from "react-router";
import ProfileBtn from "./ProfileBtn";

export default function UserData() {
  // const userData = useLoaderData();

  // Component structure
  return (
    <>
      <div className="mb-2">Abdelrahman Mohammed</div>
      <div className="text-neutral-600 mb-15">abdoh@example.com</div>
      <ProfileBtn path="?type=edit">Edit Profile</ProfileBtn>
    </>
  );
}
