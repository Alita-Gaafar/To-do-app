import { tasksAction } from "@/store/tasks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";

export default function TaskPopupHeader({ type }) {
  // Comp structure
  return (
    <div className="flex justify-between items-center mb-7">
      <p className="font-semibold text-lg dark:text-white">
        {type === "edit" ? "Edit Tasks" : "Add New Tasks"}
      </p>
      <Link to="/app/tasks" className="text-neutral-700 cursor-pointer">
        <FontAwesomeIcon
          className="dark:text-[var(--dark-text-primary-color)]"
          icon="fa-solid fa-x"
          size="sm"
        />
      </Link>
    </div>
  );
}
