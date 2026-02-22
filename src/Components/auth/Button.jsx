// React router
import { NavLink } from "react-router";

export default function Button({ title, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${
          isActive
            ? "bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-hover-bg)] text-white dark:bg-white dark:text-black"
            : "bg-white hover:bg-amber-50 text-black shadow-[0_0_1px_#00000099] dark:bg-neutral-900 dark:text-white"
        } flex-1 py-2 rounded-lg cursor-pointer duration-300 text-center`
      }
    >
      {title}
    </NavLink>
  );
}
