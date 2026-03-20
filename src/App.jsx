// Comps
import Tasks, { tasksLoader } from "./pages/Tasks";

// Pages
import Goals, { goalsLoader } from "./pages/Goals";
import Habits, { habitsLoader } from "./pages/Habits";
import Profile, { profileLoader } from "./pages/Profile";
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
import AllTasks from "./components/tasks/filtered tasks/AllTasks";
import CompletedTasks from "./components/tasks/filtered tasks/CompletedTasks";
import PendingTasks from "./components/tasks/filtered tasks/PendingTasks";
import TodayTasks from "./components/tasks/filtered tasks/TodayTasks";
import TaskPopup, {
  addTasksAction,
  editTaskAction,
  getTask,
} from "./components/tasks/task popup/TaskPopup";
import { deleteTask } from "./components/tasks/TaskCard";

// Error
import Error from "./pages/Error";

import { authAction } from "./components/auth/AuthForm";

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
import { updateUserInfo } from "./components/profile/EditProfile";

// Routes
const router = createBrowserRouter([
  {
    path: "",
    errorElement: <Error />,
    element: <AuthLayout />,
    action: authAction,
  },
  {
    path: "app",
    element: <MainLayout />,
    children: [
      {
        path: "tasks",
        element: <Tasks />,
        loader: tasksLoader,
        id: "tasks",
        children: [
          {
            path: "all",
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
            errorElement: <Error />,
            element: <TaskPopup type="edit" />,
          },
          { path: ":taskId/delete", action: deleteTask },
        ],
      },
      {
        path: "goals",
        loader: goalsLoader,
        element: <Goals />,
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
        loader: habitsLoader,
        element: <Habits />,
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
        loader: profileLoader,
        action: updateUserInfo,
        element: <Profile />,
      },
    ],
  },
  {
    path: "logout",
    action: logoutAction,
  },
]);

function App() {
  // Component structure
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>

      <Toaster />
    </>
  );
}

export default App;
