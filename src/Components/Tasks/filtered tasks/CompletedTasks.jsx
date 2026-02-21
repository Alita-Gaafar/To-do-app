import { use } from "react";
import TaskContext from "@/components/contexts/TasksContext";
import CardStyle from "@/components/styling components/CardStyle";
import TaskCard from "../TaskCard";

export default function CompletedTasks() {
  // Contexts
  const { tasks, completedTasks } = use(TaskContext);
  // End of contexts

  // Component structure
  return (
    <div>
      <>
        {completedTasks.length === 0 && (
          <CardStyle title="task" data={completedTasks} />
        )}
        {completedTasks.map((task) => {
          return <TaskCard key={task.id} {...task}></TaskCard>;
        })}
      </>
    </div>
  );
}
