import TaskCard from "../TaskCard";
import CardStyle from "@/components/styling-components/CardStyle";
import { useRouteLoaderData } from "react-router";

export default function AllTasks() {
  const tasks = useRouteLoaderData("tasks");

  const finalTasks = tasks || [{ title: "po", id: 21 }];

  // Component structure
  return (
    <>
      {finalTasks.length == 0 && <CardStyle title="task" data={finalTasks} />}
      {finalTasks.map((task) => {
        return <TaskCard key={task.id} {...task}></TaskCard>;
      })}
    </>
  );
}
