import "../../util/fontAwesome.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function NavButton({
  fa,
  children,
  iconColors = "",
  text,
  path,
}) {
  return (
    <>
      {children}

      <NavLink
        to={path}
        end
        className={({ isActive }) =>
          `
    flex w-full items-center gap-3 rounded-lg transition duration-200 mb-5 p-4
    ${isActive ? "bg-emerald-500 text-white" : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"}
    group-data-[collapsible=icon]:!w-9
    group-data-[collapsible=icon]:!h-9
    group-data-[collapsible=icon]:!p-0
    group-data-[collapsible=icon]:!justify-center
    group-data-[collapsible=icon]:!mx-0
    group-data-[collapsible=icon]:!my-1
    group-data-[collapsible=icon]:!rounded-xl
  `
        }
      >
        <FontAwesomeIcon
          icon={fa}
          className={`shrink-0 text-lg ${iconColors} dark:text-[var(--dark-text-primary-color)]`}
        />

        {/* label hidden when collapsed */}
        <span className="truncate group-data-[collapsible=icon]:hidden">
          {text}
        </span>
      </NavLink>
    </>
  );
}
