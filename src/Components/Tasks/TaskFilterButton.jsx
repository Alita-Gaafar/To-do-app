import { NavLink } from "react-router-dom";

export default function TaskFilterButton({ children, path }) {
  const activeStyle =
    "bg-black text-white hover:bg-[#000000e0] dark:bg-white dark:text-black";
  const nonActiveStyle =
    "bg-white text-black border border-neutral-200 hover:bg-amber-50 hover:dark:opacity-85 dark:bg-[#262626] dark:text-white dark:border-[var(--dark-border-primary-color)]";
  const defaultStyle =
    "p-2 md:px-4 md:py-[10px] rounded-lg cursor-pointer duration-300";

  return (
    <div>
      <NavLink
        to={path}
        end
        className={({ isActive }) =>
          `${isActive ? activeStyle : nonActiveStyle} ${defaultStyle}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
}
