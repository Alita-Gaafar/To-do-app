// Pages
import { logoutAction } from "./pages/Logout";

// Shadcn
import { Toaster } from "./Components/ui/sonner";

// React router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import ThemeProvider from "./components/ThemeProvider";

// Tasks comps
import AllTasks from "./components/tasks/filtered-tasks/AllTasks";
import CompletedTasks from "./components/tasks/filtered-tasks/CompletedTasks";
import PendingTasks from "./components/tasks/filtered-tasks/PendingTasks";
import TodayTasks from "./components/tasks/filtered-tasks/TodayTasks";
import TaskPopup, {
  addTasksAction,
  editTaskAction,
  getTask,
} from "./components/tasks/task-popup/TaskPopup";
import { deleteTask } from "./components/tasks/TaskCard";

// Error
import Error from "./pages/Error";

// Goals comps
import GoalPopup, {
  addGoalsAction,
  editGoalAction,
} from "./components/goals/popup/GoalPopup";
import { deleteGoal } from "./components/goals/GoalCard";
import HabitPopup, {
  addHabitsAction,
} from "./components/habits/popup/HabitPopup";

// Habits comps
import { deleteHabit } from "./components/habits/HabitCard";
import ConfirmResetCode from "./components/auth/Forget-password/ConfirmResetCode";
import RequestPasswordReset from "./components/auth/Forget-password/RequestPasswordReset";
import ChangePassword from "./components/auth/Forget-password/ChangePassword";

// Routes
const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <Error />,
      element: <AuthLayout />,

      children: [
        {
          index: true,
          lazy: async () => {
            const module = await import("./components/auth/AuthForm");
            return {
              Component: module.default,
              action: module.authAction,
            };
          },
        },
        {
          path: "confirm-email",
          element: <RequestPasswordReset />,
        },
        {
          path: "verify-email",
          element: <ConfirmResetCode />,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
        },
      ],
    },
    {
      path: "app",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "tasks",
          lazy: async () => {
            const module = await import("./pages/Tasks");
            return {
              Component: module.default,
              loader: module.tasksLoader,
            };
          },
          id: "tasks",
          children: [
            {
              index: true,
              element: <AllTasks />,
            },
            {
              path: "completed",
              element: <CompletedTasks />,
            },
            {
              path: "pending",
              element: <PendingTasks />,
            },
            {
              path: "today",
              element: <TodayTasks />,
            },
            {
              path: "new",
              action: addTasksAction,
              element: <TaskPopup type="add" />,
            },
            {
              path: ":editId/edit",
              loader: getTask,
              action: editTaskAction,
              element: <TaskPopup type="edit" />,
            },
            { path: ":taskId/delete", action: deleteTask },
          ],
        },
        {
          path: "goals",
          lazy: async () => {
            const module = await import("./pages/Goals");

            return {
              Component: module.default,
              loader: module.goalsLoader,
            };
          },
          children: [
            {
              path: "new",
              action: addGoalsAction,
              element: <GoalPopup type="add" />,
            },
            {
              path: ":editGoalId/edit",
              action: editGoalAction,
              errorElement: <Error />,
              element: <GoalPopup type="edit" />,
            },
            { path: ":goalId/delete", action: deleteGoal },
          ],
        },
        {
          path: "habits",
          lazy: async () => {
            const module = await import("./pages/Habits");

            return {
              Component: module.default,
              loader: module.habitsLoader,
            };
          },
          children: [
            {
              path: "new",
              action: addHabitsAction,
              element: <HabitPopup />,
            },
            { path: ":habitId/delete", action: deleteHabit },
          ],
        },
        {
          path: "profile",
          lazy: async () => {
            const module = await import("./pages/Profile");

            return {
              Component: module.default,
              loader: module.profileLoader,
              action: module.updateUserInfo,
            };
          },
        },
      ],
    },
    {
      path: "logout",
      action: logoutAction,
    },
  ],
  { basename: "/to-do-app" },
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />

      <Toaster />
    </ThemeProvider>
  );
}

export default App;
