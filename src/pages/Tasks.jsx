// Hooks
import { use, useEffect } from "react";

// Comps
import AddButton from "../components/buttons/AddButton";
import PagesContainer from "../components/styling components/PagesContainer";
import TaskFilterButton from "../Components/Tasks/TaskFilterButton";
import AllTasks from "../components/tasks/filtered tasks/AllTasks";
import CompletedTasks from "../components/tasks/filtered tasks/CompletedTasks";
import PendingTasks from "../components/tasks/filtered tasks/PendingTasks";
import TodayTasks from "../components/tasks/filtered tasks/TodayTasks";
import TaskPopup from "../components/tasks/task popup/TaskPopup";
import TopSection from "../components/TopSection";

// External data
import { taskCards, taskFilterBtns } from "../util/data";

// React router
import { useSearchParams } from "react-router-dom";

// Ctx
import TaskContext from "@/components/contexts/TasksContext";
import Quote from "@/components/tasks/Quote";

export default function Tasks() {
  // Ctx
  const { tasks, popupInfo, handleShowAddPopup, completedTasks, pendingTasks } =
    use(TaskContext);
  // End of ctx

  // -------------------- Variables --------------------
  const stats = {
    total: tasks?.length,
    completed: completedTasks?.length || 0,
    pending: pendingTasks?.length || 0,
  };

  // End of variables

  // Filter tasks url
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all"; // default filter

  // Set filter url to all as default
  useEffect(() => {
    if (!searchParams.get("filter")) {
      setSearchParams({ filter: "all" });
    }
  }, []);

  // Functions

  // Set the filtered url
  function handleFilterClick(value) {
    setSearchParams({ filter: value }); // updates URL without leaving page
  }

  // End of functions

  // Component structure
  return (
    <>
      {/* Add popup */}
      {popupInfo.show && (
        <TaskPopup
          title={popupInfo.type == "add" ? "Add New Task" : "Edit Task"}
        ></TaskPopup>
      )}

      {/* Task page */}
      <PagesContainer>
        {/* Header of the section task */}
        <TopSection cards={taskCards} stats={{ ...stats }} title="Tasks" classes="md:grid-cols-3">
          Stay organized and productive
        </TopSection>

        {/* Task filter and add buttons*/}
        <div className="md:flex justify-between my-5">
          <div className="flex gap-3 mb-5">
            {/* Tasks filter buttons */}
            {taskFilterBtns.map((btn) => {
              return (
                <TaskFilterButton
                  key={btn.id}
                  val={btn.value}
                  handleFilter={handleFilterClick}
                  activeFilter={filter}
                >
                  {btn.title}
                </TaskFilterButton>
              );
            })}
          </div>

          {/* Add task button */}
          <AddButton handleClick={handleShowAddPopup}>+ Add Task</AddButton>
        </div>

        {/* Quote */}
        <Quote />

        {/* (AllTasks or CompletedTask or PendingTasks or TodayTasks) page */}
        {filter === "all" && <AllTasks />}
        {filter === "completed" && <CompletedTasks />}
        {filter === "pending" && <PendingTasks />}
        {filter === "today" && <TodayTasks />}
      </PagesContainer>
    </>
  );
}
