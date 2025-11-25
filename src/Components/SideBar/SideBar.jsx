import Icon from "../AuthForm/Icon";
import NavButton from "./NavButton";

// Import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab); // Add (fas, far, fab) to the library of icons

// Variables
const activeBtnStyle = "bg-emerald-500 text-white";
const nonActiveBtnStyle = "bg-auto text-neutral-700";
// End of variables

export default function SideBar({ activePage, onLogoutClick }) {
  return (
    <div className="flex-2 border-r border-neutral-200 h-screen grid grid-rows-[2fr_10fr_1.5fr]">
      <div className="p-5 flex items-center border-b border-neutral-200">
        <Icon
          width={"w-10"}
          height={"h-10"}
          radius={"rounded-xl"}
          shadow={"shadow-emerald-500/30"}
          shadowS={"shadow-lg"}
          svgW={"w-6"}
          svgH={"h-6"}
        />
        <span className="text-xl font-medium ms-2">TaskFlow</span>
      </div>

      {/* Nav buttons */}
      <nav className="mt-10 mx-5">
        <ul>
          {/* Tasks button */}
          <NavButton
            fa={"fa-solid fa-list-check"}
            colors={activePage.tasks ? activeBtnStyle : nonActiveBtnStyle}
          >
            Tasks
          </NavButton>

          {/* Goals button */}
          <NavButton
            fa={"fa-solid fa-bullseye"}
            colors={activePage.goals ? activeBtnStyle : nonActiveBtnStyle}
          >
            Goals
          </NavButton>

          {/* Habits button */}
          <NavButton
            fa={"fa-solid fa-arrow-trend-up"}
            colors={activePage.habits ? activeBtnStyle : nonActiveBtnStyle}
          >
            Habits
          </NavButton>

          {/* Profile button */}
          <NavButton
            fa={"fa-regular fa-user"}
            colors={activePage.profile ? activeBtnStyle : nonActiveBtnStyle}
          >
            Profile
          </NavButton>
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-neutral-200 flex justify-center items-center">
        <button
          className="w-[80%] bg-neutral-50 p-3 text-center border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-100 duration-300"
          onClick={() => onLogoutClick("authPage")}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-right-from-bracket"
            className="me-2"
          />
          Logout
        </button>
      </div>
    </div>
  );
}
