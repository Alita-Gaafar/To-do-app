import { useState } from "react";
import AddButton from "../AddButton";
import Header from "../Header";
import PagesContainer from "../PagesContainer";
import TaskStatsCard from "./TaskStatsCard";
import TaskFilterButton from "./TaskFilterButton";
import AllTasks from "./FilterTasks/AllTasks";
import CompletedTasks from "./FilterTasks/CompletedTasks";
import PendingTasks from "./FilterTasks/PendingTasks";
import TodayTasks from "./FilterTasks/TodayTasks";
import { taskCards, taskFilterBtns } from "../../util/data";
export default function DashBoard() {

  // States
  const [activeBtn, setActiveBtn] = useState("All"); // Active filter tasks button state
  const [tasks, setTasks] = useState([]); // Tasks state

  
  // End of states

  // Functions
  function setActiveTasksSection(sectionBtn) {
    setActiveBtn(sectionBtn);
  }
  // End of functions

  // Component structure
  return (
    <PagesContainer>
      {/* Header of the section task */}
      <Header>Stay organized and productive</Header>

      {/* Stats cards */}
      <div className="flex justify-between gap-4">
        {taskCards.map((taskCard) => {
          return (
            <TaskStatsCard
              key={taskCard.id}
              icon={taskCard.icon}
              bgColor={taskCard.bgColor}
            >
              {taskCard.title}
            </TaskStatsCard>
          );
        })}
      </div>

      {/* Task filter and add buttons*/}
      <div className="flex justify-between my-5">
        <div className="flex gap-3">
          {taskFilterBtns.map((filterBtn) => {
            return (
              <TaskFilterButton
                key={filterBtn}
                activeBtn={activeBtn}
                handleFilterBtnClick={setActiveTasksSection}
              >
                {filterBtn}
              </TaskFilterButton>
            );
          })}
        </div>
        <AddButton>+ Add Task</AddButton>
      </div>

      {/* Quote */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-7 my-5">
        <i>"The secret of getting ahead is getting started." — Mark Twain</i>
      </div>
      {activeBtn === "All" ? (
        <AllTasks allTasks={tasks}></AllTasks>
      ) : activeBtn === "Completed" ? (
        <CompletedTasks></CompletedTasks>
      ) : activeBtn === "Pending" ? (
        <PendingTasks></PendingTasks>
      ) : activeBtn === "Today" ? (
        <TodayTasks></TodayTasks>
      ) : null}

      {/* (AllTasks or CompletedTask or PendingTasks or TodayTasks) page */}
    </PagesContainer>
  );
}
