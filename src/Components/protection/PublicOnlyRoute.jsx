export default function PublicOnlyRoute({ children }) {
  const isAuth = localStorage.getItem("token");

  if (isAuth) {
    localStorage.removeItem("token");
  }

  return children;
}
