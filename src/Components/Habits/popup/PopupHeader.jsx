import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function PopupHeader() {
  return (
    <div className="flex justify-between items-center mb-7">
      <p className="font-semibold text-lg dark:text-white">Add New Habit</p>
      <Link to="/app/habits" className="text-neutral-700 cursor-pointer">
        <FontAwesomeIcon icon="fa-solid fa-x" size="sm" />
      </Link>
    </div>
  );
}
