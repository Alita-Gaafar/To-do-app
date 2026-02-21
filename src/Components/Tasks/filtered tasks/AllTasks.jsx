import { use } from "react";
import TaskCard from "../TaskCard";
import TaskContext from "@/components/contexts/TasksContext";
import CardStyle from "@/components/styling components/CardStyle";

export default function AllTasks() {
  // -------------------- Contexts --------------------
  const { tasks } = use(TaskContext);

  // End of contexts

  // Component structure
  return (
    <>
      {tasks.length == 0 && <CardStyle title="task" data={tasks} />}
      {tasks.map((task) => {
        return <TaskCard key={task.id} {...task}></TaskCard>;
      })}
    </>
  );
}
