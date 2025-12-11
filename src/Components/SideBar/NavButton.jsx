import "../../util/fontAwesome.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBtnCtx from "../Contexts/NavBtnCtx";
import { useContext } from "react";
import { motion } from "motion/react";

export default function NavButton({
  fa,
  children,
  iconColors,
  activePage,
  text,
  textColor,
  bgColor,
}) {
  const { setActivePage } = useContext(NavBtnCtx);
  return (
    <li className="mb-3">
      {children}
      <button
        style={{ color: textColor }}
        className={`w-full cursor-pointer mb-5 p-4 flex items-center z-10 relative duration-200 rounded-lg ${
          !activePage && "hover:bg-neutral-100"
        } ${bgColor}`}
        onClick={() => setActivePage(activePage)}
      >
        <FontAwesomeIcon icon={fa} className={`${iconColors} text-xl me-2`} />
        {text}
      </button>
    </li>
  );
}
