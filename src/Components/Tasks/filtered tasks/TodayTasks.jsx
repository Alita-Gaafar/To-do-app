import TaskContext from "@/components/contexts/TasksContext";
import TaskCard from "../TaskCard";
import CardStyle from "@/components/styling components/CardStyle";
import { use } from "react";

export default function TodayTasks() {
  // Contexts
  const { tasks } = use(TaskContext);
  // End of contexts

  // Todays tasks
  const todaysDate = new Date().toLocaleDateString("en-CA");

  const today = tasks.filter((task) => task.date === todaysDate);

  // Component structure
  return (
    <div>
      {today.length == 0 && <CardStyle title="task" data={today} />}
      {today.map((task) => {
        return <TaskCard key={task.id} {...task}></TaskCard>;
      })}
    </div>
  );
}
