import { taskFilterBtns } from "@/util/data";
import TaskFilterButton from "./TaskFilterButton";

export default function TaskFilter() {
  return (
    <div className="flex gap-3 mb-5">
      {/* Tasks filter buttons */}
      {taskFilterBtns.map((btn) => {
        return (
          <TaskFilterButton key={btn.id} path={btn.path}>
            {btn.title}
          </TaskFilterButton>
        );
      })}
    </div>
  );
}
