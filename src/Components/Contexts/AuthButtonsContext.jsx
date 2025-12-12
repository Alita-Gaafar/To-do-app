import { createContext } from "react";

const AuthButtonsContext = createContext({
  onActiveFormClick: null,
  activeAuth: null,
  activeDashBoard: null,
  handleSignUp: null,
  memberHistory: null,
});
export default AuthButtonsContext;
