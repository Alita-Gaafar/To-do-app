// Ctx
import { GoalsCtx } from "@/components/contexts/GoalsContext";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Hooks
import { use } from "react";

export default function PopupHeader({ title }) {
  // -------------------- Contexts --------------------
  const { handleHidePopup } = use(GoalsCtx);
  // End of contexts

  // Comp structure
  return (
    <div className="flex justify-between items-center mb-7">
      <p className="font-semibold text-lg dark:text-white">{title}</p>
      <button
        className="text-neutral-700 cursor-pointer"
        onClick={handleHidePopup}
      >
        <FontAwesomeIcon icon="fa-solid fa-x" size="sm" />
      </button>
    </div>
  );
}
