import CardStyle from "@/components/styling components/CardStyle";
import TaskCard from "../TaskCard";
import { useRouteLoaderData } from "react-router";

export default function CompletedTasks() {
  const completedTasks = useRouteLoaderData("tasks");

  const finalCompletedTasks = completedTasks || [];

  // Component structure
  return (
    <div>
      <>
        {finalCompletedTasks.length === 0 && (
          <CardStyle title="task" data={finalCompletedTasks} />
        )}
        {finalCompletedTasks.map((task) => {
          return <TaskCard key={task.id} {...task}></TaskCard>;
        })}
      </>
    </div>
  );
}
