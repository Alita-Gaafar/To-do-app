import "../../../util/fontAwesome.js";

// External data
import TaskPopupHeader from "./TaskPopupHeader";
import { createPortal } from "react-dom";
import { useLoaderData, useNavigation } from "react-router-dom";
import {
  fetchSpecificData,
  tryAndCatch,
  fetchAllData,
  addData,
  editData,
} from "@/util/http";

import TaskPopupForm from "./TaskPopupForm.jsx";
import PopupContainer from "@/components/PopupContainer.jsx";

export default function TaskPopup({ type }) {
  // React router
  const navigating = useNavigation();
  const submittingState = navigating.state === "submitting";

  const navigatingState = navigating.state;
  // End of react router

  // if (navigatingState) {
  //   return <div>Please wait</div>;
  // }

  // Component structure
  return createPortal(
    <div className="overlay">
      <PopupContainer>
        {/* Header */}
        <TaskPopupHeader type={type} />

        {/* Form */}
        <TaskPopupForm type={type} />
      </PopupContainer>
    </div>,
    document.getElementById("modal-root"),
  );
}

export async function getTask({ params, request }) {
  // const id = params.editId;
  // const url = `https://api/tasks/${id}`
  // tryAndCatch(() => fetchSpecificData(url));
}

export async function addTasksAction({ request }) {
  const fd = await request.formData();
  const task = Object.fromEntries(fd);
  task.completed = false;
  task.id = Date.now().toString();

  // const url = ``;

  // return await tryAndCatch(() => addData(url, task, "/app/tasks/all"));
}

export async function editTaskAction({ request, params }) {
  const id = params.editId;

  const fd = await request.formData();
  const task = Object.fromEntries(fd);

  // const url = ``;

  // return await tryAndCatch(() => editData(url, task, "/app/tasks/all"));
}
