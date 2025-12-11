import { motion } from "motion/react";
import { use, useState } from "react";
import { HabitsCtx } from "../Contexts/HabitsCtx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../AuthForm/Input";
import ActionBtn from "../ActionBtn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HabitPopup({ children }) {
  // -------------------- Contexts --------------------
  const {
    handleCancelBtnClick,
    habitTextRef,
    handleAddNewHabitClick,
    setFrequency,
  } = use(HabitsCtx);
  // End of contexts
  // -------------------- Component Structure --------------------

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
      className={`w-full h-full flex items-center justify-center fixed bg-[#dedede88] backdrop-blur-[1px]`}
    >
      <div className="w-140 bg-white p-5 rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-7">
          <p className="font-semibold text-lg">{children}</p>
          <button
            className="text-neutral-700 cursor-pointer"
            onClick={handleCancelBtnClick}
          >
            <FontAwesomeIcon icon="fa-solid fa-x" size="sm" />
          </button>
        </div>

        <form action="">
          {/* Title input */}
          <Input
            required={true}
            placeholder="e.g., Drink Water, Exercise"
            id="Title"
            font="font-semibold text-sm"
            margin="mb-3"
            type="text"
            ref={habitTextRef}
          />

          {/* Select frequency */}
          <div className="mb-3">
            <Select onValueChange={setFrequency}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Add habit button */}
          <ActionBtn handleClick={handleAddNewHabitClick}>Add Habit</ActionBtn>
        </form>
      </div>
    </motion.div>
  );
}
