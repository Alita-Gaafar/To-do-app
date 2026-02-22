// Comps
import Tasks from "./pages/Tasks";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

// Pages
import Goals from "./pages/Goals";
import Habits from "./pages/Habits";
import Profile from "./pages/Profile";

// Ctx
import { TaskWrapper } from "./components/contexts/TasksContext";
import GoalsWrapper from "./components/contexts/GoalsContext";
import HabitsWrapper from "./components/contexts/HabitsCtx";
import ProfileWrapper from "./components/contexts/ProfileCtx";

// Shadcn
import { Toaster } from "./Components/ui/sonner";

// React router
import { Route, Routes, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ThemeProvider from "./components/ThemeProvider";
import ProtectedRoute from "./components/protection/ProtectedRoute";
import PublicOnlyRoute from "./components/protection/PublicOnlyRoute";

// Ctx
import AppWrapper from "./components/contexts/AppCtx";

function App() {
  // Variables
  const isToken = localStorage.getItem("token");

  const isRemember = localStorage.getItem("remember") === "true";

  // End of variables
  // Component structure
  return (
    <>
      <ThemeProvider>
        <AppWrapper>
          <TaskWrapper>
            <GoalsWrapper>
              <HabitsWrapper>
                <ProfileWrapper>
                  <Routes>
                    {/* Default route */}
                    <Route
                      path="/"
                      element={
                        isToken && isRemember ? (
                          <Navigate to="/tasks" replace />
                        ) : (
                          <Navigate to="/login" replace />
                        )
                      }
                    />

                    {/* Auth layout */}
                    <Route element={<AuthLayout />}>
                      {/* Login */}
                      <Route
                        path="/login"
                        element={
                          <PublicOnlyRoute>
                            <Login />
                          </PublicOnlyRoute>
                        }
                      />

                      {/* Signup */}
                      <Route
                        path="/signup"
                        element={
                          <PublicOnlyRoute>
                            <Signup />
                          </PublicOnlyRoute>
                        }
                      />
                    </Route>

                    {/* Main layout */}
                    <Route
                      element={
                        <ProtectedRoute>
                          <MainLayout />
                        </ProtectedRoute>
                      }
                    >
                      {/* Tasks */}
                      <Route path="/tasks" element={<Tasks />} />

                      {/* Goals */}
                      <Route path="/goals" element={<Goals />} />

                      {/* Habits */}
                      <Route path="/habits" element={<Habits />} />

                      {/* Profile */}
                      <Route path="/profile" element={<Profile />} />
                    </Route>
                  </Routes>
                </ProfileWrapper>
              </HabitsWrapper>
            </GoalsWrapper>
          </TaskWrapper>
        </AppWrapper>
      </ThemeProvider>

      <Toaster />
    </>
  );
}

export default App;
