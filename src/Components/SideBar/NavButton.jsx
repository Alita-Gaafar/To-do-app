// Import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import NavBtnCtx from "../Contexts/NavBtnCtx";
import { useContext } from "react";

library.add(fas, far, fab); // Add (fas, far, fab) to the library of icons

export default function NavButton({ fa, children, colors }) {
  const { setActivePage } = useContext(NavBtnCtx);
  return (
    <li>
      <button
        className={`w-full cursor-pointer ${colors} rounded-2xl mb-5 p-4 flex items-center duration-300`}
        onClick={() => setActivePage(children.toLowerCase())}
      >
        <FontAwesomeIcon icon={fa} className={`${colors} text-xl me-2`} />
        {children}
      </button>
    </li>
  );
}
