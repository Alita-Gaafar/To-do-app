import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
  // Functions
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.setItem("remember", "false");
  }
  // End of functions

  //  Component structure
  return (
    <div className="border-t  py-5 border-neutral-200 flex justify-center items-center dark:border-[var(--dark-border-primary-color)]">
      <Link
        to="/"
        onClick={handleLogout}
        className={`
          flex items-center justify-center gap-2 cursor-pointer w-[80%] p-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition duration-300 dark:bg-neutral-800 dark:text-white dark:border-0
          group-data-[collapsible=icon]:!w-11
          group-data-[collapsible=icon]:!h-11
          group-data-[collapsible=icon]:!p-0
          group-data-[collapsible=icon]:!rounded-xl
        `}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-right-from-bracket"
          className="text-lg"
        />
        {/* Hide text when collapsed */}
        Logout
      </Link>
    </div>
  );
}
