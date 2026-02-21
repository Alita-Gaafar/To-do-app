import { use } from "react";
import { AppCtx } from "../contexts/AppCtx";

export default function LoginFooter() {
  // Ctx

  // End of ctx
  const { rememberMe, setRememberMe } = use(AppCtx);
  // Comp structure
  return (
    <div className="flex justify-between mb-5">
      {/* Remember me button */}
      <div className="">
        {/* Modern checkbox */}
        <div className="checkbox-wrapper-19 flex items-center">
          <input
            type="checkbox"
            id="cbtest-19"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="cbtest-19" className="check-box"></label>
          <label htmlFor="cbtest-19" className="ms-2 text-sm sm:text-md cursor-pointer font-bold">
            Remember me
          </label>
        </div>
      </div>

      {/* Forgot password button */}
      <button className="capitalize text-emerald-600 cursor-pointer hover:text-emerald-800 duration-300 text-sm sm:text-md">
        Forgot password?
      </button>
    </div>
  );
}
