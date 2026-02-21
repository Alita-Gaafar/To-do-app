import { use } from "react";
import TaskCard from "../TaskCard";
import TaskContext from "@/components/contexts/TasksContext";
import CardStyle from "@/components/styling components/CardStyle";

export default function PendingTasks() {
  // Contexts
  const { tasks, pendingTasks } = use(TaskContext);
  // End of contexts

  // Component structure
  return (
    <div>
      {pendingTasks.length === 0 && (
        <CardStyle title="task" data={pendingTasks} />
      )}
      {pendingTasks.map((task) => {
        return <TaskCard key={task.id} {...task}></TaskCard>;
      })}
    </div>
  );
}
