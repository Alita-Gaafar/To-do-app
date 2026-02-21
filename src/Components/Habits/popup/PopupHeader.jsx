import { HabitsCtx } from "@/components/contexts/HabitsCtx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use } from "react";

export default function PopupHeader() {
  // -------------------- Contexts --------------------
  const { handleHidePopup } = use(HabitsCtx);
  // End of contexts
  return (
    <div className="flex justify-between items-center mb-7">
      <p className="font-semibold text-lg dark:text-white">Add New Habit</p>
      <button
        className="text-neutral-700 cursor-pointer"
        onClick={handleHidePopup}
      >
        <FontAwesomeIcon icon="fa-solid fa-x" size="sm" />
      </button>
    </div>
  );
}
