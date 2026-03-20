import "../../../util/fontAwesome.js";
// index.js or main.jsx
import "animate.css/animate.min.css";
import PopupHeader from "./PopupHeader";
import GoalPopupForm from "./GoalPopupForm";
import { createPortal } from "react-dom";
import PopupContainer from "@/components/PopupContainer.jsx";

export default function GoalPopup({ type }) {
  // Component structure
  return createPortal(
    <div className="overlay">
      <PopupContainer>
        {/* Header */}
        <PopupHeader type={type} />

        {/* Popup form */}
        <GoalPopupForm type={type} />
      </PopupContainer>
    </div>,
    document.getElementById("modal-root"),
  );
}

export async function addGoalsAction({ request }) {
  const fd = await request.formData();
  const goal = Object.fromEntries(fd);

  // Don't forget to include the extra properties

  // const url = ``;

  // return await tryAndCatch(() => addData(url, goal, "/app/goals"));
}

export async function editGoalAction({ request, params }) {
  const id = params.editGoalId;

  const fd = await request.formData();
  const goal = Object.fromEntries(fd);

  // const url = ``;

  // return await tryAndCatch(() => editData(url, goal, "/app/goals"));
}
