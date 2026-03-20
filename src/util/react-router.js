import { redirect } from "react-router";

export function getToken() {
  return localStorage.getItem("token");
}

export function requireAuth() {
  const token = getToken();

  if (!token) {    
    throw redirect("/");
  }
  
  return token;
}

export function startingApp() {
  return redirect("/auth");
}
