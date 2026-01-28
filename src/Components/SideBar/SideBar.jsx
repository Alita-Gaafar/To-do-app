import Icon from "../AuthForm/Icon";
import NavButton from "./NavButton";
import { navBtns } from "@/util/data";

// Import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../util/fontAwesome.js";
import { useTheme } from "../ThemeProvider";

// Variables
const activeIconStyle = "text-white";
const nonActiveIconStyle = "text-neutral-700";
// End of variables

export default function SideBar({ activePage, onLogoutClick }) {
  // States
  const { theme, toggleTheme } = useTheme({});
  // End of states
  return (
    <div className="w-64 border-r border-neutral-200  h-screen grid grid-rows-[2fr_10fr_1.5fr] fixed top-0 left-0 dark:bg-neutral-800 dark:border-[var(--dark-border-primary-color)]">
      <div className="p-5 flex items-center border-b border-neutral-200 dark:border-[var(--dark-border-primary-color)]">
        <Icon
          width={"w-10"}
          height={"h-10"}
          radius={"rounded-xl"}
          shadow={"shadow-emerald-500/30"}
          shadowS={"shadow-lg"}
          svgW={"w-6"}
          svgH={"h-6"}
        />
        <span className="text-xl font-medium ms-2 dark:text-white">
          TaskFlow
        </span>
      </div>

      {/* Nav buttons */}
      <nav className="mt-10 mx-5">
        <ul>
          {/* Tasks button */}
          {navBtns.map((btn) => {
            return (
              <NavButton
                key={btn.id}
                // Button text
                text={btn.btnText}
                // fa-icon of the button
                fa={btn.faIcon}
                // Colors of the buttons
                textColor={
                  activePage[btn.activePage]
                    ? "text-white"
                    : theme === "light"
                    ? "text-neutral-700"
                    : "dark:text-[var(--dark-text-primary-color)]"
                }
                // Background colors of the buttons
                bgColor={activePage[btn.activePage] && "bg-emerald-500"}
                // Colors of the icons
                iconColors={
                  activePage[btn.activePage]
                    ? activeIconStyle
                    : nonActiveIconStyle
                }
                // Active page
                activePage={btn.activePage}
              ></NavButton>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-neutral-200 flex justify-center items-center dark:border-[var(--dark-border-primary-color)]">
        <button
          className="w-[80%] bg-neutral-50 p-3 text-center border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-100 duration-300 dark:bg-neutral-800 dark:text-white dark:border-0"
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
