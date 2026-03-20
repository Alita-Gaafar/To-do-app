// Comps
import PagesContainer from "../components/styling components/PagesContainer";
import TopSection from "../components/TopSection";

// External data
import { taskCards } from "../util/data";

// React router
import { Outlet } from "react-router-dom";

// Ctx
import Quote from "@/components/tasks/Quote";
import { requireAuth } from "@/util/react-router";

import TaskFilter from "@/components/tasks/TaskFilter";
import { addData, fetchAllData, tryAndCatch } from "@/util/http";
import AddButton from "@/components/buttons/AddButton";

export default function Tasks() {
  const completedTasks = 0; // Completed tasks
  const pendingTasks = 0; // Pending tasks

  // Variables
  const stats = {
    total: 0,
    completed: completedTasks?.length || 0,
    pending: pendingTasks?.length || 0,
  };

  // End of variables

  // Component structure
  return (
    <>
      {/* Task page */}
      <PagesContainer>
        {/* Header of the section task */}
        <TopSection
          cards={taskCards}
          stats={{ ...stats }}
          title="Tasks"
          classes="md:grid-cols-3"
        >
          Stay organized and productive
        </TopSection>

        {/* Task filter and add buttons*/}
        <div className="md:flex justify-between my-5">
          {/* Task filter */}
          <TaskFilter />

          {/* Add task button */}
          <AddButton path="/app/tasks/new">+ Add Task</AddButton>
        </div>

        {/* Quote */}
        <Quote />

        <Outlet />
      </PagesContainer>
    </>
  );
}

export async function tasksLoader() {
  // const url = `https://andf-2dc3c-default-rtdb.firebaseio.com/tasks.json`;

  requireAuth();
  // return tryAndCatch(() => fetchAllData(url));
}


