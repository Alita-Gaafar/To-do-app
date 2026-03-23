import { useRouteLoaderData } from "react-router-dom";
import TaskCard from "../TaskCard";
import CardStyle from "@/components/styling-components/CardStyle";

export default function TodayTasks() {
  const todayTasks = useRouteLoaderData("tasks");

  const finalTodayTasks = todayTasks || [];

  // Component structure
  return (
    <div>
      {finalTodayTasks.length == 0 && (
        <CardStyle title="task" data={finalTodayTasks} />
      )}
      {finalTodayTasks.map((task) => {
        return <TaskCard key={task.id} {...task}></TaskCard>;
      })}
    </div>
  );
}
