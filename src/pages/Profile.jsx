// Comps
import Header from "@/components/Header";
import ProfileInfo from "@/components/profile/ProfileInfo";
import PagesContainer from "@/components/styling components/PagesContainer";
import ThemeProvider from "@/components/ThemeProvider";

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
