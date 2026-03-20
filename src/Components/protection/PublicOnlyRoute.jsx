import { Outlet } from "react-router-dom";

export default function PublicOnlyRoute({}) {
  const isAuth = localStorage.getItem("token");

  if (isAuth) {
    localStorage.removeItem("token");
  }

  return <Outlet />;
}
