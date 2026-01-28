import { use } from "react";
import TaskContext from "../Contexts/TasksContext";

export default function TaskFilterButton({ children }) {
  const { activeBtn, handleFilterBtnClick } = use(TaskContext);
  return (
    <div>
      <button
        onClick={() => handleFilterBtnClick(children)}
        className={`${
          activeBtn === children
            ? "bg-black text-white duration-300 hover:bg-[#000000e0] dark:bg-white dark:text-black"
            : "bg-white text-black border border-neutral-200 duration-300 hover:bg-amber-50 hover:dark:opacity-85 dark:bg-[#262626] dark:text-white dark:border-[var(--dark-border-primary-color)]"
        } py-[10px] px-4  rounded-lg cursor-pointer`}
      >
        {children}
      </button>
    </div>
  );
}
