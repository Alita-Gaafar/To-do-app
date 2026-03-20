// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// React router
import { Link } from "react-router-dom";

export default function PopupHeader({ type }) {
  // Comp structure
  return (
    <div className="flex justify-between items-center mb-7">
      <p className="font-semibold text-lg dark:text-white">
        {type === "edit" ? "Edit Goals" : "Add New Goals"}
      </p>
      <Link to="/app/goals" className="text-neutral-700 cursor-pointer">
        <FontAwesomeIcon icon="fa-solid fa-x" size="sm" />
      </Link>
    </div>
  );
}
