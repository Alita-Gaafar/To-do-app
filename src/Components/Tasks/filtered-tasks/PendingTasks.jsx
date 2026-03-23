import { useRouteLoaderData } from "react-router-dom";
import TaskCard from "../TaskCard";
import CardStyle from "@/components/styling-components/CardStyle";

export default function PendingTasks() {
  const pendingTasks = useRouteLoaderData("tasks");

  const finalPendingTasks = pendingTasks || [];

  // Component structure
  return (
    <div>
      {finalPendingTasks.length === 0 && (
        <CardStyle title="task" data={finalPendingTasks} />
      )}
      {finalPendingTasks.map((task) => {
        return <TaskCard key={task.id} {...task}></TaskCard>;
      })}
    </div>
  );
}
