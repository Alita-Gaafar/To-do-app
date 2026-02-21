import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/", { replace: true });
  }

  return (
    <div className="border-t  py-5 border-neutral-200 flex justify-center items-center dark:border-[var(--dark-border-primary-color)]">
      <button
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
        <span className="group-data-[collapsible=icon]:hidden">Logout</span>
      </button>
    </div>
  );
}
