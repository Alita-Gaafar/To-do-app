import TaskSummaryCard from "./TaskSummaryCard";

export default function AllTasks({ allTasks }) {
  return <div>
    {/* {allTasks.map((task) => {
      return (
        <TaskSummaryCard></TaskSummaryCard>
      )
    })} */}
    <TaskSummaryCard title="Task title" description="Task description" date="5/11/2025" category="category"></TaskSummaryCard>
  </div>;
}
