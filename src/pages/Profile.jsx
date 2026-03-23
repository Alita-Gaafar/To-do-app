// Comps
import Header from "@/components/Header";
import ProfileInfo from "@/components/profile/ProfileInfo";
import PagesContainer from "@/components/styling-components/PagesContainer";
import { fetchAllData, tryAndCatch } from "@/util/http";
import { requireAuth } from "@/util/react-router";

export default function Profile() {
  return (
    <PagesContainer>
      {/* Header */}
      <Header title="Profile">
        Manage your account settings and preferences
      </Header>

      {/* Profile info */}
      <ProfileInfo></ProfileInfo>

      {/*  */}
    </PagesContainer>
  );
}

export function profileLoader() {
  requireAuth();

  const url = ``;

  // return tryAndCatch(() => fetchAllData(url));
}

export async function updateUserInfo() {
  const utl = ``;
}
