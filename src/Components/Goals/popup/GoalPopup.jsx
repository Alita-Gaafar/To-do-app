import ActionBtn from "../../buttons/ActionBtn";
import Input from "../../Input";
import "../../../util/fontAwesome.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// index.js or main.jsx
import "animate.css/animate.min.css";
import { use } from "react";
import { GoalsCtx } from "../../contexts/GoalsContext";
import DeleteBtn from "../../buttons/DeleteBtn";
import PopupHeader from "./PopupHeader";
import { goalPopup } from "@/util/data";

export default function GoalPopup({ title }) {
  // -------------------- Contexts --------------------
  const {
    handleAddNewGoal,
    handleEditGoal,
    goalToEdit,
    handleInputChange,
    popupInfo,
  } = use(GoalsCtx);
  // End of contexts

  // Component structure
  return (
    <div className="overlay">
      <div className="w-140 max-h-[650px] overflow-y-auto bg-white dark:bg-black p-5 rounded-lg shadow-2xl">
        {/* Header */}
        <PopupHeader title={title} />

        <form
          action=""
          onSubmit={
            popupInfo.type === "add" ? handleAddNewGoal : handleEditGoal
          }
        >
          {goalPopup.map((goal) => (
            <Input
              key={goal.id}
              title={goal.title}
              type={goal.type}
              name={goal.name}
              placeholder={goal.placeholder}
              inputClass={goal.inputClass}
              required={goal.required}
              dataToEdit={goalToEdit}
              handleInputChange={handleInputChange}
            />
          ))}

          {/* Add goal button */}
          <ActionBtn>{title}</ActionBtn>
        </form>
      </div>
    </div>
  );
}
