export default function LoginFooter() {
  return (
    <div className="flex justify-between mb-5">
      {/* Remember me button */}
      <div className="">
        {/* Modern checkbox */}
        <div className="checkbox-wrapper-19 flex items-center">
          <input type="checkbox" id="cbtest-19" />
          <label htmlFor="cbtest-19" className="check-box"></label>
          <label htmlFor="cbtest-19" className="ms-2 cursor-pointer font-bold">
            Remember me
          </label>
        </div>
      </div>

      {/* Forgot password button */}
      <button className="capitalize text-emerald-600 cursor-pointer hover:text-emerald-800 duration-300">
        Forgot password?
      </button>
    </div>
  );
}
