import { use } from "react";
import { HabitsCtx } from "../contexts/HabitsCtx";
import Input from "../Input";
import ActionBtn from "../buttons/ActionBtn";
import PopupHeader from "./popup/PopupHeader";
import SelectFreq from "./SelectFreq";

export default function HabitPopup({}) {
  // -------------------- Contexts --------------------
  const { handleInputChange, handleAddNewHabit } = use(HabitsCtx);
  // End of contexts

  // -------------------- Component Structure --------------------
  return (
    <div className="overlay">
      <div className="w-140 bg-white p-5 rounded-lgw-140 overflow-y-auto rounded-lg shadow-2xl">
        {/* Header */}
        <PopupHeader />

        <form action="" onSubmit={handleAddNewHabit}>
          {/* Title input */}
          <Input
            required={true}
            placeholder="e.g., Drink Water, Exercise"
            title="Title"
            name="title"
            type="text"
            inputClass="font-semibold text-sm"
            labelClass="mb-3"
            handleInputChange={handleInputChange}
          />

          {/* Add habit button */}
          <ActionBtn>Add Habit</ActionBtn>
        </form>
      </div>
    </div>
  );
}
