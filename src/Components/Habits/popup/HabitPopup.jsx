import { createPortal } from "react-dom";
import PopupHeader from "./PopupHeader";
import HabitPopupForm from "./HabitPopupForm";
import { addData, tryAndCatch } from "@/util/http";
import PopupContainer from "@/components/PopupContainer";

export default function HabitPopup() {
  // Component Structure
  return createPortal(
    <div className="overlay">
      <PopupContainer>
        {/* Header */}
        <PopupHeader />

        {/* Popup form */}
        <HabitPopupForm />
      </PopupContainer>
    </div>,
    document.getElementById("modal-root"),
  );
}

export async function addHabitsAction({ request }) {
  const fd = await request.formData();
  const habit = Object.fromEntries(fd);
  // Don't forget to include the extra properties

  const url = ``;

  // return await tryAndCatch(() => addData(url, habit, "/app/habits"));
}
