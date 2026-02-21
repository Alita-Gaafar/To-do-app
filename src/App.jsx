// Hooks
import { useState } from "react";

// Comps
import Tasks from "./pages/Tasks";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

// Ctx
import NavBtnCtx from "./components/contexts/NavBtnCtx";
import { TaskWrapper } from "./components/contexts/TasksContext";
import GoalsWrapper from "./components/contexts/GoalsContext";
import HabitsWrapper, { HabitsCtx } from "./components/contexts/HabitsCtx";
import ProfileWrapper from "./components/contexts/ProfileCtx";

// Theme
import ThemeProvider from "./Components/ThemeProvider";

// Shadcn
import { Toaster } from "./Components/ui/sonner";

// React router
import { Navigate, Route, Routes } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import TodayTasks from "./components/tasks/filtered tasks/TodayTasks";
import AllTasks from "./components/tasks/filtered tasks/AllTasks";
import CompletedTasks from "./components/tasks/filtered tasks/CompletedTasks";
import PendingTasks from "./components/tasks/filtered tasks/PendingTasks";
import Goals from "./pages/Goals";
import Habits from "./pages/Habits";

function App() {
  // States

  // End of states

  // Functions

  // End of functions

  // End of context values

  // Component structure
  return (
    <ThemeProvider>
      <TaskWrapper>
        <GoalsWrapper>
          <HabitsWrapper>
            <Routes>
              {/* Auth */}
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="signup" element={<Signup />} />
              </Route>

              {/* Tasks */}
              <Route path="/tasks" element={<MainLayout />}>
                <Route index element={<Tasks />}></Route>
              </Route>

              {/* Goals */}
              <Route path="/goals" element={<MainLayout />}>
                <Route index element={<Goals />}></Route>
              </Route>

              {/* Habits */}
              <Route path="/habits" element={<MainLayout />}>
                <Route index element={<Habits />}></Route>
              </Route>
            </Routes>
          </HabitsWrapper>
        </GoalsWrapper>
      </TaskWrapper>

      <Toaster />
    </ThemeProvider>
  );
}

export default App;
