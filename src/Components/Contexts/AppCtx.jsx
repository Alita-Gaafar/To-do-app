import { createContext, useState } from "react";

export const AppCtx = createContext({
  setRememberMe: null,
  rememberMe: null,
});

export default function AppWrapper({ children }) {
  const [rememberMe, setRememberMe] = useState(false);

  // Ctx value
  const ctxVal = {
    setRememberMe: setRememberMe,
    rememberMe: rememberMe,
  };

  //   Comp struct
  return <AppCtx value={ctxVal}>{children}</AppCtx>;
}
