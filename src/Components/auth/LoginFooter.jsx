import { useDispatch } from "react-redux";
import { mainAction } from "@/store";
import { Link } from "react-router-dom";

export default function LoginFooter() {
  // Redux
  const dispatch = useDispatch();
  // End of redux

  // Functions
  function handleInputChange() {
    dispatch(mainAction.toggleRememberMe());
  }

  // End of functions

  // Comp structure
  return (
    <div className="flex justify-between mb-5">
      {/* Remember me button */}
      <div className="dark:text-white">
        {/* Modern checkbox */}
        <div className="checkbox-wrapper-19 flex items-center">
          <input type="checkbox" id="cbtest-19" onClick={handleInputChange} />
          <label htmlFor="cbtest-19" className="check-box"></label>
          <label
            htmlFor="cbtest-19"
            className="ms-2 text-sm sm:text-md cursor-pointer font-bold"
          >
            Remember me
          </label>
        </div>
      </div>

      {/* Forgot password button */}
      <Link
        to="confirm-email"
        className="capitalize text-emerald-600 cursor-pointer hover:text-emerald-800 dark:hover:text-emerald-700 font-medium  duration-300 text-sm sm:text-md"
      >
        Forgot password?
      </Link>
    </div>
  );
}
