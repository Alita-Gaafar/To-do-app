import "../../util/fontAwesome.js";
import CardStyle from "../styling-components/CardStyle.jsx";
import DeleteBtn from "../buttons/DeleteBtn.jsx";
import TaskCardData from "./TaskCardData.jsx";
import TaskCheck from "./TaskCheck.jsx";
import EditBtn from "../buttons/EditBtn.jsx";
import { deleteData, tryAndCatch } from "@/util/http.js";

export default function TaskCard({ id, completed, ...props }) {
  // Component structure
  return (
    <CardStyle completed={completed}>
      <div className="flex justify-between">
        <div>
          <div className="flex mb-2 gap-2">
            {/* Task Check box */}
            <TaskCheck completed={completed} />

            {/* Task details */}
            <TaskCardData {...props} completed={completed} />
          </div>
        </div>

        <div className="flex items-start justify-start gap-5">
          {/* Edit button */}
          <EditBtn path={`/app/tasks/${id}/edit`}></EditBtn>

          {/* Delete button */}
          <DeleteBtn path={`/app/tasks/${id}/delete`} />
        </div>
      </div>
    </CardStyle>
  );
}

export async function deleteTask({ params }) {
  const id = params.taskId;
  const url = ``;

  // return await tryAndCatch(() => deleteData(url));
}
