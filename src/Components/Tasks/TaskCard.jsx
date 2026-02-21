import { Checkbox } from "@/components/ui/checkbox";
import "../../util/fontAwesome.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use } from "react";
import TaskContext from "../contexts/TasksContext.jsx";
import CardStyle from "../styling components/CardStyle.jsx";
import EditBtn from "../buttons/EditBtn.jsx";
import DeleteBtn from "../buttons/DeleteBtn.jsx";
import TaskCardData from "./TaskCardData.jsx";

export default function TaskCard({ id, completed, ...props }) {
  // -------------------- Contexts --------------------
  const { handleUpdateTaskState, handleRemoveTask, handleShowEditPopup } =
    use(TaskContext);
  // End of contexts

  // Component structure
  return (
    <CardStyle completed={completed}>
      <div className="flex justify-between">
        {/* Left side */}
        <div>
          {/* Task Check box */}
          <div className="flex mb-2 gap-2">
            {/* You can only use normal events but onCheckedChange is better */}
            <div className="me-3">
              <Checkbox
                checked={completed}
                id="terms"
                className="cursor-pointer dark:border-[var(--dark-border-primary-color)]"
                onCheckedChange={() => handleUpdateTaskState(id)}
              />
            </div>

            {/* Task details */}
            <TaskCardData {...props} completed={completed} />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-start justify-start gap-5">
          {/* Edit button */}
          <EditBtn handleClick={() => handleShowEditPopup(id)}></EditBtn>

          {/* Delete button */}
          <DeleteBtn handleClick={() => handleRemoveTask(id)}></DeleteBtn>
        </div>
      </div>
    </CardStyle>
  );
}
