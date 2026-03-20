// React router
import { NavLink, useSearchParams } from "react-router";

export default function Button({ title, path }) {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode"); // Auth mode
  const isActive = mode === path; // Active auth

  // Css style
  const activeBtn =
    "bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-hover-bg)] text-white dark:bg-white dark:text-black";
  const inActiveBtn =
    "bg-white hover:bg-amber-50 text-black shadow-[0_0_1px_#00000099] dark:bg-neutral-900 dark:text-white";

  return (
    <NavLink
      to={`?mode=${path}`}
      className={`
          ${isActive ? activeBtn : inActiveBtn} 
            flex-1 py-2 rounded-lg cursor-pointer duration-300 text-center`}
    >
      {title}
    </NavLink>
  );
}
