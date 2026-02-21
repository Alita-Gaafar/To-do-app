import TaskContext from "@/components/contexts/TasksContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use } from "react";

export default function TaskPopupHeader({ title }) {
  // Contexts
  const { handleHidePopup } = use(TaskContext);
  // End of contexts

  // Comp structure
  return (
    <div className="flex justify-between items-center mb-7">
      <p className="font-semibold text-lg dark:text-white">{title}</p>
      <button
        className="text-neutral-700 cursor-pointer"
        onClick={handleHidePopup}
      >
        <FontAwesomeIcon
          className="dark:text-[var(--dark-text-primary-color)]"
          icon="fa-solid fa-x"
          size="sm"
        />
      </button>
    </div>
  );
}
