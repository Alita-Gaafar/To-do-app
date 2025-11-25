import { createContext } from "react";

const AuthButtonsContext = createContext({
  onActiveFormClick: null,
  activeAuth: null,
  activeDashBoard: null,
});
export default AuthButtonsContext;
